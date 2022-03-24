import React from "react";
import styled from "styled-components/native";
import Swiper from "react-native-swiper";

const Container = styled.View`
  background-color: black;
  flex: 1;
`;
const ImageContainer = styled.View`
  height: 480px;
`;
const Image = styled.Image`
  flex: 1;
`;
const TitleContainer = styled.View`
  padding-horizontal: 20px;
  padding-top: 30px;
  padding-bottom: 30px;
`;
const TitleText = styled.Text`
  font-size: 32px;
  font-weight: 800;
  color: white;
`;
const TextContainer = styled.View`
  margin-top: 15px;
`;
const SubText = styled.Text`
  font-size: 18px;
  font-weight: 500;
  color: grey;
`;
const Btn = styled.TouchableOpacity`
  height: 60px;
  margin-horizontal: 20px;
  background-color: grey;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  box-shadow: 1.95px 1.95px 2px darkgrey;
`;
const BtnText = styled.Text`
  color: white;
  font-size: 20px;
  font-weight: 700;
`;

const StartScreen = ({ navigation }) => {
  return (
    <Container>
      <ImageContainer>
        <Swiper horizontal autoplay>
          <Image source={require("../assets/homeImage1.png")} />
          <Image source={require("../assets/homeImage2.png")} />
          <Image source={require("../assets/homeImage3.png")} />
          <Image source={require("../assets/homeImage4.png")} />
          <Image source={require("../assets/homeImage5.png")} />
        </Swiper>
      </ImageContainer>
      <TitleContainer>
        <TitleText>NFT </TitleText>
        <TitleText>Explorer</TitleText>
        <TextContainer>
          <SubText>This is description.......</SubText>
          <SubText>This is description.....</SubText>
          <SubText>This is description...</SubText>
        </TextContainer>
      </TitleContainer>
      <Btn onPress={() => navigation.navigate("HomeScreen")}>
        <BtnText>Get Started</BtnText>
      </Btn>
    </Container>
  );
};
export default StartScreen;
