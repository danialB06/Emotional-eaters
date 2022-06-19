import { View, Image, StyleSheet, Text, Modal, Pressable } from "react-native";
import {Component, useState, useEffect} from 'react';

import { doc, getDoc, setDoc, onSnapshot, collection } from 'firebase/firestore';
import { db } from '../../api/Firebase';

//Import custom sets
import { hairOptions } from "./customOptions datasets/HairOptions";
import { bottomOptions } from "./customOptions datasets/BottomOptions";
import { feetOptions } from "./customOptions datasets/FeetOptions";
import { topOptions } from "./customOptions datasets/TopOptions";

const AvatarParamFetch = (props) => {
  //Use userID to fetch Avatar data
  //Code blablabla

  //Store datafetch in currentPlayerAvatar
  const currentPlayerAvatar = {
    avatarName: "Default",
    avatarHP: 20,
    avatarATTK: 20,
    avatarHP: 20,
    avatarGold: 20,
    avatarCharm: 20,
  }

  const [statModalShow, setStatModalShow] = useState(false);
  const modalTextHP = "The avatar is the you in Adventure Land! \n Don't let your avatar be weak!\ Use bodyscans to increase your avatar's HP!\n\n";
  const modalImgHP = require("../../assets/AdventureGame/ModalImages/hpExpl.png");
  const modalTextAttk = "The avatar can cut through negativity as well as you can do! \n You can train your avatar's attack power through opposite actions exercises!";
  const modalImgAttk = require("../../assets/AdventureGame/ModalImages/hpExpl.png"); //will be changed later
  const modalTextGold = "Your avatar earns gold whenever it cuts through negativity! You can buy all kinds of things for your adventure with that gold!";
  const modalImgGold = require("../../assets/AdventureGame/ModalImages/hpExpl.png"); //will be changed later
  const modalTextCharm = "Your avatar's charm can fully express itself once you've gained a lot of experience with the positive reframing exercises. Reframe any situation to your liking to get maximum benefits!";
  const modalImgCharm = require("../../assets/AdventureGame/ModalImages/hpExpl.png"); //will be changed later

  const [modalText, setModalText] = useState(modalTextHP);
  const [modalImg, setModalImg] = useState(modalImgHP);
  return(
    <View style={styles.container}>
      <Modal animationType="slide" transparent={false} visible={statModalShow} onRequestClose={()=>{setStatModalShow(!hpModalShow)}}>
        <View style={styles.modalWindow}>
        <Image source={modalImg} style={{backgroundColor:"white"}}/>
          <Text style={styles.modalText}>
            {modalText}
          </Text>
          <Pressable onPress={() => setStatModalShow(!statModalShow)} style={styles.modalCloseButton}>
            <Text style={{textAlign: "center", color: "#CDE0C9"}}>Close</Text>
          </Pressable>
        </View>
      </Modal>
              
      <View style={styles.avatarParamColumn}>
        <View style={styles.avatarParamRow}>
          <Pressable onPress={() => [
            setModalText(modalTextHP), 
            setModalImg(modalImgHP), 
            setStatModalShow(true),
            ]}
          >
            <Image style={styles.avatarStatIcon} source={require("../../assets/AdventureGame/hpIcon.png")}/>
           </Pressable> 
          <Text style={styles.avatarParamText}>{currentPlayerAvatar.avatarHP} </Text> 
          <Pressable onPress={() => [
            setModalText(modalTextAttk), 
            setModalImg(modalImgAttk), 
            setStatModalShow(true)]}
          >
            <Image style={styles.avatarStatIcon} source={require("../../assets/AdventureGame/attkIcon.png")}/> 
          </Pressable>
          <Text style={styles.avatarParamText}>{currentPlayerAvatar.avatarATTK} </Text>
        </View>
        <View style={styles.avatarParamRow}>
          <Pressable onPress={() => [
            setModalText(modalTextGold), 
            setModalImg(modalImgGold), 
            setStatModalShow(true),
            ]}
          >
            <Image style={styles.avatarStatIcon} source={require("../../assets/AdventureGame/goldIcon.png")}/> 
          </Pressable>
          <Text style={styles.avatarParamText}>{currentPlayerAvatar.avatarGold} </Text>
          <Pressable onPress={() => [
            setModalText(modalTextCharm), 
            setModalImg(modalImgCharm), 
            setStatModalShow(true),
            ]}
          >
            <Image style={styles.avatarStatIcon} source={require("../../assets/AdventureGame/charmIcon.png")}/> 
          </Pressable>
          <Text style={styles.avatarParamText}>{currentPlayerAvatar.avatarCharm} </Text>
        </View>
      </View>
    </View>
  )
}

