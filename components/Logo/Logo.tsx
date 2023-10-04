import { View, Text } from "react-native";
import React from "react";
import Svg, { Path } from "react-native-svg";

type LogoProps = { color: string; width: number; height: number };

export default function Logo({ color, width, height }: LogoProps) {
  return (
    <Svg width={width} height={height} viewBox="0 0 268 392" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 78L132 0L267.5 78V236.5L0 391V292L183 187V129C151.5 129 122 112.5 105.5 84L81.5 97.5V149.5L0 195.5V78ZM168 347V390.5C201 391.167 267 392.1 267 390.5V289L168 347Z"
        fill={color}
      />
    </Svg>
  );
}
