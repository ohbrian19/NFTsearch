import React, { useEffect, useState } from "react";
import { LayoutAnimation } from "react-native";
import styled from "styled-components/native";
import { useDB } from "../context";

const Container = styled.View`
  background-color: black;
  flex: 1;
  padding: 60px 10px 45px;
`;
const Title = styled.Text`
  color: lightgrey;
  font-size: 22px;
  font-weight: bold;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
`;

const FavoriteScreen = () => {
  const realm = useDB();
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const favorites = realm.objects("Favorite");
    favorites.addListener((favorites, changes) => {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
      setFavorites(favorites.sorted("_id", true));
    });
    return () => {
      favorites.removeAllListeners();
    };
  }, []);

  const deleteFavorite = (id) => {
    realm.write(() => {
      const favorite = realm.objectForPrimaryKey("Favorite", id);
      realm.delete(favorite);
    });
  };

  return (
    <Container>
      <Title>Favorites</Title>
    </Container>
  );
};

export default FavoriteScreen;
