import { torveny } from '@/data/kresz2';

interface Props {
  open: boolean;
  onClose: () => void;
  title: string;
  content: string;
  tv: string; // <-- hozzáadva
  image?: string;
}

export default function KreszModal({
  open,
  onClose,
  title,
  content,
  tv,
  image,
}: Props) {
  if (!open) return null;

  const getExternalUrl = (tv: string) => {
    if (tv === 'KRESZ') return 'https://njt.hu/jogszabaly/1975-1-20-24';
    const t = torveny[tv];
    return t?.url ?? '#';
  };

  return (
    <div className='m-3 fixed inset-0 z-50 flex items-center justify-center bg-black/50'>
      <div className='max-h-[90vh] w-full max-w-xl overflow-y-auto rounded bg-white text-black p-4 shadow-lg'>
        <div className='mb-2 flex items-center justify-between'>
          <h2 className='text-lg font-semibold'>{title}</h2>
          <button
            onClick={onClose}
            className='text-3xl font-bold text-gray-500 hover:text-black'
          >
            ×
          </button>
        </div>

        <a
          href={getExternalUrl(tv)}
          target='_blank'
          rel='noopener noreferrer'
          className='mb-3 inline-block text-sm text-blue-600 underline hover:text-blue-800'
        >
          {tv}
          <span className='ml-1 text-xs text-gray-500'>(külső hivatkozás)</span>
        </a>

        <pre className='whitespace-pre-wrap text-sm font-semibold leading-relaxed'>
          {content}
        </pre>

        <div className='mt-4 text-right'>
          <button
            onClick={onClose}
            className='rounded bg-amber-900 px-4 py-1 text-white'
          >
            Bezárás
          </button>
        </div>
      </div>
    </div>
  );
}
