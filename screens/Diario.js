import React from "react";
import { View, Text, TextInput, Button, ScrollView, StyleSheet, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/Feather";

function Diario({ navigation }) {
	return (
		<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{ height: Dimensions.get("window").height }}>
			<View style={stylesheet._Diario}>
				<View style={stylesheet._bg}>
				</View>

				<View style={stylesheet._Registros}>
					<Button color={"rgba(255, 255, 255, 1)"} title='Registros' onPress={() => navigation.navigate('Diario1')} />
				</View>

				<View style={stylesheet._Section}>
						<View style={stylesheet._bgSection}>
						</View>

						<Text style={[stylesheet._Descricao]}>
							Esse é o local mais seguro do mundo, aqui ninguém vai te julgar, estamos juntos nessa. :)
						</Text>

						<TextInput
							style={stylesheet._bgInput}
							defaultValue="Escreva aqui"
							clearTextOnFocus="true"
							multiline="true"
							numberOfLines={10}
						/>

				</View>

				<View>

					<Text style={[stylesheet._Frase]}>
						Respira fundo. Você não está no tempo errado. Você vai chegar lá. Você sempre foi essa imensidão. A sua ansiedade não é maior que você.
					</Text>

					<View style={stylesheet._bgTopo}>
					</View>

					<Text style={[stylesheet._Titulo]}>
						Que tal escrever um pouco?
					</Text>

				</View>

				<View>

					<Icon style={stylesheet._BtnBackHome} name="arrow-left" size={30} color="rgba(156, 144, 181, 1)" onPress={() => navigation.navigate('Home')} />

					<Icon style={stylesheet._BtnBackPlanos} name="arrow-up" size={30} color="rgba(196, 195, 208, 1)" onPress={() => navigation.navigate('PlanosDiarios')} />

				</View>

			</View>
		</ScrollView>
	)
}

const stylesheet = StyleSheet.create({

	_Diario: {
		position: "relative",
		width: Dimensions.get("window").width,
		height: 667,
		backgroundColor: "rgba(255, 255, 255, 1)",
	},

	_bg: {
		position: "absolute",
		width: 375,
		height: 667,
		backgroundColor: "rgba(135, 206, 235, 0.7)",
	},

	_Registros: {
		position: "absolute",
		width: 105,
		height: 35,
		borderRadius: 5,
		transform: [
			{ translateX: 250 },
			{ translateY: 621 },
			{ rotate: "0deg" },
		],
		backgroundColor: "rgba(135, 206, 235, 1)",
	},

	_Section: {
		position: "absolute",
		width: 360,
		height: 392,
		transform: [
			{ translateX: 0 },
			{ translateY: 204 },
			{ rotate: "0deg" },
		],
	},

	_bgSection: {
		position: "absolute",
		width: 360,
		height: 392,
		borderBottomRightRadius: 40,
		backgroundColor: "rgba(135, 206, 235, 1)",
	},

	_Descricao: {
		position: "absolute",
		width: 314,
		height: 28,
		left: 16,
		top: 356,
		fontWeight: '400',
		fontSize: 11,
		textAlign: "center",
		letterSpacing: 0.1,
		color: "rgba(255, 255, 255, 1)",
	},

	_bgInput: {
		position: "absolute",
		width: 348,
		height: 348,
		borderBottomRightRadius: 40,
		textAlign: "center",
		color: "rgba(255, 255, 255, 1)",
		backgroundColor: "rgba(0, 0, 0, 0.2)",
	},

	_Frase: {
		position: "absolute",
		width: 338,
		height: 46,
		left: 20,
		top: 142,
		fontWeight: '400',
		fontSize: 12,
		textAlign: "center",
		letterSpacing: 0.1,
		color: "rgba(0, 0, 0, 1)",
	},

	_bgTopo: {
		position: "absolute",
		width: 375,
		height: 124,
		borderBottomLeftRadius: 82,
		backgroundColor: "rgba(135, 206, 235, 1)",
	},

	_Titulo: {
		position: "absolute",
		width: 271,
		height: 27,
		left: 61,
		top: 63,
		fontWeight: '400',
		fontSize: 14,
		textAlign: "center",
		letterSpacing: 0.1,
		color: "rgba(255, 255, 255, 1)",
	},

	_BtnBackHome: {
		position: "absolute",
		left: 20,
		top: 60,
	},

	_BtnBackPlanos: {
		position: "absolute",
		left: 320,
		top: 30,
	},

});

export default Diario;