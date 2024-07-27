// src/screens/ChatScreen.js
import { FlatList, StyleSheet, Text, View } from "react-native";
import MessageBubble from "../components/Chat/MessageBubble";
import InputBox from "../components/Chat/InputBox";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setChatUsers, setCurrentChat, updateLastMessage } from "../feautures/chatUsers/chatUsersSlice";
import UsersItem from "../components/Chat/UsersItem";
import { useRoute } from "@react-navigation/native";
import { addMessage } from "../feautures/messages/messagesSlice";

const ChatScreen = () => {
  const dispatch = useDispatch();
  const route = useRoute();
  const { userId } = route.params || {};

  const messages = useSelector((state) => state.messages[userId] || []);
  const chatUsers = useSelector((state) => state.chatUsers.chatUsers);
  const currentChat = useSelector((state) => state.chatUsers.currentChat);

  useEffect(() => {
    const fetchUsers = async () => {
      const users = [
        { id: 1, name: "John", lastMessage: "Me llamo John", profileImage: "https://i.pravatar.cc/300" },
        { id: 2, name: "Jane", lastMessage: "Me llamo Jane", profileImage: "https://i.pravatar.cc/100" },
        { id: 3, name: "Bob", lastMessage: "Me llamo Bob", profileImage: "https://i.pravatar.cc/400" },
      ];
      dispatch(setChatUsers(users));
    };
    fetchUsers();
  }, [dispatch]);

  useEffect(() => {
    if (userId && chatUsers.length > 0) {
      const selectedUser = chatUsers.find(user => user.id === userId);
      if (selectedUser) {
        dispatch(setCurrentChat(selectedUser));
      }
    }
  }, [userId, chatUsers, dispatch]);

  const handleSendMessage = (message) => {
    dispatch(addMessage({ userId, message }));
    dispatch(updateLastMessage({ userId, message }));
  };

  return (
    <View style={styles.container}>
      {userId ? (
        <View style={styles.chatContainer}>
          <Text style={styles.title}>Chat con {currentChat?.name}</Text>
          <FlatList 
            data={messages}
            renderItem={({ item }) => <MessageBubble message={item} />}
            keyExtractor={(item) => item.id.toString()}
            inverted
          />
          <InputBox onSendMessage={handleSendMessage} />
        </View>
      ) : (
        <>
          <Text style={styles.title}>Usuarios Registrados</Text>
          <FlatList 
            data={chatUsers}
            renderItem={({ item }) => <UsersItem user={item} />}
            keyExtractor={(item) => item.id.toString()}
          />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  chatContainer: {
    flex: 1,
    padding: 10,
  },
});

export default ChatScreen;
