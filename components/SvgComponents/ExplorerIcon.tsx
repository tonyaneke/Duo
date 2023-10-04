import { View, Text } from "react-native";
import React from "react";
import Svg, { Path } from "react-native-svg";

export default function ExplorerIcon() {
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7.29302 14.707C7.10555 14.5195 7.00023 14.2652 7.00023 14C7.00023 13.7348 7.10555 13.4805 7.29302 13.293L10.586 10L7.29302 6.707C7.19751 6.61475 7.12133 6.50441 7.06892 6.3824C7.01651 6.2604 6.98892 6.12918 6.98777 5.9964C6.98662 5.86362 7.01192 5.73194 7.0622 5.60905C7.11248 5.48615 7.18673 5.3745 7.28062 5.28061C7.37452 5.18671 7.48617 5.11246 7.60907 5.06218C7.73196 5.0119 7.86364 4.9866 7.99642 4.98775C8.1292 4.9889 8.26042 5.01649 8.38242 5.0689C8.50443 5.12131 8.61477 5.19749 8.70702 5.293L12.707 9.293C12.8945 9.48053 12.9998 9.73484 12.9998 10C12.9998 10.2652 12.8945 10.5195 12.707 10.707L8.70702 14.707C8.51949 14.8945 8.26518 14.9998 8.00002 14.9998C7.73486 14.9998 7.48055 14.8945 7.29302 14.707Z"
        fill="#F26F3F"
      />
    </Svg>
  );
}