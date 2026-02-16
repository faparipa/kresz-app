import { Jogsert } from '@/types/jogsertes';
import { kreszKivonatok, torveny } from '@/data/kresz2';

export type OpenRef = {
  tv: string;
  path: string;
};

export function buildKreszPath(item: Jogsert): string | null {
  if (item.Tv !== 'KRESZ') return null;

  const parts: string[] = [];
  if (item.paragrafus) parts.push(String(item.paragrafus));
  if (item.bekezdes) parts.push(String(item.bekezdes));
  if (item.pont) parts.push(item.pont);

  return parts.join('_');
}

export function resolveKresz(path: string): string {
  const parts = path.split('_');
  const paragrafus = kreszKivonatok[parts[0]];
  if (!paragrafus) return '';

  const out: string[] = [];
  out.push(paragrafus.cim);

  let node: any = paragrafus.bekezdesek?.[parts[1]];
  if (!node) return out.join('\n\n');
  out.push(`(${parts[1]}) ${node.szoveg}`);

  for (let i = 2; i < parts.length; i++) {
    const key = parts[i];
    if (!node.alpontok?.[key]) break;
    node = node.alpontok[key];
    out.push(`${key}) ${node.szoveg}`);
  }

  return out.join('\n\n');
}

export function resolveTorvenyPath(tv: any, path: string): string {
  const parts = path.split('_');
  const paragrafus = tv.paragrafusok?.[parts[0]];
  if (!paragrafus) return '';

  const out: string[] = [];
  if (paragrafus.text) out.push(paragrafus.text);

  let node: any = paragrafus;
  for (let i = 1; i < parts.length; i++) {
    const key = parts[i];
    if (!node.children?.[key]) break;
    node = node.children[key];
    if (node.text) {
      const prefix = i === 1 ? `(${key}) ` : `${key}) `;
      out.push(prefix + node.text);
    }
  }

  if (out.length === 0 && paragrafus.children) {
    Object.entries(paragrafus.children).forEach(([k, v]: any) => {
      if (v.text) out.push(`(${k}) ${v.text}`);
    });
  }

  return out.join('\n\n');
}

export function getJogszabalySzoveg(ref: OpenRef): string {
  if (ref.tv === 'KRESZ') return resolveKresz(ref.path);

  const tv = torveny[ref.tv];
  if (!tv) return '';

  return resolveTorvenyPath(tv, ref.path);
}

export function formatTitle(ref: OpenRef): string {
  if (ref.tv !== 'KRESZ') return `${ref.tv} ${ref.path}. §`;

  const parts = ref.path.split('_');
  let title = `KRESZ ${parts[0]}. §`;
  if (parts[1]) title += ` (${parts[1]})`;
  if (parts[2]) title += ` ${parts[2]})`;
  if (parts[3]) title += ` ${parts[3]})`;

  return title;
}
