import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDSgDo2-AmziOqbnejk_gzT92FMbhlS-sA',
  authDomain: 'avto-test-45396.firebaseapp.com',
  projectId: 'avto-test-45396',
  storageBucket: 'avto-test-45396.firebasestorage.app',
  messagingSenderId: '726960063730',
  appId: '1:726960063730:web:f7247c904621ccc4e27c6b',
  measurementId: 'G-VBJ5GB6RG3',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
