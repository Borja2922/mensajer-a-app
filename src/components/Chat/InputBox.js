import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";
import { useDispatch } from "react-redux";
import { addMessage } from "../../feautures/messages/messagesSlice";

const InputBox = () => {
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();

  const sendMessage = () => {
    if(message.length > 0) {
        dispatch(addMessage({id: Date.now(), text: message}));
        setMessage("");
    }
  };

  return (
    <View style={styles.container}>
        <TextInput
            value={message}
            onChangeText={setMessage}
            placeholder="Escribe un mensaje..."
            style={styles.input}
            onSubmitEditing={sendMessage}
        />
        <Button title="Enviar" onPress={sendMessage} color="#007BFF" />
    </View>
);
};

const styles = StyleSheet.create({
container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#ddd',
},
input: {
    flex: 1,
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 15,
    marginRight: 10,
},
});

export default InputBox;
