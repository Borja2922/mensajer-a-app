import React, { useState } from "react";
import { Alert, Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useDispatch } from "react-redux";
import { setUser } from "../feautures/user/userSlice";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleLogin = () => {
    let valid = true;
    if (username.trim() === "") {
      setUsernameError(true);
      valid = false;
    } else {
      setUsernameError(false);
    }

    if (password.trim() === "") {
      setPasswordError(true);
      valid = false;
    } else {
      setPasswordError(false);
    }

    if (valid) {
      // Simulación de autenticación aqui debemos enviar los datos al servidor
      const user = { username, password };
      console.log(user);
      dispatch(setUser(user));
      navigation.navigate("Home");
    } else {
      Alert.alert("Error", "Todos los campos son obligatorios.");
    }
  };

  const handleRegister = () => {
    navigation.navigate("Registrar"); 
  };

  return (
    <View style={styles.container}>
    <Image source={require('../../assets/echoChat.png')} style={styles.logo} />
      <Text style={styles.title}>Iniciar Sesión</Text>
      <TextInput
        style={styles.input}
        placeholder="Usuario"
        onChangeText={setUsername}
        value={username}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Iniciar Sesión</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
        <Text style={styles.registerButtonText}>¿No tienes cuenta? Regístrate</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#F5F5F5",
      alignItems: "center",
      justifyContent: "center",
      padding: 16,
    },
    logo: {
      width: '100%',
      height: 80, 
      resizeMode: 'contain',
      marginBottom: 30,
    },
    content: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 16,
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      color: "#333",
      marginBottom: 20,
    },
    input: {
      width: "100%",
      padding: 15,
      marginBottom: 15,
      borderColor: "#ddd",
      borderWidth: 1,
      borderRadius: 8,
      backgroundColor: "#fff",
    },
    button: {
      backgroundColor: "#6200ea",
      paddingVertical: 15,
      paddingHorizontal: 30,
      borderRadius: 8,
      marginVertical: 10,
      width: '100%',
      alignItems: 'center',
    },
    buttonText: {
      fontSize: 18,
      color: 'white',
      fontWeight: 'bold',
    },
    registerButton: {
      marginTop: 10,
    },
    registerButtonText: {
      fontSize: 16,
      color: "#6200ea",
      textDecorationLine: 'underline',
    },
  });

export default LoginScreen;
