import { Jogsert } from '@/types/jogsertes';
import {
  hasValue,
  formatKozig,
  formatHelysziniBirsag,
  formatHivatkozas,
} from '@/utils/jogsertHelpers';

interface Props {
  item: Jogsert;
  onOpenKresz: () => void;
  isFavorite: boolean;
  onToggleFavorite: () => void;
}

export function JogsertesCard({
  item,
  onOpenKresz,
  isFavorite,
  onToggleFavorite,
}: Props) {
  return (
    <div
      className={`relative w-full rounded-lg border p-4 shadow-sm
        ${
          item.KOZIG
            ? 'bg-linear-to-t from-sky-300 to-indigo-300 border-blue-500'
            : 'bg-linear-to-t from-amber-200 to-orange-300 border-orange-500'
        }`}
    >
      <h3 className='mb-1 font-semibold text-amber-950'>{item.csoport}</h3>
      <h3 className='mb-1 font-semibold text-amber-950'>{item.Jogsertes}</h3>

      <div className='mb-5 flex flex-wrap gap-2'>
        {item.HB !== null && (
          <span className='rounded bg-green-100 px-4 py-2 text-xl font-bold text-green-800 flex items-center justify-center'>
            HB
          </span>
        )}

        {item.KOZIG !== null && (
          <span className='rounded bg-blue-100 px-2 py-2 text-xl font-bold text-blue-800 flex items-center justify-center'>
            Közig. bírság
          </span>
        )}

        <div className='space-y-1 text-base text-black'>
          <p>
            Előéleti pont:{' '}
            {item.kke_pont !== null ? (
              <span className='font-semibold text-red-700'>
                {item.kke_pont}
              </span>
            ) : (
              'nincs'
            )}
          </p>

          {hasValue(item.KOZIG) && (
            <p>Közig. bírság: {formatKozig(item.KOZIG)}</p>
          )}

          {item.HB && <p>Helyszíni bírság: {formatHelysziniBirsag(item.HB)}</p>}

          {/* KRESZ */}
          {item.paragrafus && (
            <div className='pt-2'>
              <button
                onClick={onOpenKresz}
                className='rounded bg-amber-100 px-2 py-1 text-base text-amber-900 cursor-pointer hover:bg-amber-200'
              >
                Ütközik: {formatHivatkozas(item)}
              </button>
            </div>
          )}

          {/* Minősítés */}
          {item.minosites && (
            <p className='pt-2 text-base text-gray-600'>
              Minősül: {item.minosites}
            </p>
          )}
        </div>
      </div>
      {/* Kedvenc */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onToggleFavorite();
        }}
        className='absolute left-5 bottom-1 mt-2 text-xl cursor-pointer hover:text-shadow-gray-950'
        aria-label='Kedvenc'
      >
        {isFavorite ? '❤️' : '🤍'}
      </button>
    </div>
  );
}
