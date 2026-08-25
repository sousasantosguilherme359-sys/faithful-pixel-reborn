export const SITE = {
  name: "Pastor Cláudio Gama",
  tagline: "Ministério de Fé e Transformação",
  description:
    "Site oficial do Pastor Cláudio Gama. Anunciando o Evangelho de Jesus Cristo com poder, amor e autoridade — pregações, agenda de eventos, livros, cursos e conteúdos que transformam vidas pela fé.",
};

export const NAV = [
  { label: "Início", to: "/" },
  { label: "Sobre", to: "/sobre" },
  { label: "Loja", to: "/loja" },
  { label: "Assinatura", to: "/play" },
  { label: "Agenda", to: "/agenda", highlight: true },
  { label: "Mensagens", to: "/mensagens" },
  { label: "Instituto", to: "/instituto" },
  { label: "Contato", to: "/contato" },
] as const;

export const SOCIALS = [
  { label: "YouTube", handle: "@pastorclaudiogama", href: "https://youtube.com/@pastorclaudiogama" },
  { label: "Instagram", handle: "@prclaudiogamaofc", href: "https://instagram.com/prclaudiogamaofc" },
  { label: "TikTok", handle: "@prclaudiogamaofc", href: "https://www.tiktok.com/@prclaudiogamaofc" },
  {
    label: "Facebook",
    handle: "Pastor Cláudio Gama",
    href: "https://www.facebook.com/share/1E6vfQz3jd/?mibextid=wwXIfr",
  },
];

export const WHATSAPP_MAIN =
  "https://wa.me/5521999871093?text=Paz%20do%20Senhor!%20Gostaria%20de%20falar%20com%20o%20minist%C3%A9rio%20do%20Pastor%20Cl%C3%A1udio%20Gama.";

export const WHATSAPP_TESTIMONY =
  "https://wa.me/5521999871093?text=Paz%20do%20Senhor!%20Quero%20enviar%20o%20meu%20depoimento%20sobre%20o%20que%20Deus%20fez%20na%20minha%20vida%20atrav%C3%A9s%20do%20minist%C3%A9rio%20do%20Pastor%20Cl%C3%A1udio%20Gama.";

export const INVITE_SP =
  "https://wa.me/5511911356596?text=Paz%20do%20Senhor!%20Gostaria%20de%20convidar%20o%20Pastor%20Cl%C3%A1udio%20Gama%20para%20um%20evento%2Fprega%C3%A7%C3%A3o.%20Segue%20abaixo%20os%20detalhes%20(cidade%2C%20data%20e%20tipo%20de%20evento)%3A";

export const INVITE_RJ =
  "https://wa.me/5521999871093?text=Paz%20do%20Senhor!%20Gostaria%20de%20convidar%20o%20Pastor%20Cl%C3%A1udio%20Gama%20para%20um%20evento%2Fprega%C3%A7%C3%A3o.%20Segue%20abaixo%20os%20detalhes%20(cidade%2C%20data%20e%20tipo%20de%20evento)%3A";

export const CONTACTS = [
  { label: "Assessoria Rio de Janeiro e Internacional", phone: "(21) 99987-1093", href: "https://wa.me/5521999871093" },
  { label: "Assessoria São Paulo", phone: "(11) 91135-6596", href: "https://wa.me/5511911356596" },
  { label: "Comercial, cursos, livros e assinaturas", phone: "(11) 91135-6596", href: "https://wa.me/5511911356596" },
  {
    label: "Comercial e venda de livros — Rio de Janeiro e demais Estados",
    phone: "(21) 97000-7857",
    href: "https://wa.me/5521970007857",
  },
  { label: "Oferta para construção da igreja na comunidade", phone: "(21) 99987-1093", href: "https://wa.me/5521999871093" },
];

export const STATS = [
  { value: "+50", label: "Anos no Ministério" },
  { value: "+30", label: "Países Alcançados" },
  { value: "5", label: "Livros Publicados" },
  { value: "MILHARES", label: "Vidas Transformadas" },
];

