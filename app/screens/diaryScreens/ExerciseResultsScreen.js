import { View, StyleSheet, Image, Text } from "react-native";
import { TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

export default function ExerciseResultsScreen({ route }) {
  const { title } = route.params;
  const { date } = route.params;
  const { description } = route.params;

  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Image
          style={styles.deleteButton}
          source={require("../../assets/homescreen/goalsscreen/delete.png")}
        />
      </TouchableOpacity>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
      <ScrollView snapToInterval={200} decelerationRate="fast" horizontal>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={require("../../assets//dummy.jpg")}
          />
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>{description}</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "#B8D5EC",
  },
  deleteButton: {
    width: 35,
    height: 35,
    marginHorizontal: 20,
    marginTop: 20,
    alignSelf: "flex-end",
  },
  titleContainer: {
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
  title: {
    marginLeft: 20,
    fontSize: 18,
    fontWeight: "bold",
    alignSelf: "center",
  },
  date: {
    alignSelf: "center",
    color: "#787878",
  },
  descriptionContainer: {
    marginTop: 20,
    marginHorizontal: 20,
    height: "90%",
    width: 335,
    borderRadius: 20,
    borderColor: "#063559",
    borderWidth: 1,
    justifyContent: "flex-start",
    backgroundColor: "white",
  },
  description: {
    paddingTop: 15,
    marginLeft: 20,
    fontSize: 18,
    textAlign: "justify",
    marginRight: 15,
  },
  image: {
    height: "100%",
    width: 270,
    alignSelf: "center",
  },
  imageContainer: {
    marginTop: 20,
    marginHorizontal: 20,
    height: "90%",
    width: 335,
    borderRadius: 20,
    borderColor: "#063559",
    borderWidth: 1,
    justifyContent: "center",
    alignContent: "center",
  },
});
