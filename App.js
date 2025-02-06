import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  FlatList,
  Image,
} from "react-native";
import { useState } from "react";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [goals, setGoals] = useState([]);
  const [isModelVisible, setIsModelVisible] = useState(false);

  const AddGoal = (inputText) => {
    setGoals((currentGoals) => [
      ...currentGoals,
      { text: inputText, id: Math.random().toString() },
    ]);
    endAddGoalHadler();
  };

  function deleteGoalHandler(id) {
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== id);
    });
  }

  function startAddGoalHandler() {
    setIsModelVisible(true);
  }

  function endAddGoalHadler() {
    setIsModelVisible(false);
  }

  return (
    <>
      {" "}
      <StatusBar style="light"/>
      <View style={styles.container}>
        <Button
          title="Add New Goal"
          color="#a065ec"
          onPress={startAddGoalHandler}
        />
        <GoalInput
          onAddGoal={AddGoal}
          visible={isModelVisible}
          onCancel={endAddGoalHadler}
        />
        <View style={styles.goalsContainer}>
          <FlatList
            renderItem={(itemData) => {
              return (
                <GoalItem
                  onDeleteItem={deleteGoalHandler}
                  text={itemData.item.text}
                  id={itemData.item.id}
                />
              );
            }}
            data={goals}
            keyExtractor={(item, index) => {
              return item.id;
            }}
          />
        </View>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomColor: "#cccccc",
    borderBottomWidth: 1,
    alignItems: "center",
    marginBottom: 20,
  },
  box: {
    borderWidth: 1,
    borderColor: "#cccccc",
    height: 40,
    width: "70%",
    padding: 10,
  },
  goalsContainer: {
    flex: 5,
  },
});
