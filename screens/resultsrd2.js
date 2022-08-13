import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

const Results2 = ({navigation, route}) => { 
    const {score, question, questions} = route.params

   return (
    <View style={styles.container}>
         <ImageBackground source={{ uri: "https://i.imgur.com/lX6x82m.png" }} style={styles.image}
        resizeMode="cover">
            <Text style={styles.scoreVal}>{score}/100 </Text>
            </ImageBackground>
        <View>
           <Text style={styles.text}>Sorry, you lost this round. {"\n"} Click "Home" to play again! {"\n"}</Text>
            <TouchableOpacity style={styles.button} onPress={() =>navigation.navigate("Home")}>
                <Text style={styles.buttonText}>Home</Text>
            </TouchableOpacity>
        </View>
    </View>
    )
}
;

export default Results2;

const styles = StyleSheet.create({
    container:{
        height: "100%",
        paddingTop: 50,
        paddingHorizontal: 40,
        backgroundColor: "#355070"
    },
    image: {
        justifyContent: 'center',
        alignSelf: "center",
        width: 500,
		height: 500,
      },
      button:{
        backgroundColor: "#EAAC8B",
        padding: 12,
        paddingHorizontal: 16,
        borderRadius: 16,
        alignItems: 'center',
        marginBottom: 30,
      },
      buttonText:{
        fontSize: 18,
        fontWeight: "600",
        color: "white"
      },
      scoreVal:{
        fontSize: 70,
        fontWeight: "800",
        color: "white",
        alignSelf: "center"
      },
      text:{
        fontSize: 20,
        fontWeight: "700",
        color: "white",
        alignSelf: "center"
      }
})
