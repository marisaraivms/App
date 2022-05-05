import * as React from 'react';
import { View, Text, Button, ScrollView, StyleSheet, Dimensions } from "react-native";


function LoginCadastro({ navigation }) {
	return (
		<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{ height: Dimensions.get("window").height }}>
			<View style={stylesheet._LoginCadastro}>
				<View style={stylesheet._bg}>
				</View>
				<View style={stylesheet._bg1}>
				</View>
				<View style={[stylesheet._Entrar]}>
					<Button title='Já tenho conta' color={"rgba(135, 206, 235, 1)"} onPress={() => navigation.navigate('Login')} />
				</View>
				<View style={[stylesheet._SouNovo]}>
					<Button title='Sou novo' color={"rgba(255, 255, 255, 1)"} onPress={() => navigation.navigate('Cadastro')} />
				</View>
					<Text style={[stylesheet._Descricao]}>
						Eu sou o Diário Ansioso, aquele que vai te entender verdadeiramente, afinal passamos pelo mesmo probleminha.
					</Text>
					<Text style={[stylesheet._Titulo]}>
						Oii, será um prazer te conhecer melhor!
					</Text>
			</View>
		</ScrollView>
	)
}

const stylesheet = StyleSheet.create({
	_LoginCadastro: {
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

	_bg1: {
		position: "absolute",
		width: 320,
		height: 349,
		borderRadius: 15,
		opacity: 1,
		left: 28,
		top: 144,
		shadowOpacity: 0.5,
		shadowRadius: 10,
		backgroundColor: "rgba(196, 195, 208, 0.5)",
	},

	_Entrar: {
		position: "absolute",
		left: 130,
		top: 410,
		fontWeight: '400',
		fontSize: 22,
		color: "rgba(135, 206, 235, 1)",
		textAlign: "center",
	},

	_SouNovo: {
		position: "absolute",
		width: 280,
		height: 40,
		borderRadius: 12,
		left: 50,
		top: 360,
		fontWeight: '400',
		fontSize: 22,
		color: "rgba(255, 255, 255, 1)",
		backgroundColor: "rgba(135, 206, 235, 1)",
		textAlign: "center",
	},

	_Descricao: {
		position: "absolute",
		width: 222,
		height: 95,
		left: 75,
		top: 240,
		fontWeight: '400',
		fontSize: 16,
		color: "rgba(255, 255, 255, 1)",
		textAlign: "center",
	},
	
	_Titulo: {
		position: "absolute",
		left: 65,
		top: 210,
		fontWeight: '400',
		fontSize: 16,
		color: "rgba(255, 255, 255, 1)",
		textAlign: "left",
	},


	
});

export default LoginCadastro;