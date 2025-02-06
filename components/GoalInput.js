import { StyleSheet, Text, View, TextInput, Button, Modal,Image } from "react-native";
import { useState } from "react";

export default function GoalInput(props) {
  const [inputText, setInputText] = useState("");

  function goalInputHandler(inputText) {
    setInputText(inputText);
  }

  function addGoal() {
    props.onAddGoal(inputText);
    setInputText("");
  }
  return (
    <Modal visible={props.visible} animationType="slide">

      <View style={styles.inputContainer}>
      <Image source={require('../assets/goal.png')} style={styles.image} />

        <TextInput
          style={styles.box}
          placeholder="Set Your Goal"
          onChangeText={goalInputHandler}
          value={inputText}
        />
        <View style={styles.buttonsBox}> 
        <View style={styles.button}>
        <Button title="Add Goal" onPress={addGoal} color="#5e0acc" />
        </View>
        <View style={styles.button} >
        <Button title="Cancel" onPress={props.onCancel} color="#f31282"/>
        </View>

        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor : "#311b6b"
  },
  box: {
    borderWidth: 1,
    height: 40,
    width: "90%",
    padding: 10,
    backgroundColor : "#efd0ff",
    borderColor : "#efd0ff",
    color : "#120438",
    borderRadius:6,
  },
  buttonsBox:{
    justifyContent : "center",
    flexDirection : "row",
  },
  button:{
    padding : 10,

  },
  image:{
    width:100,
    height : 100,
    margin : 10
  }
});
