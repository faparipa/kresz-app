'use client';

import { useEffect, useState } from 'react';

const CURRENT_VERSION = process.env.NEXT_PUBLIC_APP_VERSION ?? '0.0.0';

export function useServiceWorker() {
  const [updateAvailable, setUpdateAvailable] = useState(false);
  const [waitingWorker, setWaitingWorker] = useState<ServiceWorker | null>(
    null
  );
  const [newVersion, setNewVersion] = useState<string | null>(null);
  const [updated, setUpdated] = useState(false);

  useEffect(() => {
    if (!('serviceWorker' in navigator)) return;

    navigator.serviceWorker.ready.then((reg) => {
      if (reg.waiting) {
        setWaitingWorker(reg.waiting);
        setUpdateAvailable(true);
        setNewVersion(CURRENT_VERSION);
      }

      reg.addEventListener('updatefound', () => {
        const worker = reg.installing;
        if (!worker) return;

        worker.addEventListener('statechange', () => {
          if (
            worker.state === 'installed' &&
            navigator.serviceWorker.controller
          ) {
            setWaitingWorker(worker);
            setUpdateAvailable(true);
            setNewVersion(CURRENT_VERSION);
          }
        });
      });
    });
  }, []);

  const update = () => {
    if (!waitingWorker) return;
    waitingWorker.postMessage({ type: 'SKIP_WAITING' });
    setUpdated(true);
    setUpdateAvailable(false);
    window.location.reload();
  };

  return {
    updateAvailable,
    update,
    currentVersion: CURRENT_VERSION,
    newVersion,
    updated,
  };
}
