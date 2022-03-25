import React, { useContext, useEffect, useState } from "react";
import { LayoutAnimation } from "react-native";
import styled from "styled-components/native";
import { useDB } from "../context";

const Container = styled.SafeAreaView`
  background-color: black;
  flex: 1;
`;
const FavoriteScreen = () => {
  const realm = useDB();
  const [favorites, setFavorites] = useState([]);
  useEffect(() => {
    const favorites = realm.objects("Favorite");
    console.log(favorites);
    favorites.addListener((favorites, changes) => {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
      setFavorites(favorites.sorted("_id", true));
    });
    return () => {
      favorites.removeAllListeners();
    };
  }, []);

  return <Container></Container>;
};
export default FavoriteScreen;
