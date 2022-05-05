import React from "react";
import { View, Text, TextInput, Button, ScrollView, StyleSheet, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/Feather";

function PlanosDiarios({ navigation }) {
	return (
		<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{ height: Dimensions.get("window").height }}>
			<View style={stylesheet._PlanosDiarios}>
				<View style={stylesheet._bg}>
				</View>

				<View style={stylesheet._BotaoNextDiario}>
					<Icon name="arrow-down" size={30} color="rgba(135, 206, 235, 0.7)" onPress={() => navigation.navigate('Diario')} />
				</View>

				<View style={stylesheet._MeusPlanos}>
					<Button color={"rgba(255, 255, 255, 1)"} title='Meus Planos' onPress={() => navigation.navigate('PDiarioRegistros')} />
				</View>

				<View>
					<View style={stylesheet._bg1}>
					</View>
					<Text style={[stylesheet._Frase1]}>
						Não esquece de voltar pra me contar o que conseguimos realizar hoje, blz? :)
					</Text>
					<TextInput
						style={stylesheet._caixaTexto}
						defaultValue="Escreva aqui"
						clearTextOnFocus="true"
						multiline="true"
						numberOfLines={10}
					/>
				</View>

				<View>
					<Text style={[stylesheet._Frase]}>
						Que o hoje seja hoje. Sem o peso de ontem, ou a ansiedade pelo amanhã. Apenas, hoje.
					</Text>
				</View>

				<View>
					<View style={stylesheet._bgTopo}>
				
						<Text style={[stylesheet._Titulo]}>
							Hoje eu pretendo:
						</Text>

					</View>
				</View>
				<View>
					<Icon style={stylesheet._BotaoHome} name="arrow-left" size={30} color="rgba(196, 195, 208, 0.7)" onPress={() => navigation.navigate('Home')} />

					<Icon style={stylesheet._BtnBackHumor} name="arrow-up" size={30} color="rgba(177, 237, 180, 0.7)" onPress={() => navigation.navigate('HumorDiario')} />
				</View>

			</View>
		</ScrollView>
	)
}

const stylesheet = StyleSheet.create({

	_PlanosDiarios: {
		position: "relative",
		width: Dimensions.get("window").width,
		height: 667,
	},

	_bg: {
		position: "absolute",
		width: 375,
		height: 667,
		backgroundColor: "rgba(196, 195, 208, 0.5)",
	},

	_BotaoNextDiario: {
		position: "absolute",
		width: 42,
		height: 39,
		transform: [
			{ translateX: 23 },
			{ translateY: 616 },
			{ rotate: "0deg" },
		],
	},

	_MeusPlanos: {
		position: "absolute",
		width: 110,
		height: 34,
		borderRadius: 5,
		transform: [
			{ translateX: 255 },
			{ translateY: 621 },
			{ rotate: "0deg" },
		],
		backgroundColor: "rgba(196, 195, 208, 1)",
	},

	_bg1: {
		position: "absolute",
		width: 375,
		height: 390,
		borderBottomRightRadius: 40,
		top: 190,
		backgroundColor: "rgba(196, 195, 208, 1)",
	},

	_Frase1: {
		position: "absolute",
		width: 314,
		height: 28,
		left: 16,
		top: 545,
		fontWeight: '400',
		fontSize: 11,
		textAlign: "center",
		letterSpacing: 0.1,
		color: "rgba(255, 255, 255, 1)",
	},

	_caixaTexto: {
		position: "absolute",
		width: 360,
		height: 348,
		borderBottomRightRadius: 40,
		top: 190,
		textAlign: "center",
		color: "rgba(255, 255, 255, 1)",
		backgroundColor: "rgba(156, 144, 181, 0.3)",
	},

	_Frase: {
		position: "absolute",
		width: 338,
		height: 36,
		left: 20,
		top: 140,		
		fontWeight: '400',
		fontSize: 12,
		color: "rgba(0, 0, 0, 1)",
		textAlign: "center",
		letterSpacing: 0.1,
	},

	_bgTopo: {
        position: "absolute",
        width: 375,
        height: 124,
        borderBottomLeftRadius: 82,
        backgroundColor: "rgba(196, 195, 208, 1)",
    },

	_Titulo: {
		position: "absolute",
		width: 271,
		height: 27,
		left: 52,
		top: 63,
		fontWeight: '400',
		fontSize: 14,
		textAlign: "center",
		letterSpacing: 0.1,
		color: "rgba(255, 255, 255, 1)",
	},

	_BotaoHome: {
		position: "absolute",
		width: 42,
		height: 39,
		left: 20,
		top: 60,
		color: "rgba(156, 144, 181, 1)",
	},

	_BtnBackHumor: {
		position: "absolute",
		width: 42,
		height: 39,
		borderRadius: 1000,
		left: 320,
		top: 30,
	},
	

});

export default PlanosDiarios;