'use client';

import { useEffect, useState } from 'react';
import { APP_VERSION, BUILD_DATE } from '@/app/version';

export default function UpdateNotifier() {
  const [installedVersion, setInstalledVersion] = useState<string | null>(null);
  const [updateAvailable, setUpdateAvailable] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('app_version');

    if (!saved) {
      localStorage.setItem('app_version', APP_VERSION);
      setInstalledVersion(APP_VERSION);
      return;
    }

    setInstalledVersion(saved);

    if (saved !== APP_VERSION) {
      setUpdateAvailable(true);
    }
  }, []);

  const refresh = () => {
    localStorage.setItem('app_version', APP_VERSION);
    window.location.reload();
  };

  return (
    <div className='mx-auto w-full fixed bottom-0  z-50 text-xs'>
      {updateAvailable ? (
        <div className='rounded bg-amber-200 p-2 text-black shadow'>
          Új verzió érhető el: <b>v{APP_VERSION}</b>
          <button onClick={refresh} className='ml-2 underline'>
            Frissítés
          </button>
        </div>
      ) : (
        installedVersion && (
          <div className='rounded bg-green-100 p-2 text-green-900 shadow'>
            Frissítve: v{installedVersion} ({BUILD_DATE})
          </div>
        )
      )}
    </div>
  );
}
