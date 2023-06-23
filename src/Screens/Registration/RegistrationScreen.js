import {
	View,
	StatusBar,
	ImageBackground,
	TouchableWithoutFeedback,
	Keyboard,
	KeyboardAvoidingView,
	Platform,
} from "react-native";
import Avatar from "./Avatar";
import RegistrationForm from "./RegistrationForm";
import { bkgImage } from "../../common/constants";
import { styles } from "../../common/styles";

const signUp = (name, email, password) => {
	console.info(
		`HW3@RegistrationScreen>>"Register" pressed for "${name}": with "${email}" & password "${password}"`
	);
};
const signIn = (email, password) => {
	console.info(
		`HW3@LoginScreen>>"Login" pressed for "${email}": with password "${password}"`
	);
};

export default function RegistrationScreen() {
	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<ImageBackground source={bkgImage} style={styles.imageBkg}>
				<View>
					<StatusBar
						animated={true}
						barStyle={"default"}
						showHideTransition={"slide"}
						hidden={false}
					/>
					<KeyboardAvoidingView
						behavior={Platform.OS === "ios" ? "padding" : "height"}
					>
						<Avatar />
						<RegistrationForm signIn={signIn} />
					</KeyboardAvoidingView>
				</View>
			</ImageBackground>
		</TouchableWithoutFeedback>
	);
}
/*
return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<ImageBackground source={bkgImage} style={stylesLocal.imageBkg}>
				<View>
					<StatusBar
						animated={true}
						barStyle={"default"}
						showHideTransition={"slide"}
						hidden={false}
					/>
					<KeyboardAvoidingView
						behavior={Platform.OS === "ios" ? "padding" : "height"}
					>
						<LoginForm signUp={signUp} />
					</KeyboardAvoidingView>
				</View>
			</ImageBackground>
		</TouchableWithoutFeedback>
	);
   */

//TODO: ?  	SafeAreaView,
