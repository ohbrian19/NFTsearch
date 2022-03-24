import React, { useState } from "react";
import { Alert, View } from "react-native";
import { useQuery } from "react-query";
import styled from "styled-components/native";
import Nft from "../components/Nft";
import { getNfts } from "../utils/api";

const Container = styled.View`
  background-color: black;
  flex: 1;
  padding: 60px 8px 45px;
`;
const TextInputContainer = styled.View`
  flex-direction: row;
  box-shadow: 1.95px 1.95px 2.6px rgba(0, 0, 0, 0.15);
`;
const TextInput = styled.TextInput`
  background-color: grey;
  width: 80%
  padding: 8px 20px;
  font-size: 15px;
  border-radius: 7px;
  box-shadow: 0.1px 0.1px 1px darkgrey;
`;
const Btn = styled.TouchableOpacity`
  background-color: black;
  width: 19%
  margin-left: 1%
  padding: 8px 20px;
  border-radius: 7px;
  box-shadow: 0.1px 0.1px 1px darkgrey;
  align-items: center;
  justify-content: center;
`;
const BtnText = styled.Text`
  color: white;
  font-size: 14px;
`;
const Divider = styled.View`
  border-top-width: 0.3px;
  border-color: grey;
  margin-top: 12px;
`;
const ListContainer = styled.View``;
const List = styled.FlatList`
  padding: 12px 0px;
`;

// "0x8f12c22287c4db0ecd44cd1d12315154806a4c54"
const HomeScreen = ({ navigation }) => {
  const [nftAddress, setNftAddress] = useState(null);
  const [nftData, setNftData] = useState(null);
  const { isLoading, data, refetch } = useQuery(
    ["getNfts", nftAddress],
    getNfts,
    {
      enabled: false,
    }
  );

  const onChangeText = (text) => setNftAddress(text);
  const onSubmit = () => {
    if (nftAddress === null) {
      return Alert.alert("Type in a NFT address");
    } else {
      refetch(setNftData(data));
    }
  };
  return (
    <Container>
      <TextInputContainer>
        <TextInput
          returnKeyType="search"
          onChangeText={onChangeText}
          placeholder="Type in a valid NFT address..."
          placeholderTextColor="lightgrey"
        />
        <Btn onPress={onSubmit}>
          <BtnText>Find</BtnText>
        </Btn>
      </TextInputContainer>
      <Divider />
      {nftData && (
        <ListContainer>
          <List
            data={nftData.ownedNfts}
            ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
            numColumns={2}
            columnWrapperStyle={{
              justifyContent: "space-between",
            }}
            keyExtractor={(item) => item.media[0].gateway}
            renderItem={({ item, index }) => <Nft index={index} data={item} />}
          />
        </ListContainer>
      )}
    </Container>
  );
};
export default HomeScreen;
