import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Header from "../../components/Header/Header";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import SocialsLogin from "../../components/SocialsLogin/SocialsLogin";
import BottomText from "../../components/BottomText/BottomText";

import styles from "./styles";

export default function Registration() {
  const [visibility, setVisibility] = useState(false);
  const icon = visibility ? "eye" : "eye-slash";
  const hidePassword = visibility ? false : true;

  const handleVisibility = () => {
    setVisibility((prev) => !prev);
  };

  return (
    <SafeAreaView>
      <TouchableOpacity style={styles.backIcon}>
        <FontAwesome name="arrow-left" size={17} color={"#1E232C"} />
      </TouchableOpacity>
      <View style={styles.header}>
        <Header
          title="Hello! Register to get started"
          fontSize={30}
          width={280}
        />
      </View>
      <View style={styles.input}>
        <Input placeholder="Username" keyboardType={"email-address"} />
      </View>
      <View style={styles.input}>
        <Input placeholder="Email" keyboardType={"email-address"} />
      </View>
      <View style={styles.input}>
        <Input
          placeholder="Password"
          icon={icon}
          secureTextEntry={hidePassword}
          onPress={handleVisibility}
        />
      </View>
      <View style={styles.input}>
        <Input
          placeholder="Confirm Password"
          icon={icon}
          secureTextEntry={hidePassword}
          onPress={handleVisibility}
        />
      </View>
      <View style={styles.btn}>
        <Button
          title="Register"
          color="#F26F3F"
          textColor="white"
          borderWidth={true}
        />
      </View>

      <SocialsLogin title="Or Register with" />

      <View style={styles.bottomText}>
        <BottomText
          title="Already have an account? "
          clickableText="Login Now"
        />
      </View>
    </SafeAreaView>
  );
}
