import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect, useState } from "react";

import Login from "./screens/Login";

import Home from "./screens/Home";
import Map from "./screens/Map";
import Schedule from "./screens/Schedule";

import AdminHome from "./screens/AdminHome";

const Stack = createNativeStackNavigator();

//DETECTAR SISTEMA OPERATIVO
//console.log(Platform.OS);

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />

        <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
        <Stack.Screen name="Map" component={Map} options={{headerShown: false}} />
        <Stack.Screen name="Schedule" component={Schedule} options={{headerShown: false}} />

        <Stack.Screen name="AdminHome" component={AdminHome} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