export const PILLARS = [
  { title: "PALAVRA QUE TRANSFORMA", text: "Ensinamentos que edificam sua vida e sua fé." },
  { title: "VIDAS QUE IMPORTAM", text: "Cuidamos de pessoas e fortalecemos famílias." },
  { title: "PROPÓSITO QUE ALCANÇA", text: "Levando o evangelho e fazendo a diferença." },
  { title: "DEUS NO CENTRO", text: "Tudo o que fazemos tem Cristo como fundamento." },
];

export const HOME_EVENTS = [
  {
    day: "26",
    month: "Ago",
    title: "CULTO DA FAMÍLIA AD. CEVEG - RJ",
    place: "São Gonçalo • CULTO DA FAMÍLIA AD. CEVEG - RJ",
    time: "19:00",
  },
  {
    day: "27",
    month: "Ago",
    title: "CULTO DA VITÓRIA AD. CAMPO GRANDE - RJ",
    place: "CULTO DA VITÓRIA AD. CAMPO GRANDE - RJ",
    time: "19:30",
  },
  {
    day: "29",
    month: "Ago",
    title: "Congresso dos jovens AD. UBA - MG",
    place: "Congresso dos jovens AD. UBA - MG",
    time: "19:00",
  },
  {
    day: "30",
    month: "Ago",
    title: "CONGRESSO DE MULHERES AD CONCELHEIRO PENA - MG",
    place: "CONGRESSO DE MULHERES AD CONCELHEIRO PENA - MG",
    time: "19:00",
  },
];

export const AGENDA_EVENTS = [
  { day: "19", month: "AGO", city: "São Paulo - SP", place: "Embu Guaçu", time: "19:30" },
  { day: "20", month: "AGO", city: "São Luiz do Maranhão - MA", place: "", time: "19:30" },
  { day: "21", month: "AGO", city: "São Luiz do Maranhão - MA", place: "", time: "19:30" },
  { day: "22", month: "AGO", city: "Rio Grande do Sul, Erechim - RS", place: "", time: "19:00" },
];

export const HOME_SERMONS = [
  { title: "Deus Revela o Impossível", duration: "48:32", tag: "Revelação", image: "/images/pastor-pregando-plateia.jpeg" },
  { title: "Jesus te Cura Hoje", duration: "44:20", tag: "Cura", image: "/images/pastor-microfone.jpeg" },
  { title: "Liderança que Transforma", duration: "42:28", tag: "Liderança", image: "/images/pastor-aplaudindo.jpeg" },
];

export const PLAY_CATEGORIES = [
  {
    name: "Liderança",
    videos: [
      { title: "Líderes que Deixam Legado", duration: "50:12", image: "/images/pastor-aplaudindo.jpeg" },
      { title: "Liderar com Propósito", duration: "40:45", image: "/images/pastor-microfone-left.jpeg" },
      { title: "Princípios de um Líder Vencedor", duration: "47:16", image: "/images/pastor-pregando-plateia.jpeg" },
      { title: "Liderança que Transforma", duration: "42:28", image: "/images/pastor-sorrindo.jpeg" },
      { title: "Deus Levanta Líderes", duration: "45:00", image: "/images/pastor-microfone.jpeg" },
    ],
  },
  {
    name: "Cura",
    videos: [
      { title: "A Cura Vem do Altar", duration: "48:09", image: "/images/pastor-pregando-costas.jpeg" },
      { title: "Curado para Curar", duration: "41:33", image: "/images/pastor-microfone.jpeg" },
      { title: "O Poder de Deus que Sara", duration: "43:50", image: "/images/pastor-aplaudindo.jpeg" },
      { title: "A Fé que Traz Restauração", duration: "46:18", image: "/images/pastor-microfone-left.jpeg" },
      { title: "Jesus te Cura Hoje", duration: "44:20", image: "/images/pastor-sorrindo.jpeg" },
    ],
  },
  {
    name: "Revelação",
    videos: [
      { title: "O Céu Revela os Planos de Deus", duration: "47:03", image: "/images/pastor-pregando-costas.jpeg" },
      { title: "Revelação que Transforma", duration: "50:27", image: "/images/pastor-microfone.jpeg" },
      { title: "Deus Fala com Quem Ouve", duration: "42:15", image: "/images/pastor-sorrindo.jpeg" },
      { title: "O Segredo das Portas Abertas", duration: "45:10", image: "/images/pastor-aplaudindo.jpeg" },
      { title: "Deus Revela o Impossível", duration: "48:32", image: "/images/pastor-pregando-plateia.jpeg" },
    ],
  },
];

