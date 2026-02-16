import { useMemo } from 'react';
import { Jogsert } from '@/types/jogsertes';

export function useSearch(data: Jogsert[], query: string): Jogsert[] {
  return useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return data;

    return data.filter((item) => {
      const textMatch = item.Jogsertes.toLowerCase().includes(q);
      const groupMatch = item.csoport.toLowerCase().includes(q);
      const paragrafusMatch = String(item.paragrafus).includes(q);
      const paragrafusSymbolMatch = `§ ${item.paragrafus}`.includes(q);
      const pontMatch = item.pont ? item.pont.toLowerCase().includes(q) : false;

      return (
        textMatch ||
        groupMatch ||
        paragrafusMatch ||
        paragrafusSymbolMatch ||
        pontMatch
      );
    });
  }, [query, data]);
}
