import {
	ImageBackground,
	TouchableWithoutFeedback,
	Keyboard,
} from "react-native";
import LoginForm from "./LoginForm";
import { bkgImage } from "../../common/constants";
import { styles } from "../../common/styles";

const signIn = (email, password) => {
	console.info(
		`HW3@LoginScreen>>"Login" pressed for "${email}": with password "${password}"`
	);
};

export default function LoginScreen() {
	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss} style={{ flex: 1 }}>
			<ImageBackground source={bkgImage} style={styles.imageBkg}>
				<LoginForm signIn={signIn} />
			</ImageBackground>
		</TouchableWithoutFeedback>
	);
}

//TODO: ?  SafeAreaView
/*            <StatusBar
              animated={true}
              barStyle={"default"}
              showHideTransition={"slide"}
              hidden={false}
            />
*/