export type Book = {
  slug: string;
  title: string;
  badge: string;
  category: string;
  price: string;
  image: string;
  alt: string;
  description: string;
};

export const BOOKS: Book[] = [
  {
    slug: "superando-os-getsemanis-da-vida",
    title: "Superando os Getsêmanis da Vida",
    badge: "Best Seller",
    category: "Mais Vendidos",
    price: "R$ 49,90",
    image: "/images/livro-superando-getsemanis.png",
    alt: "Livro Superando os Getsêmanis da Vida - Pastor Cláudio Gama",
    description:
      'Jesus também passou pelo Getsêmani e ali não conseguiu controlar os seus sentimentos e os expôs aos seus discípulos. Mas diferentemente do que pode pensar Getsêmani não é um deserto, mas sim um jardim. E nem sempre no jardim da história da vida colheremos flores, algumas vezes teremos que derramar as lágrimas de sofrimento. Amado leitor, não é porque você é filho de Deus que será isentado dos sofrimentos que surgem na vida durante o cumprimento da sua missão existencial no mundo dos homens. Neste livro é possível aprender como exercitar a fé diante de situações como a que Jesus passou em seu Getsêmani. Eu também estive no Getsêmani. Mas Deus me ajudou a vencê-lo. E depois que você fizer a leitura deste livro, assim como eu, aprenderá a superar e vencer este jardim. E terá a resposta da pergunta: Por que acontecem circunstâncias em nossas vidas que humanamente não possuem explicação? Este livro foi escrito para você com muito carinho. E tem como objetivo principal ajudá-lo a atravessar e vencer os "jardins de dores" que algumas vezes poderão aparecer em sua vida.',
  },
  {
    slug: "tira-a-minha-alma-da-prisao",
    title: "Tira a Minha Alma da Prisão",
    badge: "Mais Vendido",
    category: "Mais Vendidos",
    price: "R$ 49,90",
    image: "/images/livro-tira-minha-alma-da-prisao.png",
    alt: "Livro Tira a Minha Alma da Prisão - Pastor Cláudio Gama",
    description:
      "Uma obra escrita para quem sente a alma aprisionada por mágoas, medos e feridas do passado. Com profundidade bíblica e sensibilidade pastoral, o Pastor Cláudio Gama conduz o leitor a um caminho de cura interior, perdão e liberdade em Cristo.",
  },
  {
    slug: "por-que-deus-permite-satanas-tocar-em-voce",
    title: "Por que Deus Permite Satanás Tocar em Você?",
    badge: "Teológico",
    category: "Bíblia e Teologia",
    price: "R$ 49,90",
    image: "/images/livro-por-que-deus-permite.png",
    alt: "Livro Por que Deus Permite Satanás Tocar em Você? - Pastor Cláudio Gama",
    description:
      "Uma resposta bíblica e teológica para uma das perguntas mais difíceis da caminhada cristã. Um estudo sobre soberania divina, provação e propósito, que fortalece a fé de quem atravessa o vale.",
  },
  {
    slug: "5-passos-para-se-tornar-um-pregador-pentecostal-eficaz",
    title: "5 Passos para se Tornar um Pregador Pentecostal Eficaz",
    badge: "Para Pregadores",
    category: "Bíblia e Teologia",
    price: "R$ 49,90",
    image: "/images/livro-5-passos-pregador.png",
    alt: "Livro 5 Passos para se Tornar um Pregador Pentecostal Eficaz - Pastor Cláudio Gama",
    description:
      "Um manual prático e espiritual para obreiros, pregadores e líderes que desejam pregar com preparo, unção e eficácia. Cinco passos fundamentados na Palavra e na experiência de mais de cinco décadas de ministério.",
  },
  {
    slug: "abrindo-o-coracao-para-nao-morrer-do-coracao",
    title: "Abrindo o Coração para não Morrer do Coração",
    badge: "Devocional",
    category: "Devocionais",
    price: "R$ 49,90",
    image: "/images/livro-abrindo-o-coracao-v2.png",
    alt: "Livro Abrindo o Coração para não Morrer do Coração - Pastor Cláudio Gama",
    description:
      "Guardar tudo dentro do coração adoece. Nesta obra, o Pastor Cláudio Gama ensina, com base bíblica e cuidado pastoral, como abrir o coração diante de Deus e de pessoas de confiança para viver com leveza, saúde emocional e fé.",
  },
];

