import { View, StyleSheet, Text, Pressable } from "react-native";
import { useState } from 'react';
import AvatarData from './AvatarData';
import MonsterData from './MonsterData';

//Game Elements
export default function StartGameScreen({ navigation }) {
    return(
        <View>
            <Text>Select your outfit</Text>
            <Pressable>
                <Text>Hair</Text>
            </Pressable>
            <Pressable>
                <Text>Eyes</Text>
            </Pressable>
            <Pressable>
                <Text>Mouth</Text>
            </Pressable>
            <Pressable>
                <Text>Top</Text>
            </Pressable>
            <Pressable>
                <Text>Bottoms</Text>
            </Pressable>
            <Pressable>
                <Text>Feet</Text>
            </Pressable>
            <AvatarData/>
        </View>
    )
}