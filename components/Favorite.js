import React from "react";
import { TouchableOpacity, TouchableWithoutFeedback } from "react-native";

import styled from "styled-components/native";
import { useDB } from "../context";

const Wrapper = styled.View`
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
`;
const ImageContainer = styled.View`
  background-color: white;
  padding: 0.3px;
  box-shadow: 0.3px 0.3px 1px grey;
`;
const Image = styled.Image`
  width: 300px;
  height: 300px;
  border-radius: 3px;
`;
const TextContainer = styled.View`
  margin: 30px 15px;
  align-items: center;
`;
const Title = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: 800;
`;
const Description = styled.Text`
  margin-top: 20px;
  color: white;
  font-size: 14px;
  font-weight: 500;
`;

const Favorite = ({ favorite }) => {
  const realm = useDB();
  const deleteFavorite = (id) => {
    realm.write(() => {
      const favorite = realm.objectForPrimaryKey("Favorite", id);
      realm.delete(favorite);
    });
  };

  return (
    <TouchableOpacity onPress={() => deleteFavorite(favorite._id)}>
      <Wrapper>
        <ImageContainer>
          <Image source={{ uri: favorite.image }} />
        </ImageContainer>
        <TextContainer>
          <Title>{favorite.name}</Title>
          <Description>{favorite.description}</Description>
        </TextContainer>
      </Wrapper>
    </TouchableOpacity>
  );
};
export default Favorite;
