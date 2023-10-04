import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";

type CounterProps = {
  numberOfProducts: number;
  handleCounter: (el: number) => void;
};

export default function Counter({
  numberOfProducts,
  handleCounter,
}: CounterProps) {
  const [count, setCount] = useState(1);
  numberOfProducts = count;

  const handlePlus = () => {
    setCount(count + 1);
    handleCounter(count);
  };

  const handleMinus = () => {
    setCount(count - 1);
    handleCounter(count);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.counter} onPress={handleMinus}>
        <FontAwesome name="minus" size={15} />
      </TouchableOpacity>
      <View>
        <Text style={styles.number}>{numberOfProducts}</Text>
      </View>
      <TouchableOpacity style={styles.counter2} onPress={handlePlus}>
        <FontAwesome name="plus" size={15} color={"white"} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 15,
  },
  counter: {},
  counter2: {
    backgroundColor: "#F26F3F",
    justifyContent: "center",
    padding: 5,
    borderRadius: 6,
  },
  number: {
    fontSize: 24,
    fontWeight: "700",
  },
});
