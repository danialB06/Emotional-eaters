import { View, StyleSheet, Text, Button, Image } from "react-native";
import { TouchableOpacity } from "react-native";

export default function DiaryEntryButton({ myKey, name, date, onPress }) {
  return (
    <TouchableOpacity
      key={myKey}
      style={styles.goalContainer}
      onPress={onPress}
    >
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.date}>{date}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  goalContainer: {
    marginTop: 10,
    marginHorizontal: 20,
    height: 50,
    borderRadius: 50,
    borderColor: "#063559",
    borderWidth: 1,
    flexDirection: "row",
    backgroundColor: "white",
    alignContent: "center",
    justifyContent: "space-between",
    padding: 10,
  },
  date: {
    alignSelf: "center",
    color: "#787878",
  },
  title: {
    marginLeft: 20,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "left",
  },
});
