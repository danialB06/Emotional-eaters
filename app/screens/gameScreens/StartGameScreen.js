import { View, StyleSheet, Text, Pressable } from "react-native";
import { useState } from 'react';
import AvatarData from './AvatarData';
import MonsterData from './MonsterData';

//Game Elements
export default function StartGameScreen({ navigation }) {

  const [playedBefore, setPlayedBefore] = useState(true);
  const [userID, setUserId] = useState(1);

  if(playedBefore){
    return(
      <View>
        <Text style={styles.welcomeBack}>
          Welcome back!
        </Text>
        <AvatarData/>
        <View style={{justifyContent: "center", alignItems: "center", flexDirection: "row", width: "60%", marginLeft: "20%"}}>
          <Pressable  style={styles.startButton} onPress={()=> navigation.navigate("MapGameScreen")}>
            <Text style={styles.startText}>
              Resume
            </Text>
          </Pressable >
          <Pressable  style={styles.startButton} onPress={()=> navigation.navigate("MapGameScreen")}>
            <Text style={styles.startText}>
              Customize
            </Text>
          </Pressable >
        </View>
      </View>
    );
  }else{
    return(
      <View>
        <Text>
          You've never played the game before!
        </Text>
        <Pressable  style={styles.startButton} onPress={()=> navigation.navigate("MapGameScreen")}>
          <Text style={styles.startText}>
            Start Adventure!
          </Text>
      </Pressable >
      </View>
    );
  }
}

const styles = StyleSheet.create({
  startButton:{
    alignContent: "center",
    backgroundColor: "#F3F3F3",
    padding: 15,
    width: 140,
    borderRadius: 100,
    borderColor: "#000000",
    borderWidth: 2,
    margin: 10,

  },
  startText:{
    fontSize: 20,
    textAlign: "center",
  },
  welcomeBack:{
    fontSize: 40,
    padding: 20,
    textAlign: "center",
  },
});