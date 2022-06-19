import { View, StyleSheet, Text, Button,Image , TouchableOpacity, TextInput } from "react-native";
import { useState } from "react";
import * as SecureStore from "expo-secure-store";


export default function SignInScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  //retrives data from secureStore 
  async function getValueFor() {

      alert("You dont have an account yet");
     // <Button title={"Login"} style={styles.button} onPress={() => getValueFor()} />
    
  }

  return (
    <View style={styles.container}>
      
      <Image source={require('./../../assets/logo.png')}
      style={styles.image} />
       
      <Text>Sign In </Text>
      <TextInput placeholder="Username" style={styles.input} />
      <TextInput placeholder="Password" secureTextEntry={true} style={styles.input} />
     
      <TouchableOpacity
        style={styles.button}
        onPress={() => getValueFor()}
      >
        <View style={styles.button}>
          <Text style={styles.buttonsText}>Login</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity  onPress={() => navigation.navigate("Sign up")} >
        <Text>Dont have an account yet? press here</Text>
      </TouchableOpacity>
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
  image: {
    width: 250,
    height: 250,
    marginBottom: 100,
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
  }

});
