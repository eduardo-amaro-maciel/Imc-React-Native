import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formContext: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: "center",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingTop: 30,
    },

    form: {
        width: "100%",
    },

    formLabel: {
        color: "black",
        fontSize: 18,
        paddingLeft: 20,
    },
    
    input: {
        width: "90%",
        borderRadius: 50,
        backgroundColor: "#f6f6f6",
        height: 40,
        margin: 12,
        paddingLeft: 10,
    },

    buttonCalc: {
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        width: "90%",
        backgroundColor: "#ff0403",
        paddingTop: 14,
        paddingBottom: 14,
        marginLeft: 12,
        marginTop: 10
    },
    
    textButtonCalc: {
        fontSize: 20,
        color: "#ffffff"
    },

    errorMessage: {
        fontSize: 12,
        color: "red",
        fontWeight: "bold",
        paddingLeft: 20
    },

    exibirResultadoIMC: {
        width: "100%",
        height: "50%"
    },

    listImcs: {
        marginTop: 20,
    },

    resultImcsItem: {
        fontSize: 25,
        color: 'red',
        height: 50,
        width: '100%',
        paddingRight: 20
    },

    textResultItemList: {
        color: 'red',
        fontSize: 14,
    }
})

export default styles