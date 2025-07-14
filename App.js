import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { signOut } from 'firebase/auth';
import { auth } from './firebaseConfig';
import SignInForm from './components/SignIn';
import SignUpForm from './components/SignUp';
import { firebaseSignIn } from './components/firebaseSignIn';
import { firebaseSignUp } from './components/firebaseSignUp';

export default function App() {
  const [user, setUser] = useState(null);
  const [showSignUp, setShowSignUp] = useState(false);

  const handleSignIn = async (email, password) => {
    try {
      const userData = await firebaseSignIn(email, password);
      setUser(userData);
    } catch (error) {
      alert(error.message);
    }
  };

  const handleSignUp = async (email, password) => {
    try {
      const userData = await firebaseSignUp(email, password);
      setUser(userData);
    } catch (error) {
      alert(error.message);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <View style={styles.container}>
      {user ? (
        <>
          <Text>¡Bienvenido {user.email}!</Text>
          <Button title="Cerrar sesión" onPress={handleLogout} />
        </>
      ) : showSignUp ? (
        <>
          <SignUpForm onSignUp={handleSignUp} />
          <Button title="¿Ya tienes cuenta? Inicia sesión" onPress={() => setShowSignUp(false)} />
        </>
      ) : (
        <>
          <SignInForm onSignIn={handleSignIn} />
          <Button title="¿No tienes cuenta? Regístrate" onPress={() => setShowSignUp(true)} />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});
