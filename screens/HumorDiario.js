import * as React from "react";
import { View, Text, Button, TextInput, ScrollView, StyleSheet, Dimensions } from "react-native";
import Icon from "react-native-vector-icons/Feather";


function HumorDiario({ navigation }) {
    return (
        <ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{ height: Dimensions.get("window").height }}>
            <View style={stylesheet._HumorDiario}>
                <View style={stylesheet._bgHumor}>
                </View>

                <View style={stylesheet._Registros}>
                    <Button title='Registros' color={"rgba(255, 255, 255, 1)"} onPress={() => navigation.navigate('HDiarioRegistros')} />
                </View>

                <View style={stylesheet._BotaoNext}>
                    <Icon name="arrow-down" size={30} color="rgba(196, 195, 208, 0.7)" onPress={() => navigation.navigate('PlanosDiarios')} />
                </View>
                <View style={stylesheet._BgHumor}>
                    <View style={stylesheet._BgHumor}>
                    </View>

                    <View style={stylesheet._Oct8}>
                        <Icon name="octagon" size={20} color="rgba(255, 255, 255, 1)" />
                    </View>
                    <View>
                        <Text style={[stylesheet._Humor1]}>
                            Feliz
                        </Text>
                    </View>

                    <View style={stylesheet._Oct9}>
                        <Icon name="octagon" size={20} color="rgba(255, 255, 255, 1)" />
                    </View>
                    <View>
                        <Text style={[stylesheet._Humor2]}>
                            Triste
                        </Text>
                    </View>

                    <View style={stylesheet._Oct10}>
                        <Icon name="octagon" size={20} color="rgba(255, 255, 255, 1)" />
                    </View>
                    <View>
                        <Text style={[stylesheet._Humor3]}>
                            Indiferente
                        </Text>
                    </View>

                    <View style={stylesheet._Oct11}>
                        <Icon name="octagon" size={20} color="rgba(255, 255, 255, 1)" />
                    </View>
                    <View>
                        <Text style={[stylesheet._Humor4]}>
                            Ansioso
                        </Text>
                    </View>

                    <View style={stylesheet._Oct12}>
                        <Icon name="octagon" size={20} color="rgba(255, 255, 255, 1)" />
                    </View>
                    <View>
                        <Text style={[stylesheet._Humor5]}>
                            Estressado
                        </Text>
                    </View>

                    <View>
                        <Text style={[stylesheet._Titulo]}>
                            Hoje estive:
                        </Text>
                    </View>

                    </View>

                    <View>
                    <View style={stylesheet._bgDescricao}>
                    </View>
                    <Text style={[stylesheet._Descricao]}>
                        Não esquece de voltar pra registrar seu humor, blz? :)
                    </Text>

                    <View>
                    <TextInput
                        style={stylesheet._bg2}
                        defaultValue="Escreva aqui"
                        clearTextOnFocus="true"
                        multiline="true"
                        numberOfLines={10}
                    />
                </View>

                <View style={stylesheet._bgTopo}>
				</View>
                <View>
                    <Text style={[stylesheet._Titulo1]}>
                        Me conta, como foi sua noite?
                    </Text>
                </View>

                <View style={stylesheet._BtnBackHome}>
                    <Icon name="arrow-left" size={30} color="rgba(156, 144, 181, 1)" onPress={() => navigation.navigate('Home')} />
                </View>
                </View>
            </View>
        </ScrollView>
    )
}

