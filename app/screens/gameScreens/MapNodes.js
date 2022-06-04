//import { View, Image, StyleSheet, Text, Modal, Pressable, Scrollview, SafeAreaView } from "react-native";
import {Component, useState, useEffect} from 'react';
import { View, StyleSheet, Text, Image, ImageBackground, Pressable, Dimensions, Modal} from 'react-native';
import MonsterData from './MonsterData';

export default class MapNodes extends Component{
  render(){
    return (
      <ImageBackground source={require("../../assets/AdventureGame/MapNodeImages/mapBG2.png")} style={styles.imageBG}>
        <DrawActors/>
      </ImageBackground>
    );
  }
}

const mapNodeData = new Array(
  //All mapped to mapBG2.png
  //["category", NodeID, x-coord, y-coord, cleared]
  ["dialogue", 0, 50, 225, false],
  ["battle", 1, 235, 375, false],
  ["shop", 2, 490, 580, false],
  ["battle", 3, 460, 150, false],
  ["shop", 4, 760, 170, false],
  ["shop", 5, 770, 450, false],
  ["dialogue", 6, 1000, 375, false],
  ["battle", 7, 1225, 395, false],
);

const monsterNodeData = new Array(
    // HP, ATK, Gold
    [], //0
    ["Tartoise", 10, 4, 20], 
    [], 
    [14, 2, 30], 
    [20, 1, 15], 
    [18, 3, 24], 
    [],
    [30, 4, 50], 
);

const DrawActors = (props) => {
  //Avatar Location
  const [playerProgress, setPlayerProgress] = useState(0);
  const [playerX, setPlayerX] = useState(0);
  const [playerY, setPlayerY] = useState(0);

  //Drawing map nodes
  const [nodeImg, setNodeImg] = useState(require("../../assets/AdventureGame/MapNodeImages/nodeDefault.png"));
  const mapItems = mapNodeData.map((mapNodeData)=>
    <View style={{zIndex: -4, zIndex: mapNodeData[1], top: mapNodeData[3], left: mapNodeData[2], width: 130, position: "absolute"}}>
      <Pressable onPress={()=>avatarMove(mapNodeData[1])}>
        <Image source={nodeImg}/>
      </Pressable>
    </View>
  );

  //Monster Stats
  const [currentMonster, setcurrentMonster] = useState(0);
  const [monsterNDAttk, setMonsterNDAttk] = useState(0);
  const [monsterNDHP, setMonsterNDHP] = useState(0);
  const [monsterNDGold, setMonsterNDGold] = useState(0);

    
  //Node Scenes Modal
   const [battleModalShow, setbattleModalShow] = useState(false);

  //Avatar Movement
  const avatarMove = (nodeID) => {  
    setPlayerProgress(nodeID);
    setcurrentMonster(1);

    if(mapNodeData[nodeID][0] == "battle"){
      setbattleModalShow(true);
    }else{
      setbattleModalShow(false);
    }
  }

  //Update Avatar location and Monster Stats
  useEffect(()=> {
    setMonsterNDAttk(monsterNodeData[currentMonster][1]);
    setMonsterNDHP(monsterNodeData[currentMonster][2]);
    setMonsterNDGold(monsterNodeData[currentMonster][3]);
    setPlayerX((mapNodeData[playerProgress][2])-20);
    setPlayerY((mapNodeData[playerProgress][3])-240);
  });

  return(
    <View>
      <Modal animationType="slide" transparent={false} visible={battleModalShow} onRequestClose={()=>{setbattleModalShow(!false)}}>
        <View style={styles.modalWindow}>
          <MonsterData MonstHP={monsterNDHP} MonstAttk={monsterNDAttk}/>
          <Text style={styles.modalText}>
            Tartoise wants to fight!
          </Text>
          <Image style={styles.battleAvatar} source={require("../../assets/AdventureGame/avatarBody.png")}/>

          <View style={styles.battleOptions}>
            <Pressable onPress={() => setbattleModalShow(!battleModalShow)} style={styles.modalButton}>
              <Text style={{textAlign: "center", color: "#272A40"}}>Fight</Text>
            </Pressable>
            <Pressable onPress={() => setbattleModalShow(!battleModalShow)} style={styles.modalButton}>
              <Text style={{textAlign: "center", color: "#272A40"}}>Run</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      <Image style={{position: "absolute", zIndex: 200, top: playerY, left: playerX }} source={require("../../assets/AdventureGame/avatarBody.png")}/>
      {mapItems}
    </View>
  )
}

const styles = StyleSheet.create({
  mapText:{
    fontSize: 20,
    color: "red",
  },
  imageBG:{
    width: 1500,
    flex: 1,
    color: "white",
  },
  modalButton:{
    borderColor: "#000000",
    borderWidth: 2, 
    padding: 15,
    borderRadius: 50,
    width: 100,
    textAlign: "center",
    backgroundColor: "#F3F3F3",
    color: "#272A40",
  },
  modalText:{
    textAlign: "center", 
    paddingTop:"20%", 
    color: "white", 
    fontSize: 20,
  },
  battleAvatar:{
    top: 250,
    left: -10,
    position: "absolute",
  },
  modalWindow:{
    backgroundColor: "#272A40",
    height: "100%",
    justifyContent: "flex-start",
    alignItems: "center"
  },
  battleOptions:{
    bottom: 20,
    position: "absolute",
  },
  battleBG:{
    width: 1500,
    flex: 1,
    color: "white",
    zIndex: -200,
  }
})

