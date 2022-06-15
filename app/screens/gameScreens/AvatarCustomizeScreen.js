import { View, StyleSheet, Text, Pressable, Image, Modal, ScrollView } from "react-native";
import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function AvatarCustomizeScreen({ navigation }) {
    const [hairModalShow, setHairModalShow] = useState(false);
    const [topModalShow, setTopModalShow] = useState(false);
    const [bottomsModalShow, setBottomsModalShow] = useState(false);
    const [feetModalShow, setFeetModalShow] = useState(false);

    const [savedCustom, setSavedCustom ] = useState(false);
    const [fetchedCustom, setFetchedCustom] = useState(false);

    const [hairShow, setHairShow] = useState(require("../../assets/AdventureGame/AvatarCustomization/Hair/empty.png"));
    
  const hairOptions = [
    {
      name: "Ponytail",
      colors: [
        "Nope",
        require("../../assets/AdventureGame/AvatarCustomization/Hair/ponytail/ponytailBlack.png"),
        require("../../assets/AdventureGame/AvatarCustomization/Hair/ponytail/ponytailBlond.png"),
        require("../../assets/AdventureGame/AvatarCustomization/Hair/ponytail/ponytailBlue.png"),
        require("../../assets/AdventureGame/AvatarCustomization/Hair/ponytail/ponytailBrown.png"),
        require("../../assets/AdventureGame/AvatarCustomization/Hair/ponytail/ponytailGold.png"),
        require("../../assets/AdventureGame/AvatarCustomization/Hair/ponytail/ponytailGreen.png"),
        require("../../assets/AdventureGame/AvatarCustomization/Hair/ponytail/ponytailViolet.png")
      ]
    },
    {
      name: "Shoulder length",
      colors: [
        require("../../assets/AdventureGame/AvatarCustomization/Hair/shoulderlength/shoulderLengthBlack.png"),
        require("../../assets/AdventureGame/AvatarCustomization/Hair/shoulderlength/shoulderLengthBlond.png"),
        require("../../assets/AdventureGame/AvatarCustomization/Hair/shoulderlength/shoulderLengthBlue.png"),
        require("../../assets/AdventureGame/AvatarCustomization/Hair/shoulderlength/shoulderLengthBrown.png"),
        require("../../assets/AdventureGame/AvatarCustomization/Hair/shoulderlength/shoulderLengthGreen.png"),
        require("../../assets/AdventureGame/AvatarCustomization/Hair/shoulderlength/shoulderLengthPurple.png"),
      ]
    },
  ];
    
  console.log("still working" + hairOptions);
  console.log("This line" + hairOptions[0].colors[0]);
  const [hairStyle, setHairStyle] = useState(null);
  const [hairColor, setHairColor] = useState(null);

  //Back up shit
  const [equippedHair, SetEquippedHair] = useState(require("../../assets/AdventureGame/AvatarCustomization/Hair/empty.png"));

  const hairItems = hairOptions.map((hairStyle, stylekey)=> {
    return ( 
      <View key={stylekey}>
        <View style={styles.clothingLabel}>             
          <Text style={styles.clothingName}>{hairStyle.name}</Text>
        </View>
        <ScrollView horizontal = {true}> 
        {hairStyle.colors.map((haircolor, colorkey)=> {
          return(
            <View key={colorkey}>
              <Pressable 
                onPress={()=> [setHairStyle(hairStyle.name), setHairColor(colorkey), console.log("Line 62 " + JSON.stringify(hairStyle))]}
                style={[styles.selectButton, equippedFeet == "sneakersBlack" ? styles.optionActive : styles.optionInactive,]} 
              >
                <Image source={haircolor} style={{top: -10}}/>              
              </Pressable>
            </View>
          )
        })}
        </ScrollView>
      </View>
    )
  }

  );


  
   

    const [topShow, setTopShow] = useState(false);
    const [equippedTop, setEquippedTop] = useState(false);

    const [bottomsShow, setBottomsShow] = useState("this");
    const [equippedBottoms, setEquippedBottoms] = useState("this");

    const [feetShow, setFeetShow] = useState("this");
    const [equippedFeet, setEquippedFeet] = useState("this");

    const [faceShow, setFaceShow] = useState("this");
    const [accShow, setAccShow] = useState("this");

    //Local Storage -- Customization
    const setCustomizationLoc = async () =>{
      const customToSave = {
        hair: equippedHair,
        top: equippedTop,
        bottom: equippedTop,
        feet: equippedFeet,
      }

      await AsyncStorage.setItem('@AvatarCustomization', JSON.stringify(customToSave));
      setSavedCustom(customToSave);
    }

    const getCustomizationLoc = async () =>{
      const equippedItems = await AsyncStorage.getItem('@AvatarCustomization');
      setFetchedCustom(JSON.parse(equippedItems));
    }
    
  //UseEffect fires off everytime 'savedCustom' state has been overwritten
   useEffect(()=>{getCustomizationLoc},[savedCustom]);

    //Firebase -- Customization
    return(
        <View>
          <Modal animationType="slide" transparent={false} visible={feetModalShow} onRequestClose={()=>{setFeetModalShow(!feetModalShow)}}>
                <View style={styles.modal}>
                  <ScrollView>
                    <View style={styles.clothingLabel}>
                      <Text style={styles.clothingName}>Sneakers</Text>
                    </View>
                    <ScrollView horizontal = {true}> 
                      <Pressable 
                          style={[styles.selectButton, equippedFeet == "sneakersBlack" ? styles.optionActive : styles.optionInactive,]}
                          onPress={()=> [setEquippedFeet("sneakersBlack"), setFeetShow(require("../../assets/AdventureGame/AvatarCustomization/feet/sneakers/sneakersBlack.png"))]}
                      >
                        <Image source={require("../../assets/AdventureGame/AvatarCustomization/feet/sneakers/sneakersBlack.png")} style={styles.feetOption}/>   
                      </Pressable>

                      <Pressable 
                          style={[styles.selectButton, equippedFeet == "sneakersBlue" ? styles.optionActive : styles.optionInactive,]}
                          onPress={()=> [setEquippedFeet("sneakersBlue"), setFeetShow(require("../../assets/AdventureGame/AvatarCustomization/feet/sneakers/sneakersBlue.png"))]}
                      >
                        <Image source={require("../../assets/AdventureGame/AvatarCustomization/feet/sneakers/sneakersBlue.png")} style={styles.feetOption}/>   
                      </Pressable>

                      <Pressable 
                          style={[styles.selectButton, equippedFeet == "sneakersPink" ? styles.optionActive : styles.optionInactive,]}
                          onPress={()=> [setEquippedFeet("sneakersPink"), setFeetShow(require("../../assets/AdventureGame/AvatarCustomization/feet/sneakers/sneakersPink.png"))]}
                      >
                        <Image source={require("../../assets/AdventureGame/AvatarCustomization/feet/sneakers/sneakersPink.png")} style={styles.feetOption}/>   
                      </Pressable>

                      <Pressable 
                          style={[styles.selectButton, equippedFeet == "sneakersPurple" ? styles.optionActive : styles.optionInactive,]}
                          onPress={()=> [setEquippedFeet("sneakersPurple"), setFeetShow(require("../../assets/AdventureGame/AvatarCustomization/feet/sneakers/sneakersPurple.png"))]}
                      >
                        <Image source={require("../../assets/AdventureGame/AvatarCustomization/feet/sneakers/sneakersPurple.png")} style={styles.feetOption}/>   
                      </Pressable>

                      <Pressable 
                          style={[styles.selectButton, equippedFeet == "sneakersRed" ? styles.optionActive : styles.optionInactive,]}
                          onPress={()=> [setEquippedFeet("sneakersRed"), setFeetShow(require("../../assets/AdventureGame/AvatarCustomization/feet/sneakers/sneakersRed.png"))]}
                      >
                        <Image source={require("../../assets/AdventureGame/AvatarCustomization/feet/sneakers/sneakersRed.png")} style={styles.feetOption}/>   
                      </Pressable>

                      <Pressable 
                          style={[styles.selectButton, equippedFeet == "sneakersYellow" ? styles.optionActive : styles.optionInactive,]}
                          onPress={()=> [setEquippedFeet("sneakersYellow"), setFeetShow(require("../../assets/AdventureGame/AvatarCustomization/feet/sneakers/sneakersYellow.png"))]}
                      >
                        <Image source={require("../../assets/AdventureGame/AvatarCustomization/feet/sneakers/sneakersYellow.png")} style={styles.feetOption}/>   
                      </Pressable>
                    </ScrollView>

                    <View style={styles.clothingLabel}>
                      <Text style={styles.clothingName}>Leather boots</Text>
                    </View>
                    <ScrollView horizontal = {true}> 
                      <Pressable 
                            style={[styles.selectButton, equippedFeet == "fantasyBootsBlack" ? styles.optionActive : styles.optionInactive,]}
                            onPress={()=> [setEquippedFeet("fantasyBootsBlack"), setFeetShow(require("../../assets/AdventureGame/AvatarCustomization/feet/fantasyBoots/bootsBlack.png"))]}
                        >
                        <Image source={require("../../assets/AdventureGame/AvatarCustomization/feet/fantasyBoots/bootsBlack.png")} style={styles.feetOption}/>   
                      </Pressable>                         

                      <Pressable 
                            style={[styles.selectButton, equippedFeet == "fantasyBootsBrown" ? styles.optionActive : styles.optionInactive,]}
                            onPress={()=> [setEquippedFeet("fantasyBootsBrown"), setFeetShow(require("../../assets/AdventureGame/AvatarCustomization/feet/fantasyBoots/bootsBrown.png"))]}
                        >
                        <Image source={require("../../assets/AdventureGame/AvatarCustomization/feet/fantasyBoots/bootsBrown.png")} style={styles.feetOption}/>   
                      </Pressable>                          

                      <Pressable 
                            style={[styles.selectButton, equippedFeet == "fantasyBootsBlue" ? styles.optionActive : styles.optionInactive,]}
                            onPress={()=> [setEquippedFeet("fantasyBootsBlue"), setFeetShow(require("../../assets/AdventureGame/AvatarCustomization/feet/fantasyBoots/bootsBlue.png"))]}
                        >
                        <Image source={require("../../assets/AdventureGame/AvatarCustomization/feet/fantasyBoots/bootsBlue.png")} style={styles.feetOption}/>   
                      </Pressable>

                      <Pressable 
                            style={[styles.selectButton, equippedFeet == "fantasyBootsGreen" ? styles.optionActive : styles.optionInactive,]}
                            onPress={()=> [setEquippedFeet("fantasyBootsGreen"), setFeetShow(require("../../assets/AdventureGame/AvatarCustomization/feet/fantasyBoots/bootsGreen.png"))]}
                        >
                        <Image source={require("../../assets/AdventureGame/AvatarCustomization/feet/fantasyBoots/bootsGreen.png")} style={styles.feetOption}/>   
                      </Pressable>

                      <Pressable 
                            style={[styles.selectButton, equippedFeet == "fantasyBootsPink" ? styles.optionActive : styles.optionInactive,]}
                            onPress={()=> [setEquippedFeet("fantasyBootsPink"), setFeetShow(require("../../assets/AdventureGame/AvatarCustomization/feet/fantasyBoots/bootsPink.png"))]}
                        >
                        <Image source={require("../../assets/AdventureGame/AvatarCustomization/feet/fantasyBoots/bootsPink.png")} style={styles.feetOption}/>   
                      </Pressable>

                      <Pressable 
                            style={[styles.selectButton, equippedFeet == "fantasyBootsRed" ? styles.optionActive : styles.optionInactive,]}
                            onPress={()=> [setEquippedFeet("fantasyBootsRed"), setFeetShow(require("../../assets/AdventureGame/AvatarCustomization/feet/fantasyBoots/bootsRed.png"))]}
                        >
                        <Image source={require("../../assets/AdventureGame/AvatarCustomization/feet/fantasyBoots/bootsRed.png")} style={styles.feetOption}/>   
                      </Pressable>
                      
                      <Pressable 
                            style={[styles.selectButton, equippedFeet == "fantasyBootsWhite" ? styles.optionActive : styles.optionInactive,]}
                            onPress={()=> [setEquippedFeet("fantasyBootsWhite"), setFeetShow(require("../../assets/AdventureGame/AvatarCustomization/feet/fantasyBoots/bootsWhite.png"))]}
                        >
                        <Image source={require("../../assets/AdventureGame/AvatarCustomization/feet/fantasyBoots/bootsWhite.png")} style={styles.feetOption}/>   
                      </Pressable>

                    </ScrollView>

                    <View style={styles.clothingLabel}>
                      <Text style={styles.clothingName}>Combat Footwear</Text>
                    </View>
                    <ScrollView horizontal = {true}> 
                      <Pressable 
                            style={[styles.selectButton, equippedFeet == "cbootsBlack" ? styles.optionActive : styles.optionInactive,]}
                            onPress={()=> [setEquippedFeet("cbootsBlack"), setFeetShow(require("../../assets/AdventureGame/AvatarCustomization/feet/combatBoots/cbootsBlack.png"))]}
                        >
                        <Image source={require("../../assets/AdventureGame/AvatarCustomization/feet/combatBoots/cbootsBlack.png")} style={styles.feetOption}/>   
                      </Pressable>                         

                      <Pressable 
                            style={[styles.selectButton, equippedFeet == "cbootsBlue" ? styles.optionActive : styles.optionInactive,]}
                            onPress={()=> [setEquippedFeet("cbootsBlue"), setFeetShow(require("../../assets/AdventureGame/AvatarCustomization/feet/combatBoots/cbootsBlue.png"))]}
                        >
                        <Image source={require("../../assets/AdventureGame/AvatarCustomization/feet/combatBoots/cbootsBlue.png")} style={styles.feetOption}/>   
                      </Pressable>

                      <Pressable 
                          style={[styles.selectButton, equippedFeet == "cbootsPink" ? styles.optionActive : styles.optionInactive,]}
                          onPress={()=> [setEquippedFeet("cbootsPink"), setFeetShow(require("../../assets/AdventureGame/AvatarCustomization/feet/combatBoots/cbootsPink.png"))]}
                      >
                        <Image source={require("../../assets/AdventureGame/AvatarCustomization/feet/combatBoots/cbootsPink.png")} style={styles.feetOption}/>   
                      </Pressable>  

                      <Pressable 
                          style={[styles.selectButton, equippedFeet == "cbootsRed" ? styles.optionActive : styles.optionInactive,]}
                          onPress={()=> [setEquippedFeet("cbootsRed"), setFeetShow(require("../../assets/AdventureGame/AvatarCustomization/feet/combatBoots/cbootsRed.png"))]}
                      >
                        <Image source={require("../../assets/AdventureGame/AvatarCustomization/feet/combatBoots/cbootsRed.png")} style={styles.feetOption}/>   
                      </Pressable>                               

                      <Pressable 
                          style={[styles.selectButton, equippedFeet == "cbootsWhite" ? styles.optionActive : styles.optionInactive,]}
                          onPress={()=> [setEquippedFeet("cbootsWhite"), setFeetShow(require("../../assets/AdventureGame/AvatarCustomization/feet/combatBoots/cbootsWhite.png"))]}
                      >
                        <Image source={require("../../assets/AdventureGame/AvatarCustomization/feet/combatBoots/cbootsWhite.png")} style={styles.feetOption}/>   
                      </Pressable>   
                    </ScrollView>
                                  
                    <Pressable style={styles.clothingButton} onPress={()=> setFeetModalShow(false)}>
                        <Text style={styles.clothingButtonText}>Back</Text>
                    </Pressable>
                  </ScrollView>
                </View>
            </Modal>

          <Modal animationType="slide" transparent={false} visible={bottomsModalShow} onRequestClose={()=>{setBottomsModalShow(!bottomsModalShow)}}>
                <View style={styles.modal}>
                  <ScrollView>
                    <View style={styles.clothingLabel}>
                      <Text style={styles.clothingName}>Jeans</Text>
                    </View>
                    <ScrollView horizontal = {true}> 
                        <Pressable 
                            style={[styles.selectButton, equippedBottoms == "jeansBlack" ? styles.optionActive : styles.optionInactive,]}
                            onPress={()=> [setEquippedBottoms("jeansBlack"), setBottomsShow(require("../../assets/AdventureGame/AvatarCustomization/bottoms/jeans/jeansBlack.png"))]}
                        >
                          <Image source={require("../../assets/AdventureGame/AvatarCustomization/bottoms/jeans/jeansBlack.png")} style={styles.bottomOption}/>   
                        </Pressable>

                        <Pressable 
                            style={[styles.selectButton, equippedBottoms == "jeansBlue" ? styles.optionActive : styles.optionInactive,]}
                            onPress={()=> [setEquippedBottoms("jeansBlue"), setBottomsShow(require("../../assets/AdventureGame/AvatarCustomization/bottoms/jeans/jeansBlue.png"))]}
                        >
                          <Image source={require("../../assets/AdventureGame/AvatarCustomization/bottoms/jeans/jeansBlue.png")} style={styles.bottomOption}/>   
                        </Pressable>

                        <Pressable 
                            style={[styles.selectButton, equippedBottoms == "jeansGray" ? styles.optionActive : styles.optionInactive,]}
                            onPress={()=> [setEquippedBottoms("jeansGray"), setBottomsShow(require("../../assets/AdventureGame/AvatarCustomization/bottoms/jeans/jeansGray.png"))]}
                        >
                          <Image source={require("../../assets/AdventureGame/AvatarCustomization/bottoms/jeans/jeansGray.png")} style={styles.bottomOption}/>   
                        </Pressable> 

                        <Pressable 
                            style={[styles.selectButton, equippedBottoms == "jeansGreen" ? styles.optionActive : styles.optionInactive,]}
                            onPress={()=> [setEquippedBottoms("jeansGreen"), setBottomsShow(require("../../assets/AdventureGame/AvatarCustomization/bottoms/jeans/jeansGreen.png"))]}
                        >
                          <Image source={require("../../assets/AdventureGame/AvatarCustomization/bottoms/jeans/jeansGreen.png")} style={styles.bottomOption}/>   
                        </Pressable>   

                        <Pressable 
                            style={[styles.selectButton, equippedBottoms == "jeansRed" ? styles.optionActive : styles.optionInactive,]}
                            onPress={()=> [setEquippedBottoms("jeansRed"), setBottomsShow(require("../../assets/AdventureGame/AvatarCustomization/bottoms/jeans/jeansRed.png"))]}
                        >
                          <Image source={require("../../assets/AdventureGame/AvatarCustomization/bottoms/jeans/jeansRed.png")} style={styles.bottomOption}/>   
                        </Pressable>
                        
                        <Pressable 
                            style={[styles.selectButton, equippedBottoms == "jeansWhite" ? styles.optionActive : styles.optionInactive,]}
                            onPress={()=> [setEquippedBottoms("jeansWhite"), setBottomsShow(require("../../assets/AdventureGame/AvatarCustomization/bottoms/jeans/jeansWhite.png"))]}
                        >
                          <Image source={require("../../assets/AdventureGame/AvatarCustomization/bottoms/jeans/jeansWhite.png")} style={styles.bottomOption}/>   
                        </Pressable>  
                                                
                        <Pressable 
                            style={[styles.selectButton, equippedBottoms == "jeansYellow" ? styles.optionActive : styles.optionInactive,]}
                            onPress={()=> [setEquippedBottoms("jeansYellow"), setBottomsShow(require("../../assets/AdventureGame/AvatarCustomization/bottoms/jeans/jeansYellow.png"))]}
                        >
                          <Image source={require("../../assets/AdventureGame/AvatarCustomization/bottoms/jeans/jeansYellow.png")} style={styles.bottomOption}/>   
                        </Pressable>  
                    </ScrollView>

                    <View style={styles.clothingLabel}>
                      <Text style={styles.clothingName}>Shorts and Vest</Text>
                    </View>
                    <ScrollView horizontal = {true}> 
                        <Pressable 
                            style={[styles.selectButton, equippedBottoms == "shortsBlue" ? styles.optionActive : styles.optionInactive,]}
                            onPress={()=> [setEquippedBottoms("shortsBlue"), setBottomsShow(require("../../assets/AdventureGame/AvatarCustomization/bottoms/shorts/shortsBlue.png"))]}
                        >
                          <Image source={require("../../assets/AdventureGame/AvatarCustomization/bottoms/shorts/shortsBlue.png")} style={styles.bottomOption}/>   
                        </Pressable>

                        <Pressable 
                            style={[styles.selectButton, equippedBottoms == "shortsBlack" ? styles.optionActive : styles.optionInactive,]}
                            onPress={()=> [setEquippedBottoms("shortsBlack"), setBottomsShow(require("../../assets/AdventureGame/AvatarCustomization/bottoms/shorts/shortsBlue.png"))]}
                        >
                          <Image source={require("../../assets/AdventureGame/AvatarCustomization/bottoms/shorts/shortsBlack.png")} style={styles.bottomOption}/>   
                        </Pressable>

                        <Pressable 
                            style={[styles.selectButton, equippedBottoms == "shortsGreen" ? styles.optionActive : styles.optionInactive,]}
                            onPress={()=> [setEquippedBottoms("shortsGreen"), setBottomsShow(require("../../assets/AdventureGame/AvatarCustomization/bottoms/shorts/shortsGreen.png"))]}
                        >
                          <Image source={require("../../assets/AdventureGame/AvatarCustomization/bottoms/shorts/shortsGreen.png")} style={styles.bottomOption}/>   
                        </Pressable>     
                        
                        <Pressable 
                            style={[styles.selectButton, equippedBottoms == "shortsPink" ? styles.optionActive : styles.optionInactive,]}
                            onPress={()=> [setEquippedBottoms("shortsPink"), setBottomsShow(require("../../assets/AdventureGame/AvatarCustomization/bottoms/shorts/shortsPink.png"))]}
                        >
                          <Image source={require("../../assets/AdventureGame/AvatarCustomization/bottoms/shorts/shortsPink.png")} style={styles.bottomOption}/>   
                        </Pressable>      

                        <Pressable 
                            style={[styles.selectButton, equippedBottoms == "shortsRed" ? styles.optionActive : styles.optionInactive,]}
                            onPress={()=> [setEquippedBottoms("shortsRed"), setBottomsShow(require("../../assets/AdventureGame/AvatarCustomization/bottoms/shorts/shortsRed.png"))]}
                        >
                          <Image source={require("../../assets/AdventureGame/AvatarCustomization/bottoms/shorts/shortsRed.png")} style={styles.bottomOption}/>   
                        </Pressable>  
                        
                        <Pressable 
                            style={[styles.selectButton, equippedBottoms == "shortsWhite" ? styles.optionActive : styles.optionInactive,]}
                            onPress={()=> [setEquippedBottoms("shortsWhite"), setBottomsShow(require("../../assets/AdventureGame/AvatarCustomization/bottoms/shorts/shortsWhite.png"))]}
                        >
                          <Image source={require("../../assets/AdventureGame/AvatarCustomization/bottoms/shorts/shortsWhite.png")} style={styles.bottomOption}/>   
                        </Pressable>                 
                    </ScrollView>

                    <View style={styles.clothingLabel}>
                      <Text style={styles.clothingName}>Baggy Ninja Pants</Text>
                    </View>
                    <ScrollView horizontal = {true}> 
                        <Pressable 
                            style={[styles.selectButton, equippedBottoms == "altoBlack" ? styles.optionActive : styles.optionInactive,]}
                            onPress={()=> [setEquippedBottoms("altoBlack"), setBottomsShow(require("../../assets/AdventureGame/AvatarCustomization/bottoms/alto/altoBlack.png"))]}
                        >
                          <Image source={require("../../assets/AdventureGame/AvatarCustomization/bottoms/alto/altoBlack.png")} style={styles.bottomOption}/>   
                        </Pressable>

                        <Pressable 
                            style={[styles.selectButton, equippedBottoms == "altoBlue" ? styles.optionActive : styles.optionInactive,]}
                            onPress={()=> [setEquippedBottoms("altoBlue"), setBottomsShow(require("../../assets/AdventureGame/AvatarCustomization/bottoms/alto/altoBlue.png"))]}
                        >
                          <Image source={require("../../assets/AdventureGame/AvatarCustomization/bottoms/alto/altoBlue.png")} style={styles.bottomOption}/>   
                        </Pressable>

                        <Pressable 
                            style={[styles.selectButton, equippedBottoms == "altoGreen" ? styles.optionActive : styles.optionInactive,]}
                            onPress={()=> [setEquippedBottoms("altoGreen"), setBottomsShow(require("../../assets/AdventureGame/AvatarCustomization/bottoms/alto/altoGreen.png"))]}
                        >
                          <Image source={require("../../assets/AdventureGame/AvatarCustomization/bottoms/alto/altoGreen.png")} style={styles.bottomOption}/>   
                        </Pressable>     
                        
                        <Pressable 
                            style={[styles.selectButton, equippedBottoms == "altoPurple" ? styles.optionActive : styles.optionInactive,]}
                            onPress={()=> [setEquippedBottoms("altoPurple"), setBottomsShow(require("../../assets/AdventureGame/AvatarCustomization/bottoms/alto/altoPurple.png"))]}
                        >
                          <Image source={require("../../assets/AdventureGame/AvatarCustomization/bottoms/alto/altoPurple.png")} style={styles.bottomOption}/>   
                        </Pressable>      

                        <Pressable 
                            style={[styles.selectButton, equippedBottoms == "altoRed" ? styles.optionActive : styles.optionInactive,]}
                            onPress={()=> [setEquippedBottoms("altoRed"), setBottomsShow(require("../../assets/AdventureGame/AvatarCustomization/bottoms/alto/altoRed.png"))]}
                        >
                          <Image source={require("../../assets/AdventureGame/AvatarCustomization/bottoms/alto/altoRed.png")} style={styles.bottomOption}/>   
                        </Pressable>  
                        
                        <Pressable 
                            style={[styles.selectButton, equippedBottoms == "altoYellow" ? styles.optionActive : styles.optionInactive,]}
                            onPress={()=> [setEquippedBottoms("altoYellow"), setBottomsShow(require("../../assets/AdventureGame/AvatarCustomization/bottoms/alto/altoYellow.png"))]}
                        >
                          <Image source={require("../../assets/AdventureGame/AvatarCustomization/bottoms/alto/altoYellow.png")} style={styles.bottomOption}/>   
                        </Pressable>                 
                    </ScrollView>

                    

                    <Pressable style={styles.clothingButton} onPress={()=> setBottomsModalShow(false)}>
                        <Text style={styles.clothingButtonText}>Back</Text>
                    </Pressable>
                  </ScrollView>
                </View>
            </Modal>

              <Modal animationType="slide" transparent={false} visible={topModalShow} onRequestClose={()=>{setTopModalShow(!topModalShow)}}>
                <View style={styles.modal}>
                  <View style={styles.clothingLabel}>
                    <Text style={styles.clothingName}>Breastplate</Text>
                  </View>
                  <ScrollView>
                    <ScrollView horizontal = {true}> 
                        <Pressable 
                            style={[styles.selectButton, equippedTop == "armorBlue" ? styles.optionActive : styles.optionInactive,]}
                            onPress={()=> [setEquippedTop("armorBlue"), setTopShow(require("../../assets/AdventureGame/AvatarCustomization/Tops/armor/armorBlue.png"))]}
                        >
                          <Image source={require("../../assets/AdventureGame/AvatarCustomization/Tops/armor/armorBlue.png")} style={styles.topOption}/>   
                        </Pressable>

                        <Pressable 
                            style={[styles.selectButton, equippedTop == "armorBronze" ? styles.optionActive : styles.optionInactive,]}
                            onPress={()=> [setEquippedTop("armorBronze"), setTopShow(require("../../assets/AdventureGame/AvatarCustomization/Tops/armor/armorBronze.png"))]}
                        >
                          <Image source={require("../../assets/AdventureGame/AvatarCustomization/Tops/armor/armorBronze.png")} style={styles.topOption}/>   
                        </Pressable>

                        <Pressable 
                            style={[styles.selectButton, equippedTop == "armorGray" ? styles.optionActive : styles.optionInactive,]}
                            onPress={()=> [setEquippedTop("armorGray"), setTopShow(require("../../assets/AdventureGame/AvatarCustomization/Tops/armor/armorGray.png"))]}
                        >
                          <Image source={require("../../assets/AdventureGame/AvatarCustomization/Tops/armor/armorGray.png")} style={styles.topOption}/>   
                        </Pressable>

                        <Pressable 
                            style={[styles.selectButton, equippedTop == "armorGreen" ? styles.optionActive : styles.optionInactive,]}
                            onPress={()=> [setEquippedTop("armorGreen"), setTopShow(require("../../assets/AdventureGame/AvatarCustomization/Tops/armor/armorGreen.png"))]}
                        >
                          <Image source={require("../../assets/AdventureGame/AvatarCustomization/Tops/armor/armorGreen.png")} style={styles.topOption}/>   
                        </Pressable>

                        <Pressable 
                            style={[styles.selectButton, equippedTop == "armorPink" ? styles.optionActive : styles.optionInactive,]}
                            onPress={()=> [setEquippedTop("armorPink"), setTopShow(require("../../assets/AdventureGame/AvatarCustomization/Tops/armor/armorPink.png"))]}
                        >
                          <Image source={require("../../assets/AdventureGame/AvatarCustomization/Tops/armor/armorPink.png")} style={styles.topOption}/>   
                        </Pressable>

                        <Pressable 
                            style={[styles.selectButton, equippedTop == "armorWhite" ? styles.optionActive : styles.optionInactive,]}
                            onPress={()=> [setEquippedTop("armorWhite"), setTopShow(require("../../assets/AdventureGame/AvatarCustomization/Tops/armor/armorWhite.png"))]}
                        >
                          <Image source={require("../../assets/AdventureGame/AvatarCustomization/Tops/armor/armorWhite.png")} style={styles.topOption}/>   
                        </Pressable>
                    </ScrollView>

                  <View style={styles.clothingLabel}>
                    <Text style={styles.clothingName}>Martial Arts Top</Text>
                  </View>
                    <ScrollView horizontal = {true}>
                      <Pressable 
                        style={[styles.selectButton, equippedTop == "martialBlack" ? styles.optionActive : styles.optionInactive,]}
                        onPress={()=> [setEquippedTop("martialBlack"), setTopShow(require("../../assets/AdventureGame/AvatarCustomization/Tops/martial/martialBlack.png"))]}
                      >
                        <Image source={require("../../assets/AdventureGame/AvatarCustomization/Tops/martial/martialBlack.png")} style={styles.topOption}/>   
                      </Pressable>

                      <Pressable 
                        style={[styles.selectButton, equippedTop == "martialBlue" ? styles.optionActive : styles.optionInactive,]}
                        onPress={()=> [setEquippedTop("martialBlue"), setTopShow(require("../../assets/AdventureGame/AvatarCustomization/Tops/martial/martialBlue.png"))]}
                      >
                        <Image source={require("../../assets/AdventureGame/AvatarCustomization/Tops/martial/martialBlue.png")} style={styles.topOption}/>   
                      </Pressable> 

                      <Pressable 
                        style={[styles.selectButton, equippedTop == "martialGreen" ? styles.optionActive : styles.optionInactive,]}
                        onPress={()=> [setEquippedTop("martialGreen"), setTopShow(require("../../assets/AdventureGame/AvatarCustomization/Tops/martial/martialGreen.png"))]}
                      >
                        <Image source={require("../../assets/AdventureGame/AvatarCustomization/Tops/martial/martialGreen.png")} style={styles.topOption}/>   
                      </Pressable>   

                      <Pressable 
                        style={[styles.selectButton, equippedTop == "martialPurple" ? styles.optionActive : styles.optionInactive,]}
                        onPress={()=> [setEquippedTop("martialPurple"), setTopShow(require("../../assets/AdventureGame/AvatarCustomization/Tops/martial/martialPurple.png"))]}
                      >
                        <Image source={require("../../assets/AdventureGame/AvatarCustomization/Tops/martial/martialPurple.png")} style={styles.topOption}/>   
                      </Pressable>   

                      <Pressable 
                        style={[styles.selectButton, equippedTop == "martialWhite" ? styles.optionActive : styles.optionInactive,]}
                        onPress={()=> [setEquippedTop("martialWhite"), setTopShow(require("../../assets/AdventureGame/AvatarCustomization/Tops/martial/martialWhite.png"))]}
                      >
                        <Image source={require("../../assets/AdventureGame/AvatarCustomization/Tops/martial/martialWhite.png")} style={styles.topOption}/>   
                      </Pressable>  
                    </ScrollView>

                    <View style={styles.clothingLabel}>
                      <Text style={styles.clothingName}>Decorated Top</Text>
                    </View>
                    <ScrollView horizontal = {true}>
                        <Pressable 
                            style={[styles.selectButton, equippedTop == "tanktopBlack" ? styles.optionActive : styles.optionInactive,]}
                            onPress={()=> [setEquippedTop("tanktopBlack"), setTopShow(require("../../assets/AdventureGame/AvatarCustomization/Tops/tanktop/tanktopBlack.png"))]}
                        >  
                            <Image source={require("../../assets/AdventureGame/AvatarCustomization/Tops/tanktop/tanktopBlack.png")} style={styles.topOption}/>
                        </Pressable>

                        <Pressable 
                            style={[styles.selectButton, equippedTop == "tanktopBlue" ? styles.optionActive : styles.optionInactive,]}
                            onPress={()=> [setEquippedTop("tanktopBlue"), setTopShow(require("../../assets/AdventureGame/AvatarCustomization/Tops/tanktop/tanktopBlue.png"))]}
                        >  
                            <Image source={require("../../assets/AdventureGame/AvatarCustomization/Tops/tanktop/tanktopBlue.png")} style={styles.topOption}/>
                        </Pressable>

                        <Pressable 
                            style={[styles.selectButton, equippedTop == "tanktopGreen" ? styles.optionActive : styles.optionInactive,]}
                            onPress={()=> [setEquippedTop("tanktopGreen"), setTopShow(require("../../assets/AdventureGame/AvatarCustomization/Tops/tanktop/tanktopGreen.png"))]}
                        >  
                            <Image source={require("../../assets/AdventureGame/AvatarCustomization/Tops/tanktop/tanktopGreen.png")} style={styles.topOption}/>
                        </Pressable>

                        <Pressable 
                            style={[styles.selectButton, equippedTop == "tanktopPurple" ? styles.optionActive : styles.optionInactive,]}
                            onPress={()=> [setEquippedTop("tanktopPurple"), setTopShow(require("../../assets/AdventureGame/AvatarCustomization/Tops/tanktop/tanktopPurple.png"))]}
                        >  
                            <Image source={require("../../assets/AdventureGame/AvatarCustomization/Tops/tanktop/tanktopPurple.png")} style={styles.topOption}/>
                        </Pressable>

                        <Pressable 
                            style={[styles.selectButton, equippedTop == "tanktopRed" ? styles.optionActive : styles.optionInactive,]}
                            onPress={()=> [setEquippedTop("tanktopRed"), setTopShow(require("../../assets/AdventureGame/AvatarCustomization/Tops/tanktop/tanktopRed.png"))]}
                        >  
                            <Image source={require("../../assets/AdventureGame/AvatarCustomization/Tops/tanktop/tanktopRed.png")} style={styles.topOption}/>
                        </Pressable>

                        <Pressable 
                            style={[styles.selectButton, equippedTop == "tanktopWhite" ? styles.optionActive : styles.optionInactive,]}
                            onPress={()=> [setEquippedTop("tanktopWhite"), setTopShow(require("../../assets/AdventureGame/AvatarCustomization/Tops/tanktop/tanktopWhite.png"))]}
                        >  
                            <Image source={require("../../assets/AdventureGame/AvatarCustomization/Tops/tanktop/tanktopWhite.png")} style={styles.topOption}/>
                        </Pressable>

                        <Pressable 
                            style={[styles.selectButton, equippedTop == "tanktopYellow" ? styles.optionActive : styles.optionInactive,]}
                            onPress={()=> [setEquippedTop("tanktopYellow"), setTopShow(require("../../assets/AdventureGame/AvatarCustomization/Tops/tanktop/tanktopYellow.png"))]}
                        >  
                            <Image source={require("../../assets/AdventureGame/AvatarCustomization/Tops/tanktop/tanktopYellow.png")} style={styles.topOption}/>
                        </Pressable>
                    </ScrollView>

                    <View style={styles.clothingLabel}>
                      <Text style={styles.clothingName}>Easy going Vest</Text>
                    </View>
                    <ScrollView horizontal = {true}>
                      <Pressable 
                          style={[styles.selectButton, equippedTop == "vestBlue" ? styles.optionActive : styles.optionInactive,]}
                          onPress={()=> [setEquippedTop("vestBlue"), setTopShow(require("../../assets/AdventureGame/AvatarCustomization/Tops/vest/vestBlue.png"))]}
                        >  
                          <Image source={require("../../assets/AdventureGame/AvatarCustomization/Tops/vest/vestBlue.png")} style={styles.topOption}/>
                        </Pressable>

                        <Pressable 
                          style={[styles.selectButton, equippedTop == "vestGreen" ? styles.optionActive : styles.optionInactive,]}
                          onPress={()=> [setEquippedTop("vestGreen"), setTopShow(require("../../assets/AdventureGame/AvatarCustomization/Tops/vest/vestGreen.png"))]}
                        >  
                          <Image source={require("../../assets/AdventureGame/AvatarCustomization/Tops/vest/vestGreen.png")} style={styles.topOption}/>
                        </Pressable>

                        <Pressable 
                          style={[styles.selectButton, equippedTop == "vestPurple" ? styles.optionActive : styles.optionInactive,]}
                          onPress={()=> [setEquippedTop("vestPurple"), setTopShow(require("../../assets/AdventureGame/AvatarCustomization/Tops/vest/vestPurple.png"))]}
                        >  
                          <Image source={require("../../assets/AdventureGame/AvatarCustomization/Tops/vest/vestPurple.png")} style={styles.topOption}/>
                        </Pressable>

                        <Pressable 
                          style={[styles.selectButton, equippedTop == "vestRed" ? styles.optionActive : styles.optionInactive,]}
                          onPress={()=> [setEquippedTop("vestRed"), setTopShow(require("../../assets/AdventureGame/AvatarCustomization/Tops/vest/vestRed.png"))]}
                        >  
                          <Image source={require("../../assets/AdventureGame/AvatarCustomization/Tops/vest/vestRed.png")} style={styles.topOption}/>
                        </Pressable>
                        
                        <Pressable 
                          style={[styles.selectButton, equippedTop == "vestWhite" ? styles.optionActive : styles.optionInactive,]}
                          onPress={()=> [setEquippedTop("vestWhite"), setTopShow(require("../../assets/AdventureGame/AvatarCustomization/Tops/vest/vestWhite.png"))]}
                        >  
                          <Image source={require("../../assets/AdventureGame/AvatarCustomization/Tops/vest/vestWhite.png")} style={styles.topOption}/>
                        </Pressable>

                        <Pressable 
                          style={[styles.selectButton, equippedTop == "vestBlueWhite" ? styles.optionActive : styles.optionInactive,]}
                          onPress={()=> [setEquippedTop("vestBlueWhite"), setTopShow(require("../../assets/AdventureGame/AvatarCustomization/Tops/vest/vestBlueWhite.png"))]}
                        >  
                          <Image source={require("../../assets/AdventureGame/AvatarCustomization/Tops/vest/vestBlueWhite.png")} style={styles.topOption}/>
                        </Pressable>

                        <Pressable 
                          style={[styles.selectButton, equippedTop == "vestYellow" ? styles.optionActive : styles.optionInactive,]}
                          onPress={()=> [setEquippedTop("vestYellow"), setTopShow(require("../../assets/AdventureGame/AvatarCustomization/Tops/vest/vestYellow.png"))]}
                        >  
                          <Image source={require("../../assets/AdventureGame/AvatarCustomization/Tops/vest/vestYellow.png")} style={styles.topOption}/>
                        </Pressable>
                    </ScrollView>

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
                <Pressable style={styles.clothingButton} onPress={setCustomizationLoc}>
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