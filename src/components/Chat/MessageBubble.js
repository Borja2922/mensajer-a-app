import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const MessageBubble = ({ message }) => {
    return (
        <View style={[styles.bubble, message.isUser ? styles.userBubble : styles.otherBubble]}>
            <Text style={styles.text}>{message.text}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    bubble: {
        padding: 10,
        borderRadius: 15,
        marginVertical: 5,
        maxWidth: '80%',
        alignSelf: 'flex-start', // Cambia a 'flex-end' para mensajes de usuario
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 1, // Para la sombra en Android
    },
    userBubble: {
        backgroundColor: 'black', // Color para los mensajes del usuario
        alignSelf: 'flex-end', // Alinea burbuja del usuario a la derecha
    },
    otherBubble: {
        backgroundColor: '#E1FFC7', // Color para los mensajes de otros
    },
    text: {
        color: 'black', // Color del texto en burbujas de usuario
        fontSize: 16,
    },
});

export default MessageBubble;
