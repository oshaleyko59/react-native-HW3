import {
	ImageBackground,
	TouchableWithoutFeedback,
	Keyboard,
} from "react-native";
import RegistrationForm from "./RegistrationForm";
import { bkgImage } from "../../common/constants";
import { styles } from "../../common/styles";

const signUp = (name, email, password) => {
	console.info(
		`HW3@RegistrationScreen>>"Register" pressed for "${name}": with "${email}" & password "${password}"`
	);
};

export default function RegistrationScreen() {
	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss} style={{ flex: 1 }}>
			<ImageBackground source={bkgImage} style={styles.imageBkg}>
				<RegistrationForm signUp={signUp} />
			</ImageBackground>
		</TouchableWithoutFeedback>
	);
}
/* TODO: ?	SafeAreaView,
				<StatusBar
					animated={true}
					barStyle={"default"}
					showHideTransition={"slide"}
					hidden={false}
				/>
   */

