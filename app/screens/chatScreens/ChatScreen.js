import { View, StyleSheet, Text, Button, Image } from "react-native";
import { useEffect } from "react";
import { TouchableOpacity } from "react-native";

export default function ChatScreen({ navigation }) {
  // To add the profile Button
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity onPress={() => navigation.navigate("ProfileScreen")}>
          <Image
            style={{ width: 40, height: 40 }}
            source={require("../../assets/profile.png")}
          />
        </TouchableOpacity>
      ),
    });
  });

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
