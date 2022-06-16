import { View, StyleSheet, Image } from "react-native";
import { TouchableOpacity } from "react-native";
import { ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import DiaryEntryButton from "./components/DiaryEntryButton";
import { db } from "../../database/Config";

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
      <Entries navigation={navigation} />
    </View>
  );
}

const Entries = ({ navigation }) => {
  const [loading, setLoading] = useState(true);
  const [entries, setEntries] = useState([]);

  useEffect(() => {
    const getEntriesFromFirebase = [];
    const sub = db
      .collection("diary")
      .orderBy("date", "desc")
      .onSnapshot((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          getEntriesFromFirebase.push({ ...doc.data(), key: doc.id });
        });
        setEntries(getEntriesFromFirebase);
        setLoading(false);
      });

    return () => sub();
  }, []);

  if (loading) {
    return (
      <Text style={{ margin: 20, alignSelf: "center", height: "80%" }}>
        Loading...
      </Text>
    );
  }
  return (
    <ScrollView style={styles.entries}>
      {entries.length > 0 ? (
        entries.map((entry) => (
          <DiaryEntryButton
            key={entry.key}
            name={entry.title}
            date={entry.date}
            onPress={() => {
              navigation.navigate("ExerciseResultsScreen", {
                title: entry.title,
                date: entry.date,
                id: entry.exerciseId,
                myKey: entry.key,
                description: entry.description,
              });
            }}
          />
        ))
      ) : (
        <Text>No Entries</Text>
      )}
    </ScrollView>
  );
};

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
