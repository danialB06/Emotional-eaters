import { View, StyleSheet, Text, Button, Image } from "react-native";
import { TouchableOpacity } from "react-native";
import { useEffect } from "react";
import { Switch } from 'react-native-switch';

export default function HomeScreen({ navigation }) {
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Button
          onPress={() => navigation.navigate("ProfileScreen")}
          title="Profile"
          color="black"
        />
      ),
    });
  });

  return (
    <View style={styles.container}>
      <View style={styles.streakCircle}>
        <Text style={styles.streakText}>Exercise Streak</Text>
        <View style={styles.streakNumberContainer}>
          <Image source={require("../../assets/homescreen/streakFire.png")} />
          <Text style={styles.streakNumber}>1</Text>
        </View>
      </View>
      
      <Switch
    value={true}
    onValueChange={(val) => console.log(val)}
    disabled={false}
    activeText={'On'}
    inActiveText={'Off'}
    circleSize={30}
    barHeight={1}
    circleBorderWidth={3}
    backgroundActive={'green'}
    backgroundInactive={'gray'}
    circleActiveColor={'#30a566'}
    circleInActiveColor={'#000000'}
    renderInsideCircle={() => <Image source={require("../../assets/homescreen/streakFire.png")} />} // custom component to render inside the Switch circle (Text, Image, etc.)
    changeValueImmediately={true} // if rendering inside circle, change state immediately or wait for animation to complete
    innerCircleStyle={{ alignItems: "center", justifyContent: "center" }} // style for inner animated circle for what you (may) be rendering inside the circle
    outerCircleStyle={{}} // style for outer animated circle
    renderActiveText={false}
    renderInActiveText={false}
    switchLeftPx={2} // denominator for logic when sliding to TRUE position. Higher number = more space from RIGHT of the circle to END of the slider
    switchRightPx={2} // denominator for logic when sliding to FALSE position. Higher number = more space from LEFT of the circle to BEGINNING of the slider
    switchWidthMultiplier={2} // multiplied by the `circleSize` prop to calculate total width of the Switch
    switchBorderRadius={30} // Sets the border Radius of the switch slider. If unset, it remains the circleSize.
  />
      
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("AllGoalsScreen")}
      >
        <View style={styles.goalsButton}>
          <Image
            style={styles.flagImage}
            source={require("../../assets/homescreen/flag.png")}
          />
          <Text style={styles.goalsText}>Goals</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 100,
    width: "50%",
  },
  container: {
    flex: 1,
    backgroundColor: "#B8D5EC",
    alignItems: "center",
  },
  streakCircle: {
    backgroundColor: "#fff",
    borderRadius: 1000,
    borderWidth: 1,
    borderColor: "#063559",
    width: "75%",
    height: "45%",
    alignContent: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  goalsButton: {
    backgroundColor: "#6A869B",
    flexDirection: "row",
    borderRadius: 50,
    alignContent: "center",
    justifyContent: "center",
  },
  goalsText: {
    color: "white",
    fontSize: 24,
    fontWeight: "600",
    textAlign: "center",
    padding: 10,
  },
  streakText: {
    color: "#063559",
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
  streakNumberContainer: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 20,
  },
  streakNumber: {
    color: "#063559",
    fontSize: 60,
    fontWeight: "900",
    textAlign: "center",
  },
  flagImage: {
    marginTop: 10,
    width: 24,
    height: 25,
  },
});
