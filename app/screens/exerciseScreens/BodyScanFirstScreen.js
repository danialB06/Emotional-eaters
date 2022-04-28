import { View, StyleSheet, Text, TouchableOpacity, Animated} from "react-native";

export default function BodyScanFirstScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Bodyscan</Text>

      <TouchableOpacity style={styles.submitButton}>
          <Text style={styles.submitText}>
            Start
          </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B9D5EB",
    alignItems: "center",
  },
  pageTitle:{
    fontSize: 40,
    paddingTop: "10%",
  },
  submitButton:{
    alignItems: "center",
    backgroundColor: "#F3F3F3",
    padding: 20,
    width: 150,
    borderRadius: 100,
    borderColor: "#000000",
    borderWidth: 2,
    bottom: "5%",
    position: "absolute",
  },
  submitText:{
    fontSize: 20,
  }
});
