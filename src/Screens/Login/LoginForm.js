import { useState } from "react";
import {
	View,
	TouchableWithoutFeedback,
	Keyboard,
} from "react-native";
import {MainHeader} from "../../components/headers";
import {AuthMainBtn, AuthSecondaryBtn} from "../../components/buttons";
import PasswordInput from "../../components/inputs/PasswordInput";
import EmailInput from "../../components/inputs/EmailInput";
import { styles } from "../../common/styles";

const initialState = {
	email: "",
	password: "",
};

export default function LoginForm({ signIn }) {
	const [kbdStatus, setKbdStatus] = useState(false);
	const [state, setState] = useState(initialState);

	const handleLoginPress = () => {
		signIn(state.email, state.password);
	};

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<View
				style={[styles.formContainer, { paddingTop: 32, paddingBottom: 8 }]}
			>
				<MainHeader>Увійти</MainHeader>
				<EmailInput
					value={state.email}
					onChangeText={(value) =>
						setState((prevState) => ({ ...prevState, email: value }))
					}
					setKbdStatus={setKbdStatus}
				/>
				<PasswordInput
					value={state.password}
					onChangeText={(value) =>
						setState((prevState) => ({ ...prevState, password: value }))
					}
					setKbdStatus={setKbdStatus}
				/>
				{!kbdStatus && (
					<View style={{ gap: 16, marginTop: 21 }}>
						<AuthMainBtn title="Увійти" onPress={handleLoginPress} />
						<AuthSecondaryBtn
							title="Зареєструватися"
							hint="Немає акаунту?"
							onPress={() => console.info("@LoginForm>> 'Register' pressed")}
						/>
						<View style={{ height: 84 }} />
					</View>
				)}
			</View>
		</TouchableWithoutFeedback>
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
