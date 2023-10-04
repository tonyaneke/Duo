import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import CartItem from "../../components/CartItem/CartItem";
import MoreIcon from "../../components/SvgComponents/MoreIcon";
import Checkout from "../../components/Checkout/Checkout";

const data = [
  {
    image:
      "data:image/jpeg;base64,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",
    productName: "Air Jordan",
    color: "Bl & Wh",
    price: 40,
    size: "S",
    id: 1,
  },
  {
    image:
      "https://img.freepik.com/premium-photo/hermes-bag-sky-with-clouds-rainbow-colors_786255-2853.jpg?w=360",
    productName: "Birkin",
    color: "Multi color",
    price: 200,
    size: "M",
    id: 2,
  },
  {
    image:
      "https://cdn.midjourney.com/2575d504-46bb-4896-8492-ee74815dc0b0/grid_0_640_N.webp",
    productName: "Kit Gown",
    color: "Green",
    price: 190,
    size: "L",
    id: 3,
  },
];

export default function MyCart() {
  const [openOrderInfo, setOpenOrderInfo] = useState(false);

  const totalOrderPrice = data.reduce((acc, cur) => cur.price + acc, 0);
  const tax = Number((totalOrderPrice / 9).toFixed(2));
  const total = Number(totalOrderPrice) + Number(tax);

  const handleOrderInfo = () => {
    setOpenOrderInfo((prev) => !prev);
  };

  return (
    <View style={styles.container}>
      <StatusBar />
      <ScrollView contentContainerStyle={openOrderInfo && styles.blur}>
        <TouchableOpacity style={styles.backIcon}>
          <FontAwesome name="arrow-left" size={24} />
        </TouchableOpacity>
        <View style={styles.cartIcon}>
          <FontAwesome name="opencart" size={50} />
          <Text style={styles.headerText}>My Cart</Text>
        </View>
        {data.map((data) => (
          <View style={styles.cartItem} key={data.id}>
            <CartItem
              image={data.image}
              name={data.productName}
              price={data.price}
              color={data.color}
              size={data.size}
            />
          </View>
        ))}
        <View style={styles.addMore}>
          <Text style={styles.addMoreText}>Add more products</Text>
          <TouchableOpacity>
            <FontAwesome name="arrow-right" size={20} color={"#222324"} />
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View style={styles.checkOut}>
        <Checkout
          openOrderInfo={openOrderInfo}
          handleOrderInfo={handleOrderInfo}
          data={data}
          tax={tax}
          total={total}
          totalOrderPrice={totalOrderPrice}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5F5F5",
    width: "100%",
    height: "100%",
  },
  backIcon: {
    marginTop: 60,
    left: 30,
    width: 50,
    height: 30,
  },
  cartIcon: {
    alignItems: "center",
    marginTop: -30,
    marginBottom: 50,
  },
  headerText: {
    paddingTop: 10,
    fontSize: 34,
    fontWeight: "700",
    color: "#222324",
    opacity: 0.8,
  },
  cartItem: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 24,
    marginBottom: 20,
  },
  blur: {
    opacity: 0.2,
  },
  addMore: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  addMoreText: {
    fontSize: 20,
    fontWeight: "500",
    lineHeight: 24,
  },
  checkOut: {
    bottom: 0,
    backgroundColor: "#FFF",
    width: "100%",
  },
  orderInfo: {
    // height: 300,
  },
});
