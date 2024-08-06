import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
    const [number, onChangeText] = useState('');
    const [operador, setOperador] = useState('');
    const [resultado, setResultado] = useState('');

    const soma = () => {
        setResultado(Number(number) + Number(operador));
    };

    const subtracao = () => {
        setResultado(Number(number) - Number(operador));
    };

    const multiplicacao = () => {
        setResultado(Number(number) * Number(operador));
    };

    const divisao = () => {
        setResultado(Number(number) / Number(operador));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>CalculaDORa</Text>

            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={number}
                placeholder='Digite o Número aqui'
                keyboardType='numeric'
            />

            <TextInput
                style={styles.input}
                onChangeText={setOperador}
                value={operador}
                placeholder='Insira o operador aqui'
                keyboardType='numeric'
            />

            <View style={styles.buttonContainer}>
                <Button
                    title='+'
                    onPress={soma}
                />
                <Button
                    title='-'
                    onPress={subtracao}
                />
                <Button
                    title='x'
                    onPress={multiplicacao}
                />
                <Button
                    title='/'
                    onPress={divisao}
                />
            </View>

            <Text style={styles.result}>Resultado:{resultado}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: 'black',
        borderWidth: 1,
        width: '80%',
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100px',
        marginBottom: 20,
    },
    result: {
        fontSize: 18,
        marginTop: 20,
    },
});