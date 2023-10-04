import { View, Text, Image, StyleSheet } from "react-native";
import React, { useState } from "react";
import Header from "../Header/Header";
import Counter from "../Counter/Counter";

type CartItemProps = {
  image: string;
  name: string;
  size: string;
  color: string;
  price: number;
};

export default function CartItem({
  image,
  name,
  color,
  price,
  size,
}: CartItemProps) {
  const [count, setCount] = useState<number>(1);

  const handleCounter = (counter: number) => {
    setCount((count) => (count += counter));
  };

  return (
    <View style={styles.container}>
      <View>
        <Image
          source={{ uri: image }}
          resizeMode="cover"
          style={styles.image}
        />
      </View>
      <View>
        <Header title={name} fontSize={24} />
        <View style={styles.color}>
          <Image
            source={require("../../assets/Images/shoeColor.png")}
            resizeMode="contain"
          />
          <Text style={styles.colorText}>{color}</Text>
        </View>
        <View>
          <View style={styles.size}>
            <Header title={`$${price * count}`} fontSize={24} />
            <Text style={styles.sizeText}>/ Size {size}</Text>
          </View>
        </View>
      </View>
      <View style={styles.counter}>
        <Counter numberOfProducts={count} handleCounter={handleCounter} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 120,
    backgroundColor: "#FFF",
    flexDirection: "row",
    borderRadius: 15,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 10,
    gap: 15,
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowRadius: 30,
    shadowColor: "rgba(300, 130, 200, 1)",
    flexGrow: 1,
  },
  image: {
    height: 100,
    width: 100,
    borderRadius: 10,
  },
  color: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  colorText: {
    fontSize: 16,
    fontWeight: "500",
  },
  size: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  sizeText: {
    fontSize: 14,
    fontWeight: "500",
    color: "#797979",
  },
  counter: {
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
    height: "100%",
    width: 70,
    marginBottom: 20,
  },
});
