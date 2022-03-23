import React, { useEffect, useState } from "react";
import { ActivityIndicator, View } from "react-native";
import { useQuery } from "react-query";
import styled from "styled-components/native";
import Nft from "../components/Nft";
import { getNfts } from "../utils/api";

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

// "0x8f12c22287c4db0ecd44cd1d12315154806a4c54"
const ListScreen = ({ route, navigation }) => {
  if (!route.params && !cleanData) {
    return (
      <Loader>
        <ActivityIndicator color="white" size="large" />
      </Loader>
    );
  }
  const { nftAddress } = route.params;
  const { isLoading, data } = useQuery(["getNfts", nftAddress], getNfts);
  console.log(data);
  const [cleanData, setCleanData] = useState(null);

  if (isLoading) {
    return (
      <Loader>
        <ActivityIndicator color="white" size="large" />
      </Loader>
    );
  } else {
    return (
      <Container>
        <List
          data={data.ownedNfts}
          ItemSeparatorComponent={() => (
            <View style={{ backgroundColor: "black", height: 10 }} />
          )}
          numColumns={2}
          columnWrapperStyle={{
            justifyContent: "space-between",
          }}
          keyExtractor={(item) => item.id.tokenId}
          renderItem={({ item, index }) => (
            <Nft
              index={index}
              id={item.tokenId}
              image={item.media[0].gateway}
            />
          )}
        />
      </Container>
    );
  }
};

export default ListScreen;

// data.ownedNfts[0,1,2,3]
//   .contract.address (주소)
//   .description (설명)
//   .id.tokenMetadata.tokenType (ERC721)
//   .media[0].gateway (이미지 주소)
//   .image (이미지 주소)
//   .name (이름)
