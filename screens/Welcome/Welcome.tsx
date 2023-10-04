import React, { useCallback } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import Logo from "../../components/Logo/Logo";
import Button from "../../components/Button/Button";

import styles from "./styles";

export default function Welcome() {
  return (
    <View>
      <Image
        source={require("../../assets/Images/welcomeImg.png")}
        resizeMode="cover"
        style={styles.backgroundImage}
      />
      <View style={styles.logoContainer}>
        <View style={styles.logo}>
          <Logo color="#F26F3F" height={50} width={50} />
        </View>
        <Text style={styles.logoText}>Duo</Text>
      </View>
      <View style={styles.btnContainer}>
        <Button
          title={"Login"}
          color={"#F26F3F"}
          textColor="white"
          borderWidth={true}
        />
        <Button title={"Register"} color={"transparent"} textColor="black" />
        <TouchableOpacity>
          <Text style={styles.text}>Continue as a guest</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
