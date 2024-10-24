import {View, Text, Image, StyleSheet } from "react-native";


export default function Screen(){
    return(
        <View style={styles.container} >
            <Image source={require('../assets/dolar.png')}
                resizeMode="contain"
                style={styles.logo}
            />
            <Text>O dólar Americano está:</Text>
            <Text>R$: 99,99</Text>
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
    }
})