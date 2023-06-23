import {
	SafeAreaView,
	StatusBar,
	ImageBackground,
	TouchableWithoutFeedback,
	Keyboard,
	KeyboardAvoidingView,
	Platform,
} from "react-native";
import LoginForm from "./LoginForm";
import RegistrationForm from "../Registration/RegistrationForm";
import { bkgImage } from "../../common/constants";
import { styles } from "../../common/styles";

const signIn = (email, password) => {
	console.info(
		`HW3@LoginScreen>>"Login" pressed for "${email}": with password "${password}"`
	);
};

export default function LoginScreen() {
	return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ImageBackground source={bkgImage} style={styles.imageBkg}>
            <StatusBar
              animated={true}
              barStyle={"default"}
              showHideTransition={"slide"}
              hidden={false}
            />
            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
              <LoginForm signIn={signIn} />
            </KeyboardAvoidingView>
          </ImageBackground>
        </TouchableWithoutFeedback>
	);
}

//TODO: ?  SafeAreaView
/* FIXME: NB! KeyboardAvoidingView must be inside a container which can grow(flex:1)
*/

/* FIXME: the below in app.json for android presents some changes
in behaviour but not without flaws in any case:(

            "softwareKeyboardLayoutMode": "pan"
            */
