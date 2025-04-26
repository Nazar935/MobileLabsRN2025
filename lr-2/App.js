import React, { useState, createContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import styled, { ThemeProvider } from "styled-components/native";
import {
  View,
  Switch,
  Text,
  FlatList,
  Image,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";

const ThemeContext = createContext({
  toggleTheme: () => {},
  darkMode: true,
});

const themes = {
  dark: {
    background: "#1C202C",
    logoColor: "#fff",
    cardBackground: "#202532",
    primaryText: "#F5F5F5",
    secondaryText: "#81838A",
    accent: "#0A84FF",
    border: "#313743",
    success: "#00C853",
    error: "#FF3B30",
  },
  light: {
    background: "#FFFFFF",
    logoColor: "#000",
    cardBackground: "#F0F0F0",
    primaryText: "#000000",
    secondaryText: "#444444",
    accent: "#0A84FF",
    border: "#CCCCCC",
    success: "#00C853",
    error: "#FF3B30",
  },
};

const TabNavigator = createBottomTabNavigator();

const ScreenContainer = styled.View`
  background-color: ${(props) => props.theme.background};
  padding: 16px 16px 0 16px;
  height: 100%;
`;

const Heading = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${(props) => props.theme.primaryText};
  margin-bottom: 10px;
`;

const SecondaryText = styled.Text`
  font-size: 14px;
  margin-bottom: 10px;
  color: ${(props) => props.theme.secondaryText};
`;

const HorizontalScroll = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  min-height: 40px;
  margin: 10px 0 20px 8px;
`;

const FilterItem = styled.TouchableOpacity`
  background-color: ${({ isActive }) => (isActive ? "#0A84FF" : "#ccc")};
  padding: 8px 16px;
  border-radius: 10px;
  margin-right: 10px;
`;

const FilterLabel = styled.Text`
  color: ${({ isActive }) => (isActive ? "#fff" : "#000")};
  font-size: 15px;
  text-align: center;
`;

const ContentCard = styled.View`
  background-color: ${(props) => props.theme.cardBackground};
  border-radius: 10px;
  padding: 10px;
  margin-bottom: 16px;
`;

const ImageContainer = styled.View`
  height: 300px;
  background-color: gray;
`;

const CardContent = styled.View`
  padding: 10px;
`;

const PostHeader = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

const AvatarWrapper = styled.View`
  width: 40px;
  height: 40px;
  background-color: gray;
  border-radius: 20px;
  margin-right: 10px;
`;

const UserInfo = styled.View`
  flex: 1;
`;

const UserName = styled.Text`
  color: ${(props) => props.theme.primaryText};
  font-size: 16px;
  font-weight: bold;
`;

const ChatSubtitle = styled.Text`
  color: ${(props) => props.theme.secondaryText};
  font-size: 14px;
`;

const ActionsRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
  border-top-width: 1px;
  border-color: ${(props) => props.theme.border};
`;

const ActionButton = styled.View`
  flex-direction: row;
  align-items: center;
`;

const SwitchGroup = styled.View`
  flex-direction: row;
  justify-content: center;
  margin: 10px 0;
`;

const OptionButton = styled.TouchableOpacity`
  padding: 10px 20px;
  border-radius: 20px;
  background-color: ${({ isActive }) => (isActive ? "#0A84FF" : "#ccc")};
  margin: 0 5px;
`;

const OptionLabel = styled.Text`
  color: ${({ isActive, theme }) => (isActive ? "#fff" : theme.primaryText)};
  font-weight: bold;
`;

const UserAvatar = styled.Image`
  width: 48px;
  height: 48px;
  border-radius: 24px;
  margin-right: 12px;
`;

const CommunitySwitch = ({ selected, onChange }) => {
  const options = ["Open chats", "My Friends"];
  const { darkMode } = React.useContext(ThemeContext);
  const activeTheme = darkMode ? themes.dark : themes.light;

  return (
    <SwitchGroup>
      {options.map((label, idx) => (
        <OptionButton
          key={label}
          isActive={selected === idx}
          onPress={() => onChange(idx)}
        >
          <OptionLabel isActive={selected === idx} theme={activeTheme}>
            {label}
          </OptionLabel>
        </OptionButton>
      ))}
    </SwitchGroup>
  );
};

const CommunityPage = () => {
  const { darkMode } = React.useContext(ThemeContext);

  const postsList = [
    {
      avatar: require("./assets/users/profile1.png"),
      username: "GamerOne",
      subtext: "Eurogamer • yesterday • 2:20pm",
      image: require("./assets/games/game4.png"),
      title:
        "Florida tourist attraction sues Fortnite, seeks removal of in-game castle",
    },
    {
      avatar: require("./assets/users/profile3.png"),
      username: "PixelMaster",
      subtext: "IGN • today • 11:00am",
      image: require("./assets/games/game3.png"),
      title: "New update brings major graphics overhaul to Cyberpunk 2077",
    },
  ];

  return (
    <ScreenContainer>
      <Heading>Community</Heading>
      <SecondaryText>
        Community and official content for all games and software
      </SecondaryText>
      <HorizontalScroll>
        {["All", "Screenshots", "Artwork", "Workshop"].map((label, idx) => (
          <FilterItem key={label} isActive={idx === 0}>
            <FilterLabel isActive={idx === 0}>{label}</FilterLabel>
          </FilterItem>
        ))}
      </HorizontalScroll>

      <FlatList
        data={postsList}
        keyExtractor={(_, index) => index.toString()}
        onEndReachedThreshold={0.5}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <ContentCard>
            <PostHeader>
              <Image
                source={item.avatar}
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 20,
                  marginRight: 10,
                }}
              />
              <View>
                <Text
                  style={{
                    color: darkMode ? "#fff" : "#000",
                    fontWeight: "bold",
                  }}
                >
                  {item.username}
                </Text>
                <SecondaryText>{item.subtext}</SecondaryText>
              </View>
            </PostHeader>

            <ImageContainer>
              <Image
                source={item.image}
                style={{ width: "100%", height: "100%" }}
                resizeMode="cover"
              />
            </ImageContainer>

            <CardContent>
              <Text
                style={{
                  color: darkMode ? "#F5F5F5" : "#000",
                  fontWeight: "bold",
                  marginTop: 6,
                }}
              >
                {item.title}
              </Text>
            </CardContent>

            <ActionsRow>
              <ActionButton>
                <FontAwesome5 name="thumbs-up" size={20} color="#0A84FF" />
              </ActionButton>
              <ActionButton>
                <FontAwesome5 name="comment-alt" size={20} color="#0A84FF" />
              </ActionButton>
            </ActionsRow>
          </ContentCard>
        )}
      />
    </ScreenContainer>
  );
};
