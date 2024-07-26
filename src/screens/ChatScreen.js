import { FlatList, StyleSheet, Text, View } from "react-native";
import MessageBubble from "../components/Chat/MessageBubble";
import InputBox from "../components/Chat/InputBox";
import { useSelector } from "react-redux";

const ChatScreen = () => {
  const messages = useSelector((state) => state.messages); // useSelector permite obtener el estado del store en tiempo real
  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={({ item }) => <MessageBubble message={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
      <InputBox />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ChatScreen;
