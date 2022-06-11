import { View, StyleSheet, Text, Button, Image } from "react-native";
import { TextInput } from "react-native";
import { Picker } from '@react-native-picker/picker';
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

export default function NewAlarmScreen({ navigation }) {

  const [selectedMonth, setSelectedMonth] = useState(0);
  const [selectedDate, setSelectedDate] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>New Notification</Text>
    <View style={styles.TitleContainer}>
      <TextInput
        style={styles.alarmTitle}
        placeholder="Exercise"
        keyboardType="default"
        returnKeyType="done"
      />
    </View>

    <View>
      <Picker
      selectedValue={selectedMonth}
      onValueChange={(itemValue, itemIndex) =>
        setSelectedMonth(itemValue)
      }>
      <Picker.Item label="January" value="Jan" />
      <Picker.Item label="February" value="Feb" />
      <Picker.Item label="March" value="Mar" />
      <Picker.Item label="April" value="Apr" />
      <Picker.Item label="May" value="May" />
      <Picker.Item label="June" value="Jun" />
      <Picker.Item label="July" value="Jul" />
      <Picker.Item label="August" value="Aug" />
      <Picker.Item label="September" value="Sep" />
      <Picker.Item label="October" value="Oct" />
      <Picker.Item label="November" value="Nov" />
      <Picker.Item label="December" value="Dec" />

      </Picker>
    </View>

    <View>
      <Picker
      selectedValue={selectedDate}
      onValueChange={(itemValue, itemIndex) =>
        setSelectedDate(itemValue)
      }>
      <Picker.Item label="1" value="1" />
      <Picker.Item label="2" value="2" />
      <Picker.Item label="3" value="3" />
      <Picker.Item label="4" value="4" />
      <Picker.Item label="5" value="5" />
      <Picker.Item label="6" value="6" />
      <Picker.Item label="7" value="7" />
      <Picker.Item label="8" value="8" />
      <Picker.Item label="9" value="9" />
      <Picker.Item label="10" value="10" />
      <Picker.Item label="11" value="11" />
      <Picker.Item label="12" value="12" />
      <Picker.Item label="13" value="13" />
      <Picker.Item label="14" value="14" />
      <Picker.Item label="15" value="15" />
      <Picker.Item label="16" value="16" />
      <Picker.Item label="17" value="17" />
      <Picker.Item label="18" value="18" />
      <Picker.Item label="19" value="19" />
      <Picker.Item label="20" value="20" />
      <Picker.Item label="21" value="21" />
      <Picker.Item label="22" value="22" />
      <Picker.Item label="23" value="23" />
      <Picker.Item label="24" value="24" />
      <Picker.Item label="25" value="25" />
      <Picker.Item label="26" value="26" />
      <Picker.Item label="27" value="27" />
      <Picker.Item label="28" value="28" />
      <Picker.Item label="29" value="29" />
      <Picker.Item label="30" value="30" />
      <Picker.Item label="31" value="31" />

      </Picker>
    </View>
    <View style={styles.buttonContainer}>
        <Button
          title="Cancel"
          color="#2C6975"
          onPress={() => navigation.navigate("AlarmsScreen")}
        />
        <Button
          title="Save"
          color="#2C6975"
          onPress={() => navigation.navigate("AlarmsScreen")}
        />
      </View>

    </View>
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
  TitleContainer: {
    marginTop: 30,
    marginHorizontal: 20,
    width: "80%",
    height: 50,
    borderRadius: 50,
    borderColor: "#2C6975",
    borderWidth: 1,
    justifyContent: "center",
    backgroundColor: "white",
  },
  alarmTitle: {
    marginLeft: 20,
    fontSize: 18,
  },

});
