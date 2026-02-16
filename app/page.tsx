import JogsertesLista from '@/components/JogsertesLista';
import raw from '../data/jogsert.json';
import { Jogsert } from '@/types/jogsertes';

const jogsertesek = raw as Jogsert[];
export default function Home() {
  return (
    <main className='min-h-screen bg-gray-300 p-6 flex flex-col items-center '>
      <h1 className='text-xl font-bold text-amber-700 text-center '>
        A leggyakrabban szankcionát szabálysértések
      </h1>

      <p className='mt-2 text-gray-700 text-center'>
        Offline is használható jogsértés-kereső
      </p>
      <JogsertesLista data={jogsertesek} />
    </main>
  );
}
