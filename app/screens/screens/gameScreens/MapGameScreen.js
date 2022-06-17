import { View, StyleSheet, Text, Pressable, SafeAreaView, ScrollView, StatusBar  } from "react-native";
import MonsterData from './MonsterData';
import MapNodes from './MapNodes';

/*Map size
  Height: 1000px;
  Width: 2000px;
*/

//Game Elements
export default function MapGameScreen({ navigation }) {
  return(
    <SafeAreaView style={styles.container}>
      <ScrollView horizontal = {true} style={styles.scrollView}>
        <MapNodes/>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: 'pink',
  },
  text: {
    fontSize: 42,
  },
});