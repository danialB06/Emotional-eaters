import { View, StyleSheet, Text, Button, Image } from "react-native";
import { TextInput } from "react-native";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { LinearGradient } from "expo-linear-gradient";


export default function NewAlarmScreen({ navigation }) {

  const [selectedMonth, setSelectedMonth] = useState(0);
  const [selectedDate, setSelectedDate] = useState(0);

  return (
    <LinearGradient colors={["#FFFFFF", "#CDE0C9"]} style={styles.container}>
    <View style={styles.container}>
      <Text style={styles.title}>New Alarm</Text>

    <View style={styles.TitleContainer}>
      <TextInput
        style={styles.alarmTitle}
        placeholder="Exercise"
        keyboardType="default"
        returnKeyType="done"
      />
    </View>
    <View style={styles.TitleContainer}>
      <TextInput
        style={styles.alarmTitle}
        placeholder="Date"
        keyboardType="default"
        returnKeyType="done"
      />
    </View>
    <View style={styles.TitleContainer}>
      <TextInput
        style={styles.alarmTitle}
        placeholder="Time"
        keyboardType="default"
        returnKeyType="done"
      />
    </View>

    
    

    
    <View style={styles.buttonContainer}>
        <Button
          title="Cancel"
          color="#063559"
          onPress={() => navigation.navigate("AlarmsScreen")}
        />
        <Button
        color="##CDE0C9"
        title="         "
        />
        <Button
        title="  Save  "
        color="#063559"
        onPress={() => navigation.navigate("AlarmsScreen")}/>
    </View>

    </View>
    </LinearGradient>
  );
  
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CDE0C9",
    alignItems: "center",
    justifyContent: "center",
  },

 buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 20,
  },

  title: {
    fontWeight: "bold",
    color: "#2C6975",
    fontSize: 30,
  },

pickers: {
  fontWeight: "bold",
    textcolor: "black",
    textAlign: "center",
    fontSize: 15,
    marginTop: 30,
    width: "100%",
    height: 50,
    borderRadius: 20,
    borderColor: "#2C6975",
    borderWidth: 1,
    justifyContent: "center",
    backgroundColor: "white",
      },
TitleContainer: {
    marginTop: 10,
    marginHorizontal: 20,
    width: "50%",
    textAlign: "center",
    height: 50,
    borderRadius: 20,
    borderColor: "#2C6975",
    borderWidth: 1,
    justifyContent: "center",
    
    backgroundColor: "white",
  },   
  alarmTitle: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "bold",
    textcolor: "black",
  },   
});
