import React from "react";
import { View, Text, Image, ScrollView, StyleSheet, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/Feather";

function Home({ navigation }) {
	return (
		<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{ height: Dimensions.get("window").height }}>
			<View style={stylesheet._Home}>
				<View style={stylesheet._bgHome}>
				</View>
				<View style={stylesheet._Diario}>
					<View style={stylesheet._bgDiario}>
					</View>
					<View>
						<Icon style={[stylesheet._Heart2]} name="heart" size={25} color="rgba(255, 255, 255, 1)" onPress={() => navigation.navigate('Diario')} />

						<Text style={[stylesheet._Descricao]}>
							Escrever pode te ajudar a entender melhor teus sentimentos, que tal tentar?
						</Text>
					</View>
				</View>

				<View style={stylesheet._Planos}>
					<View style={stylesheet._bgPlanos}>
					</View>
					<View>
						<Text style={[stylesheet._MeusPlanos]}>
							Quais os planos pra hoje?
						</Text>
						<Icon style={stylesheet._Smile} name="smile" size={30} color="rgba(255, 255, 255, 1)" onPress={() => navigation.navigate('PlanosDiarios')} />
					</View>

				</View>

				<View style={stylesheet._Humor}>
					<View style={stylesheet._bgHumor}>
					</View>
					<View>
						<Text style={[stylesheet._DescricaoH]}>
							Me conta, você dormiu bem?
						</Text>
						<Icon style={[stylesheet._Heart2]} name="heart" size={25} color="rgba(255, 255, 255, 1)" onPress={() => navigation.navigate('HumorDiario')} />
					</View>
				</View>

				<View style={stylesheet._QuemSou}>
					<View style={stylesheet._bgQuemSou}>
					</View>
					<View>
						<Text style={[stylesheet._Titulo]}>
							Quem sou eu?
						</Text>
						<Icon style={[stylesheet._Heart1]} name="heart" size={25} color="rgba(255, 255, 255, 1)" onPress={() => navigation.navigate('Sobre')} />
					</View>
				</View>

				<View>
					<View style={stylesheet._bgTopo}>
					</View>
					<View>
						<View style={stylesheet._bgFoto}>
						</View>
						<Image style={stylesheet._Foto} source={require('my-app/assets/foto.png')} />
					</View>
					<View>
						<Text style={[stylesheet._Descricao1]}>
							Que tal um pouco de chá, e um bom amigo pra conversar?
						</Text>
						<Text style={[stylesheet._Ola]}>
							Oii, Mari!
						</Text>
					</View>
				</View>

			</View>
		</ScrollView>
	)
}

const stylesheet = StyleSheet.create({

	_Home: {
		position: "relative",
		width: Dimensions.get("window").width,
		height: 667,
	},

	_bgHome: {
		position: "absolute",
		width: 375,
		height: 667,
		backgroundColor: "rgba(135, 206, 235, 0.5)",
	},

	_Diario: {
		position: "absolute",
		width: 374,
		height: 70,
		transform: [
			{ translateX: 1 },
			{ translateY: 520 },
			{ rotate: "0deg" },
		],
	},

	_bgDiario: {
		position: "absolute",
		width: 375,
		height: 70,
		borderTopLeftRadius: 85.5,
		borderBottomLeftRadius: 82,
		backgroundColor: "rgba(135, 206, 235, 0.5)",
	},

	_Heart2: {
		position: "absolute",
		width: 25,
		height: 25,
		top: -5,
		left: 25,
		transform: [
			{ translateX: 0 },
			{ translateY: 25.54052734375 },
			{ rotate: "0deg" },
		],
		color: "rgba(255, 255, 255, 1)",
	},

	_Descricao: {
		position: "absolute",
		width: 275,
		height: 50,
		left: 74,
		top: 20,
		fontWeight: '400',
		fontSize: 14,
		textAlign: "center",
		color: "rgba(255, 255, 255, 1)",
	},

	_Planos: {
		position: "absolute",
		width: 374,
		height: 70,
		transform: [
			{ translateX: 1 },
			{ translateY: 420 },
			{ rotate: "0deg" },
		],
	},

	_bgPlanos: {
		position: "absolute",
		width: 374,
		height: 70,
		borderTopRightRadius: 85.5,
		borderBottomRightRadius: 82,
		backgroundColor: "rgba(196, 195, 208, 1)",
	},

	_Smile: {
		position: "absolute",
		borderColor: "rgba(255, 255, 255, 1)",
		left: 319,
		top: 18,
	},

	_MeusPlanos: {
		position: "absolute",
		width: 181,
		height: 27,
		left: 78,
		top: 30,
		fontWeight: '400',
		fontSize: 14,
		textAlign: "center",
		color: "rgba(255, 255, 255, 1)",
	},

	_Humor: {
		position: "absolute",
		width: 375,
		height: 70,
		transform: [
			{ translateX: -1 },
			{ translateY: 320 },
			{ rotate: "0deg" },
		],
	},

	_bgHumor: {
		position: "absolute",
		width: 375,
		height: 70,
		borderTopLeftRadius: 85.5,
		borderBottomLeftRadius: 82,
		backgroundColor: "rgba(177, 237, 180, 1)",
	},

	_DescricaoH: {
		position: "absolute",
		width: 228,
		height: 30.2702693939209,
		top: 30,
		left: 86,
		fontWeight: '400',
		fontSize: 14,
		textAlign: "center",
		color: "rgba(255, 255, 255, 1)",

	},

	_QuemSou: {
		position: "absolute",
		width: 374,
		height: 70,
		transform: [
			{ translateX: -1 },
			{ translateY: 220 },
			{ rotate: "0deg" },
		],
	},

	_bgQuemSou: {
		position: "absolute",
		width: 374,
		height: 70,
		borderTopRightRadius: 85.5,
		borderBottomRightRadius: 82,
		backgroundColor: "rgba(238, 196, 201, 1)",
	},

	_Heart1: {
		position: "absolute",
		width: 25,
		height: 25,
		top: 20,
		left: 319,
	},

	_Titulo: {
		position: "absolute",
		left: 133,
		top: 25,
		fontWeight: '400',
		fontSize: 14,
		textAlign: "left",
		color: "rgba(255, 255, 255, 1)",
	},

	_bgTopo: {
		position: "absolute",
		width: 375,
		height: 187,
		borderBottomRightRadius: 82,
		backgroundColor: "rgba(156, 144, 181, 1)",
	},

	_bgFoto: {
		position: "absolute",
		width: 50,
		height: 50,
		left: 282,
		top: 40,
		borderRadius: 60,
		backgroundColor: "rgba(196, 196, 196, 1)",
	},

	_Foto: {
		position: "absolute",
		width: 50,
		height: 50,
		left: 282,
		top: 40,
		borderRadius: 60,
	},

	_Descricao1: {
		position: "absolute",
		width: 284,
		height: 53,
		left: 23,
		top: 110,
		fontWeight: '400',
		fontSize: 14,
		textAlign: "center",
		color: "rgba(255, 255, 255, 1)",
	},

	_Ola: {
		position: "absolute",
		left: 23,
		top: 60,
		fontWeight: '500',
		fontSize: 22,
		textAlign: "left",
		color: "rgba(255, 255, 255, 1)",
	},

});

export default Home;