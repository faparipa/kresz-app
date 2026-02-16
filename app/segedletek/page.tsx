import { jogszabaly } from '@/data/kresz2';
import InfoCard from '@/components/InfoCard';

export default function SegedletekPage() {
  return (
    <main className='mx-auto max-w-4xl p-4 space-y-6'>
      <h1 className='text-2xl font-bold text-amber-800'>Segédletek</h1>

      {/* JOGSZABÁLYOK */}
      <div className='space-y-3'>
        {Object.values(jogszabaly).map((j) => (
          <a
            key={j.tv}
            href={j.url}
            target='_blank'
            rel='noopener noreferrer'
            className='block rounded-lg border border-amber-300 bg-white p-4 shadow-sm hover:bg-amber-50 transition'
          >
            <div className='font-semibold text-amber-900'>{j.tv}</div>
            <div className='text-sm text-gray-700 mt-1'>{j.text}</div>
            <div className='text-xs text-blue-600 mt-2 underline'>
              Megnyitás NJT →
            </div>
          </a>
        ))}
      </div>

      {/* HALMAZAT BÍRSÁG */}
      <InfoCard title='Bírság mértéke halmazat esetén'>
        <p>Fix + fix → a nagyobb összeget kell adni.</p>
        <p>Fix + változó → minimum a fix bírság, maximum 65.000 Ft.</p>
        <p className='font-medium pt-2'>
          Azonos minősítésű cselekmények nem képeznek halmazatot.
        </p>
        <p className='text-gray-700'>
          (Pl. két kisebb fokú megsértés egy helyen és időben → 1 rendbeli
          szabálysértés)
        </p>
      </InfoCard>

      {/* ELŐÉLETI PONT KINEK */}
      <InfoCard title='Kinek kell előéleti pontot adni'>
        <p>
          a) magyar hatóság által kiállított vagy annak alapján külföldi hatóság
          által kiadott járművezetésre jogosító okmánnyal (a továbbiakban:
          vezetői engedéllyel) rendelkező,
        </p>
        <p>
          b) járművezetéstől eltiltás, illetőleg a vezetői engedély
          visszavonásának hatálya alatt álló személy által - a vezetői
          engedéllyel vezethető járművekkel elkövetett - a közúti közlekedéssel
          összefüggő bűncselekmény, továbbá a közúti közlekedés biztonságát
          fokozottan veszélyeztető szabálysértés és közigazgatási bírsággal
          sújtandó szabályszegés esetén (a továbbiakban együtt: szabályszegés)
          kell alkalmazni.
        </p>
      </InfoCard>

      {/* ELŐÉLETI PONT HALMAZAT */}
      <InfoCard title='Előéleti pont számítása halmazatnál'>
        <p>A nagyobb ponthoz a kisebb felét kell hozzáadni.</p>
        <p>Töredék pontnál felfelé kell kerekíteni.</p>
        <p className='font-medium'>
          Példa: 6 pont + 3 pont → 6 + 3/2 → 6 + 1.5 → 6 + 2 = 8 pont
        </p>
        <p className='text-black text-semibold'>
          Ha nincs halmazat → a magasabb pontszámot kell adni.
        </p>
      </InfoCard>

      {/* FIATALKORÚ */}
      <InfoCard title='Fiatalkorú bírságolása'>
        <ul className='list-disc pl-5 space-y-1'>
          <li>El kell ismernie a szabálysértést</li>
          <li>Vállalnia kell a befizetést</li>
          <li>Törvényes képviselő jelenléte kötelező</li>
          <li>A bírságot a törvényes képviselőnek is alá kell írnia,</li>
          <li>Maximum: 32.500 Ft</li>
          <li>Fix bírság &gt; 32.500 → 32.500 Ft-ot kell adni</li>
          <li>
            Más esetben a fix bírság összegétől eltérni fiatalkorú esetében sem
            lehet
          </li>
        </ul>
      </InfoCard>

      {/* MEGZAVARÁS */}
      <InfoCard title='Közúti közlekedés rendjének megzavarása'>
        <p>
          Aki a közlekedési szabályok megszegésével másokat közvetlen veszélynek
          tesz ki vagy könnyű sérülést okoz:
        </p>
        <ul className='list-disc pl-5 space-y-1'>
          <li>Reális veszély → 5 pont</li>
          <li>Személyi sérülés → 6 pont</li>
        </ul>
      </InfoCard>
      <InfoCard title='Készítette:'>
        <div className='space-y-2 text-xs text-gray-600 leading-relaxed'>
          <p>
            Imregh István r. alezredes Borsod - A - Z. VMRFK munkája alapján
          </p>
          <p> Farsang Gábor, E-mail: farsangg@zala.police.hu</p>
          <p>A jogszabályokat nem szó szerint emeltem át.</p>
          <p className='text-orange-950  text-sm font-semibold'>
            Teszteld és ha hibát találsz,vagy javaslatod van értesíts
          </p>
        </div>
      </InfoCard>
    </main>
  );
}
