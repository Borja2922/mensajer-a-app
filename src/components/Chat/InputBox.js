import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

const InputBox = () => {
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    alert(message);
    setMessage("");
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={message}
        onChangeText={setMessage}
        placeholder="Escribe un mensaje"
        style={styles.input}
      />
      <Button title="Enviar Mensaje" onPress={sendMessage} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
  },
  input: {
    flex: 1,
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
    marginRight: 10,
    borderRadius: 5,
  },
});

export default InputBox;
