import React from "react";
import { View, Text, ScrollView, StyleSheet, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/Feather";


function Diario1 ({ navigation }){
	return (
		<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {stylesheet._Diario1}>
			<View style = {stylesheet._bg}>
			</View>

			<View style = {stylesheet._Section}>
				<View style = {stylesheet._D1}>
				</View>
				<View style = {stylesheet._D2}>
				</View>
				<View style = {stylesheet._D3}>
				</View>
				<View style = {stylesheet._D4}>
				</View>
			</View>

			<View>
				<View style = {stylesheet._RecTit}>
				</View>
				
				<Text style = {[stylesheet._Titulo]}>
					Todos os seus segredos aqui,.
				</Text>
				

				<Icon style={stylesheet._BtnBackHome} name="arrow-left" size={30} color="rgba(156, 144, 181, 1)" onPress={() => navigation.navigate('Home')} />

			</View>
		</View>
		</ScrollView>
	)
}

const stylesheet = StyleSheet.create({
	
	_Diario1: {
		position: "relative",
		width: Dimensions.get("window").width,
		height: 667,
	},

	_bg: {
		position: "absolute",
		width: 375,
		height: 667,
		backgroundColor: "rgba(135, 206, 235, 0.5)",
	},

	_Section: {
		position: "absolute",
		width: 375,
		height: 309,
		transform: [
			{translateX: 0},
			{translateY: 139},
			{rotate: "0deg"},
		],
	},

	_D4: {
		position: "absolute",
		width: 360,
		height: 66,
		borderBottomLeftRadius: 40,
		left: 15,
		top: 265,
		backgroundColor: "rgba(135, 206, 235, 1)",
	},

	_D3: {
		position: "absolute",
		width: 360,
		height: 66,
		borderBottomRightRadius: 40,
		top: 180,
		backgroundColor: "rgba(135, 206, 235, 1)",
	},

	_D2: {
		position: "absolute",
		width: 360,
		height: 66,
		borderBottomLeftRadius: 40,
		left: 15,
		top: 95,
		backgroundColor: "rgba(135, 206, 235, 1)",
	},

	_D1: {
		position: "absolute",
		width: 360,
		height: 66,
		borderBottomRightRadius: 40,
		top: 15,
		backgroundColor: "rgba(135, 206, 235, 1)",
	},


	_RecTit: {
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
		color: "rgba(255, 255, 255, 1)",
	},

	_BtnBackHome: {
		position: "absolute",
		left: 20,
		top: 55,
	},
});

export default Diario1;