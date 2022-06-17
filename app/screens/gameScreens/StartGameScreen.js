import { View, StyleSheet, Text, Pressable, ImageBackground } from "react-native";
import { Component, useState } from 'react';
import AvatarData, {AvatarDressed, AvatarParamFetch} from './AvatarData';
import MonsterData from './MonsterData';

//Game Elements
export default function StartGameScreen({ navigation }) {

  const [playedBefore, setPlayedBefore] = useState(true);
  const [userID, setUserId] = useState(1);

  if(playedBefore){
    return(
      <View>
        <ImageBackground source={require("../../assets/AdventureGame/gameBG2.png")} style={{height: "100%", alignContent:"center"}}>
          <Text style={styles.welcomeBack}>
            Welcome back!
          </Text>
          <AvatarParamFetch/>
          <AvatarDressed/>
          <View style={{justifyContent: "center", alignItems: "center", flexDirection: "row", width: "60%", marginLeft: "20%"}}>
            <Pressable  style={styles.startButton} onPress={()=> navigation.navigate("MapGameScreen")}>
              <Text style={styles.startText}>
                Resume
              </Text>
            </Pressable >
            <Pressable  style={styles.startButton} onPress={()=> navigation.navigate("AvatarCustomizeScreen")}>
              <Text style={styles.startText}>
                Customize
              </Text>
            </Pressable >
          </View>
        </ImageBackground>
      </View>
    );
  }else{
    return(
      <View>
        <ImageBackground source={require("../../assets/AdventureGame/gameBG.png")} style={{height: "100%", alignContent:"center"}}>
          <View style={{ width: "80%", marginLeft: "10%", top: "65%"}}>
            <View style={styles.Expl}>
              <Text style={styles.ExplText}>
                You've never played the game before!
              </Text>
            </View>
            <View style={{marginLeft: "25%", top: 20}}>       
              <Pressable  style={styles.startButton} onPress={()=> navigation.navigate("MapGameScreen")}>
                <Text style={styles.startText}>
                  Start Adventure!
                </Text>
              </Pressable >
            </View>   
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  startButton:{
    alignContent: "center",
    backgroundColor: "#2C6975",
    padding: 15,
    width: 140,
    borderRadius: 100,
    margin: 10,

  },
  Expl:{
    backgroundColor: "#E0EDCE",
    padding: 20,
    height: 100,
    borderRadius: 30,
  },
  ExplText:{
    color: "#2C6975",
    fontSize: 20,
    textAlign: "center",
  }, 
  startText:{
    fontSize: 20,
    textAlign: "center",
    color: "#CDE0C9",
  },
  welcomeBack:{
    fontSize: 40,
    padding: 20,
    textAlign: "center",
  },
});