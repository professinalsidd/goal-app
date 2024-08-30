import { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import GoalItems from "./components/goalItem";
import GoalInput from "./components/goalInput";
import { Button } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [allEnteredGoal, setAllEnteredGoal] = useState([]);

  const modalHandler = () => {
    setModalIsVisible(true);
  };
  const closeModalHandler = () => {
    setModalIsVisible(false);
  };

  function submitGoalsHandler(enterGoal) {
    setAllEnteredGoal((pres) => [
      ...pres,
      { goal: enterGoal, id: Math.random().toString() },
    ]);
    closeModalHandler();
  }

  function deleteGoalHandler(id) {
    setAllEnteredGoal(() => {
      return allEnteredGoal.filter((i) => i.id !== id);
    });
  }

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.container}>
        <Button color="#B15EFF" title="Add new Goal" onPress={modalHandler} />
        <GoalInput
          addGoal={submitGoalsHandler}
          isVisible={modalIsVisible}
          closeModal={closeModalHandler}
        />
        <View style={styles.textContainer}>
          <FlatList
            alwaysBounceVertical={false}
            data={allEnteredGoal}
            renderItem={(item) => {
              return (
                <GoalItems
                  text={item.item.goal}
                  id={item.item.id}
                  onDeleteItem={deleteGoalHandler}
                />
              );
            }}
            keyExtractor={(item) => {
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
    padding: 50,
    paddingHorizontal: 20,
  },
  textContainer: {
    flex: 5,
    marginTop: 20,
  },
});
