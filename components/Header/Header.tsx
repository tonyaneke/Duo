import { View, Text, StyleSheet } from "react-native";
import React from "react";

type HeaderProps = {
  title: string;
  fontSize: number;
  color?: string;
  width?: number;
};

export default function Header({ title, fontSize, color, width }: HeaderProps) {
  return (
    <Text
      style={[
        styles.headerText,
        { fontSize: fontSize, color: color, width: width },
      ]}
    >
      {title}
    </Text>
  );
}

const styles = StyleSheet.create({
  headerText: {
    color: "#1E232C",
    fontSize: 34,
    fontWeight: "700",
    lineHeight: 40 /* 39px */,
    letterSpacing: -0.3,
  },
});
