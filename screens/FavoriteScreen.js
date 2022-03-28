import React, { useEffect, useState } from "react";
import { LayoutAnimation } from "react-native";
import Swiper from "react-native-swiper";
import styled from "styled-components/native";
import Favorite from "../components/Favorite";
import { useDB } from "../context";

const Container = styled.View`
  background-color: black;
  flex: 1;
  padding: 60px 10px 45px;
  align-items: center;
  justify-content: center;
`;
const Title = styled.Text`
  color: lightgrey;
  font-size: 22px;
  font-weight: bold;
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

  return (
    <Container>
      <Title>Favorites</Title>
      <Swiper showsPagination={false} containerStyle={{ width: "100%" }}>
        {favorites?.map((favorite) => (
          <Favorite key={favorite._id} favorite={favorite} />
        ))}
      </Swiper>
    </Container>
  );
};

export default FavoriteScreen;
