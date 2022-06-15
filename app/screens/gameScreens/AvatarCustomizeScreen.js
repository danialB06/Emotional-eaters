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
    
  const hairOptions = [
    {
      style: "Ponytail",
      options: [ 
        {
          name: "Ponytail Black",
          image: require("../../assets/AdventureGame/AvatarCustomization/Hair/ponytail/ponytailBlack.png"),
        },
        {
          name: "Ponytail Blond",
          image: require("../../assets/AdventureGame/AvatarCustomization/Hair/ponytail/ponytailBlond.png"),
        },
        {
          name: "Ponytail Blue",
          image: require("../../assets/AdventureGame/AvatarCustomization/Hair/ponytail/ponytailBlue.png"),
        },
        {
          name: "Ponytail Brown",
          image: require("../../assets/AdventureGame/AvatarCustomization/Hair/ponytail/ponytailBrown.png"),
        },
        {
          name: "Ponytail Gold",
          image: require("../../assets/AdventureGame/AvatarCustomization/Hair/ponytail/ponytailGold.png"),
        },
        {
          name: "Ponytail Green",
          image: require("../../assets/AdventureGame/AvatarCustomization/Hair/ponytail/ponytailGreen.png"), 
        },
        {
          name: "Ponytail Violet",
          image: require("../../assets/AdventureGame/AvatarCustomization/Hair/ponytail/ponytailViolet.png"),
        },    
      ],
    },
    {
      style: "Shoulder Length",
      options: [
        {
          name: "ShLengthBlack",
          image: require("../../assets/AdventureGame/AvatarCustomization/Hair/shoulderlength/shoulderLengthBlack.png"),
        },
        {
          name: "ShLengthBlond",
          image: require("../../assets/AdventureGame/AvatarCustomization/Hair/shoulderlength/shoulderLengthBlond.png"),
        },
        {
          name: "ShLengthBlue",
          image: require("../../assets/AdventureGame/AvatarCustomization/Hair/shoulderlength/shoulderLengthBlue.png"),
        },
        {
          name: "ShLengthBrown",
          image: require("../../assets/AdventureGame/AvatarCustomization/Hair/shoulderlength/shoulderLengthBrown.png"),
        },
        {
          name: "ShLengthGreen",
          image: require("../../assets/AdventureGame/AvatarCustomization/Hair/shoulderlength/shoulderLengthGreen.png"),
        },
        {
          name: "ShLengthPurple",
          image: require("../../assets/AdventureGame/AvatarCustomization/Hair/shoulderlength/shoulderLengthPurple.png"),
        }
      ]
    },
    {
      style: "Short",
      options: [
        {
          name: "ShortBlack",
          image: require("../../assets/AdventureGame/AvatarCustomization/Hair/short/shortBlack.png"),
        },
        {
          name: "ShortBlue",
          image: require("../../assets/AdventureGame/AvatarCustomization/Hair/short/shortBlue.png"),
        },
        {
          name: "ShortBrown",
          image: require("../../assets/AdventureGame/AvatarCustomization/Hair/short/shortBrown.png"),
        },
        {
          name: "ShortGold",
          image: require("../../assets/AdventureGame/AvatarCustomization/Hair/short/shortGold.png"),
        },
        {
          name: "ShortGreen",
          image: require("../../assets/AdventureGame/AvatarCustomization/Hair/short/shortGreen.png"),
        },
        {
          name: "ShortPink",
          image: require("../../assets/AdventureGame/AvatarCustomization/Hair/short/shortPink.png"),
        }
      ]
    },
    {
      style: "Spiky",
      options: [
        {
          name: "SpikyBlack",
          image: require("../../assets/AdventureGame/AvatarCustomization/Hair/spiky/spikyBlack.png"),
        },
        {
          name: "SpikyBlue",
          image: require("../../assets/AdventureGame/AvatarCustomization/Hair/spiky/spikyBlue.png"),
        },
        {
          name: "SpikyBlond",
          image: require("../../assets/AdventureGame/AvatarCustomization/Hair/spiky/spikyBlond.png"),
        },
        {
          name: "SpikyBrown",
          image: require("../../assets/AdventureGame/AvatarCustomization/Hair/spiky/spikyBrown.png"),
        },
        {
          name: "SpikyGray",
          image: require("../../assets/AdventureGame/AvatarCustomization/Hair/spiky/spikyGray.png"),
        },
        {
          name: "SpikyGreen",
          image: require("../../assets/AdventureGame/AvatarCustomization/Hair/spiky/spikyGreen.png"),
        },
        {
          name: "SpikyViolet",
          image: require("../../assets/AdventureGame/AvatarCustomization/Hair/spiky/spikyViolet.png"),
        }
      ]
    },
  ];
  
  const topOptions = [
    {
      style: "Vest",
      options: [ 
        {
          name: "VestBlue",
          image: require("../../assets/AdventureGame/AvatarCustomization/Tops/vest/vestBlue.png"),
        },
        {
          name: "VestBlueWhite",
          image: require("../../assets/AdventureGame/AvatarCustomization/Tops/vest/vestBlueWhite.png"),
        },
        {
          name: "VestGreen",
          image: require("../../assets/AdventureGame/AvatarCustomization/Tops/vest/vestGreen.png"),
        },
        {
          name: "VestPurple",
          image: require("../../assets/AdventureGame/AvatarCustomization/Tops/vest/vestPurple.png"),
        },
        {
          name: "VestRed",
          image: require("../../assets/AdventureGame/AvatarCustomization/Tops/vest/vestRed.png"),
        },
        {
          name: "VestGreen",
          image: require("../../assets/AdventureGame/AvatarCustomization/Tops/vest/vestWhite.png"), 
        },
        {
          name: "VestViolet",
          image: require("../../assets/AdventureGame/AvatarCustomization/Tops/vest/vestYellow.png"),
        },    
      ],
    },
    {
      style: "Martial Arts Top",
      options: [ 
        {
          name: "MABlack",
          image: require("../../assets/AdventureGame/AvatarCustomization/Tops/martial/martialBlack.png"),
        },
        {
          name: "MABlue",
          image: require("../../assets/AdventureGame/AvatarCustomization/Tops/martial/martialBlue.png"),
        },
        {
          name: "MAGreen",
          image: require("../../assets/AdventureGame/AvatarCustomization/Tops/martial/martialGreen.png"),
        },
        {
          name: "MAWhite",
          image: require("../../assets/AdventureGame/AvatarCustomization/Tops/martial/martialWhite.png"),
        },
      ],
    },
    {
      style: "Tanktop",
      options: [ 
        {
          name: "TTBlack",
          image: require("../../assets/AdventureGame/AvatarCustomization/Tops/tanktop/tanktopBlack.png"),
        },
        {
          name: "TTBlue",
          image: require("../../assets/AdventureGame/AvatarCustomization/Tops/tanktop/tanktopBlue.png"),
        },
        {
          name: "TTGreen",
          image: require("../../assets/AdventureGame/AvatarCustomization/Tops/tanktop/tanktopGreen.png"),
        },
        {
          name: "TTPurple",
          image: require("../../assets/AdventureGame/AvatarCustomization/Tops/tanktop/tanktopPurple.png"),
        },
        {
          name: "TTRed",
          image: require("../../assets/AdventureGame/AvatarCustomization/Tops/tanktop/tanktopRed.png"),
        },
        {
          name: "TTWhite",
          image: require("../../assets/AdventureGame/AvatarCustomization/Tops/tanktop/tanktopWhite.png"),
        },
        {
          name: "TTYellow",
          image: require("../../assets/AdventureGame/AvatarCustomization/Tops/tanktop/tanktopYellow.png"),
        },
      ],
    },
  ];
  
  const bottomOptions = [
    {
      style: "Jeans",
      options: [ 
        {
          name: "JeansBlack",
          image: require("../../assets/AdventureGame/AvatarCustomization/bottoms/jeans/jeansBlack.png"),
        },
        {
          name: "JeansBlue",
          image: require("../../assets/AdventureGame/AvatarCustomization/bottoms/jeans/jeansBlue.png"),
        },
        {
          name: "JeansGray",
          image: require("../../assets/AdventureGame/AvatarCustomization/bottoms/jeans/jeansGray.png"),
        },
        {
          name: "JeansGreen",
          image: require("../../assets/AdventureGame/AvatarCustomization/bottoms/jeans/jeansGreen.png"),
        },
        {
          name: "JeansRed",
          image: require("../../assets/AdventureGame/AvatarCustomization/bottoms/jeans/jeansRed.png"),
        },
        {
          name: "JeansWhite",
          image: require("../../assets/AdventureGame/AvatarCustomization/bottoms/jeans/jeansWhite.png"), 
        },
        {
          name: "JeansYellow",
          image: require("../../assets/AdventureGame/AvatarCustomization/bottoms/jeans/jeansYellow.png"),
        },    
      ],
    },
    {
      style: "Shorts and Vests",
      options: [ 
        {
          name: "ShortsBlue",
          image: require("../../assets/AdventureGame/AvatarCustomization/bottoms/shorts/shortsBlue.png"),
        },
        {
          name: "ShortsBlack",
          image: require("../../assets/AdventureGame/AvatarCustomization/bottoms/shorts/shortsBlack.png"),
        },
        {
          name: "ShortsGreen",
          image: require("../../assets/AdventureGame/AvatarCustomization/bottoms/shorts/shortsGreen.png"),
        },
        {
          name: "ShortsPink",
          image: require("../../assets/AdventureGame/AvatarCustomization/bottoms/shorts/shortsPink.png"),
        },
        {
          name: "ShortsRed",
          image: require("../../assets/AdventureGame/AvatarCustomization/bottoms/shorts/shortsRed.png"),
        },
        {
          name: "ShortsWhite",
          image: require("../../assets/AdventureGame/AvatarCustomization/bottoms/shorts/shortsWhite.png"), 
        }, 
      ],
    },
    {
      style: "Alto",
      options: [ 
        {
          name: "AltoBlack",
          image: require("../../assets/AdventureGame/AvatarCustomization/bottoms/alto/altoBlack.png"),
        },
        {
          name: "AltoBlue",
          image: require("../../assets/AdventureGame/AvatarCustomization/bottoms/alto/altoBlue.png"),
        },
        {
          name: "AltoGreen",
          image: require("../../assets/AdventureGame/AvatarCustomization/bottoms/alto/altoGreen.png"),
        },
        {
          name: "AltoPurple",
          image: require("../../assets/AdventureGame/AvatarCustomization/bottoms/alto/altoPurple.png"),
        },
        {
          name: "AltoRed",
          image: require("../../assets/AdventureGame/AvatarCustomization/bottoms/alto/altoRed.png"),
        },
        {
          name: "AltoYellow",
          image: require("../../assets/AdventureGame/AvatarCustomization/bottoms/alto/altoYellow.png"), 
        }, 
      ],
    },
  ];

  const feetOptions = [
    {
      style: "Combat Boots",
      options: [ 
        {
          name: "CBBlack",
          image: require("../../assets/AdventureGame/AvatarCustomization/feet/combatBoots/cbootsBlack.png"),
        },
        {
          name: "CBBlue",
          image: require("../../assets/AdventureGame/AvatarCustomization/feet/combatBoots/cbootsBlue.png"),
        },
        {
          name: "CBPink",
          image: require("../../assets/AdventureGame/AvatarCustomization/feet/combatBoots/cbootsPink.png"),
        },
        {
          name: "CBRed",
          image: require("../../assets/AdventureGame/AvatarCustomization/feet/combatBoots/cbootsRed.png"),
        },
        {
          name: "CBWhite",
          image: require("../../assets/AdventureGame/AvatarCustomization/feet/combatBoots/cbootsWhite.png"),
        },
      ],
    },
    {
      style: "Leather Boots",
      options: [ 
        {
          name: "LeatherBBlack",
          image: require("../../assets/AdventureGame/AvatarCustomization/feet/fantasyBoots/bootsBlack.png"),
        },
        {
          name: "LeatherBBlue",
          image: require("../../assets/AdventureGame/AvatarCustomization/feet/fantasyBoots/bootsBlue.png"),
        },
        {
          name: "LeatherBBrown",
          image: require("../../assets/AdventureGame/AvatarCustomization/feet/fantasyBoots/bootsBrown.png"),
        },
        {
          name: "LeatherBGreen",
          image: require("../../assets/AdventureGame/AvatarCustomization/feet/fantasyBoots/bootsGreen.png"),
        },
        {
          name: "LeatherBPink",
          image: require("../../assets/AdventureGame/AvatarCustomization/feet/fantasyBoots/bootsPink.png"),
        },
        {
          name: "LeatherBRed",
          image: require("../../assets/AdventureGame/AvatarCustomization/feet/fantasyBoots/bootsRed.png"),
        },
        {
          name: "LeatherBWhite",
          image: require("../../assets/AdventureGame/AvatarCustomization/feet/fantasyBoots/bootsWhite.png"),
        },
      ],
    },
    {
      style: "Sneakers",
      options: [ 
        {
          name: "SneakersBlack",
          image: require("../../assets/AdventureGame/AvatarCustomization/feet/sneakers/sneakersBlack.png"),
        },
        {
          name: "SneakersBlue",
          image: require("../../assets/AdventureGame/AvatarCustomization/feet/sneakers/sneakersBlue.png"),
        },
        {
          name: "SneakersGreen",
          image: require("../../assets/AdventureGame/AvatarCustomization/feet/sneakers/sneakersGreen.png"),
        },
        {
          name: "SneakersPink",
          image: require("../../assets/AdventureGame/AvatarCustomization/feet/sneakers/sneakersPink.png"),
        },
        {
          name: "SneakersPurple",
          image: require("../../assets/AdventureGame/AvatarCustomization/feet/sneakers/sneakersPurple.png"),
        },
        {
          name: "SneakersRed",
          image: require("../../assets/AdventureGame/AvatarCustomization/feet/sneakers/sneakersRed.png"),
        },
        {
          name: "SneakersYellow",
          image: require("../../assets/AdventureGame/AvatarCustomization/feet/sneakers/sneakersYellow.png"),
        },
      ],
    },
  ];

  //Hair Mapper
  const [equippedHair, SetEquippedHair] = useState(require("../../assets/AdventureGame/AvatarCustomization/Hair/empty.png"));
  const [chosenHair, setChosenHair] = useState(null);
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
  const [chosenTop, setChosenTop] = useState(null);
  const [topShow, setTopShow] = useState(false);
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
  const [chosenBottom, setChosenBottom] = useState(null);
  const [bottomsShow, setBottomShow] = useState("this");
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
                onPress={()=> [setChosenTop(bottomcolor.name), setBottomShow(bottomcolor.image)]}
                style={[styles.selectButton, chosenTop == bottomcolor.name ? styles.optionActive : styles.optionInactive,]} 
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
  const [chosenFeet, setChosenFeet] = useState(null);
  const [feetShow, setFeetShow] = useState("this");
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



  
   

    
    const [equippedTop, setEquippedTop] = useState(false);


    const [equippedBottoms, setEquippedBottoms] = useState("this");


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