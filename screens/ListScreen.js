import React, { useEffect, useRef } from "react";
import { ActivityIndicator, Animated, View } from "react-native";
import styled from "styled-components/native";
import Nft from "../components/Nft";

const Container = styled.View`
  background-color: black;
  flex: 1;
`;

const Loader = styled.View`
  flex: 1;
  background-color: black;
  justify-content: center;
  align-items: center;
`;

const List = styled.FlatList`
  padding: 20px 10px;
  width: 100%;
`;

const temp = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 5 },
  { id: 9 },
];

const ListingScreen = () => {
  return (
    <Container>
      <List
        data={temp}
        ItemSeparatorComponent={() => (
          <View style={{ backgroundColor: "black", height: 10 }} />
        )}
        numColumns={2}
        columnWrapperStyle={{
          justifyContent: "space-between",
        }}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => <Nft index={index} id={item.id} />}
      />
    </Container>
  );
};
export default ListingScreen;
