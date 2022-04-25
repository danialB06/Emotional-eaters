import { View, StyleSheet, Text } from "react-native";


export default function ChatScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Chat SCREEN</Text>    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
});