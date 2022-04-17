import React, { useState }from "react";
import { 
    View, 
    Text, 
    TextInput, 
    TouchableOpacity, 
    Vibration,
    Pressable,
    Keyboard,
    FlatList
} from "react-native";
import ResultIMC from "../ResultIMC";
import styles from "./style";

export default function Form() {

    const [height, setHeight] = useState('')
    const [weight, setWeight] = useState('')
    const [menssageIMC, setMenssageIMC] = useState('Preencha o peso e altura')
    const [IMC, setIMC] = useState('')
    const [textButton, setTextButton] = useState('Calcular')
    const [errorMessage, setErrorMessage] = useState('')
    const [imcList, setImcList] = useState([])
    
    function imcCalculator() {
        let imcFormatado = height.replace(',', '.')
        let totalImc = (weight / (imcFormatado * imcFormatado)).toFixed(2)
        setImcList(arr => {
            return [...arr, {id: new Date().getTime(), imc: totalImc }]
        })
        setIMC(totalImc)
    }

    function verificationImc() {
        if (IMC === '') {
            Vibration.vibrate()
            setErrorMessage('campo obrigatorio*')
        }
    }

    function validationIMC() {
        if (weight != '' && height != '') {
            imcCalculator()
            setHeight('')
            setWeight('')
            setMenssageIMC('Seu IMC é igual: ')
            setTextButton('Calcular Novamente')
            setErrorMessage('')
            
        } else {
            verificationImc()
            setIMC('')
            setTextButton('Calcular')
            setMenssageIMC('Preencha peso e altura')
        }
    }

    function renderListItem(item) {
        
        return (
            <Text style={styles.resultImcItem}>   
                <Text style={styles.textResultItemList}>Resultado IMC = </Text>
                {item.imc}
            </Text>
        )
    }

    function gerarId(item) {
        console.log(item)
    }

    return (
        <View style={styles.formContext}>
            {IMC == '' ? 
                <Pressable onPress={Keyboard.dismiss} style={styles.form}>
                    <Text style={styles.formLabel}>Altura</Text>
                    <Text style={styles.errorMessage}>{errorMessage}</Text>
                    <TextInput style={styles.input} onChangeText={setHeight} value={height} placeholder="Sua Altura" keyboardType="numeric" />

                    <Text style={styles.formLabel}>Peso</Text>
                    <Text style={styles.errorMessage}>{errorMessage}</Text>
                    <TextInput style={styles.input} onChangeText={setWeight} value={weight} placeholder="Seu Peso" keyboardType="numeric" />

                    <TouchableOpacity style={styles.buttonCalc} onPress={() => validationIMC()}>
                        <Text style={styles.textButtonCalc}>{textButton}</Text>
                    </TouchableOpacity>
                </Pressable>
            : 
                <View style={styles.exibirResultadoIMC}>
                    <ResultIMC menssageResultIMC={menssageIMC} resultIMC={IMC} />
                    <TouchableOpacity style={styles.buttonCalc} onPress={() => validationIMC()}>
                        <Text style={styles.textButtonCalc}>{textButton}</Text>
                    </TouchableOpacity>
                </View>
            }

            <FlatList style={styles.listImcs} data={imcList.reverse()} renderItem={({item}) => renderListItem(item)} keyExtractor={(item) => item.id}/>
        </View>
    )
}