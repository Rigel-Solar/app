import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import styled from "styled-components/native";

export function User() {
	return (
		<UserProfile>
			<FontAwesome5 name="user" size={40} color="#7A8282" />
		</UserProfile>
	);
}

const UserProfile = styled.View`
	align-items: center;
	justify-content: center;
	background-color: #d3d5d5;
	border-radius: 50px;
	width: 80px;
	height: 80px;
`;
