import React from "react";
import { View, Text, ScrollView, StyleSheet, Dimensions } from "react-native";
import { Svg, Path } from "react-native-svg";
import Icon from "react-native-vector-icons/Feather";


function HDiarioRegistros({ navigation }) {
	return (
		<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{ height: Dimensions.get("window").height }}>
			<View style={stylesheet._RegistrosHumor}>
				<View style={stylesheet._bg}>
				</View>

				<View style={stylesheet._Registros}>

					<View>
						<View style={stylesheet._Oct}>
							<Icon name="octagon" size={30} color="rgba(255, 255, 255, 1)" />

							<Text style={[stylesheet._texto1]}>
								Bem
							</Text>
						</View>

					</View>
					<View style={stylesheet._Oct2}>
						<Icon name="octagon" size={30} color="rgba(255, 255, 255, 1)" />
					</View>

					<View>
						<Text style={[stylesheet._texto2]}>
							Indiferente
						</Text>
					</View>


					<View style={stylesheet._Oct3}>
						<Icon name="octagon" size={30} color="rgba(255, 255, 255, 1)" />

					</View>
					<View >
						<Text style={[stylesheet._texto3]}>
							Ansioso
						</Text>
					</View>

				</View>

				<View>
					<View style={stylesheet._bgTopo}>
					</View>

					<View >
						<Text style={[stylesheet._Titulo2]}>
							Como me senti  ao passar dias.
						</Text>
					</View>
				</View>

				<View style={stylesheet._BtnBackHome}>
					<Icon name="arrow-left" size={30} color="rgba(156, 144, 181, 1)" onPress={() => navigation.navigate('Home')} />
				</View>

			</View>
		</ScrollView>
	)
}


const stylesheet = StyleSheet.create({

	_RegistrosHumor: {
		position: "relative",
		width: Dimensions.get("window").width,
		height: 667,
	},

	_bg: {
		position: "absolute",
		width: 375,
		height: 667,
		backgroundColor: "rgba(177, 237, 180, 0.5)",
	},

	_Registros: {
		position: "absolute",
		width: 273,
		height: 140,
		transform: [
			{ translateX: 47 },
			{ translateY: 212 },
			{ rotate: "0deg" },
		],
	},

	_Oct: {
		left: 70,
	},

	_texto1: {
		position: "absolute",
		width: 213,
		height: 20,
		left: 40,
		top: 8,
		fontWeight: '400',
		fontSize: 18,
		textAlign: "left",
	},

	_Oct2: {
		position: "absolute",
		width: 30,
		height: 30,
		top: 58,
		left: 50,
	},

	_texto2: {
		position: "absolute",
		width: 213,
		height: 20,
		left: 90,
		top: 33,
		fontWeight: '400',
		fontSize: 18,
		textAlign: "left",
	},

	_Oct3: {
		position: "absolute",
		width: 30,
		height: 30,
		left: 30,
		top: 115,
	},

	_texto3: {
		position: "absolute",
		width: 213,
		height: 20,
		left: 70,
		top: 90,
		fontWeight: '400',
		fontSize: 18,
		textAlign: "left",
	},

	_bgTopo: {
		position: "absolute",
		width: 375,
		height: 124,
		borderBottomLeftRadius: 82,
		backgroundColor: "rgba(177, 237, 180, 1)",
	},

	_Titulo2: {
		position: "absolute",
		width: 271,
		height: 27,
		left: 65,
		top: 50,
		transform: [
			{translateX: 0},
			{translateY: 0},
			{rotate: "0deg"},
		],
		fontWeight: '400',
		fontSize: 15,
		textAlign: "center",
		color: "rgba(255, 255, 255, 1)",
	},

	_BtnBackHome: {
		position: "absolute",
		width: 42,
		height: 39,
		transform: [
			{translateX: 15},
			{translateY: 40},
			{rotate: "0deg"},
		],
	},

});

export default HDiarioRegistros;