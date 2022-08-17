import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';


const Rules = ({navigation}) => (
    <View style={styles.container}>       
        <ImageBackground source={{ uri: "https://i.imgur.com/LVOZAM4.png" }} style={styles.image}
        resizeMode="cover">
        <TouchableOpacity onPress={() => navigation.navigate("Quiz")} style={styles.start}>
            <Text style={styles.startText}>Play!</Text>
        </TouchableOpacity>
            </ImageBackground>
    </View>
);

export default Rules;

const styles = StyleSheet.create({
    container:{
        height: "100%",
        paddingTop: 50,
        backgroundColor: "#355070"
    },
    banner:{
        justifyContent: 'center',
        alignItems: "center"
    },
    image: {
        justifyContent: 'center',
        alignItems: "center",
        width: 400,
		height: 800,
      },
      start:{
        width: "100%",
        backgroundColor: "#E56B6F",
        padding: 16,
        marginTop: 575,
        borderRadius: 16,
        alignItems: 'center',
        width: "75%",
      },
      startText:{
        fontSize: 24,
        fontWeight: "600",
        color: "white"
      },
      
      
})