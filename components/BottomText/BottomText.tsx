import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

import styles from "./styles";

export default function BottomText({
  title,
  clickableText,
}: {
  title: string;
  clickableText: string;
}) {
  return (
    <>
      <Text style={styles.text}>{title}</Text>
      <TouchableOpacity>
        <Text style={styles.clickableText}>{clickableText}</Text>
      </TouchableOpacity>
    </>
  );
}
