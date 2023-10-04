import { View, Text, StyleSheet, ScrollView, FlatList } from "react-native";
import React from "react";
import Logo from "../../components/Logo/Logo";
import Header from "../../components/Header/Header";
import { StatusBar } from "expo-status-bar";
import Tab from "../../components/Tab/Tab";
import Product from "../../components/Product/Product";
import MenuBar from "../../components/MenuBar/MenuBar";

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

export default function Collection() {
  return (
    <View style={styles.container}>
      <StatusBar />
      <View style={styles.logo}>
        <Logo color="black" height={40} width={28} />
      </View>
      <ScrollView>
        <View style={styles.header}>
          <Header
            title="Do you want to discover new things?"
            fontSize={34}
            color="black"
            width={300}
          />
        </View>
        <View style={styles.categoriesHeader}>
          <Header title="Categories" fontSize={24} color="#333" />
        </View>
        <View>
          <FlatList
            data={data}
            horizontal={true}
            renderItem={({ item }) => <Tab />}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item) => `item-${item}`}
            style={styles.tabs}
          />
        </View>
        <View style={styles.productContainer}>
          {data.map((item) => (
            <Product key={item} />
          ))}
        </View>
      </ScrollView>
      <View style={styles.menu}>
        <MenuBar />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#F5F5F5",
  },
  logo: {
    marginTop: 60,
    zIndex: 10,
    position: "absolute",
    width: 28,
    margin: "47%",
    alignContent: "center",
  },
  header: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 130,
  },
  categoriesHeader: {
    marginLeft: 24,
    marginTop: 40,
    marginBottom: 20,
  },
  tabs: {
    paddingBottom: 20,
  },
  productContainer: {
    flexDirection: "row",
    marginHorizontal: 24,
    flexWrap: "wrap",
    gap: 20,
  },
  menu: {
    marginHorizontal: 24,
    position: "absolute",
    zIndex: 1000,
    bottom: 30,
  },
});
