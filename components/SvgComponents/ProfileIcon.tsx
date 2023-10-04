import { View, Text } from "react-native";
import React from "react";
import Svg, { Path } from "react-native-svg";

type ProfileIconProps = {
  clicked: boolean;
};

export default function ProfileIcon({ clicked }: ProfileIconProps) {
  const fill = clicked ? "white" : "none";

  return (
    <Svg width="22" height="27" viewBox="0 0 22 27" fill={fill}>
      <Path
        d="M17.2836 7.32937C17.2836 10.8158 14.4675 13.6371 11 13.6371C7.53237 13.6371 4.71626 10.8158 4.71626 7.32937C4.71626 3.84292 7.53237 1.02168 11 1.02168C14.4675 1.02168 17.2836 3.84292 17.2836 7.32937Z"
        stroke="#888888"
        stroke-width="1.78261"
      />
      <Path
        d="M20.3587 21.4532C20.3587 22.3552 19.6072 23.4101 17.8482 24.2925C16.1416 25.1487 13.7217 25.704 11 25.704C8.27832 25.704 5.85839 25.1487 4.15182 24.2925C2.39279 23.4101 1.6413 22.3552 1.6413 21.4532C1.6413 20.5511 2.39279 19.4963 4.15182 18.6138C5.85839 17.7577 8.27832 17.2023 11 17.2023C13.7217 17.2023 16.1416 17.7577 17.8482 18.6138C19.6072 19.4963 20.3587 20.5511 20.3587 21.4532Z"
        stroke="#888888"
        stroke-width="1.78261"
      />
    </Svg>
  );
}
