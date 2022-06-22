//import { View, Image, StyleSheet, Text, Modal, Pressable, Scrollview, SafeAreaView } from "react-native";
import {Component, useState, useEffect} from 'react';
import { View, StyleSheet, Text, Image, ImageBackground, Pressable, Dimensions, Modal} from 'react-native';
import MonsterData from './MonsterData';
import AvatarData, { AvatarBattleParam } from './AvatarData';

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

const battleDialogue = new Array(
  "Tartoise wants to fight!", 
  "You attack the Tartoise!",
  "CRITICAL HIT!",
  "The tartoise is slain!",
  "You found a pair of red wings!",
  "You found a pair of black wings!",
  "You found a pair of pink wings!",
  "You found a pair of white wings!",
)

const DrawActors = (props) => {
  //Avatar Location
  const [playerProgress, setPlayerProgress] = useState(0);
  const [playerX, setPlayerX] = useState(0);
  const [playerY, setPlayerY] = useState(0);

  //Drawing map nodes
  const [nodeImg, setNodeImg] = useState(require("../../assets/AdventureGame/MapNodeImages/nodeDefault.png"));
  const mapItems = mapNodeData.map((mapNodeData, idkey)=>
    <View key={idkey} style={{zIndex: -4, zIndex: mapNodeData[1], top: mapNodeData[3], left: mapNodeData[2], width: 130, position: "absolute"}}>
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
  const [battleTextProgr, setBattleTextProgr] = useState(0);

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
          { battleTextProgr <= 2 && 
            <MonsterData MonstHP={15} MonstAttk={5}/>
          }
            <Text style={[styles.modalText, {position: "absolute", top: 130 } ]}>
              {battleDialogue[battleTextProgr]}
            </Text>
            <ImageBackground source={require("./../../assets/AdventureGame/MapNodeImages/battleBG.png")} style={{width: "100%", top: 230, height: 300, zIndex: -1, position: "absolute"}}>
              <Image style={[styles.battleAvatar, {top: - 10}]} source={require("../../assets/AdventureGame/avatarBody.png")}/>
            </ImageBackground>

            <View style={[styles.battleBottomUI, {position: "absolute", top: 560, marginLeft: -100}]}>
              <AvatarBattleParam/>
              <View style={[styles.battleOptions]}>
                <Pressable onPress={()=>setBattleTextProgr(battleTextProgr+1)} style={styles.modalButton}>
                  <Text style={{color:"#2C6975", fontSize: 20, width: 150}}>Fight!</Text>
                </Pressable>
                <Pressable onPress={() => setbattleModalShow(!battleModalShow)} style={styles.modalButton}>
                  <Text style={{color:"#2C6975", fontSize: 20, width: 150}}>Run</Text>
                </Pressable>
              </View> 
            </View>
          </View>
      </Modal>

      <Image style={{position: "absolute", zIndex: 200, top: playerY, left: playerX }} source={require("../../assets/AdventureGame/avatarBody.png")}/>
      {mapItems}
    </View>
  )
}

const BattleScene = (props) => {
  //Not realized for demo. No time.
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
    padding: 20,
    borderRadius: 50,
    width: 100,
    textAlign: "center",
    backgroundColor: "#CDE0C9",
    marginBottom: "10%"
  },
  modalText:{
    top: 50,
    textAlign: "center", 
    padding: 10,
    borderRadius: 20,
    width: "80%",
    color: "white", 
    fontSize: 20,
    backgroundColor: "#2C6975",
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
  battleBottomUI:{
    flexDirection: "row",
    width: "90%",
    top: 160,
    marginLeft: "-15%",
  },
  battleOptions:{
    marginLeft: "-40%",
  },
  battleBG:{
    width: 1500,
    flex: 1,
    color: "white",
    zIndex: -200,
  }
})

