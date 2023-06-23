import { useState } from "react";
import { View } from "react-native";
import StyledTextInput from "./StyledTextInput";
import {ShowHideBtn} from "../buttons";

export default function PasswordInput({ value, onChangeText, setKbdStatus }) {
	const [isPasswordVisible, setPasswordVisible] = useState(false);

	return (
		<View>
			<StyledTextInput
				autoComplete="current-password"
				autoCapitalize="none"
				placeholder="Пароль"
				value={value}
				onChangeText={onChangeText}
				secureTextEntry={!isPasswordVisible}
				setKbdStatus={setKbdStatus}
			/>
			<ShowHideBtn
				title={isPasswordVisible ? "Сховати" : "Показати"}
				positioned
				onPress={() => {
					setPasswordVisible(!isPasswordVisible);
				}}
			/>
		</View>
	);
}

