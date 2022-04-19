import { View, StyleSheet, Text } from "react-native";

export default function DiaryScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>DiaryScreen </Text>
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
