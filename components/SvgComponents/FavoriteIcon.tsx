import { View, Text } from "react-native";
import React from "react";
import Svg, { Path } from "react-native-svg";

type FavoriteIconProps = {
  liked?: boolean;
};

export default function FavoriteIcon({ liked }: FavoriteIconProps) {
  const fill = liked ? "#F26F3F" : "none";

  return (
    <Svg width="30" height="30" viewBox="0 0 30 30" fill={fill}>
      <Path
        d="M4.17818 9.72238C4.46087 9.03992 4.87521 8.41982 5.39755 7.89749C5.91988 7.37515 6.53998 6.96081 7.22244 6.67812C7.9049 6.39544 8.63636 6.24994 9.37505 6.24994C10.1137 6.24994 10.8452 6.39544 11.5277 6.67812C12.2101 6.96081 12.8302 7.37515 13.3525 7.89749L15 9.54499L16.6475 7.89749C17.7024 6.84259 19.1332 6.24995 20.625 6.24995C22.1169 6.24995 23.5476 6.84259 24.6025 7.89749C25.6574 8.95239 26.2501 10.3831 26.2501 11.875C26.2501 13.3668 25.6574 14.7976 24.6025 15.8525L15 25.455L5.39755 15.8525C4.87521 15.3302 4.46087 14.7101 4.17818 14.0276C3.8955 13.3451 3.75 12.6137 3.75 11.875C3.75 11.1363 3.8955 10.4048 4.17818 9.72238Z"
        stroke="#F26F3F"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
