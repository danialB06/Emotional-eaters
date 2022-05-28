import { View, StyleSheet, Text, Button, TextInput } from "react-native";
import { useState } from "react";
import * as SecureStore from "expo-secure-store";
import DateTimePicker from "@react-native-community/datetimepicker";
import { TouchableOpacity } from "react-native";
import { useLogin, fetchUser } from "../../context/LoginProvider"

export default function SignUpScreen({ navigation }) {
  const { setIsLoggedIn } = useLogin();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [showDatePicker, setShowDatePciker] = useState(false);


  //saves the encrypted key value pair in keychain/keystore system
  async function saveS(key, value){
    await SecureStore.setItemAsync(key, value);
  }
  //for the date picker
  const onChangeDate = (event, selectedDate) => {
    if(!selectedDate){
      setDateOfBirth(new Date());
      setShowDatePciker(false);
    }else{
    const currentDate = selectedDate;
    setShowDatePciker(false);
    setDateOfBirth(currentDate);
    }
  };

  const onCancelDate = () =>{
    setDateOfBirth(new Date());
    setShowDatePciker(false);
  }

  const handleDatePcikerPress = () => {
    setShowDatePciker(true);
  };


  function handleSignUp() {
    const dateOfBrithInStringFormat = dateOfBirth.toLocaleDateString();
      saveS("username", username);
      saveS("password", password);
      saveS("email", email);
      saveS("dateOfBirth", dateOfBrithInStringFormat);
      setIsLoggedIn(true); 
  }

  return (
    <View style={styles.container}>
      <Text>SignUpScreen </Text>
      <TextInput
        placeholder="Username"
        style={styles.input}
        onChangeText={(val) => setUsername(val)}
      />
      <TextInput
        placeholder="Password"
        style={styles.input}
        secureTextEntry={true}
        onChangeText={(val) => setPassword(val)}
      />
      <TextInput
        placeholder="Email"
        style={styles.input}
        onChangeText={(val) => setEmail(val)}
      />
      <View>
        <TouchableOpacity style={styles.input} onPress={handleDatePcikerPress}>
          <Text style={styles.textDate}>
            Date of birth: {dateOfBirth.toLocaleDateString()}
          </Text>
        </TouchableOpacity>
      </View>
      <Button title={"Login"} onPress={async () => handleSignUp()} />
      {showDatePicker && (
        <DateTimePicker
          testID="dateTimePicker"
          value={dateOfBirth}
          mode={"date"}
          is24Hour={true}
          onChange={onChangeDate}
          onCancel={onCancelDate}
        />
      )}
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
  input: {
    width: 200,
    height: 44,
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 10,
  },
  textDate: {
    textAlign: "left",
    width: 230,
    fontSize: 16,
  },
});