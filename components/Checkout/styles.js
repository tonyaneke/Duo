import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  orderInfoHead: {
    flexDirection: "row",
    justifyContent: "center",
  },
  orderheaderText: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "400",
    lineHeight: 30,
  },
  dice: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 10,
    marginHorizontal: 20,
    marginBottom: 10,
  },
  diceImage: {
    width: 50,
    height: 50,
    backgroundColor: "#F26F3F",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  dollar: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 10,
    marginHorizontal: 20,
  },
  dollarImage: {
    width: 50,
    height: 50,
    backgroundColor: "#F26F3F",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  orderInfoText: {
    fontSize: 20,
    fontWeight: "500",
    lineHeight: 24,
  },
  orderPrice: {
    paddingBottom: 12,
  },
  total: {
    borderTopWidth: 1,
    borderTopColor: " #797979",
    marginHorizontal: 24,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  btnContainer: {
    marginHorizontal: 24,
  },
  buyButton: {
    width: "100%",
    marginBottom: 20,
    backgroundColor: "#F26F3F",
    alignItems: "center",
    justifyContent: "center",
    height: 70,
    borderRadius: 25,
  },
  btnText: {
    fontSize: 24,
    fontWeight: "700",
    lineHeight: 32,
    color: "#FFF",
  },
});

export default styles;
