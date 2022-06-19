import { View, StyleSheet, Text, Pressable, Image, Modal, ScrollView } from "react-native";
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

//Import custom sets
import { hairOptions } from "./customOptionsDatasets/HairOptions.js";
import { bottomOptions } from "./customOptionsDatasets/BottomOptions.js";
import { feetOptions } from "./customOptionsDatasets/FeetOptions.js";
import { topOptions } from "./customOptionsDatasets/TopOptions.js";


import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from '../../api/Firebase';

export default function AvatarCustomizeScreen({ navigation }) {
  const [hairModalShow, setHairModalShow] = useState(false);
  const [topModalShow, setTopModalShow] = useState(false);
  const [bottomsModalShow, setBottomsModalShow] = useState(false);
  const [feetModalShow, setFeetModalShow] = useState(false);
  
  //Hair Mapper
  const [equippedHair, SetEquippedHair] = useState(require("../../assets/AdventureGame/AvatarCustomization/Hair/empty.png"));
  const [chosenHair, setChosenHair] = useState("none");
  const [hairShow, setHairShow] = useState(require("../../assets/AdventureGame/AvatarCustomization/Hair/empty.png"));
  const hairItems = hairOptions.map((hairStyle, stylekey)=> {
    return ( 
      <View key={stylekey}>
        <View style={styles.clothingLabel}>             
          <Text style={styles.clothingName}>{hairStyle.style}</Text>
        </View>
        <ScrollView horizontal = {true}> 
        {hairStyle.options.map((haircolor, colorkey)=> {
          return(
            <View key={colorkey}>
              <Pressable 
                onPress={()=> [setChosenHair(haircolor.name), setHairShow(haircolor.image)]}
                style={[styles.selectButton, chosenHair == haircolor.name ? styles.optionActive : styles.optionInactive,]} 
              >
                <Image source={haircolor.image} style={{top: -10}}/>              
              </Pressable>
            </View>
          )
        })}
        </ScrollView>
      </View>
    )
  });

  //Top Mapper
  const [chosenTop, setChosenTop] = useState("none");
  const [topShow, setTopShow] = useState(require("../../assets/AdventureGame/AvatarCustomization/Hair/empty.png"));
  const topItems = topOptions.map((topStyle, stylekey)=> {
    return ( 
      <View key={stylekey}>
        <View style={styles.clothingLabel}>             
          <Text style={styles.clothingName}>{topStyle.style}</Text>
        </View>
        <ScrollView horizontal = {true}> 
        {topStyle.options.map((topcolor, colorkey)=> {
          return(
            <View key={colorkey}>
              <Pressable 
                onPress={()=> [setChosenTop(topcolor.name), setTopShow(topcolor.image)]}
                style={[styles.selectButton, chosenTop == topcolor.name ? styles.optionActive : styles.optionInactive,]} 
              >
                <Image source={topcolor.image} style={styles.topOption}/>              
              </Pressable>
            </View>
          )
        })}
        </ScrollView>
      </View>
    )
  });

  //Bottom Mapper
  const [bottomsShow, setBottomShow] = useState(require("../../assets/AdventureGame/AvatarCustomization/Hair/empty.png"));
  const [chosenBottom, setChosenBottom] = useState("none");
  const bottomItems = bottomOptions.map((bottomStyle, stylekey)=> {
    return ( 
      <View key={stylekey}>
        <View style={styles.clothingLabel}>             
          <Text style={styles.clothingName}>{bottomStyle.style}</Text>
        </View>
        <ScrollView horizontal = {true}> 
        {bottomStyle.options.map((bottomcolor, colorkey)=> {
          return(
            <View key={colorkey}>
              <Pressable 
                onPress={()=> [setChosenBottom(bottomcolor.name), setBottomShow(bottomcolor.image)]}
                style={[styles.selectButton, chosenBottom == bottomcolor.name ? styles.optionActive : styles.optionInactive,]} 
              >
                <Image source={bottomcolor.image} style={styles.bottomOption}/>              
              </Pressable>
            </View>
          )
        })}
        </ScrollView>
      </View>
    )
  });

  //Feet Mapper
  const [chosenFeet, setChosenFeet] = useState("none");
  const [feetShow, setFeetShow] = useState(require("../../assets/AdventureGame/AvatarCustomization/Hair/empty.png"));
  const feetItems = feetOptions.map((feetStyle, stylekey)=> {
    return ( 
      <View key={stylekey}>
        <View style={styles.clothingLabel}>             
          <Text style={styles.clothingName}>{feetStyle.style}</Text>
        </View>
        <ScrollView horizontal = {true}> 
        {feetStyle.options.map((feetcolor, colorkey)=> {
          return(
            <View key={colorkey}>
              <Pressable 
                onPress={()=> [setChosenFeet(feetcolor.name), setFeetShow(feetcolor.image)]}
                style={[styles.selectButton, chosenFeet == feetcolor.name ? styles.optionActive : styles.optionInactive,]} 
              >
                <Image source={feetcolor.image} style={styles.feetOption}/>              
              </Pressable>
            </View>
          )
        })}
        </ScrollView>
      </View>
    )
  });
    
  const [faceShow, setFaceShow] = useState(require("../../assets/AdventureGame/AvatarCustomization/Hair/empty.png"));
  const [accShow, setAccShow] = useState(require("../../assets/AdventureGame/AvatarCustomization/Hair/empty.png"));

  const [equippedTop, setEquippedTop] = useState(false);
  const [equippedBottoms, setEquippedBottoms] = useState("this");
  const [equippedFeet, setEquippedFeet] = useState("this");

  //Local Storage -- Customization
  const [savedCustom, setSavedCustom ] = useState(false);
  const [fetchedCustom, setFetchedCustom] = useState(false);

  const setCustomizationLoc = async () =>{
    const customToSave = {
      hair: equippedHair,
      top: equippedTop,
      bottom: equippedBottoms,
      feet: equippedFeet,
    }

    await AsyncStorage.setItem('@AvatarCustomization', JSON.stringify(customToSave));
    setSavedCustom(customToSave);
  }

  const getCustomizationLoc = async () =>{
    const equippedItems = await AsyncStorage.getItem('@AvatarCustomization');
    setFetchedCustom(JSON.parse(equippedItems));
  }
    
  //UseEffect fires off everytime 'savedCustom' state has been overwritten. Not sure if this works.
   useEffect(()=>{getCustomizationLoc},[savedCustom]);

  //Firebase -- Customization
  const createCustomizationFirebase = () => {

    const myDoc = doc(db, "AvatarCustomSet", "this should be some userID");

    const docData = {
      "HairName": chosenHair,
      "TopName": chosenTop,
      "BottomName": chosenBottom,
      "FeetName": chosenFeet,
    }

    setDoc(myDoc, docData)
    .then(()=>{
      alert("Customization saved!");
    })
    .catch((error)=> {
      alert(error.message);
    })
  }

  return(
      <View>
        <Modal animationType="slide" transparent={false} visible={feetModalShow} onRequestClose={()=>{setFeetModalShow(!feetModalShow)}}>
              <View style={styles.modal}>
                <ScrollView>
                  {feetItems}    
                  <Pressable style={styles.clothingButton} onPress={()=> setFeetModalShow(false)}>
                      <Text style={styles.clothingButtonText}>Back</Text>
                  </Pressable>
                </ScrollView>
              </View>
          </Modal>

        <Modal animationType="slide" transparent={false} visible={bottomsModalShow} onRequestClose={()=>{setBottomsModalShow(!bottomsModalShow)}}>
              <View style={styles.modal}>
                <ScrollView>
                  {bottomItems}
                  <Pressable style={styles.clothingButton} onPress={()=> setBottomsModalShow(false)}>
                      <Text style={styles.clothingButtonText}>Back</Text>
                  </Pressable>
                </ScrollView>
              </View>
          </Modal>

            <Modal animationType="slide" transparent={false} visible={topModalShow} onRequestClose={()=>{setTopModalShow(!topModalShow)}}>
              <View style={styles.modal}>
                <ScrollView>
                  {topItems}
                  <Pressable style={styles.clothingButton} onPress={()=> setTopModalShow(false)}>
                      <Text style={styles.clothingButtonText}>Back</Text>
                  </Pressable>
                </ScrollView>
              </View>
          </Modal>

          <Modal animationType="slide" transparent={false} visible={hairModalShow} onRequestClose={()=>{setHairModalShow(!hairModalShow)}}>
              <View style={styles.modal}>
                <ScrollView>
                  {hairItems}
                  <Pressable style={styles.clothingButton} onPress={()=> setHairModalShow(false)}>
                    <Text style={styles.clothingButtonText}>Back</Text>
                  </Pressable>
                </ScrollView>
              </View>
          </Modal>

          <View style={styles.rowClothing}>
              <Pressable style={styles.clothingButton} onPress={()=> [setHairModalShow(true)]}>
                  <Image source={require("../../assets/AdventureGame/AvatarCustomization/ui/hairIcon.png")}/>
                  <Text style={styles.clothingButtonText}>Hair</Text>
              </Pressable>
              <Pressable style={styles.clothingButton} onPress={()=> setTopModalShow(true)}>
                  <Image source={require("../../assets/AdventureGame/AvatarCustomization/ui/topIcon.png")}/>
                  <Text style={styles.clothingButtonText}>Tops</Text>
              </Pressable>
              <Pressable style={styles.clothingButton} onPress={()=> setBottomsModalShow(true)}>
                  <Image source={require("../../assets/AdventureGame/AvatarCustomization/ui/bottomIcon.png")}/>
                  <Text style={styles.clothingButtonText}>Bottoms</Text>
              </Pressable>
              <Pressable style={styles.clothingButton} onPress={()=> setFeetModalShow(true)}>
                  <Image source={require("../../assets/AdventureGame/AvatarCustomization/ui/feetIcon.png")}/>
                  <Text style={styles.clothingButtonText}>Feet</Text>
              </Pressable>
          </View>

          <View style={styles.avatarImg}>
              <Image source={require("../../assets/AdventureGame/avatarBody.png")}/>
              <Image source={bottomsShow} style={styles.topPosition}/>
              <Image source={feetShow} style={styles.topPosition}/>
              <Image source={topShow} style={styles.topPosition}/>
              <Image source={hairShow} style={styles.hairPosition}/>
          </View>
          
          <View style={styles.rowButtons}>
              <Pressable style={styles.clothingButton} onPress={()=> navigation.navigate("Adventure Game")}>
                      <Text style={styles.clothingButtonText}>Back</Text>
              </Pressable>
              <Pressable style={styles.clothingButton} onPress={createCustomizationFirebase}>
                      <Text style={styles.clothingButtonText}>Save and Exit</Text>
              </Pressable>
          </View>
      </View>
  )
}

