import { useState } from "react";
import { View, TextInput, StyleSheet} from "react-native";
import { COLORS } from "../../common/constants";

export default function StyledTextInput({
	onEndEditing,
	secureTextEntry,
	placeholder,
	keyboardType,
	autoCapitalize,
	autoComplete,
	setKbdStatus,
}) {
	const [editing, setEditing] = useState(false);
	const [text, setText] = useState("");

	return (
		<View>
			<TextInput
				style={[
					styles.input,
					editing
						? { borderColor: COLORS.accent }
						: { borderColor: COLORS.borderGray },
				]}
				autoComplete={autoComplete}
				autoCapitalize={autoCapitalize}
				keyboardType={keyboardType}
				placeholder={placeholder}
				secureTextEntry={secureTextEntry}
				value={text}
				onChangeText={(value) => setText(value)}
				onFocus={() => {
					setEditing(true);
					setKbdStatus(true);
				}}
				onBlur={() => {
					setEditing(false);
					setKbdStatus(false);
				}}
				onEndEditing={() => {
					onEndEditing(text);
					console.debug("end Editing");
				}}
			/>
		</View>
	);
}

/* FIXME: wrapping individual inputs (as below) fixes Android issue
( the inputs container slides up  when switching between inputs ),
but it renders orange button in between switches - it looks ugly (((...
So, i leave it for now - sliding up is not so annoying...

	return (
		<KeyboardAvoidingView
					behavior={Platform.OS == "ios" ? "padding" : "height"}
				><View>
			<TextInput
				style={style}
				autoComplete={autoComplete}
				autoCapitalize={autoCapitalize}
				keyboardType={keyboardType}
				placeholder={placeholder}
				secureTextEntry={secureTextEntry}
				value={value}
				onChangeText={onChangeText}
				onFocus={() => {
					setEditing(true); setKbdStatus(true);
				}}
				onBlur={() => {
					setEditing(false);setKbdStatus(false);
				}}
			/></View></KeyboardAvoidingView>
	); */

const styles = StyleSheet.create({
  input: {
    marginBottom: 16,
		height: 50,
		padding: 16,
		borderRadius: 8,
		borderWidth: 1,
		fontSize: 16,
		fontFamily: "Roboto-Regular",
		textDecorationLine: "none", //TODO: Android on password - how to remove?
		backgroundColor: COLORS.inactiveBkg,
		color: COLORS.mainText,
	},
});