const stylesheet = StyleSheet.create({

    _HumorDiario: {
        position: "relative",
        width: Dimensions.get("window").width,
        height: 667,
    },

    _bgHumor: {
        position: "absolute",
        width: 375,
        height: 667,
        backgroundColor: "rgba(177, 237, 180, 0.5)",
    },

    _Registros: {
        position: "absolute",
        width: 105,
        height: 35,
        borderRadius: 5,
        left: -10,
        top: 60,
        transform: [
            { translateX: 262 },
            { translateY: 551 },
            { rotate: "0deg" },
        ],
        backgroundColor: "rgba(177, 237, 180, 1)",
    },

    _BotaoNext: {
        position: "absolute",
        width: 42,
        height: 39,
        transform: [
            { translateX: 23 },
            { translateY: 616 },
            { rotate: "0deg" },
        ],
    },

    _BgHumor: {
        position: "absolute",
        width: 321,
        height: 128,
        borderBottomLeftRadius: 40,
        transform: [
            { translateX: 54 },
            { translateY: 455 },
            { rotate: "0deg" },
        ],
        backgroundColor: "rgba(177, 237, 180, 1)",
    },

    _Oct8: {
        position: "absolute",
        left: 35,
        top: 28,
    },

    _Humor1: {
        position: "absolute",
        width: 43,
        height: 19,
        left: 60,
        top: 30,
        fontWeight: '400',
        fontSize: 12,
        textAlign: "center",
        color: "rgba(255, 255, 255, 1)",
    },

    _Oct9: {
        position: "absolute",
        left: 35,
        top: 54,
    },

    _Humor2: {
        position: "absolute",
        width: 43,
        height: 19,
        left: 60,
        top: 55,
        fontWeight: '400',
        fontSize: 12,
        textAlign: "center",
        color: "rgba(255, 255, 255, 1)",
    },

    _Oct10: {
        position: "absolute",
        left: 35,
        top: 80,
    },

    _Humor3: {
        position: "absolute",
        width: 64,
        height: 19,
        left: 60,
        top: 82,
        fontWeight: '400',
        fontSize: 12,
        textAlign: "center",
        color: "rgba(255, 255, 255, 1)",
    },

    _Oct11: {
        position: "absolute",
        left: 152,
        top: 69,
    },

    _Humor4: {
        position: "absolute",
        width: 64,
        height: 19,
        left: 168,
        top: 72,
        fontWeight: '400',
        fontSize: 12,
        textAlign: "center",
        color: "rgba(255, 255, 255, 1)",
    },

    _Oct12: {
        position: "absolute",
        left: 152,
        top: 93,
    },

    _Humor5: {
        position: "absolute",
        width: 64,
        height: 19,
        left: 175,
        top: 95,
        fontWeight: '400',
        fontSize: 12,
        textAlign: "center",
        color: "rgba(255, 255, 255, 1)",
    },

    _Titulo: {
        position: "absolute",
        width: 120,
        height: 20,
        left: 150,
        top: 22,
        fontWeight: '400',
        fontSize: 15,
        textAlign: "center",
        color: "rgba(255, 255, 255, 1)",
    },

    _bgDescricao: {
        position: "absolute",
        width: 375,
        height: 249,
        borderBottomRightRadius: 40,
        top: 160,
        backgroundColor: "rgba(177, 237, 180, 1)",
    },

    _Descricao: {
        position: "absolute",
        width: 285,
        height: 16,
        left: 14,
        top: 385,
        fontWeight: '400',
        fontSize: 11,
        textAlign: "center",
        color: "rgba(255, 255, 255, 1)",
    },

    _bg2: {
        position: "absolute",
        width: 360,
        height: 220,
        left: 2,
        top: 160,
        borderBottomRightRadius: 40,
        textAlign: "center",
        color: "rgba(255, 255, 255, 1)",
        backgroundColor: "rgba(196, 195, 208, 0.5)",
    },

    _bgTopo: {
		position: "absolute",
		width: 375,
		height: 124,
		borderBottomLeftRadius: 82,
        backgroundColor: "rgba(177, 237, 180, 1)",
	},

    _Titulo1: {
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
        width: 42,
        height: 39,
        transform: [
            { translateX: 15 },
            { translateY: 55 },
            { rotate: "0deg" },
        ],
    },

});

export default HumorDiario;