import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  backgroundImage: {
    zIndex: -10,
  },
  logo: {
    paddingBottom: 15,
  },
  logoText: {
    fontSize: 40,
    fontWeight: "bold",
  },
  logoContainer: {
    position: "relative",
    bottom: 400,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  btnContainer: {
    position: "relative",
    bottom: 350,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 24,
  },
  text: {
    marginTop: 20,
    zIndex: 10,
    fontSize: 15,
    fontWeight: "600",
    color: "#35C2C1",
  },
});

export default styles;
