import React, { useEffect, useState } from "react";
import { Icon } from 'react-native-elements'
import { Alert, Button, Platform, StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, Image, ScrollView } from "react-native";
import stylesMenu from '../Styles/StylesMenu';
import ip from '../ip';
import axios from "axios";

function Home({ navigation }) {

  const [menuVisible, setMenuVisible] = useState(false);
  const rutas = [
    {nombre: "CENTRO"}, {nombre: "LA MADRID"}, {nombre: "PORFIA"}, {nombre: "MONTECARLO"}, {nombre: "AMARILO"}, {nombre: "VIVA"}, {nombre: "VILLACENTRO"}, {nombre: "GRAMA"}, {nombre: "POSTOBON"}, {nombre: "TERMINAL"}, {nombre: "COVISAN"}, {nombre: "RELIQUIA"}, {nombre: "ROCHELA"}, {nombre: "MARACOS"},
  ]

  function botones() {
    const [botones, setBotones] = useState([]);
  
    useEffect(() => {
      async function fetchData() {
        const {data} = await axios.get(`http://${ip}/getRutas`);
        setBotones(data.map((ruta) => {
          return(
            <TouchableOpacity key={ruta.nombre} onPress={async() => {
              const rutaSelected = ruta.nombre;
              navigation.navigate('Map', {rutaSelected})
            }}>
              <Text style={stylesMenu.button}>RUTA: {ruta.nombre}</Text>
            </TouchableOpacity>
          )
        }));
      }
      fetchData();
    }, []);
  
    return (
      <View>
        {botones}
      </View>
    );
  }
  
  return (
    <View style={stylesMenu.container} >
      <ImageBackground style={stylesMenu.image} source={require("../img/bcg.png")}>
        <View style={stylesMenu.card}>

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
            <View style={stylesMenu.menuBody}>
              <View style={stylesMenu.header}>
                <TouchableOpacity onPress={async() => {
                  setMenuVisible(false)
                  navigation.navigate('Login')
                  }}>
                  <Text style={stylesMenu.buttonLogOut}>Cerrar sesion</Text>
                </TouchableOpacity>
              </View>
            </View>
            ) : null}
          </View>

          <View style={stylesMenu.bodyP}>  
            <ScrollView style={stylesMenu.body} showsVerticalScrollIndicator={false}>
              {botones()}
            </ScrollView>
          </View>

        </View>
      </ImageBackground>
    </View>
  );
};
export default Home;
