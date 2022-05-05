import * as React from 'react';
import { View, Text, Button, TextInput, ScrollView, StyleSheet, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/Feather";

function Cadastro({ navigation }) {
	return (
		<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{ height: Dimensions.get("window").height }}>
			<View style={stylesheet._Cadastro}>
				<View style={stylesheet._bg}>
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
						defaultValue="Digite aqui seu e-mail"
						clearTextOnFocus="true"
					/>

					<Text style={[stylesheet._Email]}>
						E-mail
					</Text>
				</View>
				<View>
					<TextInput
						style={stylesheet._DigitarApelido}
						defaultValue="Como gostaria de ser chamado(a)?"
						clearTextOnFocus="true"
					/>

					<Text style={[stylesheet._Apelido]}>
						Como deseja ser chamado(a)?
					</Text>
				</View>
				<View style={[stylesheet._BtnFinalizar]}>
					<Button title='Finalizar' color={"rgba(255, 255, 255, 1)"} onPress={() => navigation.navigate('Home')} />
				</View>
				<View>
					<Text style={[stylesheet._Titulo]}>
						Insira suas informações para realizar o cadastro
					</Text>
				</View>
				<View style={stylesheet._BtnVoltar}>
					<Icon name="arrow-left" size={30} color="rgba(255, 255, 255, 1)" onPress={() => navigation.navigate('LoginCadastro')} />
				</View>
			</View>
		</ScrollView>
	)
}

const stylesheet = StyleSheet.create({

	_Cadastro: {
		position: "relative",
		width: Dimensions.get("window").width,
		height: 667,
	},

	_bg: {
		position: "absolute",
		width: 375,
		height: 667,
		backgroundColor: "rgba(156, 144, 181, 1)",
	},

	_DigitarSenha: {
		position: "absolute",
		width: 320,
		height: 56,
		borderRadius: 12,
		left: 20,
		top: 473,
		textAlign: "center",
		color: "rgba(255, 255, 255, 1)",
		backgroundColor: "rgba(0, 0, 0, 0.3)",
	},

	_Senha: {
		position: "absolute",
		left: 33,
		top: 440,
		fontWeight: '400',
		fontSize: 16,
		textAlign: "left",
		color: "rgba(255, 255, 255, 1)",
	},

	_DigitarEmail: {
		position: "absolute",
		width: 325,
		height: 56,
		borderRadius: 12,
		opacity: 1,
		left: 20,
		top: 361,
		textAlign: "center",
		color: "rgba(255, 255, 255, 1)",
		backgroundColor: "rgba(0, 0, 0, 0.3)",
	},

	_Email: {
		position: "absolute",
		left: 32,
		top: 325,
		fontWeight: '400',
		fontSize: 16,
		textAlign: "left",
		color: "rgba(255, 255, 255, 1)",
	},

	_DigitarApelido: {
		position: "absolute",
		width: 325,
		height: 56,
		borderRadius: 12,
		opacity: 1,
		left: 20,
		top: 249,
		textAlign: "center",
		color: "rgba(255, 255, 255, 1)",
		backgroundColor: "rgba(0, 0, 0, 0.3)",
	},

	_Apelido: {
		position: "absolute",
		left: 32,
		top: 211,
		fontWeight: '400',
		fontSize: 16,
		textAlign: "left",
		color: "rgba(255, 255, 255, 1)",
	},

	_BtnFinalizar: {
		position: "absolute",
		borderRadius: 12,
		width: 128,
		height: 40,
		left: 120,
		top: 555,
		fontSize: 22,
		textAlign: "center",
		color: "rgba(255, 255, 255, 1)",
		backgroundColor: "rgba(135, 206, 235, 1)",
	
	},

	_Titulo: {
		position: "absolute",
		width: 265,
		height: 56,
		left: 55,
		top: 91,
		fontWeight: '400',
		fontSize: 22,
		textAlign: "center",
		color: "rgba(255, 255, 255, 1)",
	},

	_BtnVoltar: {
		position: "absolute",
		top: 20,
		transform: [
			{translateX: 16},
			{translateY: 16},
			{rotate: "0deg"},
		],
	},






});

export default Cadastro;