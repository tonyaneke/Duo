import { View, Text } from "react-native";
import React from "react";
import Svg, { Path } from "react-native-svg";

type MoreIconProps = {
  height: number;
  width: number;
  color?: string;
};

export default function MoreIcon({
  height,
  width,
  color = "#F26F3F",
}: MoreIconProps) {
  return (
    <>
      <Svg width={width} height={height} viewBox="0 0 20 20" fill="none">
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5.29303 7.293C5.48056 7.10553 5.73487 7.00021 6.00003 7.00021C6.26519 7.00021 6.5195 7.10553 6.70703 7.293L10 10.586L13.293 7.293C13.3853 7.19749 13.4956 7.12131 13.6176 7.0689C13.7396 7.01649 13.8709 6.9889 14.0036 6.98775C14.1364 6.9866 14.2681 7.0119 14.391 7.06218C14.5139 7.11246 14.6255 7.18671 14.7194 7.2806C14.8133 7.3745 14.8876 7.48615 14.9379 7.60905C14.9881 7.73194 15.0134 7.86362 15.0123 7.9964C15.0111 8.12918 14.9835 8.2604 14.9311 8.3824C14.8787 8.50441 14.8025 8.61475 14.707 8.707L10.707 12.707C10.5195 12.8945 10.2652 12.9998 10 12.9998C9.73487 12.9998 9.48056 12.8945 9.29303 12.707L5.29303 8.707C5.10556 8.51947 5.00024 8.26516 5.00024 8C5.00024 7.73484 5.10556 7.48053 5.29303 7.293Z"
          fill={color}
        />
      </Svg>
    </>
  );
}
