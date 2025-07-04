import { View, Text } from "react-native";
import React from "react";
import { COLORS } from "@/constants/colors.js";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const safeScreen = ({ children }) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        paddingTop: insets.top,
        flex: 1,
        backgroundColor: COLORS.background,
      }}
    >
      {children}
    </View>
  );
};

export default safeScreen;
