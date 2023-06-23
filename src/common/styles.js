import { StyleSheet } from "react-native";
import { COLORS } from "./constants";

export const styles = StyleSheet.create({
	imageBkg: {
		flex: 1,
		justifyContent: "flex-end",
		alignItems: "stretch",
		resizeMode: "cover",
	},
	formContainer: {
		paddingHorizontal: 16,
		gap: 16,
		borderTopRightRadius: 25,
		borderTopLeftRadius: 25,
		backgroundColor: COLORS.mainBkg,
	},


	topBar: {
		height: 44,
		marginTop: 50,
		paddingTop: 11,
		borderStyle: "solid",
		borderBottomWidth: 0.5,
		borderColor: "rgba(0, 0, 0, 0.3)",
		backgroundColor: COLORS.mainBkg,
	},

});
