import { useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../feautures/user/userSlice";
import { Ionicons } from '@expo/vector-icons';

const ProfileScreen = () => {
    const user = useSelector((state) => state.user);
    const [username, setUsername] = useState(user.username || "");
    const [description, setDescription] = useState(user.description || "");
    const [profileImage, setProfileImage] = useState(user.profileImage || "");
    const [isEditing, setIsEditing] = useState(false);
    const dispatch = useDispatch();

    const handleSave = () => {
     if(!isEditing) {
        setIsEditing(true);
     } else {
        dispatch(setUser({ ...user, username, description, profileImage }));
        setIsEditing(false);
     }
       
    };

    return (
        <View style={styles.container}>
          <View style={styles.card}>
            <TouchableOpacity style={styles.editIcon} onPress={() => handleSave()}>
              <Ionicons name={isEditing ? "checkmark-circle-outline" : "create-outline"} size={24} color="black" />
            </TouchableOpacity>
            <Image source={{ uri: user.profileImage || 'https://via.placeholder.com/150' }} style={styles.profileImage} />
            {isEditing ? (
              <>
                <TextInput
                  style={styles.input}
                  placeholder="Nombre"
                  onChangeText={setUsername}
                  value={username}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Descripción"
                  onChangeText={setDescription}
                  value={description}
                  multiline
                />
              </>
            ) : (
              <>
                <Text style={styles.username}>{username}</Text>
                <Text style={styles.description}>{description}</Text>
              </>
            )}
          </View>
        </View>
      );
    };
    
    export const styles = StyleSheet.create({
      container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f0f0f0",
      },
      card: {
        backgroundColor: "#fff",
        borderRadius: 10,
        padding: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 5,
        width: '90%',
      },
      profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 20,
      },
      input: {
        width: "100%",
        padding: 10,
        borderColor: "#ccc",
        borderWidth: 1,
        borderRadius: 5,
        marginBottom: 10,
        textAlign: 'center'
      },
      username: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 10,
      },
      description: {
        fontSize: 16,
        color: "#666",
        textAlign: "center",
      },
      saveButton: {
        backgroundColor: "#6200ea",
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
      },
      saveButtonText: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
      },
      editIcon: {
        position: "absolute",
        top: 10,
        right: 10,
      },
    });

export default ProfileScreen