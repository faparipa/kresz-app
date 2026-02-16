import Link from 'next/link';

export default function NotFound() {
  return (
    <div>
      <h2>Upsz</h2>
      <p>A keresett oldal nem található.</p>
      <Link href='/'>Vissza a kezdőoldalra</Link>
    </div>
  );
}
