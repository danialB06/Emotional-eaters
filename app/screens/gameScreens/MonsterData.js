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
    paddingLeft: 10,
    paddingTop: 15,
    paddingBottom: 15,
    borderRadius: 50,
    paddingRight: 30,
    backgroundColor: "#2C6975",
    margin: "auto",
    top: 30,
  },
  monsterParamRow:{
    flexDirection: "row",
    backgroundColor: "#2C6975",
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
    color: "white",
  },
  monsterImg:{
    top: 260,
    left: 97,
    position: "absolute",
    width: "100%", 
  },
});