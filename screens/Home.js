import React, { useState } from "react";
import styled from "styled-components/native";

import { useQuery } from "react-query";

import {getNfts} from "../utils/api"

const Container = styled.View`
  background-color: white;
  flex: 1;
  padding: 0px 16px;
`;
const Title = styled.Text`
  color: black;
  text-align: center;
  margin: 30px 0px;
  font-size: 20px;
  font-weight: 700;
`;
const TextInput = styled.TextInput`
  background-color: grey;
  border-radius: 18px;
  padding: 10px 20px;
  font-size: 18px;
  box-shadow: 1px 1px 3px rgba(41, 30, 95, 0.2);
`;
const Btn = styled.TouchableOpacity`
  width: 100%;
  margin-top: 30px;
  background-color: yellow;
  padding: 10px 20px;
  align-items: center;
  border-radius: 20px;
`;
const BtnText = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: 500;
`;

const apiKey = "demo";


const Home = () => {
  const {isLoading, data} = useQuery(["getNfts", "0xC33881b8FD07d71098b440fA8A3797886D831061"], getNfts );
  const [nft, setNft] = useState(null);
  const onChangeText = (text) => {
    setNft(text);
  };
  const onSubmit = () => {
    // if (nft === "") {
    //   return Alert.alert("Type in a nft address");
    // }
    console.log('1', isLoading)
  };

  return (
    <Container>
      <Title>NFT explorer</Title>
      <TextInput
        returnKeyType="search"
        onChangeText={onChangeText}
        placeholder="Find nft"
        placeholderTextColor="lightgrey"
      />
      <Btn onPress={onSubmit}>
        <BtnText>Save</BtnText>
      </Btn>
    </Container>
  );
};
export default Home;
