import JogsertesLista from '@/components/JogsertesLista';
import jogsertesek from '../data/jogsertesek.json';

export default function Home() {
  return (
    <main className='min-h-screen bg-gray-100 p-6'>
      <h1 className='text-2xl font-bold text-amber-700'>KRESZ Jogtár</h1>

      <p className='mt-2 text-gray-700'>
        Offline használható közlekedési jogsértés-kereső
      </p>
      <JogsertesLista data={jogsertesek} />
    </main>
  );
}
