import { View, Text } from "react-native";
import React from "react";
import Svg, { Path } from "react-native-svg";

type CartIconProps = {
  clicked: boolean;
};

export default function CartIcon({ clicked }: CartIconProps) {
  const fill = clicked ? "white" : "none";

  return (
    <Svg width="31" height="31" viewBox="0 0 31 31" fill={fill}>
      <Path
        d="M20.75 14.25V9.25C20.75 7.92392 20.2232 6.65215 19.2855 5.71447C18.3479 4.77678 17.0761 4.25 15.75 4.25C14.4239 4.25 13.1521 4.77678 12.2145 5.71447C11.2768 6.65215 10.75 7.92392 10.75 9.25V14.25M7 11.75H24.5L25.75 26.75H5.75L7 11.75Z"
        stroke="#888888"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
