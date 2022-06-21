import * as React from 'react';
import { Text, View, StyleSheet, ListItem, Switch, useState } from 'react-native';
import { Image, Button } from 'react-native';
import { Pressable } from 'react-native';


export default function AlarmsScreen({ navigation }) {
    return ( 
    <View style = { styles.container } >
        <Text style = { styles.title } > Notifications </Text>
        <Pressable onPress = { () => navigation.navigate('NewAlarmScreen.js') } >
        <Image style = { styles.addImage } source = { require('./../../assets/homescreen/goalsscreen/add.png') }/>
        </Pressable>

        <View style = { styles.TitleContainer } >
        <Text style = { styles.alarmTitle } > Body Scan </Text>
        <Text style = { styles.alarmTime } > 08:00 AM </Text>
        <Switch style = { styles.addswitch }
        trackColor = { { false: "#767577", true: "#2C6975" } }
        ios_backgroundColor = "#3e3e3e" />
        </View>

        <View style = { styles.TitleContainer2 }>
        <Text style = { styles.alarmTitle } > Opposite Action </Text>
        <Text style = { styles.alarmTime } > 17:30 PM </Text>
        <Switch style = { styles.addswitch }
        trackColor = { { false: "#767577", true: "#2C6975" } }
        ios_backgroundColor = "#3e3e3e" />
        </View>

        <View style = { styles.TitleContainer2 }>
        <Text style = { styles.alarmTitle } > Possitive Reframing </Text>
        <Text style = { styles.alarmTime } > 22:00 PM </Text>
        <Switch style = { styles.addswitch }
        trackColor = { { false: "#767577", true: "#2C6975" } }
        ios_backgroundColor = "#3e3e3e" />
        </View>
    </View>

    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#CDE0C9',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontWeight: 'bold',
        color: '#2C6975',
        fontSize: 30,
    },
    addImage: {
        width: 25,
        height: 25,
        marginHorizontal: 20,
        marginTop: 20,
        position: 'absolute',
        right: -160,
    },
    addswitch: {
        width: 25,
        height: 25,
        marginHorizontal: 20,
        marginTop: 0,
        position: 'absolute',
        right: 0,
    },

    TitleContainer: {
        marginTop: 60,
        marginHorizontal: 20,
        width: '80%',
        height: 70,
        borderRadius: 50,
        borderColor: '#2C6975',
        borderWidth: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    TitleContainer2: {
        marginTop: 10,
        marginHorizontal: 20,
        width: '80%',
        height: 70,
        borderRadius: 50,
        borderColor: '#2C6975',
        borderWidth: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
    },
    alarmTitle: {
        marginLeft: 25,
        fontWeight: 'bold',
        color: '#2C6975',
        fontSize: 15,
    },
    alarmTime: {
        marginLeft: 25,
        fontWeight: 'bold',
        color: '#2C6975',
        fontSize: 25,
    },
});