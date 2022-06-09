import { View, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native";
import { ScrollView } from "react-native";
import React, { useEffect } from "react";
import { Text } from "react-native";
import DiaryEntryButton from "./components/DiaryEntryButton";

export default function DiaryScreen({ navigation }) {
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
      <Text style={styles.title}>Diary</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.imageContainer}
          // onPress={() => navigation.navigate("NewGoalScreen")}
        >
          <Image
            style={styles.filterImage}
            source={require("../../assets/diaryscreen/filter.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.imageContainer}
          onPress={() => navigation.navigate("NewEntryScreen")}
        >
          <Image
            style={styles.addImage}
            source={require("../../assets/homescreen/goalsscreen/add.png")}
          />
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.entries}>
        <DiaryEntryButton
          name="Body Scan"
          date="13-04-2022"
          onPress={() => {
            navigation.navigate("ExerciseResultsScreen", {
              title: "Body Scan",
              date: "13-04-2022",
              description:
                "Today I had a weird feeling in my stomach and my legs and my right arm felt tired a lot. I did also experience headache. Besides that all other body parts felt okay.",
            });
          }}
        />
        <DiaryEntryButton
          name="Positive Reframing"
          date="13-04-2022"
          onPress={() => {
            navigation.navigate("ExerciseResultsScreen", {
              title: "Positive Reframing",
              date: "13-04-2022",
            });
          }}
        />
        <DiaryEntryButton
          name="Opposite Action"
          date="12-04-2022"
          onPress={() => {
            navigation.navigate("ExerciseResultsScreen", {
              title: "Opposite Action",
              date: "12-04-2022",
            });
          }}
        />
        <DiaryEntryButton
          name="Body Scan"
          date="09-04-2022"
          onPress={() => {
            navigation.navigate("ExerciseResultsScreen", {
              title: "Body Scan",
              date: "09-04-2022",
            });
          }}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  addImage: {
    width: 30,
    height: 30,
    marginHorizontal: 20,
    marginTop: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "#B8D5EC",
    paddingTop: 20,
    paddingBottom: 50,
    justifyContent: "center",
  },
  entries: {},
  imageContainer: {
    width: 70,
    alignSelf: "flex-end",
  },
  filterImage: {
    width: 20,
    height: 20,
    marginHorizontal: 20,
    marginTop: 20,
    alignSelf: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
  },
});
