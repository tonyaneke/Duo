import { View, Text, Pressable, Image } from "react-native";
import React from "react";
import MoreIcon from "../SvgComponents/MoreIcon";

import styles from "./styles";

type CheckoutProps = {
  openOrderInfo: boolean;
  handleOrderInfo: () => void;
  total: number;
  data: any;
  tax: number;
  totalOrderPrice: number;
};

export default function Checkout({
  openOrderInfo,
  handleOrderInfo,
  total,
  data,
  tax,
  totalOrderPrice,
}: CheckoutProps) {
  return (
    <>
      {openOrderInfo && (
        <View>
          <Pressable style={styles.orderInfoHead} onPress={handleOrderInfo}>
            <MoreIcon width={30} height={30} color="black" />
          </Pressable>
          <Text style={styles.orderheaderText}>Order Information</Text>
          <View style={styles.orderPrice}>
            <View style={styles.dice}>
              <View style={styles.diceImage}>
                <Image source={require("../../assets/Images/dice.png")} />
              </View>
              <Text style={styles.orderInfoText}>
                Number of products ({data.length}): {totalOrderPrice}
              </Text>
            </View>
            <View style={styles.dollar}>
              <View style={styles.dollarImage}>
                <Image source={require("../../assets/Images/dollar.png")} />
              </View>
              <Text style={styles.orderInfoText}>Tax: {tax}</Text>
            </View>
          </View>
          <View style={styles.total}>
            <Text style={styles.orderInfoText}>Total</Text>
            <Text style={styles.orderInfoText}>${total}</Text>
          </View>
        </View>
      )}
      {openOrderInfo ? null : (
        <Pressable
          style={[styles.orderInfoHead, { transform: "rotate(180deg)" }]}
          onPress={handleOrderInfo}
        >
          <MoreIcon width={30} height={30} color="black" />
        </Pressable>
      )}
      <View style={styles.btnContainer}>
        <Pressable style={styles.buyButton}>
          <Text style={styles.btnText}>Buy</Text>
        </Pressable>
      </View>
    </>
  );
}
