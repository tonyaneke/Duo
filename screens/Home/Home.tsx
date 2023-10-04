import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  StatusBar,
  FlatList,
} from "react-native";
import React from "react";
import Logo from "../../components/Logo/Logo";
import Header from "../../components/Header/Header";
import Search from "../../components/Search/Search";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Tab from "../../components/Tab/Tab";
import Section from "../../components/Section/Section";
import Product from "../../components/Product/Product";
import MenuBar from "../../components/MenuBar/MenuBar";
import AddToFavorites from "../../components/AddToFavorites/AddToFavorites";

const data = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
];

export default function Home() {
  return (
    <View>
      <StatusBar barStyle={"dark-content"} backgroundColor={"transparent"} />
      <ScrollView style={styles.home} showsVerticalScrollIndicator={false}>
        <View style={styles.logo}>
          <Logo color={"#000000"} width={27} height={40} />
        </View>
        <View style={styles.header}>
          <Header title="What are you looking for?" fontSize={34} width={280} />
        </View>
        <View style={styles.search}>
          <Search />
        </View>
        <View style={styles.categories}>
          <Header title={"Categories"} fontSize={24} />
        </View>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.tabs}
        >
          <FlatList
            data={data}
            renderItem={({ item }) => <Tab />}
            horizontal={true}
          />
        </ScrollView>
        <View style={styles.section}>
          <Section />
        </View>
        <View style={styles.product}>
          {data.map((el) => (
            <Product key={el} />
          ))}
        </View>
      </ScrollView>
      <View style={styles.menuBar}>
        <MenuBar />
      </View>
      <View style={styles.addToFavorites}>
        <AddToFavorites />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  home: {
    backgroundColor: "#F5F5F5",
    height: "100%",
    //  width: "100%",
  },
  logo: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 58,
    marginBottom: 10,
  },
  header: {
    marginTop: 20,
    marginHorizontal: 24,
  },
  search: {
    marginHorizontal: 24,
    marginTop: 20,
  },
  categories: {
    marginTop: 20,
    marginHorizontal: 24,
  },
  tabs: {
    marginLeft: 24,
    marginVertical: 10,
  },
  section: {
    marginHorizontal: 24,
  },
  product: {
    marginHorizontal: 24,
    marginTop: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 20,
  },
  menuBar: {
    marginHorizontal: 24,
    position: "absolute",
    zIndex: 1000,
    bottom: 30,
  },
  addToFavorites: {
    marginHorizontal: 24,
    position: "absolute",
    zIndex: 9,
    bottom: 30,
  },
});
