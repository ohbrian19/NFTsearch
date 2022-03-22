import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useRef } from "react";
import { Animated, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";

const Wrapper = styled(Animated.createAnimatedComponent(View))`
  padding: 7px;
  border-radius: 5px;
  background-color: white;
  height: 200px;
`;

const Nft = ({ index, id }) => {
  const navigation = useNavigation();
  const opacity = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.spring(opacity, {
      toValue: 1,
      useNativeDriver: true,
      delay: index * 100,
    }).start();
  }, []);
  const scale = opacity.interpolate({
    inputRange: [0, 1],
    outputRange: [0.7, 1],
  });

  return (
    <TouchableOpacity
      style={{ flex: 0.48 }}
      onPress={() => console.log("pressed")}
    >
      <Wrapper style={{ opacity, transform: [{ scale }] }}></Wrapper>
    </TouchableOpacity>
  );
};
export default React.memo(Nft);
