import React from "react";
import { View, Text, ScrollView, StyleSheet, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/Feather";


function Sobre ({ navigation }){
	return (
		<ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{height: Dimensions.get("window").height}}>
		<View style = {stylesheet._QuemSou}>
			<View style = {stylesheet._bg}>
			</View>

			<View style = {stylesheet._BtnNext}>
			<Icon name="arrow-down" size={30} color="rgba(177, 237, 180, 1)" onPress={() => navigation.navigate('HumorDiario')} />
			</View>

			<View>
				<View style = {stylesheet._bgDesc}>
				</View>
				<View style = {[stylesheet._Descricao2]}>
				<Text>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse auctor aliquam velit, in maximus urna tincidunt quis. Sed nisl lacus, interdum quis tellus at, feugiat fringilla sapien. Quisque maximus dolor vitae nisi cursus, eget imperdiet dolor vestibulum. Integer molestie orci id purus imperdiet, id auctor dui lacinia. Mauris id massa quam. In congue dui eu urna dictum, eu porttitor ante cursus. Sed aliquam faucibus enim a semper. Quisque viverra magna in tincidunt ullamcorper.
				</Text>
				</View>
			</View>
			<View>
				<View style={stylesheet._bgTopo}>
				</View>
				<View>
				<Text style = {[stylesheet._Titulo]}>
					Quem sou eu?
				</Text>
				</View>
			</View>

			<View style = {stylesheet._BotaoBHome}>
				<Icon name="arrow-left" size={30} color="rgba(156, 144, 181, 1)" onPress={() => navigation.navigate('Home')} />
			</View>
		</View>
		</ScrollView>
	)
}

const stylesheet = StyleSheet.create({
	
	_QuemSou: {
		position: "relative",
		width: Dimensions.get("window").width,
		height: 667,
	},

	_bg: {
		position: "absolute",
		width: 375,
		height: 667,
		backgroundColor: "rgba(238, 196, 201, 0.4)",
	},

	_BtnNext: {
		position: "absolute",
		width: 42,
		height: 39,
		transform: [
			{translateX: 23},
			{translateY: 616},
			{rotate: "-1.973892833056507e-14deg"},
		],
	},


	_bgDesc: {
		position: "absolute",
		width: 360,
		height: 360,
		borderBottomRightRadius: 40,
		transform: [
			{translateX: 0},
			{translateY: 185},
			{rotate: "0deg"},
		],
		backgroundColor: "rgba(238, 196, 201, 1)",
	},

	_Descricao2: {
		position: "absolute",
		width: 330,
		height: 250,
		left: 10,
		top: 260,
		fontWeight: '400',
		fontSize: 14,
		textAlign: "justify",
		color: "rgba(0, 0, 0, 1)",
	},

	_bgTopo: {
		position: "absolute",
		width: 375,
		height: 124,
		borderBottomLeftRadius: 82,
		backgroundColor: "rgba(238, 196, 201, 1)",
	},

	_Titulo: {
		position: "absolute",
		width: 108,
		height: 21,
		left: 136,
		top: 61,		
		fontWeight: '500',
		fontSize: 16,
		textAlign: "left",
		color: "rgba(255, 255, 255, 1)",
	},

	_BotaoBHome: {
		position: "absolute",
		width: 42,
		height: 39,
		transform: [
			{translateX: 23},
			{translateY: 55},
			{rotate: "0deg"},
		],
		overflow: "hidden",
		backgroundColor: "rgba(0,0,0,0)",
	},

	
	
});

export default Sobre;