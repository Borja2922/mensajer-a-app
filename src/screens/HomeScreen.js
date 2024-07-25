import { Button, StyleSheet, Text, View } from "react-native";

const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
          <Text style={styles.title}>Bienvenido a la aplicación de mensajería</Text>
          <Button
            title="Ir al Chat"
            onPress={() => navigation.navigate('Chat')}
            style={styles.button}
          />
          <Button
            title="Perfil"
            onPress={() => navigation.navigate('Profile')}
            style={styles.button}
          />
          <Button
            title="Configuración"
            onPress={() => navigation.navigate('Settings')}
            style={styles.button}
          />
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: 24,
      marginBottom: 20,
    },
    button: {
      marginTop: 20,
    },
    buttonText: {
      fontSize: 18,
      fontWeight: 'bold',
    }
  });

export default HomeScreen