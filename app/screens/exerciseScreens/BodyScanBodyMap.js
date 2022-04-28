import { View, StyleSheet, Text, TouchableOpacity} from "react-native";

export default function BodyScanFirstScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Bodyscan</Text>
      <Text style={styles.exerExpl}>
        This exercise aims to make you more aware of what you feel in your body. It also makes you think about the role emotions can play in this. The great thing is that our body can tell us a lot about the emotions we experience. 
        {"\n"}{"\n"}
        Press the button to start exercise.
      </Text>
      <TouchableOpacity style={styles.startButton}>
          <Text style={styles.startText}>
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
  exerExpl:{
    padding: 40,
    marginTop: "15%",
    marginBottom: "20%",
    backgroundColor: "#F3F3F3",
    borderRadius: 50,
    borderColor: "#000000",
    borderWidth: 2,
    fontSize: 15,
    width: "90%",
    fontSize: 20,
  },
  startButton:{
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
  startText:{
    fontSize: 20,
  }
});
