import React, { useContext } from "react";
import styled from "styled-components/native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Text } from "react-native";
import { useDB } from "../context";

const Container = styled.SafeAreaView`
  flex: 1;
  background-color: black;
`;
const Header = styled.View`
  padding-vertical: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-horizontal: 10px;
`;
const HeaderBtn = styled.View`
  height: 50px;
  width: 50px;
  background-color: darkgrey;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;
const ImageContainer = styled.View`
  border-radius: 15px;
  background-color: darkgrey;
  margin-horizontal: 10px;
`;
const Image = styled.Image`
  margin: 0.4px;
  height: 280px;
  border-radius: 15px;
`;
const TitleContainer = styled.View`
  flex: 1;
  padding-horizontal: 20px;
`;
const Title = styled.Text`
  color: white;
  margin-vertical: 30px;
  font-size: 20px;
  font-weight: 900;
`;
const Description = styled.Text`
  color: white;
  line-height: 22px;
  font-size: 14px;
  margin-bottom: 20px;
`;
const ButtonContainer = styled.View`
  position: absolute;
  bottom: 60px;
  flex-direction: row;
  align-items: center;
  padding-horizontal: 20px;
`;
const LikeButton = styled.TouchableOpacity`
  height: 50px;
  width: 50px;
  elevation: 7;
  margin-right: 30px;
  border-radius: 25px;
  background-color: white;
  justify-content: center;
  align-items: center;
`;
const FavoriteButton = styled.TouchableOpacity`
  height: 50px;
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: grey;
  border-radius: 10px;
  padding-horizontal: 20px;
  margin-vertical: 20px;
  flex-direction: row;
`;

// 0x8f12c22287c4db0ecd44cd1d12315154806a4c54
const DetailScreen = ({
  navigation,
  route: {
    params: { data, addFavorite },
  },
}) => {
  const realm = useDB();
  const onPress = () => {
    realm.write(() => {
      realm.create("Favorite", {
        _id: Date.now(),
        name: data.title,
        image: data.media[0].gateway,
        description: data.description,
      });
    });
    // navigation.goBack();
  };
  return (
    <Container>
      <Header>
        <HeaderBtn>
          <Icon
            name="chevron-left"
            size={25}
            color="white"
            onPress={navigation.goBack}
          />
        </HeaderBtn>
        <Text style={{ fontWeight: "bold", fontSize: 18, color: "darkgrey" }}>
          {data.title.length <= 20
            ? data.title
            : data.title.slice(0, 20) + "..."}
        </Text>
        <HeaderBtn>
          <Icon name="dots-vertical" size={25} color="white" />
        </HeaderBtn>
      </Header>
      <ImageContainer>
        <Image source={{ uri: data.media[0].gateway }} />
      </ImageContainer>
      <TitleContainer>
        <Title>{data.title}</Title>
        <Description>{data.description}</Description>
      </TitleContainer>
      <ButtonContainer>
        <LikeButton onPress={onPress}>
          <Icon
            name={addFavorite ? "heart" : "heart-outline"}
            size={28}
            color={addFavorite ? "red" : "grey"}
          />
        </LikeButton>
        <FavoriteButton onPress={onPress}>
          <Text style={{ color: "white", fontSize: 16, fontWeight: "bold" }}>
            Add To Favorite
          </Text>
        </FavoriteButton>
      </ButtonContainer>
    </Container>
  );
};
export default DetailScreen;

//   .description (설명)
//   .id.tokenMetadata.tokenType (ERC721)
//   .media[0].gateway (이미지 주소)
//   .image (이미지 주소)
//   .title (이름)
