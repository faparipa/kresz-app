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

export type KreszKivonat = Record<string, KreszParagrafus>;
