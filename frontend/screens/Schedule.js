import React, { useEffect, useState } from "react";
import { Icon } from 'react-native-elements'
import { Alert, Button, Platform, StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, Image, ScrollView } from "react-native";
import stylesSchedule from "../Styles/StylesSchedule.js";
import stylesMenu from "../Styles/StylesMenu.js";
import stylesMap from "../Styles/StylesMap.js";
import ip from '../ip';

function Schedule({ route, navigation }) {
  const { rutaSelected } = route.params;
  
  const [menuVisible, setMenuVisible] = useState(false);

  const horariosB_U = [
    {hora:"5:20 AM", id: "0"}, {hora: "6:20 AM", id:"1"}, {hora: "7:20 AM", id:"2"}, {hora: "8:30 AM", id:"3"}, {hora: "11:15 AM", id:"4"}, {hora: "1:30 PM", id:"5"},
  ]
  const horariosU_B = [
    {hora:"11:00 AM", id:"6"}, {hora: "12:00 M", id:"7"}, {hora: "4:00 PM", id:"8"}, {hora: "5:00 PM", id:"9"}, {hora: "6:10 PM", id:"10"},
  ]
  
  function botones(horarioRuta){
    return horarioRuta.map((horario) => {
      return(
        <View style={stylesSchedule.horariosButton}>
          <Text style={stylesSchedule.horariosSelected} >{horario.hora}</Text>
        </View>
      )
    })
  }

  return (
    <View style={stylesSchedule.container}>
      <ImageBackground style={stylesSchedule.image} source={require("../img/bcg.png")}>
        <View style={stylesSchedule.card}>

          <View style={stylesMenu.topHeader}>
            <View style={stylesMenu.header}>
                <Text style={stylesMenu.title}>UNIRUTAS</Text>
                <Image style={stylesMenu.logo} source={require("../img/logo.webp")} alt="Logo" width="50" height="40"></Image>
            </View>
            <View style={stylesMenu.menuHeader}>
                <TouchableOpacity style={stylesMenu.buttonMenu} onPress={async() => {
                setMenuVisible(!menuVisible)
                }}>
                {menuVisible ?(
                    <Icon name="close" color={"#DC251C"}></Icon>
                ) : (
                    <Icon name="menu" color={"#DC251C"}></Icon>
                )}
                </TouchableOpacity>
            </View>
            {menuVisible ?(
            <View style={stylesMap.menuBody}>
              <View style={stylesMap.header}>
                <TouchableOpacity onPress={async() => {
                  setMenuVisible(false)
                  navigation.navigate('Home')
                  }}>
                  <Text style={stylesMap.buttonLogOut}>Menú principal</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={async() => {
                  setMenuVisible(false)
                  navigation.navigate('Map', {rutaSelected})
                  }}>
                  <Text style={stylesMap.buttonLogOut}>Mapa</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={async() => {
                  setMenuVisible(false)
                  navigation.navigate('Login')
                  }}>
                  <Text style={stylesMap.buttonLogOut}>Cerrar sesion</Text>
                </TouchableOpacity>
              </View>
            </View>
            ) : null}
          </View>

          <View style={stylesSchedule.body}> 
            <Text style={stylesSchedule.nombreRuta}>HORARIOS {rutaSelected}</Text>
            <View style={stylesSchedule.horarios}>
              <View style={stylesSchedule.horariosView}>
                <View style={stylesSchedule.horariosSelect}>
                  <Text style={stylesSchedule.horariosText}>BARRIOS - UNILLANOS</Text>
                  {botones(horariosB_U)}
                </View>
                <View style={{height: '100%', width: 1, backgroundColor: '#000000',}}/>
                <View style={stylesSchedule.horariosSelect}>
                  <Text style={stylesSchedule.horariosText}>UNILLANOS - BARRIOS</Text>
                  {botones(horariosU_B)}
                </View>
              </View>
            </View>
          </View>

        </View>
      </ImageBackground>
    </View>
  );
}
export default Schedule;
