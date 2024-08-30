import {
  Alert,
  Button,
  Modal,
  Platform,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import { Image } from "react-native";

const GoalInput = (props) => {
  const [enterGoal, setEnterGoal] = useState("");
  function addGoalsHandler(text) {
    setEnterGoal(text);
  }
  const addHandler = () => {
    if (enterGoal.length > 0) {
      props.addGoal(enterGoal);
      setEnterGoal("");
    } else {
      Alert.alert("Please enter some input");
    }
  };
  return (
    <Modal visible={props.isVisible} animationType="fade">
      <View style={styles.textInputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />
        <TextInput
          style={styles.input}
          onChangeText={addGoalsHandler}
          placeholder="Enter your goals"
          value={enterGoal}
          placeholderTextColor="#120438"
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" color="#DA0C81" onPress={props.closeModal} />
          </View>
          <View style={styles.button}>
            <Button title="Add Goal" color="#BEADFA" onPress={addHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  textInputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#7743DB",
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderRadius: 6,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    padding: 10,
    color: "#120438",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    marginTop: 10,
    marginHorizontal: 10,
  },
  image: {
    width: 100,
    height: 100,
    resizeMode: "contain",
    marginBottom: 10,
  },
});
