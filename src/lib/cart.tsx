import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { BOOKS } from "@/data/site";

export type CartItem = { slug: string; quantity: number };

const STORAGE_KEY = "cg-cart-v1";

function readStoredCart(): CartItem[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (i): i is CartItem => typeof i?.slug === "string" && typeof i?.quantity === "number" && i.quantity > 0,
    );
  } catch {
    // localStorage indisponível (modo privado, etc.) ou JSON corrompido —
    // carrinho vazio em vez de quebrar a página.
    return [];
  }
}

function writeStoredCart(items: CartItem[]) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch {
    // idem — falha silenciosa, carrinho só não persiste entre sessões.
  }
}

type CartContextValue = {
  items: CartItem[];
  totalQuantity: number;
  subtotal: number;
  add: (slug: string, quantity?: number) => void;
  setQuantity: (slug: string, quantity: number) => void;
  remove: (slug: string) => void;
  clear: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

function parsePrice(price: string): number {
  // "R$ 49,90" -> 49.90
  const numeric = price.replace(/[^\d,]/g, "").replace(",", ".");
  return Number.parseFloat(numeric) || 0;
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  // Carrega do localStorage só depois de montar (evita mismatch de
  // hidratação SSR — no servidor o carrinho é sempre vazio).
  useEffect(() => {
    setItems(readStoredCart());
  }, []);

  useEffect(() => {
    writeStoredCart(items);
  }, [items]);

  const value = useMemo<CartContextValue>(() => {
    const add: CartContextValue["add"] = (slug, quantity = 1) => {
      setItems((prev) => {
        const existing = prev.find((i) => i.slug === slug);
        if (existing) {
          return prev.map((i) => (i.slug === slug ? { ...i, quantity: i.quantity + quantity } : i));
        }
        return [...prev, { slug, quantity }];
      });
    };

    const setQuantity: CartContextValue["setQuantity"] = (slug, quantity) => {
      setItems((prev) => {
        if (quantity <= 0) return prev.filter((i) => i.slug !== slug);
        return prev.map((i) => (i.slug === slug ? { ...i, quantity } : i));
      });
    };

    const remove: CartContextValue["remove"] = (slug) => {
      setItems((prev) => prev.filter((i) => i.slug !== slug));
    };

    const clear = () => setItems([]);

    const totalQuantity = items.reduce((sum, i) => sum + i.quantity, 0);
    const subtotal = items.reduce((sum, i) => {
      const book = BOOKS.find((b) => b.slug === i.slug);
      return sum + (book ? parsePrice(book.price) * i.quantity : 0);
    }, 0);

    return { items, totalQuantity, subtotal, add, setQuantity, remove, clear };
  }, [items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart precisa estar dentro de <CartProvider>");
  return ctx;
}
