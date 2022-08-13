import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, TouchableWithoutFeedback, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { TextInput } from 'react-native-gesture-handler';
import Title from '../components/title';

const SignUp = (props) => {
    
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [nickname, setNickName] = useState('');

    const [isfirstnamevalid, setIsFirstNameValid] = useState(0);
    const [islastnamevalid, setIsLastNameValid] = useState(0);
    const [isnicknamevalid, setIsNickNameValid] = useState(0);
    const [isFormValid, setIsFormValid] = useState(false);


    const savedUserToSF = async () => {
        try {
            await AsyncStorage.setItem('fname', firstname);
            await AsyncStorage.setItem('lname', lastname);
            await AsyncStorage.setItem('nname', nickname);
        } catch (error) {
            console.log(error);
        }
    }

    const getUserFromSF = async () => {
        try {
            const fname = await AsyncStorage.getItem('fname');
            const lname = await AsyncStorage.getItem('lname');
            const nname = await AsyncStorage.getItem('nname');

            setFirstName(fname !== null ? fname : firstname);
            setLastName(lname !== null ? lname : lastname);
            setNickName(nname !== null ? nname : nickname);
            if (firstname !== null) setIsFormValid(true);
        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        if (isfirstnamevalid === 1 && islastnamevalid === 1 && isnicknamevalid === 1 ) {
            setIsFormValid(true);
            savedUserToSF();
            console.log('valid details!');
        }
        getUserFromSF();
        
    }, [isfirstnamevalid, islastnamevalid, isnicknamevalid, props.route.params]) 

    const handleSubmit = () => {
        if (firstname.trim().length > 0) {
            setIsFirstNameValid(1);
        } else {
            setIsFirstNameValid(2);
        }

        if (lastname.trim().length > 0) {
            setIsLastNameValid(1);
        } else {
            setIsLastNameValid(2);
        }

        if (nickname.trim().length > 0) {
            setIsNickNameValid(1);
        } else {
            setIsNickNameValid(2);
        }

        
    }

    const goTOQuiz = () => {
        isFormValid ? props.navigation.navigate('Quiz') : null
    }


    return (
        <View style={styles.container}>
        <KeyboardAvoidingView>
            <TouchableWithoutFeedback>
                <View >
                    <Title titleText={"Enter your User Information!"}/>
                    <View >
                        <View style={styles.textBoxes}>
                            <Text style={styles.label}>First Name {"\n"}</Text>
                            <TextInput style={styles.input} value={firstname} onChangeText={text => { setFirstName(text); setIsFirstNameValid(0) }} />
                            {isfirstnamevalid === 2 ? <Text style={styles.validateMessage}>Please enter your first name</Text> : <Text></Text>}
                        </View>
                        <View style={styles.textBoxes}>
                            <Text style={styles.label}>Last Name {"\n"}</Text>
                            <TextInput style={styles.input} value={lastname} onChangeText={text => { setLastName(text); setIsLastNameValid(0) }} />
                            {islastnamevalid === 2 ? <Text style={styles.validateMessage}>Please enter your last name</Text> : <Text></Text>}
                        </View>
                        <View style={styles.textBoxes}>
                            <Text style={styles.label}>Username {"\n"}</Text> 
                            <TextInput style={styles.input} value={nickname} onChangeText={text => { setNickName(text); setIsNickNameValid(0) }} />
                            {isnicknamevalid === 2 ? <Text style={styles.validateMessage}>Please enter your username</Text> : <Text></Text>}
                        </View>
                        
                    </View>
                    <View>
                        <View>
                            <TouchableOpacity style={styles.button}  onPress={handleSubmit}>
                            <Text style={styles.buttonText}> Submit</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity style={styles.button} onPress={goTOQuiz}> 
                            <Text style={styles.buttonText}> Start Round 1!</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    
                    
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
        </View>
    );
}


const styles = StyleSheet.create({
   
    validateMessage: {
        color: 'red',
    },
    button:{
        backgroundColor: "#EAAC8B",
        padding: 12,
        paddingHorizontal: 16,
        borderRadius: 16,
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
      },
      buttonText:{
        fontSize: 18,
        fontWeight: "600",
        color: "white"
      },

    container: {  
        flex: 1,
        backgroundColor: "#355070",
        alignItems: 'center',
        justifyContent: 'center',
      },
      textBoxes: {
//         alignItems: "center",
        alignSelf: "center",
        fontSize: 18,
        //  padding: 12,
        // borderWidth: 0.2,
        //  borderRadius: 10,
         backgroundColor: "#B56576",
         paddingVertical: 5,
         marginVertical: 6,
         borderRadius: 16,
        paddingHorizontal: 25,
        width: "100%",
      },
      scoreText:{
        color: "white",
        fontSize: 18,
        fontWeight: "800"
      },
      scoreContainer:{
        paddingVertical: 30,
        marginVertical: 6,
        backgroundColor: "#E56B6F",
        borderRadius: 16,
        paddingHorizontal: 25,
      },
      label:{
        color: "white",
        fontSize: 20,
        fontWeight: "bold"

      },
      input:{
        color: "white",
        fontSize: 20,
      }
});

export default SignUp;