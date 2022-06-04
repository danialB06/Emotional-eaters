import { View, StyleSheet, Text, Pressable, Image, Modal, ScrollView } from "react-native";
import { useState } from 'react';

export default function AvatarCustomizeScreen({ navigation }) {
    const [clothingModalShow, setClothingModalShow] = useState(false);

    const [hairShow, setHairShow] = useState(require("../../assets/AdventureGame/AvatarCustomization/Hair/empty.png"));
    const [equippedHair, SetEquippedHair] = useState("this");

    const [topShow, setTopShow] = useState("this");
    const [bottomShow, setBottomShow] = useState("this");
    const [feetShow, setFeetShow] = useState("this");
    const [faceShow1, setFaceShow1] = useState("this");
    const [faceShow2, setFaceShow2] = useState("this");
    const [accShow, setAccShow] = useState("this");

    return(
        <View>
            <Modal animationType="slide" transparent={false} visible={clothingModalShow} onRequestClose={()=>{setclothingModalShow(!clothingModalShow)}}>
                <View style={styles.modal}>
                    <ScrollView horizontal = {true}> 
                        <Pressable 
                            style={[styles.selectButton, equippedHair == "ponytailBlack" ? styles.optionActive : styles.optionInactive,]}
                            onPress={()=> [SetEquippedHair("ponytailBlack"), setHairShow(require("../../assets/AdventureGame/AvatarCustomization/Hair/ponytail/ponytailBlack.png"))]}
                        >
                            <Image source={require("../../assets/AdventureGame/AvatarCustomization/Hair/ponytail/ponytailBlack.png")}/>   
                        </Pressable>

                        <Pressable 
                            style={[styles.selectButton, equippedHair == "ponytailBlond" ? styles.optionActive : styles.optionInactive,]}
                            onPress={()=> [SetEquippedHair("ponytailBlond"), setHairShow(require("../../assets/AdventureGame/AvatarCustomization/Hair/ponytail/ponytailBlond.png"))]}
                        >    
                            <Image source={require("../../assets/AdventureGame/AvatarCustomization/Hair/ponytail/ponytailBlond.png")}/>
                        </Pressable>

                        <Pressable 
                            style={[styles.selectButton, equippedHair == "ponytailBlue" ? styles.optionActive : styles.optionInactive,]}
                            onPress={()=> [SetEquippedHair("ponytailBlue"), setHairShow(require("../../assets/AdventureGame/AvatarCustomization/Hair/ponytail/ponytailBlue.png"))]}
                        >    
                            <Image source={require("../../assets/AdventureGame/AvatarCustomization/Hair/ponytail/ponytailBlue.png")}/>
                        </Pressable>

                        <Pressable 
                            style={[styles.selectButton, equippedHair == "ponytailBrown" ? styles.optionActive : styles.optionInactive,]}
                            onPress={()=> [SetEquippedHair("ponytailBrown"), setHairShow(require("../../assets/AdventureGame/AvatarCustomization/Hair/ponytail/ponytailBrown.png"))]}
                        >    
                            <Image source={require("../../assets/AdventureGame/AvatarCustomization/Hair/ponytail/ponytailBrown.png")}/>
                        </Pressable>

                        <Pressable 
                            style={[styles.selectButton, equippedHair == "ponytailGold" ? styles.optionActive : styles.optionInactive,]}
                            onPress={()=> [SetEquippedHair("ponytailGold"), setHairShow(require("../../assets/AdventureGame/AvatarCustomization/Hair/ponytail/ponytailGold.png"))]}
                        >    
                            <Image source={require("../../assets/AdventureGame/AvatarCustomization/Hair/ponytail/ponytailGold.png")}/>
                        </Pressable>

                        <Pressable 
                            style={[styles.selectButton, equippedHair == "ponytailGreen" ? styles.optionActive : styles.optionInactive,]}
                            onPress={()=> [SetEquippedHair("ponytailGreen"), setHairShow(require("../../assets/AdventureGame/AvatarCustomization/Hair/ponytail/ponytailGreen.png"))]}
                        >    
                            <Image source={require("../../assets/AdventureGame/AvatarCustomization/Hair/ponytail/ponytailGreen.png")}/>
                        </Pressable>

                        <Pressable 
                            style={[styles.selectButton, equippedHair == "ponytailViolet" ? styles.optionActive : styles.optionInactive,]}
                            onPress={()=> [SetEquippedHair("ponytailViolet"), setHairShow(require("../../assets/AdventureGame/AvatarCustomization/Hair/ponytail/ponytailViolet.png"))]}
                        >  
                            <Image source={require("../../assets/AdventureGame/AvatarCustomization/Hair/ponytail/ponytailViolet.png")}/>
                        </Pressable>
                    </ScrollView>
                    <ScrollView horizontal = {true}>
                        <Pressable 
                            style={[styles.selectButton, equippedHair == "shoulderLengthBlack" ? styles.optionActive : styles.optionInactive,]}
                            onPress={()=> [SetEquippedHair("shoulderLengthBlack"), setHairShow(require("../../assets/AdventureGame/AvatarCustomization/Hair/shoulderlength/shoulderLengthBlack.png"))]}
                        >  
                            <Image source={require("../../assets/AdventureGame/AvatarCustomization/Hair/shoulderlength/shoulderLengthBlack.png")}/>
                        </Pressable>

                        <Pressable 
                            style={[styles.selectButton, equippedHair == "shoulderLengthBlond" ? styles.optionActive : styles.optionInactive,]}
                            onPress={()=> [SetEquippedHair("shoulderLengthBlond"), setHairShow(require("../../assets/AdventureGame/AvatarCustomization/Hair/shoulderlength/shoulderLengthBlond.png"))]}
                        >      
                            <Image source={require("../../assets/AdventureGame/AvatarCustomization/Hair/shoulderlength/shoulderLengthBlond.png")}/>
                        </Pressable>

                        <Pressable 
                            style={[styles.selectButton, equippedHair == "shoulderLengthBlue" ? styles.optionActive : styles.optionInactive,]}
                            onPress={()=> [SetEquippedHair("shoulderLengthBlue"), setHairShow(require("../../assets/AdventureGame/AvatarCustomization/Hair/shoulderlength/shoulderLengthBlue.png"))]}
                        >         
                            <Image source={require("../../assets/AdventureGame/AvatarCustomization/Hair/shoulderlength/shoulderLengthBlue.png")}/>
                        </Pressable> 

                        <Pressable 
                            style={[styles.selectButton, equippedHair == "shoulderLengthBrown" ? styles.optionActive : styles.optionInactive,]}
                            onPress={()=> [SetEquippedHair("shoulderLengthBrown"), setHairShow(require("../../assets/AdventureGame/AvatarCustomization/Hair/shoulderlength/shoulderLengthBrown.png"))]}
                        >     
                            <Image source={require("../../assets/AdventureGame/AvatarCustomization/Hair/shoulderlength/shoulderLengthBrown.png")}/>
                        </Pressable>

                        <Pressable 
                            style={[styles.selectButton, equippedHair == "shoulderLengthGreen" ? styles.optionActive : styles.optionInactive,]}
                            onPress={()=> [SetEquippedHair("shoulderLengthGreen"), setHairShow(require("../../assets/AdventureGame/AvatarCustomization/Hair/shoulderlength/shoulderLengthGreen.png"))]}
                        >   
                            <Image source={require("../../assets/AdventureGame/AvatarCustomization/Hair/shoulderlength/shoulderLengthGreen.png")}/>
                        </Pressable>

                        <Pressable 
                            style={[styles.selectButton, equippedHair == "shoulderLengthPurple" ? styles.optionActive : styles.optionInactive,]}
                            onPress={()=> [SetEquippedHair("shoulderLengthPurple"), setHairShow(require("../../assets/AdventureGame/AvatarCustomization/Hair/shoulderlength/shoulderLengthPurple.png"))]}
                        >   
                            <Image source={require("../../assets/AdventureGame/AvatarCustomization/Hair/shoulderlength/shoulderLengthPurple.png")}/>
                        </Pressable>
                    </ScrollView>
                    <Pressable style={styles.clothingButton} onPress={()=> setClothingModalShow(false)}>
                        <Text style={styles.clothingButtonText}>Back</Text>
                    </Pressable>
                </View>
            </Modal>

            <View style={styles.rowClothing}>
                <Pressable style={styles.clothingButton} onPress={()=> setClothingModalShow(true)}>
                    <Image source={require("../../assets/AdventureGame/AvatarCustomization/ui/hairIcon.png")}/>
                    <Text style={styles.clothingButtonText}>Hair</Text>
                </Pressable>
                <Pressable style={styles.clothingButton}>
                    <Image source={require("../../assets/AdventureGame/AvatarCustomization/ui/topIcon.png")}/>
                    <Text style={styles.clothingButtonText}>Tops</Text>
                </Pressable>
                <Pressable style={styles.clothingButton}>
                    <Image source={require("../../assets/AdventureGame/AvatarCustomization/ui/bottomIcon.png")}/>
                    <Text style={styles.clothingButtonText}>Bottoms</Text>
                </Pressable>
                <Pressable style={styles.clothingButton}>
                    <Image source={require("../../assets/AdventureGame/AvatarCustomization/ui/feetIcon.png")}/>
                    <Text style={styles.clothingButtonText}>Feet</Text>
                </Pressable>
                <Pressable style={styles.clothingButton}>
                    <Image source={require("../../assets/AdventureGame/AvatarCustomization/ui/feetIcon.png")}/>
                    <Text style={styles.clothingButtonText}>Face</Text>
                </Pressable>
                <Pressable style={styles.clothingButton}>
                    <Image source={require("../../assets/AdventureGame/AvatarCustomization/ui/feetIcon.png")}/>
                    <Text style={styles.clothingButtonText}>Accessories</Text>
                </Pressable>
            </View>

            <View style={styles.avatarImg}>
                <Image source={require("../../assets/AdventureGame/avatarBody.png")}/>
                <Image source={hairShow} style={styles.hairPosition}/>
            </View>
            
            <View style={styles.rowButtons}>
                <Pressable style={styles.clothingButton} onPress={()=> navigation.navigate("Adventure Game")}>
                        <Text style={styles.clothingButtonText}>Quit</Text>
                </Pressable>
                <Pressable style={styles.clothingButton} onPress={()=> navigation.navigate("Adventure Game")}>
                        <Text style={styles.clothingButtonText}>Save Outfit</Text>
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
});