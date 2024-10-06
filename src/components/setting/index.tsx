import { MaterialIcons } from "@expo/vector-icons";
import React, { ReactNode } from "react";
import { TouchableOpacityProps } from "react-native";
import * as S from "./styles";

interface SettingItemProps extends TouchableOpacityProps {
	ItemTitle?: string | undefined;
	ItemSubtitle?: string | undefined;
	icon?: ReactNode;
}

const Setting = ({
	ItemTitle = "",
	ItemSubtitle = "",
  icon,
	...rest
}: SettingItemProps) => {
	return (
		<S.Button {...rest} activeOpacity={0.6}>
			<S.Icon>{icon}</S.Icon>
			<S.Content>
				<S.TextContent>
					{ItemTitle && <S.ItemTitle>{ItemTitle}</S.ItemTitle>}
					<S.ItemSubtitle>{ItemSubtitle}</S.ItemSubtitle>
				</S.TextContent>
        
			</S.Content>
		</S.Button>
	);
};

export default Setting;
