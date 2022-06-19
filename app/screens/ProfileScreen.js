import { View, StyleSheet, Text, Button } from "react-native";
import { useEffect, useState } from "react";
import * as SecureStore from "expo-secure-store";
import { useLogin, fetchUser } from "../context/LoginProvider";
import { Image } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function ProfileScreen({ navigation }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const { setIsLoggedIn } = useLogin();

  //retrives data from secureStore
  async function loadUserData() {
    let tempUsername = await SecureStore.getItemAsync("username");
    if (tempUsername) {
      setUsername(tempUsername);
    }
    let tempEmail = await SecureStore.getItemAsync("email");
    if (tempEmail) {
      setEmail(tempEmail);
    } else {
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
  });

  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <FontAwesome
          name="user"
          size={150}
          color="black"
          style={{ alignSelf: "center" }}
        />
      </View>

      <View style={styles.usercircle}>
        <Text> Basic User </Text>
      </View>

      <View style={styles.joined}>
        <Text> Joined 13-04-2022 </Text>
      </View>
      <View style={styles.profileInfo}>
        {/* <Text style={styles.test}>John Doe</Text> */}
        <Text style={styles.username}>Username: {username} </Text>
        <Text style={styles.email}>Email: {email} </Text>
        <Text style={styles.dateOfBirth}>Date of birth: {dateOfBirth}</Text>
      </View>
      <View style={{ padding: 80 }}>
        <Button onPress={() => signout()} title="Sign Out" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B8D5EC",
    alignItems: "center",
  },
  profileInfo: {
    marginHorizontal: 15,
    alignContent: "flex-start",
  },
  test: {
    color: "black",
    fontSize: 30,
    paddingTop: 10,
  },
  circle: {
    backgroundColor: "#FFF",
    borderRadius: 1000,
    borderWidth: 1,
    borderColor: "#000000",
    width: 200,
    marginTop: 40,
    height: 200,
    alignContent: "center",
    justifyContent: "center",
  },
  usercircle: {
    borderRadius: 50,
    backgroundColor: "white",
    borderColor: "#000000",
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",

    position: "absolute",
    width: 99,
    height: 22,
    left: 145,
    top: 220,
  },

  joined: {
    width: 165,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  username: {
    color: "black",
    fontSize: 20,
    paddingTop: 10,
  },
  email: {
    color: "black",
    fontSize: 20,
    paddingTop: 10,
  },

  dateOfBirth: {
    color: "black",
    fontSize: 20,
    paddingTop: 10,
    paddingRight: 120,
  },
});
