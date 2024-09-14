import styled from "styled-components/native";

export const Container = styled.ScrollView`
  flex: 1;
  padding: 50px 30px;
`

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`

export const Main = styled.View`
  flex: 1;
`

export const TitleArea = styled.Text`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Title = styled.Text`
  font-size: 24px;
`

export const Button = styled.TouchableOpacity`
  background-color: #0ea5e9;
  padding: 12px;
  border-radius: 6px;
`;

export const ButtonText = styled.Text`
  font-family: Poppins_600SemiBold;
  color: #fff;
  text-align: center;
`;
