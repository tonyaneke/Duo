import { View, StatusBar, StyleSheet, ScrollView } from "react-native";
import React, { useState } from "react";
import ProductBanner from "../../components/ProductBanner/ProductBanner";
import ProductInfo from "../../components/ProductInfo/ProductInfo";
import AddToCartButton from "../../components/AddToCartButton/AddToCartButton";
import AddToCart from "../../components/AddToCart/AddToCart";

export default function ProductPage() {
  const [addToCart, setAddToCart] = useState(false);

  const handleAddToCart = () => {
    setAddToCart((prev) => !prev);
  };

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        <StatusBar backgroundColor={"transparent"} />
        <View style={styles.bannerContainer}>
          <ProductBanner />
        </View>
        <View style={styles.productInfo}>
          <ProductInfo />
        </View>
      </ScrollView>
      <View style={styles.button}>
        <AddToCartButton onPress={handleAddToCart} />
      </View>
      {addToCart && (
        <View style={styles.addToCart}>
          <AddToCart />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#F5F5F5",
  },
  scrollContainer: {
    paddingBottom: 200,
  },
  productInfo: {
    marginHorizontal: 45,
    marginTop: 20,
  },
  bannerContainer: {
    marginHorizontal: 24,
  },
  button: {
    marginHorizontal: 24,
    position: "absolute",
    zIndex: 9,
    bottom: 30,
  },
  addToCart: {
    marginHorizontal: 24,
    position: "absolute",
    zIndex: 2,
    bottom: 30,
  },
});
