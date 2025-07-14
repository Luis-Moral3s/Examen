import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebaseConfig';

export const firebaseSignUp = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    throw error;
  }
};
