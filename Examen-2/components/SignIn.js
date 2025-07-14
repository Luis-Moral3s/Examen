import React, { useState } from 'react';
import { Text, TextInput, Button, View, StyleSheet } from 'react-native';

export default function SignInForm({ onSignIn }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text>Iniciar Sesión</Text>
      <TextInput
        placeholder="Correo electrónico"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        style={styles.input}
      />
      <TextInput
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={styles.input}
      />
      <Button title="Iniciar sesión" onPress={() => onSignIn(email, password)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { margin: 20 },
  input: { borderWidth: 1, padding: 8, marginVertical: 5, width: 200 },
});