const AvatarDressed = () => {

  const [ avatarCustomSet, setAvatarCustomSet ] = useState(null);
  
  const getFirebaseCustomSet = doc(db, "AvatarCustomSet", "this should be some userID");
  const ReadCustomSet = () => {
    getDoc(getFirebaseCustomSet)
    .then((snapshot)=>{
      if(snapshot.exists){
        setAvatarCustomSet(snapshot.data())
      }
    })
    .catch((error)=> {
      alert(error.message)
    })
  }

  useEffect(()=> {
    ////THIS SLOWS THE APP DOWN SIGNIFICANTLY, LIKE RUNNING THE LATEST DOOM GAME ON WINDOWS ME
    // onSnapshot(collection(db, "AvatarCustomSet"), ()=> {
    //   ReadCustomSet()
    // });
    ReadCustomSet()
  }, [avatarCustomSet]);

  //Generate images
  const hairItem = hairOptions.map((hairStyle, stylekey)=> {
    return ( 
      <View key={stylekey}>
        {hairStyle.options.map((haircolor, colorkey)=> {
          return(
            <View key={colorkey}>
              {
                avatarCustomSet != null && avatarCustomSet.HairName == haircolor.name &&
                <Image source={haircolor.image} style={[styles.genPosition, styles.hairPosition]}/>
              }
            </View>
          )
        })}
      </View>
    )
  });

  const topItem = topOptions.map((hairStyle, stylekey)=> {
    return ( 
      <View key={stylekey}>
        {hairStyle.options.map((haircolor, colorkey)=> {
          return(
            <View key={colorkey}>
              {
                avatarCustomSet != null && avatarCustomSet.TopName == haircolor.name &&
                <Image source={haircolor.image} style={[styles.genPosition, styles.topPosition]}/>
              }
            </View>
          )
        })}
      </View>
    )
  });

  const bottomItem = bottomOptions.map((hairStyle, stylekey)=> {
    return ( 
      <View key={stylekey}>
        {hairStyle.options.map((haircolor, colorkey)=> {
          return(
            <View key={colorkey}>
              {
                avatarCustomSet != null && avatarCustomSet.BottomName == haircolor.name &&
                <Image source={haircolor.image} style={[styles.genPosition, styles.topPosition]}/>
              }
            </View>
          )
        })}
      </View>
    )
  });

  const feetItem = feetOptions.map((hairStyle, stylekey)=> {
    return ( 
      <View key={stylekey}>
        {hairStyle.options.map((haircolor, colorkey)=> {
          return(
            <View key={colorkey}>
              {
                avatarCustomSet != null && avatarCustomSet.FeetName == haircolor.name &&
                <Image source={haircolor.image} style={[styles.genPosition, styles.topPosition]}/>
              }
            </View>
          )
        })}
      </View>
    )
  });
  return( 
    <View style={styles.avatarImg}>
      <Image source={require("../../assets/AdventureGame/avatarBody.png")}/>
      { hairItem  }
      { bottomItem }
      { feetItem }
      { topItem }
    </View>
  );
}

export { AvatarDressed, AvatarParamFetch};

export default class AvatarData extends Component{
  render(){
    return( 
      <View>
        <Text> I'm not really exporting anything by default, buddy :/</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: "100%", 
    marginLeft: "10%", 
    flexDirection: "column"
  },
  avatarParamColumn:{
    width: "80%", 
    backgroundColor: "#2C6975",
    padding: 15,
    borderRadius: 50,
    margin: "auto",
  },
  avatarParamRow:{
    flexDirection: "row",
    backgroundColor: "#2C6975",
  },
  avatarParamText:{
    textAlignVertical: "center",
    fontSize: 35,
    color: "#E0ECDE",
  },
  avatarStatIcon:{
    width: 60,
    height: 60,
    marginRight: 15,
    marginLeft: 20,
  },
  modalCloseButton:{
    borderColor: "#000000",
    borderWidth: 2, 
    padding: 15,
    borderRadius: 50,
    width: 100,
    textAlign: "center",
    backgroundColor: "#2C6975",
    color: "#CDE0C9",
  },
  modalText:{
    textAlign: "center", 
    paddingTop:"20%", 
    color: "white", 
    fontSize: 20,
  },
  modalWindow:{
    backgroundColor: "#272A40",
    height: "100%",
    justifyContent: "center",
    alignItems: "center"
  },
  avatarImg:{
    alignItems:"center", 
    justifyContent:"center"
  },
  hairPosition:{
    position: "absolute",
    marginTop: -312,
    marginLeft: -93
  },
  topPosition:{
    position: "absolute",
    marginTop: -312,
    marginLeft: -104,
  },
  genPosition:{
    marginLeft: -104,
  }
});