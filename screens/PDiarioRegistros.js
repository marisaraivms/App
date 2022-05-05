import React from "react";
import { View, Text, Image, ScrollView, StyleSheet, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/Feather";


function PDiarioRegistros ({ navigation }){
	return (
		<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {stylesheet._MeusPlanos}>
			<View style = {stylesheet._bg}>
			</View>
			<View style = {stylesheet._SectionPlans}>
				<View style = {stylesheet._Plan1}>
				</View>
				<View style = {stylesheet._Plan2}>
				</View>
				<View style = {stylesheet._Plan3}>
				</View>
				<View style = {stylesheet._Plan4}>
				</View>
			</View>
			<View>
				<View style = {stylesheet._RecTit}>
				</View>
				<View>
				<Text style = {[stylesheet._Titulo]}>
					Todos os seus planos, organizdinhos aqui. :)
				</Text>
				</View>

				<Icon style = {stylesheet._BtnBHome} name="arrow-left" size={30} color="rgba(156, 144, 181, 1)" onPress={() => navigation.navigate('PlanosDiarios')} />

			</View>
		</View>
		</ScrollView>
	)
}

const stylesheet = StyleSheet.create({

	_MeusPlanos: {
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

	_SectionPlans: {
		position: "absolute",
		width: 375,
		height: 285,
		transform: [
			{translateX: 0},
			{translateY: 139},
			{rotate: "0deg"},
		],
	},

	_Plan4: {
		position: "absolute",
		width: 360,
		height: 60,
		borderBottomLeftRadius: 40,
		left: 15,
		top: 245,
		backgroundColor: "rgba(196, 195, 208, 1)",
	},

	_Plan3: {
		position: "absolute",
		width: 360,
		height: 60,
		borderBottomRightRadius: 40,
		top: 165,
		backgroundColor: "rgba(196, 195, 208, 1)",
	},

	_Plan2: {
		position: "absolute",
		width: 360,
		height: 60,
		borderBottomLeftRadius: 40,
		left: 15,
		top: 90,
		backgroundColor: "rgba(196, 195, 208, 1)",
	},

	_Plan1: {
		position: "absolute",
		width: 360,
		height: 60,
		top: 15,
		borderBottomRightRadius: 40,
		backgroundColor: "rgba(196, 195, 208, 1)",
	},


	_RecTit: {
		position: "absolute",
		width: 375,
		height: 124,
		borderBottomLeftRadius: 82,
		backgroundColor: "rgba(196, 195, 208, 1)",
	},

	_Titulo: {
		position: "absolute",
		width: 289,
		height: 30,
		left: 50,
		top: 55,
		fontWeight: '400',
		fontSize: 14,
		textAlign: "center",
		color: "rgba(255, 255, 255, 1)",
	},

	_BtnBHome: {
        position: "absolute",
		width: 42,
		height: 39,
		left: 15,
		top: 50,
    },
	
});

export default PDiarioRegistros;