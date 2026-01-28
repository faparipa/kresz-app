'use client';

import Image from 'next/image';
import { useEffect } from 'react';

interface Props {
  open: boolean;
  onClose: () => void;
  title: string;
  content: string;
  image?: string;
}

export default function KreszModal({
  open,
  onClose,
  title,
  content,
  image,
}: Props) {
  if (!open) return null;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <div className='m-3 fixed inset-0 z-50 flex items-center justify-center bg-black/50'>
      <div className='max-h-[90vh] w-full max-w-xl overflow-y-auto rounded bg-white text-amber-950 p-4 shadow-lg'>
        <div className='mb-2 flex items-center justify-between'>
          <h2 className='text-lg font-semibold'>{title}</h2>
          <button
            onClick={onClose}
            className='text-xl font-bold text-gray-500 hover:text-black'
          >
            ×
          </button>
        </div>
        {image && (
          <div className='mb-4 flex justify-center'>
            <Image src={image} alt={title} width={120} height={120} />
          </div>
        )}
        <a
          href='https://net.jogtar.hu/jogszabaly?docid=97500001.kpm#:~:text=9.%20%C2%A7'
          target='_blank'
          rel='noopener noreferrer'
          className='mb-3 inline-block text-sm text-blue-600 underline hover:text-blue-800'
        >
          KRESZ: 1/1975. (II. 5.) KPM–BM együttes rendelet a közúti közlekedés
          szabályairól
          <span className='ml-1 text-xs text-gray-500'>(külső hivatkozás)</span>
        </a>

        <pre className='whitespace-pre-wrap text-sm leading-relaxed'>
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
