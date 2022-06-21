import { View, StyleSheet, Image, Text, Alert } from "react-native";
import { TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import BodyscanAnswer from "./components/BodyscanAnswer";
import OppositeActionAnswer from "./components/OppositeActionAnswer";
import PositiveReframingAnswer from "./components/PositiveReframingAnswer.js";
import { doc, getDoc, deleteDoc, setDoc } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db } from "../../api/Firebase";
import { LinearGradient } from "expo-linear-gradient";

export default function ExerciseResultsScreen({ navigation, route }) {
  const { title } = route.params;
  const { date } = route.params;
  const { id } = route.params;
  const { description } = route.params;
  const { myKey } = route.params;

  const DeleteResult = () => {
    const result = doc(db, "diary", myKey);

    deleteDoc(result);
    Alert.alert("Exercise entry was deleted");
    navigation.popToTop();
  };

  return (
    <LinearGradient colors={["#FFFFFF", "#CDE0C9"]} style={styles.container}>
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.date}>{date}</Text>
        </View>
        <TouchableOpacity /*onPress={DeleteResult}*/>
          <Image
            style={styles.deleteButton}
            source={require("../../assets/homescreen/goalsscreen/delete.png")}
          />
        </TouchableOpacity>
      </View>

      {title == "Opposite Action" ? (
        <OppositeActionAnswer myKey={id} description={description} />
      ) : title == "Positive Reframing" ? (
        <PositiveReframingAnswer myKey={id} description={description} />
      ) : (
        <BodyscanAnswer myKey={id} description={description} />
      )}
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  answersContainer: {
    marginTop: 20,
    marginHorizontal: 20,
    height: "90%",
    width: 335,
  },
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
  question: {
    fontSize: 15,
    paddingRight: "5%",
    paddingLeft: "5%",
    paddingTop: "3%",
    paddingBottom: "3%",
    fontWeight: "bold",
    textAlign: "justify",
  },
  questionAnswer: {
    backgroundColor: "#FFFF",
    borderRadius: 15,
    borderColor: "#000000",
    borderWidth: 1,
    width: "100%",
    padding: 10,
  },
  titleContainer: {
    marginTop: 10,
    // marginHorizontal: 20,
    height: 50,
    borderRadius: 50,
    // borderColor: "#063559",
    // borderWidth: 1,
    // flexDirection: "row",
    // backgroundColor: "white",
    alignContent: "flex-start",
    justifyContent: "space-between",
    padding: 10,
  },
  title: {
    marginLeft: 20,
    fontSize: 22,
    fontWeight: "bold",
    alignSelf: "flex-start",
  },
  date: {
    alignSelf: "flex-start",
    marginLeft: 20,
    color: "#787878",
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
