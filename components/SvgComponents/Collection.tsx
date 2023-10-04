import { View, Text } from "react-native";
import React from "react";
import Svg, { Path } from "react-native-svg";

type CollectionIconProps = {
  clicked: boolean;
};

export default function CollectionIcon({ clicked }: CollectionIconProps) {
  const fill = clicked ? "white" : "none";

  return (
    <Svg width="31" height="31" viewBox="0 0 31 31" fill={fill}>
      <Path
        d="M24.5 14.25H7M24.5 14.25C25.163 14.25 25.7989 14.5134 26.2678 14.9822C26.7366 15.4511 27 16.087 27 16.75V24.25C27 24.913 26.7366 25.5489 26.2678 26.0178C25.7989 26.4866 25.163 26.75 24.5 26.75H7C6.33696 26.75 5.70107 26.4866 5.23223 26.0178C4.76339 25.5489 4.5 24.913 4.5 24.25V16.75C4.5 16.087 4.76339 15.4511 5.23223 14.9822C5.70107 14.5134 6.33696 14.25 7 14.25M24.5 14.25V11.75C24.5 11.087 24.2366 10.4511 23.7678 9.98223C23.2989 9.51339 22.663 9.25 22 9.25M7 14.25V11.75C7 11.087 7.26339 10.4511 7.73223 9.98223C8.20107 9.51339 8.83696 9.25 9.5 9.25M22 9.25V6.75C22 6.08696 21.7366 5.45107 21.2678 4.98223C20.7989 4.51339 20.163 4.25 19.5 4.25H12C11.337 4.25 10.7011 4.51339 10.2322 4.98223C9.76339 5.45107 9.5 6.08696 9.5 6.75V9.25M22 9.25H9.5"
        stroke="#888888"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </Svg>
  );
}
