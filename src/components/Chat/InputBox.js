import React, { useState } from 'react';
import { TextInput, Button, StyleSheet, View } from 'react-native';

const InputBox = ({ onSendMessage }) => {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim()) {
      onSendMessage({ id: Date.now(), text: message });  // Enviar mensaje con un ID único
      setMessage('');  // Limpiar el campo de texto
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Escribe un mensaje..."
        value={message}
        onChangeText={setMessage}
      />
      <Button title="Enviar" onPress={handleSend} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    marginRight: 8,
  },
});

export default InputBox;
