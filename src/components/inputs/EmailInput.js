import { View } from "react-native";
import StyledTextInput from "./StyledTextInput";

export default function EmailInput({ value, onChangeText, setKbdStatus }) {
	return (
		<View>
			<StyledTextInput
				autoComplete="email"
				autoCapitalize="none"
				keyboardType="email-address"
				placeholder="Адреса електронної пошти"
				value={value}
				onChangeText={onChangeText}
				setKbdStatus={setKbdStatus}
			/>
		</View>
	);
}

