import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";

type ListProps = {
  name: any;
  title: string;
};

export default function List({ name, title }: ListProps) {
  const [focus, setFocus] = useState(false);
  return (
    <Pressable
      style={[styles.list, focus && { borderWidth: 1 }]}
      onPress={() => setFocus(true)}
    >
      <View>
        <FontAwesome name={name} size={24} color={"black"} />
      </View>
      <View>
        <Text>{title}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  list: {
    width: "100%",
    height: 70,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 30,
    shadowColor: "rgba(0, 0, 0, 0.06)",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    backgroundColor: "#FFF",
    borderRadius: 25,
  },
});
