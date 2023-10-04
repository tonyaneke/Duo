import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";

type SocialsProps = { name: any; color?: string };

export default function Socials({ name, color }: SocialsProps) {
  return (
    <TouchableOpacity style={styles.container}>
      <FontAwesome name={name} size={26} color={color} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 105,
    height: 56,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#E8ECF4",
    justifyContent: "center",
    alignItems: "center",
  },
});
