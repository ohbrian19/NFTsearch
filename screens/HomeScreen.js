import React, { useState } from "react";
import styled from "styled-components/native";

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
  background-color: green;
  padding: 10px 20px;
  align-items: center;
  border-radius: 20px;
`;
const BtnText = styled.Text`
  color: white;
  font-size: 18px;
  font-weight: 500;
`;

const HomeScreen = ({ navigation }) => {
  const [nftAddress, setNftAddress] = useState(null);
  const onChangeText = (text) => {
    setNftAddress(text);
  };
  const onSubmit = () => {
    if (nftAddress === "") {
      return Alert.alert("Type in a NFT address");
    } else {
      navigation.navigate("ListScreen", { nftAddress });
    }
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
export default HomeScreen;
