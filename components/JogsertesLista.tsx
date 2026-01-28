'use client';

import { useEffect, useMemo, useState } from 'react';
import { Jogsertes } from '@/types/jogsertes';
import { JogsertesCard } from './JogsertesCard';
import { kreszKivonatok } from '@/data/kresz2';
import KreszModal from './KreszModal';

interface Props {
  data: Jogsertes[];
}

type KreszRef = {
  paragrafus: string;
  bekezdes: string;
  pont?: string;
  alpont?: string;
};

export default function JogsertesLista({ data }: Props) {
  const [query, setQuery] = useState('');
  const [openRef, setOpenRef] = useState<KreszRef | null>(null);
  const [favorites, setFavorites] = useState<string[]>([]);

  /* ------------------------------------------------------------------
     1️⃣ KRESZ hivatkozás kinyerése szövegből
     ------------------------------------------------------------------ */
  const extractKreszRef = (text?: string): KreszRef | null => {
    if (!text) return null;

    // KRESZ 40.§ (5)
    const headerMatch = text.match(/KRESZ\s+(\d+)\.\s*§\s*\((\d+)\)/i);
    if (!headerMatch) return null;

    const paragrafus = headerMatch[1];
    const bekezdes = headerMatch[2];

    // maradék szöveg: d) i/1) ia)
    const rest = text.slice(headerMatch[0].length);

    const pointRegex = /([a-z]{1,3}|\d+)(?:\/(\d+))?\)/gi;
    const points: string[] = [];

    let m: RegExpExecArray | null;
    while ((m = pointRegex.exec(rest)) !== null) {
      points.push(m[2] ? `${m[1]}${m[2]}` : m[1]);
    }

    return {
      paragrafus,
      bekezdes,
      pont: points[0],
      alpont: points[1],
    };
  };

  /* ------------------------------------------------------------------
     2️⃣ KRESZ szöveg összeállítása modalhoz
     ------------------------------------------------------------------ */
  const getKreszSzoveg = (ref: KreszRef | null): string => {
    if (!ref) return '';

    const paragrafus = kreszKivonatok[ref.paragrafus];
    if (!paragrafus) return '';

    const bekezdes = paragrafus.bekezdesek?.[ref.bekezdes];
    if (!bekezdes) return '';

    const lines: string[] = [];

    // 📌 Paragrafus cím
    if (paragrafus.cim) {
      lines.push(paragrafus.cim);
    }

    // 📌 Bekezdés
    if (bekezdes.szoveg) {
      lines.push(`(${ref.bekezdes}) ${bekezdes.szoveg}`);
    }

    // 📌 Pont
    if (ref.pont) {
      const pont = bekezdes.alpontok?.[ref.pont];
      if (pont?.szoveg) {
        lines.push(`${ref.pont}) ${pont.szoveg}`);

        // 📌 Alpont (ha van)
        if (ref.alpont) {
          const alpont = pont.alpontok?.[ref.alpont];
          if (alpont?.szoveg) {
            lines.push(`${ref.alpont}) ${alpont.szoveg}`);
          }
        }
      }
    }

    return lines.join('\n\n');
  };

  /* ------------------------------------------------------------------
     3️⃣ Modal megnyitása jogsértés szövegéből
     ------------------------------------------------------------------ */
  const openModalFromText = (text?: string) => {
    const ref = extractKreszRef(text);
    if (ref && kreszKivonatok[ref.paragrafus]) {
      setOpenRef(ref);
    }
  };

  /* ------------------------------------------------------------------
     4️⃣ Kedvencek kezelése
     ------------------------------------------------------------------ */
  useEffect(() => {
    const saved = localStorage.getItem('favorites');
    if (saved) setFavorites(JSON.parse(saved));
  }, []);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [id, ...prev]
    );
  };

  /* ------------------------------------------------------------------
     5️⃣ Lista rendezés + szűrés
     ------------------------------------------------------------------ */
  const sortedItems = useMemo(() => {
    return [...data].sort((a, b) => {
      const aFav = favorites.includes(a.megnevezes);
      const bFav = favorites.includes(b.megnevezes);
      return Number(bFav) - Number(aFav);
    });
  }, [data, favorites]);

  const filtered = sortedItems.filter((item) => {
    const q = query.toLowerCase().trim();
    if (!q) return true;

    // 1️⃣ jogsértés megnevezés
    const inMegnevezes = item.megnevezes.toLowerCase().includes(q);

    // 2️⃣ KRESZ hivatkozás (pl. "KRESZ 40.§ (5) d)")
    const inUtkozik = item.utkozik?.toLowerCase().includes(q);

    // 3️⃣ paragrafus címe (pl. "Megállás")
    const kreszRef = extractKreszRef(item.utkozik);
    const paragrafusCim =
      kreszRef &&
      kreszKivonatok[kreszRef.paragrafus]?.cim?.toLowerCase().includes(q);

    return inMegnevezes || inUtkozik || paragrafusCim;
  });

  /* ------------------------------------------------------------------
     6️⃣ Render
     ------------------------------------------------------------------ */
  return (
    <>
      <div className='space-y-4 text-amber-950'>
        <input
          type='text'
          placeholder='Keresés jogsértésre vagy paragrafusra…'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className='w-full rounded-lg border p-3'
        />

        {filtered.map((item) => (
          <JogsertesCard
            key={item.megnevezes}
            item={item}
            isFavorite={favorites.includes(item.megnevezes)}
            onToggleFavorite={() => toggleFavorite(item.megnevezes)}
            onOpenKresz={() => openModalFromText(item.utkozik)}
          />
        ))}
      </div>

      {openRef && (
        <KreszModal
          open
          onClose={() => setOpenRef(null)}
          title={kreszKivonatok[openRef.paragrafus].cim}
          content={getKreszSzoveg(openRef)}
          image={kreszKivonatok[openRef.paragrafus].image}
        />
      )}
    </>
  );
}
