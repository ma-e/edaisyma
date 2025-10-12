// Lightweight optional Firebase initialization for shared wishlist
// Returns Firestore db instance when env vars are present; otherwise returns null
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

let dbSingleton = null;

export function getFirestoreDbOrNull() {
  if (dbSingleton !== null) {
    return dbSingleton;
  }

  const apiKey = process.env.REACT_APP_FIREBASE_API_KEY;
  const authDomain = process.env.REACT_APP_FIREBASE_AUTH_DOMAIN;
  const projectId = process.env.REACT_APP_FIREBASE_PROJECT_ID;

  const hasRequired = Boolean(apiKey && authDomain && projectId);
  if (!hasRequired) {
    dbSingleton = null;
    return dbSingleton;
  }

  try {
    const app = initializeApp({ apiKey, authDomain, projectId });
    dbSingleton = getFirestore(app);
    return dbSingleton;
  } catch (err) {
    // If Firebase is misconfigured or double-initialized, gracefully fall back
    dbSingleton = null;
    return dbSingleton;
  }
}
