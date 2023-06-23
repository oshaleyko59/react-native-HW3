import { Text, StyleSheet } from "react-native";
import { COLORS } from "../common/constants";

export function MainHeader({ children }) {
	return <Text style={styles.main}>{children}</Text>;
}

export function Header2({ children }) {
	return <Text style={styles.h2}>{children}</Text>;
}

const styles = StyleSheet.create({
	main: {
		marginBottom: 16,
		fontSize: 30,
		lineHeight: 35,
		letterSpacing: 0.3,
		textAlign: "center",
		color: COLORS.mainText,
		fontFamily: "Roboto-Medium",
	},

	h2: {
		fontSize: 17,
		lineHeight: 22,
		letterSpacing: -0.41,
		textAlign: "center",
		color: COLORS.mainText,
		fontFamily: "Roboto-Medium",
	},
});
