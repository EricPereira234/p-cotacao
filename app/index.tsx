import { View, Text, Image, StyleSheet } from "react-native";


//arquivos internos
import { Button } from "../components/button";


export default function Screen() {

    const handleUpdate = () => {

    }

    return (
        <View style={styles.container} >
            <Image source={require('../assets/dolar.png')}
                resizeMode="contain"
                style={styles.logo}
            />
            <Text style={styles.h2} >O dólar Americano está:</Text>
            <Text style={styles.currencyText} >R$: 99,99</Text>
            <Button label="Atualizar" onPress={handleUpdate} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#0b1c2d',
        paddingHorizontal: 20
    },
    logo: {
        width: 200,
        height: 180
    },
    h2: {
        color: '#ccc',
        fontSize: 24,
        marginTop: 30
    },
    currencyText: {
        color: '#fff',
        fontSize: 52,
        marginTop: 20,
        marginBottom: 50
    }
})