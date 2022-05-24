import { View, StyleSheet, Text, Button, TouchableOpacity, TextInput } from "react-native";
import { useState } from "react";
import * as SecureStore from "expo-secure-store";


export default function SignInScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  //retrives data from secureStore 
  async function getValueFor() {
    let result = await SecureStore.getItemAsync("username");
    if (result) {
      setUsername(result);
      alert(username);
    } else {
      alert("No values stored under that key.");
    }
  } 

  return (
    <View style={styles.container}>
      <Text>SignInScreen {username}</Text>
      <TextInput placeholder="Username" style={styles.input} />
      <TextInput placeholder="Password" secureTextEntry={true} style={styles.input} />
      <Button title={"Login"} style={styles.input} onPress={() => getValueFor()}/>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("SignUpScreen")} >
        <Text>Dont have an account yet? press here</Text>
      </TouchableOpacity>
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
});
