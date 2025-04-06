import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={require('./assets/login.png')} style={styles.logo} />

      <TextInput
        style={styles.input}
        placeholder='Telefone, nome de usuário ou email'
      />

      <TextInput
        style={styles.input}
        placeholder='Senha'
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Log in</Text>
      </TouchableOpacity>

      <Text style={styles.hyperlink}>
        Esqueceu a senha?
      </Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 200,
    height: 200,
  },
  input: {
    height: 40,
    width: 300,
    marginVertical: 10,
    backgroundColor: '#e9e9e9',
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#007AFF',
    width: 300,
    height: 40,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  hyperlink: {
    color: '#007AFF',
    marginTop: 15,
    marginBottom: 20,
    fontSize: 14,
    alignSelf: 'flex-end',
    marginRight: 40,
  },
});
