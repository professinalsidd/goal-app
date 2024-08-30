import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const GoalItems = (props) => {
  return (
    <View style={styles.goalContainer}>
      <Pressable
        android_ripple={{ color: "#E5CFF7" }}
        onPress={props.onDeleteItem.bind(this, props.id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItems;

const styles = StyleSheet.create({
  goalContainer: {
    backgroundColor: "#7743DB",
    margin: 5,
    borderRadius: 5,
  },
  pressedItem: {
    opacity: 0.6,
  },
  goalText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
    padding: 5,
  },
});
