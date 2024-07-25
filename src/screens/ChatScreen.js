import { StyleSheet, Text, View } from "react-native"
import MessageBubble from "../components/Chat/MessageBubble";
import InputBox from "../components/Chat/InputBox";

const ChatScreen = () => {
    return (
        <View style={styles.container}>
            <Text>ChatScreen</Text>
            <MessageBubble />
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