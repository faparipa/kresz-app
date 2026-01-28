export interface Jogsertes {
  id: number;
  megnevezes: string;

  kozigBirsagVan: boolean;
  szabsertesiBirsagVan: boolean;

  utkozik: string;
  minosul: string;

  eloeletiPont: number | null;

  kozigBirsagOsszeg: number | null;
  tavKozigBirsag: boolean;

  helysziniBirsag: number | null;
  kresz?: string[];
}
