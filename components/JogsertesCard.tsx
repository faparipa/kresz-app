import { Jogsertes } from '@/types/jogsertes';

interface Props {
  item: Jogsertes;
  onOpenKresz: () => void;
  isFavorite: boolean;
  onToggleFavorite: () => void;
}

const hasValue = (v: unknown) =>
  v !== null && v !== undefined && v !== '' && v !== false && v !== 0;

export function JogsertesCard({
  item,
  onOpenKresz,
  isFavorite,
  onToggleFavorite,
}: Props) {
  return (
    <div
      className={`relative rounded-lg border p-4 shadow-sm
    ${
      item.kozigBirsagVan
        ? 'bg-linear-to-t from-sky-300 to-indigo-300 border-blue-500'
        : 'bg-linear-to-t from-amber-200 to-orange-300 border-orange-500'
    }`}
    >
      <h3 className='mb-1 font-semibold text-amber-950'>{item.megnevezes}</h3>

      <div className='mb-2 flex flex-wrap gap-2'>
        {item.szabsertesiBirsagVan && (
          <span className='rounded bg-green-100 px-4 py-7 text-xl font-bold text-green-800'>
            HB
          </span>
        )}

        {item.kozigBirsagVan && (
          <span className='rounded bg-blue-100 px-2 py-7 text-xl font-bold text-blue-800'>
            Közig. bírság
          </span>
        )}

        <div className='space-y-1 text-base text-black'>
          <p>
            Előéleti pont:{' '}
            {item.eloeletiPont ? (
              <span className='font-semibold text-red-700'>
                {item.eloeletiPont}
              </span>
            ) : (
              'nincs'
            )}
          </p>

          {hasValue(item.kozigBirsagOsszeg) && (
            <p>
              Közig. bírság:{' '}
              {item.kozigBirsagOsszeg !== null && item.kozigBirsagOsszeg * 1000}{' '}
              Ft
            </p>
          )}
          {hasValue(item.helysziniBirsag) && (
            <p>
              Helyszíni bírság:{' '}
              {item.helysziniBirsag === 6.5
                ? `${item.helysziniBirsag * 1000} - 65000`
                : (item.helysziniBirsag !== null &&
                    item.helysziniBirsag * 1000) ||
                  '–'}{' '}
              Ft
            </p>
          )}
          {/* KRESZ */}
          {item.utkozik && (
            <div className='pt-2'>
              <button
                onClick={onOpenKresz}
                className='rounded bg-amber-100 px-2 py-1 text-base text-amber-900 cursor-pointer hover:bg-amber-200 hover:text-shadow-gray-950 focus:outline-offset-2'
              >
                Ütközik: {item.utkozik}
              </button>
            </div>
          )}
          {/* MINŐSÜL */}
          {item.minosul && (
            <p className='pt-2 text-base text-gray-600'>
              Minősül: {item.minosul}
            </p>
          )}
          {/* ❤️ kedvenc */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleFavorite();
            }}
            className='absolute right-3 bottom-3 text-xl cursor-pointer hover:text-shadow-gray-950'
            aria-label='Kedvenc'
          >
            {isFavorite ? '❤️' : '🤍'}
          </button>
        </div>
      </div>
    </div>
  );
}
