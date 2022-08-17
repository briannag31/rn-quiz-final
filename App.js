
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/home';
import SignUp from './screens/signup';
import Results from './screens/results';
import Quiz from './screens/quiz';
import Quiz2 from './screens/quizrd2';
import Results2 from './screens/resultsrd2';
import Round2Screen from './screens/rd2img';
import Win from './screens/win';
import Rules from './screens/rules';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{headerShown: false }} />
        <Stack.Screen name="Quiz" component={Quiz} options={{headerShown: false }}  />
        <Stack.Screen name="Quiz2" component={Quiz2} options={{headerShown: false }}  />
        <Stack.Screen name="Results" component={Results} options={{headerShown: false }}  />
        <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false }}  />
        <Stack.Screen name="Results2" component={Results2} options={{headerShown: false }}  />
        <Stack.Screen name="Round2Screen" component={Round2Screen} options={{headerShown: false }}  />
        <Stack.Screen name="Win" component={Win} options={{headerShown: false }}  />
        <Stack.Screen name="Rules" component={Rules} options={{headerShown: false }}  />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;