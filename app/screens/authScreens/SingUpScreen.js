import { View, StyleSheet, Text, Button,Image, TextInput } from "react-native";
import { useState } from "react";
import * as SecureStore from "expo-secure-store";
import DateTimePicker from "@react-native-community/datetimepicker";
import { TouchableOpacity } from "react-native";
import { useLogin, fetchUser } from "../../context/LoginProvider";
import { auth } from "../../api/Firebase";

export default function SignUpScreen({ navigation }) {
  const { setIsLoggedIn } = useLogin();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState(new Date());
  const [showDatePicker, setShowDatePciker] = useState(false);
  //saves the encrypted key value pair in keychain/keystore system
  async function saveS(key, value) {
    await SecureStore.setItemAsync(key, value);
  }
  //for the date picker
  const onChangeDate = (event, selectedDate) => {
    if (!selectedDate) {
      setDateOfBirth(new Date());
      setShowDatePciker(false);
    } else {
      const currentDate = selectedDate;
      setShowDatePciker(false);
      setDateOfBirth(currentDate);
    }
  };
  const onCancelDate = () => {
    setDateOfBirth(new Date());
    setShowDatePciker(false);
  };
  const handleDatePcikerPress = () => {
    setShowDatePciker(true);
  };

  function handleSignUp() {
    if(!username){
      alert("username is empty");
    }else{

    
    const dateOfBrithInStringFormat = dateOfBirth.toLocaleDateString();
    saveS("username", username);
    saveS("password", password);
    saveS("email", email);
    saveS("dateOfBirth", dateOfBrithInStringFormat);
    handleSignUpOnline();
    }
  }

  async function handleSignUpOnline() {
    console.log(email);
    auth
      .createUserWithEmailAndPassword(email.trim(), password)
      .then((userCredentials) => {
        userCredentials.user;
        setIsLoggedIn("true");
      })
      .catch((error) => alert(error.message));
  }

  return (
    <View style={styles.container}>
            <Image source={require('./../../assets/logo.png')}
      style={styles.image} />
      <Text>Create an account </Text>
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
      <TouchableOpacity
        style={styles.button}
        onPress={() =>handleSignUp()}
      >
        <View style={styles.button}>
          <Text style={styles.buttonsText}>Sign up</Text>
        </View>
      </TouchableOpacity>
     
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
    backgroundColor: "#CDE0C9",
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
  button: {
    backgroundColor: "#2C6975",
    flexDirection: "row",
    borderRadius: 50,
    alignContent: "center",
    justifyContent: "center",
    width: 200
  },
  buttonsText: {
    color: "white",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
    padding: 10,
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: 30,
  }
});
