import { View, Image, StyleSheet, Text, Modal, Pressable } from "react-native";
import {Component, useState} from 'react';

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
            <Text style={{textAlign: "center", color: "#272A40"}}>Close</Text>
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
      return( 
        <View style={styles.avatarImg}>
          <Image source={require("../../assets/AdventureGame/avatarBody.png")}/>
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
    borderColor: "#000000",
    borderWidth: 2, 
    padding: 15,
    borderRadius: 50,
    margin: "auto",
  },
  avatarParamRow:{
    flexDirection: "row",
    backgroundColor: "#F3F3F3",
  },
  avatarParamText:{
    textAlignVertical: "center",
    fontSize: 35,
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
    backgroundColor: "#F3F3F3",
    color: "#272A40",
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
    width: "80%", 
    marginLeft: "10%",
    alignItems:"center", 
    justifyContent:"center"
  },
});