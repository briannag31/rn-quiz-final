import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

function shuffleArray(array){
    for(let i=array.length; i>0; i--){
        let j = Math.floor(Math.random() * (i + 1))
        let temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }
}

export default Quiz2 = ({navigation}) => {
    const [questions, setQuestions] = useState()
    const [question, setQuestion] = useState(0)
    const [options, setOptions] = useState([])
    const [score, setScore] = useState(0)

    const getQuiz = async()=>{
        const url = "https://opentdb.com/api.php?amount=10&difficulty=medium&type=multiple&encode=url3986"
        const response = await fetch(url)
        const data = await response.json()
        setQuestions(data.results)
        setOptions(shuffleOptions(data.results[0]))
    }

    useEffect(() =>{
        getQuiz()
    },[])

    const handleNext = ()=>{
        setQuestion(question +1)
        setOptions(shuffleOptions(questions[question +1]))

    } 

    const shuffleOptions = (q)=>{
        const options = [...q.incorrect_answers]
        options.push(q.correct_answer)
        shuffleArray(options)
        return options
    }

    const handleSelect =(opt)=>{
        if(opt===questions[question].correct_answer){
            setScore(score+10)
        }
        if(question!==9){
            setQuestion(question +1)
            setOptions(shuffleOptions(questions[question +1]))
        }}
    //     if(question === 9){
    //         handleResultsWin()
    //         // handleResultsLose()
    //     }
    //     }
    //     const handleResultsWin = () =>{
    //         navigation.navigate("Win", {
    //             score: score
    //         })}
        const handleResultsLose = () =>{
            navigation.navigate("Results2", {
                score: score
            })
    }
    return(
        <View style={styles.container}>
           {questions && (
           <View style={styles.parent}>
           <View style={styles.question}>
                <Text style={styles.question}> {decodeURIComponent(questions[question].question)}</Text>
            </View>
            <View style={styles.options}>
                <TouchableOpacity style={styles.optionButton} onPress={()=>handleSelect(options[0])}>
                    <Text style={styles.optionText}> {decodeURIComponent(options[0])}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionButton} onPress={()=>handleSelect(options[1])}>
                    <Text style={styles.optionText}> {decodeURIComponent(options[1])}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionButton} onPress={()=>handleSelect(options[2])}>
                    <Text style={styles.optionText}> {decodeURIComponent(options[2])}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.optionButton} onPress={()=>handleSelect(options[3])}>
                    <Text style={styles.optionText}>{decodeURIComponent(options[3])}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.buttons}>
                {question !== 9 && <TouchableOpacity style={styles.button} onPress={handleNext}>
                    <Text style={styles.buttonText}>Skip!</Text>
                </TouchableOpacity>}

                {question===9 && score >10 && <TouchableOpacity style={styles.button} onPress={navigation.navigate("Win")}>
                    <Text style={styles.buttonText}>Show my results!</Text>
                </TouchableOpacity>}
                {question===9 && score <10 && <TouchableOpacity style={styles.button} onPress={handleResultsLose}>
                    <Text style={styles.buttonText}>Show my results!</Text>
                </TouchableOpacity>}

            </View>
            </View>
            )}
        </View>
    )
};


const styles = StyleSheet.create({
    container:{
        height: "100%",
        paddingTop: 80,
        paddingHorizontal: 40,
        backgroundColor: "#355070"
    },
    parent:{
        height: "100%",
    },
    question:{
        marginVertical: 16,
    },
    options: {
        marginVertical: 16,
        flex: 1
    },
    buttons:{
        marginBottom: 12,
        paddingVertical: 16,
        justifyContent: 'space-between',
        flexDirection: "row"
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
      question:{
        fontSize: 28,
        color: "white"

      },
      optionText:{
        color: "white",
        fontSize: 18,
        fontWeight: "500"
      },
      optionButton:{
        paddingVertical: 12,
        marginVertical: 6,
        backgroundColor: "#E56B6F",
        borderRadius: 16,
        paddingHorizontal: 12,

      }
})