export const TESTIMONIALS = [
  {
    text: "A pregação do pastor me alcançou num dos momentos mais difíceis da minha vida. Hoje minha família está de pé e servindo a Deus juntos.",
    initials: "MI",
    who: "Membro da igreja",
    city: "São Paulo / SP",
    tag: "Culto",
  },
  {
    text: "Li “Superando os Getsêmanis da Vida” em uma semana. Cada capítulo parecia ter sido escrito exatamente para a dor que eu carregava.",
    initials: "LL",
    who: "Leitora dos livros",
    city: "Rio de Janeiro / RJ",
    tag: "Livro",
  },
  {
    text: "Comecei a acompanhar as pregações on-line e a minha vida de oração mudou completamente. Hoje não começo o dia sem a Palavra.",
    initials: "AP",
    who: "Assinante do Cláudio Gama Play",
    city: "Belo Horizonte / MG",
    tag: "Play",
  },
  {
    text: "Ouvi a mensagem numa cruzada e entreguei a minha vida a Jesus naquela mesma noite. Foi o dia em que tudo começou de novo.",
    initials: "VC",
    who: "Vida entregue a Cristo",
    city: "Curitiba / PR",
    tag: "Cruzada",
  },
  {
    text: "Os ensinos sobre chamado e liderança me ajudaram a pastorear com mais amor, preparação e responsabilidade diante de Deus.",
    initials: "OM",
    who: "Obreiro do ministério",
    city: "Fortaleza / CE",
    tag: "Instituto",
  },
  {
    text: "Nosso casamento foi restaurado depois de uma mensagem sobre perdão. Deus usou este ministério para nos alcançar em tempo.",
    initials: "CR",
    who: "Casal restaurado",
    city: "Belém / PA",
    tag: "Culto",
  },
];

export const FORMATION = [
  "Bacharel em Teologia",
  "Doutor Honoris Causa — Academia Brasileira Teológica de Letras",
  "Técnico em Contabilidade",
  "Pedagogo — Curso de Formação de Professores",
  "Pós-graduação em Psicopedagogia",
  "Pós-graduação em Gestão e Docência no Ensino Superior",
  "Pós-graduação em Gestão, Supervisão e Orientação Educacional",
  "Pós-graduação em Clínica Pastoral e Capelania",
  "Pós-graduação em Ciências da Religião",
  "Pós-graduação em Educação",
  "Pós-graduação em Ensino Religioso",
  "Pós-graduação em Didática e Metodologia do Ensino",
  "Pós-graduação em Aconselhamento Pastoral (MEC)",
];

