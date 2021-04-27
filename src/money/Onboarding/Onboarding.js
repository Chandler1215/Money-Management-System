import React, { useEffect } from "react";
import { Dimensions, View, ImageBackground, StyleSheet } from "react-native";
import Animated from "react-native-reanimated";
import {} from "react-native-redash";

import { Esplash } from "../../../assets/images";
import theme from "../../components/theme";
import { moderateScale } from "react-native-size-matters";

const { width } = Dimensions.get("window");

const Onboarding = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Transactions");
    }, 9000);
  });

  return (
    <ImageBackground
      source={Esplash}
      style={{
        flex: 1,
        justifyContent: "flex-end",
      }}
    >
      <View
        style={{
          paddingLeft: theme.spacing.l,
          paddingBottom: theme.spacing.l,
          width: width * 0.8,
          marginBottom: 52,
        }}
      >
        <Animated.Text
          style={{
            fontSize: moderateScale(50),
            fontWeight: "bold",
            color: theme.colors.white,
            marginBottom: theme.spacing.l,
          }}
        >
          Big Money
        </Animated.Text>

        <Animated.Text
          style={{
            fontSize: moderateScale(20),
            color: "white",
            lineHeight: 25
          }}
        >
          Keep those big money saved.
        </Animated.Text>
      </View>
    </ImageBackground>
  );
};

export default Onboarding;
