import {Component, useState} from 'react';
import { View, Image, StyleSheet, Text, Modal, Pressable } from "react-native";

const MonsterDataFetch = (props) => {
  const [monsterHP, setMonsterHP] = useState(props.MonstHP);
  const [monsterAttk, setMonsterAttk] = useState(props.MonstAttk);
  const [monsterGold, setMonsterGold] = useState(props.MonstGold);

  return(
    <View style={styles.container}>
      <View style={styles.monsterImg} >
        <Image source={require("../../assets/AdventureGame/Monsters/Tartoise.png")}/>
      </View>
      <View style={styles.monsterParamColumn}>
        <View style={styles.monsterParamRow}>
          <Image style={styles.monsterStatIcon} source={require("../../assets/AdventureGame/hpIcon.png")}/>
          <Text style={styles.monsterParamText}>{monsterHP}</Text>
          <Image style={styles.monsterStatIcon} source={require("../../assets/AdventureGame/attkIcon.png")}/>
          <Text style={styles.monsterParamText}>{monsterAttk}</Text>
        </View>
      </View>
    </View>
  )
}

const MonsterData = (props) => {
    return(
     <View>
       <MonsterDataFetch MonstAttk={props.MonstAttk} MonstHP={props.MonstHP}/>
     </View> 
    );
}

export default MonsterData;

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  monsterParamColumn:{
    width: "80%", 
    borderColor: "#000000",
    borderWidth: 2, 
    padding: 15,
    borderRadius: 50,
    backgroundColor: "white",
    margin: "auto",
    top: 30,
  },
  monsterParamRow:{
    flexDirection: "row",
    backgroundColor: "#F3F3F3",
  },
  monsterStatIcon:{
    width: 60,
    height: 60,
    marginRight: 10,
    marginLeft: 15,
  },
  monsterParamText:{
    textAlignVertical: "center",
    fontSize: 35,
  },
  monsterImg:{
    top: 250,
    left: 130,
    position: "absolute",
    width: "100%", 
  },
});