import { StyleSheet, Text, View } from "react-native";

const MessageBubble = () => {
    return (
        <View style={styles.bubble}>
            <Text>Esto es un mensaje</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    bubble: {
      padding: 10,
      backgroundColor: '#e1ffc7',
      borderRadius: 5,
      marginVertical: 5,
    },
  });

export default MessageBubble;