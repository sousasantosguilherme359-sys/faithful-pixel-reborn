import { X } from "lucide-react";
import { useEffect } from "react";

type VideoModalProps = {
  youtubeId: string | null;
  title: string;
  onClose: () => void;
};

/**
 * Modal de vídeo embutido (YouTube) — "assistir sem sair do site".
 * `youtubeId` é o ID de 11 caracteres do vídeo no YouTube (a parte depois
 * de "v=" na URL, ex: "dQw4w9WgXcQ"). Enquanto não tivermos o ID real de
 * cada sermão, os componentes que chamam isso caem de volta pro canal do
 * YouTube em vez de abrir o modal com ID inventado (ver
 * HOME_SERMONS/PLAY_CATEGORIES em src/data/site.ts).
 */
export function VideoModal({ youtubeId, title, onClose }: VideoModalProps) {
  useEffect(() => {
    function handleEsc(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!youtubeId) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-navy-deep/90 p-4"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={title}
    >
      <div className="relative w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar vídeo"
          className="absolute -top-12 right-0 text-foreground hover:text-gold"
        >
          <X className="h-7 w-7" />
        </button>
        <div className="aspect-video overflow-hidden rounded-2xl border border-gold/30 shadow-elegant">
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="h-full w-full"
          />
        </div>
      </div>
    </div>
  );
}
