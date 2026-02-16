import { Jogsert } from '@/types/jogsertes';

export const hasValue = (v: unknown): boolean =>
  v !== null && v !== undefined && v !== '' && v !== false && v !== 0;

export const parseHB = (value: string | null): number | null => {
  if (!value) return null;
  const num = Number(value.replace(',', '.'));
  return isNaN(num) ? null : num;
};

export const formatKozig = (value: any): string | null => {
  if (value === null || value === undefined || value === '') return null;
  if (!isNaN(value))
    return `${(Number(value) * 1000).toLocaleString('hu-HU')} Ft`;
  return value;
};

export const formatHelysziniBirsag = (hbValue: string | null): string => {
  const hb = parseHB(hbValue);
  if (hb === null) return hbValue || '';
  if (hb === 6.5) return '6 500 - 65 000 Ft';
  return `${(hb * 1000).toLocaleString('hu-HU')} Ft`;
};

export const formatHivatkozas = (item: Jogsert): string => {
  let s = `${item.Tv} ${item.paragrafus} §`;
  if (item.bekezdes) s += ` (${item.bekezdes})`;
  if (item.pont) s += ` ${item.pont})`;
  return s;
};
