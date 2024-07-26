import React from 'react';
import { Button, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import { useDispatch } from 'react-redux';
import { clearUser } from '../feautures/user/userSlice';

const HomeScreen = ({ navigation }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(clearUser());
    navigation.navigate('Login');
  }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>EchoChat</Text>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Chat')}
            >
                <Ionicons name="chatbubbles-outline" size={24} color="white" />
                <Text style={styles.buttonText}>Ir al Chat</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Perfil')}
            >
                <Ionicons name="person-outline" size={24} color="white" />
                <Text style={styles.buttonText}>Perfil</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.button}
                onPress={() => handleLogout()}
            >
                <Ionicons name="settings-outline" size={24} color="white" />
                <Text style={styles.buttonText}>Cerrar Sesión</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        padding: 20,
    },
    title: {
        fontSize: 28,
        marginBottom: 20,
        fontWeight: 'bold',
        color: '#333',
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#6200ea',
        paddingVertical: 12,
        paddingHorizontal: 24,
        borderRadius: 8,
        marginVertical: 10,
        width: '100%',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        marginLeft: 10,
    },
});

export default HomeScreen;
