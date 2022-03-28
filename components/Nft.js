import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useRef, useState } from "react";
import { Animated, TouchableOpacity, View } from "react-native";

import styled from "styled-components/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const Wrapper = styled(Animated.createAnimatedComponent(View))`
  padding: 0.2px;
  border-radius: 10px;
  background-color: lightgrey;
  height: 200px;
  box-shadow: 0.3px 0.3px 1px grey;
`;
const Image = styled.Image`
  height: 100%;
  width: 100%;
  border-radius: 10px;
`;

const Nft = ({ index, data }) => {
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
  if (data.media[0].gateway) {
    return (
      <TouchableOpacity
        style={{ flex: 0.48 }}
        onPress={() =>
          navigation.navigate("DetailScreen", {
            data,
          })
        }
      >
        <Wrapper style={{ opacity, transform: [{ scale }] }}>
          <Image source={{ uri: data.media[0].gateway }} />
        </Wrapper>
      </TouchableOpacity>
    );
  } else return null;
};
export default React.memo(Nft);