export const POSTS = [
  {
    slug: "o-que-e-teologia-sistematica-e-por-que-ela-importa",
    category: "Teologia Sistemática",
    title: "O que é teologia sistemática — e por que ela importa para a igreja",
    excerpt:
      "Muita gente acha que teologia sistemática é assunto de acadêmico frio. Eu discordo. Ela é o mapa que impede o crente de se perder, e o remedinho contra o modismo que aparece a cada cinco anos com cara de novidade.",
    date: "19 de julho de 2026",
    read: "6 min",
    image: "/images/pastor-pregando-plateia.jpeg",
    verse: "“Examinai tudo. Retende o bem.” — 1 Tessalonicenses 5.21",
    body: [
      "Teologia sistemática é, em poucas palavras, o esforço de organizar tudo o que a Bíblia ensina sobre um determinado assunto em um corpo coerente de doutrina. Em vez de ler um versículo isolado sobre a salvação, você reúne o que Gênesis, Isaías, João, Romanos e Apocalipse dizem — e escuta a Escritura falando com uma só voz.",
      "Alguns irmãos torcem o nariz: “eu não preciso de teologia, eu tenho a Bíblia”. Mas todo crente já é teólogo. A única pergunta é se ele é um teólogo bom ou ruim. Quando você diz “Deus é bom”, você fez teologia. Quando afirma que Jesus é Deus e homem, você acabou de repetir séculos de reflexão da igreja diante das Escrituras.",
      "A doutrina protege. Boa parte do que hoje se vende como revelação nova é heresia velha, com roupa nova. O crente que conhece a doutrina da Trindade não cai no modalismo disfarçado. O que entende a graça não se vende para o mérito. O que conhece escatologia não entra em pânico a cada manchete.",
      "A doutrina também aquece. Estudar os atributos de Deus não deixa o coração frio — deixa o coração adorador. Quem entende a soberania de Deus dorme melhor nas noites difíceis. Quem entende a justificação pela fé para de tentar pagar uma conta que Cristo já quitou na cruz.",
      "Comece simples: escolha um tema — a pessoa de Cristo, a obra do Espírito, a igreja — e passe um mês reunindo textos, anotando e orando sobre eles. Teologia que não termina em adoração e obediência não é teologia cristã: é curiosidade religiosa.",
    ],
  },
  {
    slug: "jim-elliot-e-os-cinco-martires-do-rio-curaray",
    category: "Missões",
    title: "Jim Elliot e os cinco mártires do rio Curaray",
    excerpt:
      "Em 8 de janeiro de 1956, cinco missionários foram mortos a lanças por um povo que eles tentavam alcançar. Anos depois, as viúvas voltaram para viver entre aquele mesmo povo — e o filho de um deles foi batizado pelo homem que matou seu pai.",
    date: "25 de agosto de 2026",
    read: "6 min",
    image: "/images/pastor-pregando-costas.jpeg",
    verse: "“Não é tolo aquele que dá o que não pode reter para ganhar o que não pode perder.” — Jim Elliot",
    body: [
      "Jim Elliot, Nate Saint, Ed McCully, Peter Fleming e Roger Youderian eram jovens. Tinham formação, futuro e famílias. Escolheram a selva do Equador e um povo que o mundo chamava de intocável: os huaorani, conhecidos então como aucas.",
      "A aproximação foi paciente. Sobrevoos, presentes descidos por cordas, palavras aprendidas na base do erro. No dia 8 de janeiro de 1956, na praia do rio Curaray, os cinco foram mortos a lanças. Nenhum deles usou a arma que carregava — havia um acordo entre eles de não matar um homem que não estava pronto para morrer, para salvar a vida de quem já estava.",
      "A história do evangelho, porém, nunca termina no túmulo. Elisabeth Elliot, viúva de Jim, e Rachel Saint, irmã de Nate, voltaram para viver entre os huaorani. Aprenderam a língua, traduziram a Palavra, cuidaram dos doentes. A tribo se converteu.",
      "Anos mais tarde, Steve Saint, filho de Nate, foi batizado nas águas daquele mesmo rio pelas mãos de Mincaye — um dos homens que matou seu pai. Não existe roteiro humano que escreva isso. Só a graça escreve.",
      "O que essa história cobra de nós não é necessariamente a selva. É a disposição. Existe um povo, uma família, um vizinho que Deus colocou no seu caminho e que você tem evitado. Missões começa quando a gente para de calcular o custo e começa a calcular a eternidade.",
    ],
  },
  {
    slug: "john-wesley-e-a-noite-de-aldersgate",
    category: "História da Igreja",
    title: "John Wesley: o coração estranhamente aquecido em Aldersgate",
    excerpt:
      "Wesley pregava antes de ser convertido. Sua história é um alerta para todo obreiro: é possível estar no ministério e ainda não ter descansado na graça.",
    date: "21 de agosto de 2026",
    read: "6 min",
    image: "/images/pastor-sorrindo.jpeg",
    verse: "“O justo viverá pela fé.” — Romanos 1.17",
    body: [
      "John Wesley era filho de pastor, formado em Oxford, disciplinado ao extremo. Levantava às quatro da manhã para orar, jejuava, visitava presos, foi missionário na Geórgia. E voltou da América derrotado, escrevendo no diário: “Fui à América converter os índios; mas, ah, quem me converterá?”",
      "Em 24 de maio de 1738, numa reunião simples na rua Aldersgate, em Londres, alguém lia o prefácio de Lutero à carta aos Romanos. Wesley registrou: “senti meu coração estranhamente aquecido. Senti que confiava em Cristo, somente em Cristo, para a salvação”.",
      "Note o detalhe: não faltava esforço a Wesley. Faltava confiança. Ele tinha religião de sobra e fé de menos. Esse é o perigo silencioso de quem cresceu dentro da igreja — trocar o descanso na obra de Cristo pelo cansaço da própria performance.",
      "Depois de Aldersgate, o mesmo homem percorreu mais de 400 mil quilômetros a cavalo e pregou mais de 40 mil sermões. O avivamento metodista mudou a Inglaterra: alfabetização, cuidado com os pobres, combate à escravidão. A graça que aquece o coração sempre acaba movendo as mãos.",
      "Pergunte-se hoje, com honestidade: eu sirvo a Deus para ser aceito, ou porque já fui aceito em Cristo? A resposta muda tudo — inclusive o seu sono.",
    ],
  },
  {
    slug: "turretin-e-hodge-a-escola-de-princeton",
    category: "Teologia Sistemática",
    title: "Turretin e Hodge: a escola de Princeton e a defesa das Escrituras",
    excerpt:
      "Um genebrino do século XVII escreveu o livro que virou padrão de ensino nos Estados Unidos. Duzentos anos depois, um professor de Princeton passou cinquenta e sete anos ensinando doutrina.",
    date: "15 de agosto de 2026",
    read: "6 min",
    image: "/images/pastor-aplaudindo.jpeg",
    verse: "“Toda a Escritura é inspirada por Deus e útil para o ensino.” — 2 Timóteo 3.16",
    body: [
      "Francisco Turretin pastoreou e lecionou em Genebra no século XVII. Sua obra, as Institutas de Teologia Elêntica, nasceu do debate: ele ensinava a doutrina respondendo às objeções, uma por uma. Era teologia de trincheira, escrita para pastores que precisavam defender o rebanho.",
      "Duzentos anos depois, do outro lado do oceano, o livro de Turretin era o manual do Seminário de Princeton. Charles Hodge estudou ali, ensinou ali por cinquenta e sete anos e formou mais de três mil pregadores. Costumava dizer que nenhuma ideia nova havia surgido em Princeton — não como piada, mas como compromisso: a tarefa da igreja não é inventar, é guardar.",
      "É moda hoje desprezar essa herança como frieza acadêmica. Mas foi essa geração que sustentou a autoridade das Escrituras quando o liberalismo teológico varreu as universidades da Europa. Sem eles, boa parte do que pregamos teria sido negociada há muito tempo.",
      "A lição para nós é dupla. Primeiro: o pregador precisa estudar. Púlpito raso produz igreja frágil. Segundo: doutrina sem devoção endurece. Hodge orava com os alunos antes de cada aula, e chorava ao falar da cruz.",
      "Cuide da sua estante e do seu joelho. Quem só lê, esfria. Quem só sente, se perde. A igreja saudável mantém a Palavra na cabeça, no coração e nos pés.",
    ],
  },
  {
    slug: "adoniram-judson-e-os-seis-anos-sem-um-convertido",
    category: "Missões",
    title: "Adoniram Judson e os seis anos sem um convertido",
    excerpt:
      "O primeiro missionário estrangeiro enviado pelos Estados Unidos passou seis anos pregando sem ver uma única alma se converter. Duzentos anos depois, existem milhões de cristãos naquela terra.",
    date: "12 de agosto de 2026",
    read: "6 min",
    image: "/images/pastor-microfone.jpeg",
    verse: "“Não nos cansemos de fazer o bem, pois no tempo próprio colheremos.” — Gálatas 6.9",
    body: [
      "Adoniram Judson chegou à Birmânia em 1813 com a esposa Ann. Aprendeu uma língua sem gramática publicada, traduziu a Bíblia inteira e pregou ano após ano para ouvintes educados e indiferentes. O primeiro convertido só veio depois de seis anos.",
      "Quando alguém lhe perguntou quais eram as perspectivas do trabalho, ele respondeu: “tão brilhantes quanto as promessas de Deus”. Não era otimismo — era teologia.",
      "O preço foi alto. Judson passou quase dois anos preso, acorrentado, na prisão de Ava. Ann levava comida escondida e escondeu o manuscrito da tradução dentro de um travesseiro sujo para que os guardas não o destruíssem. Ela morreu pouco depois de sua libertação. Ele enterrou esposas e filhos naquele solo.",
      "Hoje, a igreja em Mianmar conta milhões de cristãos, e o nome Judson ainda aparece em seminários e hinos daquele povo. O homem não viu a colheita; ele apenas arou.",
      "Se você está em uma temporada de arar — orando pelo cônjuge, pelo filho, por uma célula que não cresce, por um ministério que parece parado — lembre-se: fidelidade não se mede pelo relógio da nossa impaciência, mas pelas promessas de Deus.",
    ],
  },
  {
    slug: "devocional-a-fe-que-permanece",
    category: "Devocionais",
    title: "A fé que permanece quando tudo balança",
    excerpt:
      "Há dias em que a oração parece bater no teto. É exatamente ali que a fé deixa de ser emoção e passa a ser decisão de permanecer.",
    date: "5 de agosto de 2026",
    read: "6 min",
    image: "/images/pastor-pregando-plateia.jpeg",
    verse: "“Ainda que a figueira não floresça… eu me alegrarei no Senhor.” — Habacuque 3.17-18",
    body: [
      "Habacuque não escreveu esse texto na bonança. Ele escreveu olhando para uma lavoura sem fruto, um curral vazio e um país prestes a ser invadido. E mesmo assim decidiu: eu me alegrarei no Senhor.",
      "Existe uma fé que só funciona quando a conta fecha. Essa fé é frágil, porque depende da circunstância. A fé bíblica é outra coisa: ela se apoia no caráter de Deus quando os números não fecham, quando o exame não veio bom, quando a cadeira na sala ficou vazia.",
      "Eu aprendi isso no lugar mais difícil da minha vida. Deus não nos promete ausência de dor; Ele promete presença. E a presença de Deus não elimina o vale — ela nos atravessa por ele.",
      "Três decisões práticas para os dias que balançam: continue na Palavra mesmo sem sentir; continue na casa de Deus mesmo sem vontade; e continue falando com Ele, ainda que seja só um gemido. Oração curta e sincera vale mais que discurso comprido e vazio.",
      "A fé que permanece não é a que nunca chora. É a que chora e não larga a mão do Pai.",
    ],
  },
] as const;

