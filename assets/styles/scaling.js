// import { Dimensions } from "react-native";
// import Device from "expo-device";
// const { width, height } = Dimensions.get("window");

// const isSmall = width <= 375 && !Device.hasNotch();

// const guidelineBaseWidth = () => {
//   if (isSmall) {
//     return 330;
//   }
//   return 350;
// };

// const guidelinesBaseHeight = () => {
//   if (isSmall) {
//     return 550;
//   } else if (width > 410) {
//     return 620;
//   }
//   return 680;
// };

// const guidelineBaseFonts = () => {
//   if (width > 410) {
//     return 430;
//   }
//   return 400;
// };

// const horizontalScale = (size) => (width / guidelineBaseWidth()) * size;
// const verticalScale = (size) => (height / guidelinesBaseHeight()) * size;
// const scaleFontSize = (size) =>
//   Math.round((size * width) / guidelineBaseFonts());

// export { horizontalScale, verticalScale, scaleFontSize };
