import * as React from "react";
import { View, Text, Button, ScrollView, TextInput, StyleSheet, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/Feather";


function Login({ navigation }) {
	return (
		<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{ height: Dimensions.get("window").height }}>
			<View style={stylesheet._Login}>
				<View style={stylesheet._bg}>
				</View>

				<View style={stylesheet._BtnEntrar}>
					<Button title='Entrar' color={"rgba(255, 255, 255, 1)"} onPress={() => navigation.navigate('Home')} />
				</View>

				<View>

					<TextInput
						style={stylesheet._DigitarSenha}
						defaultValue="Digite aqui sua senha"
						clearTextOnFocus="true"
					/>

					<Text style={[stylesheet._Senha]}>
						Senha:
					</Text>

				</View>

				<View>
					<TextInput
						style={stylesheet._DigitarEmail}
						defaultValue="Digite aqui sua senha"
						clearTextOnFocus="true"
					/>
				</View>

				<View>

					<Text style={[stylesheet._TituloEmail]}>
						E-mail:
					</Text>

					<Text style={[stylesheet._Titulo]}>
						Insira suas informações para realizar o login
					</Text>

				</View>

				<Icon style={stylesheet._BtnVoltar} name="arrow-left" size={30} color="rgba(255, 255, 255, 1)" onPress={() => navigation.navigate('LoginCadastro')} />

			</View>

		</ScrollView>

	)
}

const stylesheet = StyleSheet.create({

	_Login: {
		position: "relative",
		width: Dimensions.get("window").width,
		height: 667,
	},

	_bg: {
		position: "absolute",
		width: 375,
		height: 667,
		backgroundColor: "rgba(156, 144, 181, 0.9)",
	},

	_BtnEntrar: {
		position: "absolute",
		width: 120,
		height: 40,
		borderRadius: 12,
		transform: [
			{ translateX: 125 },
			{ translateY: 482 },
			{ rotate: "0deg" },
		],
		backgroundColor: "rgba(135, 206, 235, 1)",
	},

	_DigitarSenha: {
		position: "absolute",
		width: 320,
		height: 56,
		left: 20,
		top: 375,
		borderRadius: 12,
		textAlign: "center",
		color: "rgba(255, 255, 255, 1)",
		backgroundColor: "rgba(0, 0, 0, 0.3)",
	},

	_Senha: {
		position: "absolute",
		left: 32,
		top: 345,
		fontWeight: '400',
		fontSize: 16,
		color: "rgba(255, 255, 255, 1)",
		textAlign: "left",
	},

	_DigitarEmail: {
		position: "absolute",
		width: 320,
		height: 56,
		borderRadius: 12,
		opacity: 1,
		left: 20,
		top: 255,
		textAlign: "center",
		color: "rgba(255, 255, 255, 1)",
		backgroundColor: "rgba(0, 0, 0, 0.3)",
	},

	_TituloEmail: {
		position: "absolute",
		left: 31,
		top: 225,
		fontWeight: '400',
		fontSize: 16,
		textAlign: "left",
		color: "rgba(255, 255, 255, 1)",
	},

	_Titulo: {
		position: "absolute",
		width: 265,
		height: 56,
		left: 55,
		top: 120,
		fontWeight: '400',
		fontSize: 22,
		textAlign: "center",
		color: "rgba(255, 255, 255, 1)",
	},

	_BtnVoltar: {
		position: "absolute",
		top: 20,
		transform: [
			{ translateX: 16 },
			{ translateY: 16 },
			{ rotate: "0deg" },
		],
	},


});


export default Login;
