import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const Title = ({titleText}) => (
    <View style={styles.container}>
        <Text style={styles.title}>{titleText}</Text>
    </View>
);

export default Title;

const styles = StyleSheet.create({
    title:{
        fontSize: 30,
        fontWeight: "600",
        color: "white"

    },
    container:{
        paddingVertical: 16,
        justifyContent: 'center',
        alignItems: "center",
    }
})