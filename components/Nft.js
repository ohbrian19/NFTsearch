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
const Favorite = styled(Animated.createAnimatedComponent(TouchableOpacity))`
  background-color: lightgrey;
  height: 30px;
  width: 30px;
  border-radius: 30px;
  position: absolute;
  z-index: 10;
  top: 12px;
  right: 12px;
  justify-content: center;
  align-items: center;
  box-shadow: 0.3px 0.3px 1px darkgrey;
`;

// const Text = styled.Text`
//   margin-top: 10px;
//   padding: 5px;
// `;
const Nft = ({ index, image, id }) => {
  const [addFavorite, setAddFavorite] = useState(false);
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
  const clickFavorite = () => {
    setAddFavorite((prev) => !prev);
  };
  if (image) {
    return (
      <TouchableOpacity
        style={{ flex: 0.48 }}
        onPress={() => console.log("pressed")}
      >
        <Favorite
          style={{ opacity, transform: [{ scale }] }}
          onPress={clickFavorite}
        >
          <Icon name="heart" size={20} color={addFavorite ? "red" : "black"} />
        </Favorite>
        <Wrapper style={{ opacity, transform: [{ scale }] }}>
          <Image source={{ uri: image }} />
          {/* <Text>NFT Name</Text> */}
        </Wrapper>
      </TouchableOpacity>
    );
  } else return null;
};
export default React.memo(Nft);
