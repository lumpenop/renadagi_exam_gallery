import auth from '@react-native-firebase/auth';

interface Props {
  email: string;
  password: string;
}

export function signIn({email, password}: Props) {
  return auth().signInWithEmailAndPassword(email, password);
}

export function signUp({email, password}: Props) {
  return auth().createUserWithEmailAndPassword(email, password);
}

export function subscribeAuth(callback) {
  return auth().onAuthStateChanged(callback);
}

export function signOut() {
  return auth().signOut();
}
