import React from "react";
import { Text, View, TouchableOpacity, Share } from "react-native";
import styles from "./style";

export default function ResultIMC(props) {

    const onShare = async () => {
        const result = await Share.share({
            message: `Meu IMC hoje é: ${props.resultIMC}`
        })
    }

    return (
        <View style={styles.resultImc}>
            <Text style={styles.information}>{props.menssageResultIMC}</Text>
            <Text style={styles.numberImc}>{props.resultIMC}</Text>
            <View style={styles.boxShareButton}> 
                <TouchableOpacity style={styles.shared} onPress={onShare}>
                   <Text style={styles.sharedText}>Share</Text>    
                </TouchableOpacity> 
            </View>
        </View>
    )
}