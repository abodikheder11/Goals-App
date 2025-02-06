import { StyleSheet, Text, View, TextInput, Button, Pressable } from "react-native";

export default function GoalItem(props) {
  return (
    <View style={styles.goalsContainer}>

    <Pressable onPress={()=> props.onDeleteItem(props.id)} android_ripple={{color :"#210644"}}>
        <Text style={styles.goalText}>{props.text}</Text>
    </Pressable>
    </View>

  );
}
const styles = StyleSheet.create({
  goalsContainer: {
    borderWidth : 1,
    borderColor : "#333",
    margin : 8,
    backgroundColor :"#5e0acc",
    borderRadius : 6,

  },
  goalText:{
    fontSize : 16,
    color : "#fff",
    padding : 8,

  }
});
