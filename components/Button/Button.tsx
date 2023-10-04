import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

type ButtonProps = {
  title: string;
  color: string;
  textColor: string;
  borderWidth?: boolean;
};

export default function Button({
  title,
  color,
  textColor,
  borderWidth,
}: ButtonProps) {
  return (
    <TouchableOpacity
      style={[
        styles.btn,
        { backgroundColor: color },
        borderWidth && { borderWidth: 0 },
      ]}
    >
      <Text style={[styles.btnText, { color: textColor }]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: "100%",
    height: 56,
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    marginBottom: 20,
    borderWidth: 1,
    borderRadius: 8,
  },
  btnText: {
    textAlign: "center",
    fontSize: 15,
    fontWeight: "600",
  },
});
