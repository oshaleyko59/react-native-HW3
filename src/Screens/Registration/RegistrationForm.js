import { useState } from "react";
import {
	View,
	TouchableWithoutFeedback,
	StyleSheet,
	Platform,
	Keyboard,
} from "react-native";
import { MainHeader } from "../../components/headers";
import {AuthMainBtn, AuthSecondaryBtn} from "../../components/buttons";
import PasswordInput from "../../components/inputs/PasswordInput";
import EmailInput from "../../components/inputs/EmailInput";
import StyledTextInput from "../../components/inputs/StyledTextInput";
import { styles } from "../../common/styles";
//import { COLORS } from "../common/constants";

const initialState = {
	name: "",
	email: "",
	password: "",
};

export default function RegistrationForm({ signUp }) {
	const [state, setState] = useState(initialState);
	const [kbdStatus, setKbdStatus] = useState(false);

	const handleRegisterPress = () => {
		signUp(state.name, state.email, state.password);
	};

	//TODO: setKbdStatus
	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<View
				style={[styles.formContainer, { paddingTop: 92, paddingBottom: 32 }]}
			>
				<MainHeader>Реєстрація</MainHeader>
				<StyledTextInput
					autoComplete="name"
					autoCapitalize="words"
					placeholder="Логін"
					value={state.name}
					onChangeText={(value) =>
						setState((prevState) => ({ ...prevState, name: value }))
					}
					setKbdStatus={setKbdStatus}
				/>
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
						<AuthMainBtn title="Зареєстуватися" onPress={handleRegisterPress} />
						<AuthSecondaryBtn
							title="Увійти"
							hint="Вже є акаунт?"
							onPress={() =>
								console.info("@RegistrationForm>> 'Login' pressed")
							}
						/>
						<View style={{ height: 84 }} />
					</View>
				)}
			</View>
		</TouchableWithoutFeedback>
	);
}
