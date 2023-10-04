import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import Login from "./screens/Login/Login";
import { useFonts } from "expo-font";
import Welcome from "./screens/Welcome/Welcome";
import Registration from "./screens/Registration/Registration";
import Home from "./screens/Home/Home";
import ProductPage from "./screens/ProductPage/ProductPage";
import Profile from "./screens/Profile/Profile";
import MyCart from "./screens/MyCart/MyCart";
import Collection from "./screens/Collection/Collection";
// import "tailwindcss/tailwind.css";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <Welcome />
      <Login />
      <Registration />
      <Home />
      <ProductPage />
      <Profile />
      <MyCart />
      <Collection />
    </NavigationContainer>
  );
}
