import { View, StyleSheet, Text, Button } from "react-native";
import { useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";
import { useLogin, fetchUser } from "../context/LoginProvider";



export default function ProfileScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const { setIsLoggedIn } = useLogin();

  //retrives data from secureStore
  async function loadUserData() {
    let tempUsername  = await SecureStore.getItemAsync("username");
    if(tempUsername){
      setUsername(tempUsername);
    }
    let tempEmail = await SecureStore.getItemAsync("email");
    if (tempEmail) {
      setEmail(tempEmail);
    }else{

    }
    let tempDateOfBrith = await SecureStore.getItemAsync("dateOfBirth");
    if (tempDateOfBrith) {
      setDateOfBirth(tempDateOfBrith);
    }
  }
  
  //deletes the userdata from divces secure storage
  async function signout() {
    SecureStore.deleteItemAsync("username");
    SecureStore.deleteItemAsync("password");
    SecureStore.deleteItemAsync("email");
    SecureStore.deleteItemAsync("dateOfBirth");
    setIsLoggedIn(false);
  }

   useEffect(() => {
    loadUserData();
  })

  return (
    <View style={styles.container}>
      <Text>ProfileScreen</Text>
      <Text>Username: {username}</Text>
      <Text>Email:  {email}</Text>
      <Text>dateOfBirth:  {dateOfBirth}</Text>
      <Button onPress={() => signout()}  title="signout"/>
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
});
