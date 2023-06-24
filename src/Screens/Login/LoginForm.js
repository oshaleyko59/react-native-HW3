import { useState } from "react";
import {
	View,
	TouchableWithoutFeedback,
	Keyboard,
	KeyboardAvoidingView,
} from "react-native";
import { MainHeader } from "../../components/headers";
import { AuthMainBtn, AuthSecondaryBtn } from "../../components/buttons";
import PasswordInput from "../../components/inputs/PasswordInput";
import EmailInput from "../../components/inputs/EmailInput";
import { styles } from "../../common/styles";

export default function LoginForm({ signIn }) {
	const [kbdStatus, setKbdStatus] = useState(false);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<KeyboardAvoidingView
			behavior={Platform.OS === "ios" ? "padding" : "height"}
			style={{ flex: 1, justifyContent: "flex-end" }}
		>
			<TouchableWithoutFeedback onPress={Keyboard.dismiss} style={{ flex: 1 }}>
				<View
          style={[styles.formContainer, { paddingTop: 32 }]}
				>
					<MainHeader style={{ marginBottom: 32 }}>Увійти</MainHeader>
					<EmailInput
						onEndEditing={(value) => setEmail(value)}
						setKbdStatus={setKbdStatus}
					/>
					<PasswordInput
						onEndEditing={(value) => setPassword(value)}
						setKbdStatus={setKbdStatus}
					/>
					{!kbdStatus && (
						<View style={{ paddingTop: 8, paddingBottom: 144 }}>
							<AuthMainBtn
								title="Увійти"
								onPress={() => signIn(email, password)}
							/>
							<AuthSecondaryBtn
								title="Зареєструватися"
								hint="Немає акаунту?"
								onPress={() => console.info("@LoginForm>> 'Register' pressed")}
							/>
						</View>
					)}
				</View>
			</TouchableWithoutFeedback>
		</KeyboardAvoidingView>
	);
}

/* FIXME:  Android does not support keyboardWill... events, thus,
making use of the solution below unacceptable with accessive renders

  let showSubscription;
	let hideSubscription;
	useEffect(() => {
		if (Platform.OS === "ios") {
			showSubscription = Keyboard.addListener("keyboardWillShow", () => {
				setKbdStatus(true);
			});
			hideSubscription = Keyboard.addListener("keyboardWillHide", () => {
				setKbdStatus(false);
			});
		}

		return () => {
			if (Platform.OS === "ios") {
				showSubscription.remove();
				hideSubscription.remove();
			}
		};
	}, []); */