const styles = StyleSheet.create({
    rowClothing:{
        flexDirection: "row",
        marginLeft: "5%",
        backgroundColor: "#F3F3F3",
        flexWrap:"wrap",
    },
    rowButtons:{
        flexDirection: "row",
        marginLeft: "20%",
    },
    avatarImg:{
        width: "80%", 
        marginLeft: "auto",
        paddingBottom: 40,
    },
    clothingButton:{
        alignContent: "center",
        backgroundColor: "#2C6975",
        padding: 10,
        width: 110,
        borderRadius: 100,
        margin: 5,
        alignItems: "center",
    },
    clothingButtonText:{
        color: "#CDE0C9",
        textAlign: "center",
    },
    modal:{
        backgroundColor: "#272A40",
        height: "100%",
    },
    selectButton:{
        alignContent: "center",
        padding: 10,
        width: 170,
        height: 170,
        borderRadius: 100,
        margin: 5,
        alignItems: "center",
    },
    optionActive:{
        backgroundColor: "#CDE0C9",
    },
    optionInactive:{
        backgroundColor: "#2C6975",
    },
    hairPosition:{
        position: "absolute",
        marginTop: 2,
        marginLeft: 12,
    },
    topPosition:{
      position: "absolute",
      marginTop: 2,
      marginLeft: -1,
    },
    topOption:{
      marginTop: -90,
      marginLeft: 10,
    },
    bottomOption:{
      marginTop: -150,
      marginLeft: 20,
    },
    feetOption:{
      marginTop: -190,
      marginLeft: 20,
    },
    clothingName:{
      color: "#CDE0C9",
      fontSize: 24,
      paddingTop: 10,
      marginLeft: "10%",
    },
    clothingLabel:{
      borderBottomWidth: 2,
      borderColor: "#CDE0C9",
      paddingBottom: 5,
      marginBottom: 10,
    }
});