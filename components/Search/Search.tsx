import {
  View,
  TextInput,
  StyleSheet,
  Touchable,
  TouchableOpacity,
  Pressable,
} from "react-native";
import React, { useState, useRef, useEffect } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";

type SearchProps = {
  onPress?: () => void;
};

export default function search({ onPress }: SearchProps) {
  const [value, setValue] = useState<string>("");
  const [active, setActive] = useState<boolean>(false);
  const inputElement = useRef<TextInput>(null);

  const focusInput = () => {
    if (inputElement.current) inputElement.current?.focus();
    setActive(true);
  };

  return (
    <Pressable
      style={[
        styles.searchContainer,
        active && { borderWidth: 1, borderColor: "black" },
      ]}
      onPress={focusInput}
    >
      <TextInput
        returnKeyType="search"
        value={value}
        ref={inputElement}
        placeholder={"Enter a keyword..."}
        onChangeText={(value) => {
          setValue(value);
        }}
        onBlur={() => setActive(false)}
      />
      <TouchableOpacity onPress={onPress}>
        <FontAwesome name={"search"} color={"#F26F3F"} size={25} />
      </TouchableOpacity>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    height: 70,
    borderColor: "#E8ECF4",
    backgroundColor: "white",
    paddingHorizontal: 20,
    borderRadius: 20,
  },
});
