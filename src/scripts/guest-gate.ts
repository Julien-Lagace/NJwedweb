export const UNLOCK_KEY = 'weddingUnlocked';

function storage(): Storage | null {
  try {
    return sessionStorage;
  } catch {
    return null;
  }
}

export function isUnlocked(): boolean {
  try {
    return storage()?.getItem(UNLOCK_KEY) === 'true';
  } catch {
    return false;
  }
}

export function setUnlocked(): void {
  try {
    storage()?.setItem(UNLOCK_KEY, 'true');
  } catch {
    // sessionStorage may be unavailable
  }
}

export function clearUnlock(): void {
  try {
    storage()?.removeItem(UNLOCK_KEY);
  } catch {
    // sessionStorage may be unavailable
  }
}