export const POST_CATEGORIES = ["Tudo", "Devocionais", "História da Igreja", "Missões", "Teologia Sistemática"];

export const WHATSAPP_PRAYER_NUMBER = "5521999871093";

export const PRAYER_TOPICS = [
  "Saúde e cura",
  "Família e casamento",
  "Trabalho e finanças",
  "Vida espiritual",
  "Libertação",
  "Gratidão / testemunho",
];

export const GIVING_PURPOSES = [
  {
    title: "Construção da igreja na comunidade",
    text: "Um templo para acolher famílias, crianças e jovens em uma das regiões mais carentes do Rio de Janeiro.",
  },
  {
    title: "Missões e evangelismo",
    text: "Cruzadas, viagens missionárias e distribuição de literatura cristã no Brasil e no exterior.",
  },
  {
    title: "Ação social",
    text: "Cestas básicas, apoio a famílias em vulnerabilidade e atendimento pastoral a quem mais precisa.",
  },
];

export const GIVING_CONTACT = {
  label: "Falar com a tesouraria pelo WhatsApp",
  href: "https://wa.me/5521999871093?text=Paz%20do%20Senhor!%20Quero%20contribuir%20com%20a%20obra%20do%20minist%C3%A9rio.%20Podem%20me%20orientar%3F",
};
