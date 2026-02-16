export interface KreszAlpont {
  id: string;
  szoveg: string;
  alpontok?: Record<string, KreszAlpont>;
}

export interface KreszPont {
  id: string;
  szoveg: string;
  alpontok?: Record<string, KreszPont>; // pl. ba, bb stb.
}

export interface KreszBekezdes {
  id: string;
  szoveg?: string;
  cim?: string;
  alpontok?: Record<string, KreszPont>;
}

export interface KreszParagrafus {
  paragrafus: string;
  cim: string;
  image?: string;
  bekezdesek: Record<string, KreszBekezdes>;
}
interface TorvenyParagrafus {
  text?: string;
  pontok?: Record<string, string>;
  children?: Record<string, TorvenyParagrafus>; // ide kerül a children
  [key: string]: any; // ideiglenes minden más mezőhöz
}

export interface TorvenyItem {
  tv: string;
  url: string;
  paragrafusok: Record<string, TorvenyParagrafus>;
}

export interface Jogszabaly {
  tv: string;
  text: string;
  url: string;
}
export type KreszKivonat = Record<string, KreszParagrafus>;
