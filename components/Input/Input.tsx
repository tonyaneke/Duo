import {
  View,
  TextInput,
  StyleSheet,
  Touchable,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";

type InputProps = {
  placeholder: string;
  icon?: any;
  keyboardType?: any;
  secureTextEntry?: boolean;
  onPress?: () => void;
};

export default function Input({
  placeholder,
  icon,
  keyboardType = "default",
  secureTextEntry,
  onPress,
}: InputProps) {
  const [value, setValue] = useState("");
  return (
    <View style={styles.inputContainer}>
      <TextInput
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        value={value}
        placeholder={placeholder}
        onChangeText={(value) => {
          setValue(value);
        }}
      />
      <TouchableOpacity onPress={onPress}>
        <FontAwesome name={icon} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: 56,
    borderWidth: 1,
    borderColor: "#E8ECF4",
    backgroundColor: "#F7F8F9",
    paddingHorizontal: 20,
    borderRadius: 8,
  },
});
