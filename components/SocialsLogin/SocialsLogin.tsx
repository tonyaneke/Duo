import { View, Text } from "react-native";
import React from "react";
import Socials from "../Socials/Socials";
import Google from "../Socials/Google";

import styles from "./styles";

export default function SocialsLogin({ title }: { title: string }) {
  return (
    <>
      <View style={styles.login}>
        <View style={styles.line1}></View>
        <View>
          <Text style={styles.loginText}>{title}</Text>
        </View>
        <View style={styles.line2}></View>
      </View>
      <View style={styles.socialsContainer}>
        <Socials name={"facebook"} color={"#4092FF"} />
        <Google />
        <Socials name={"apple"} />
      </View>
    </>
  );
}
