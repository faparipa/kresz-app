'use client';

import { useState, useMemo } from 'react';
import { Jogsert } from '@/types/jogsertes';
import { JogsertesCard } from './JogsertesCard';
import KreszModal from './KreszModal';
import {
  OpenRef,
  buildKreszPath,
  formatTitle,
  getJogszabalySzoveg,
} from '@/utils/jogszabalyHelpers';
import { useFavorites } from '@/hooks/useFavorites';
import { useSearch } from '@/hooks/useSearch';

interface Props {
  data: Jogsert[];
}

export default function JogsertesLista({ data }: Props) {
  const [query, setQuery] = useState('');
  const [openRef, setOpenRef] = useState<OpenRef | null>(null);

  const { favorites, toggleFavorite } = useFavorites();
  const filtered = useSearch(data, query);

  const sorted = useMemo(() => {
    return [...filtered].sort(
      (a, b) =>
        Number(favorites.includes(b.Id)) - Number(favorites.includes(a.Id))
    );
  }, [filtered, favorites]);

  const openJogszabaly = (item: Jogsert) => {
    if (item.Tv === 'KRESZ') {
      const path = buildKreszPath(item);
      if (!path) return;
      setOpenRef({ tv: 'KRESZ', path });
      return;
    }
    setOpenRef({ tv: item.Tv, path: String(item.paragrafus) });
  };

  return (
    <div className='flex flex-col mb-4 w-full max-w-2xl'>
      <input
        className='w-full rounded-lg border p-3 mb-4 mt-2 text-amber-950 top-15 sticky z-10 bg-white'
        placeholder='Keresés...'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <div className=' w-full min-w-0 space-y-4 '>
        {sorted.map((item) => (
          <JogsertesCard
            key={item.Id}
            item={item}
            isFavorite={favorites.includes(item.Id)}
            onToggleFavorite={() => toggleFavorite(item.Id)}
            onOpenKresz={() => openJogszabaly(item)}
          />
        ))}
      </div>

      {openRef && (
        <KreszModal
          open
          onClose={() => setOpenRef(null)}
          title={formatTitle(openRef)}
          content={getJogszabalySzoveg(openRef)}
          tv={openRef.tv}
        />
      )}
    </div>
  );
}
