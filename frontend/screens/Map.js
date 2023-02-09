import React, { useEffect, useState } from "react";
import { Icon } from 'react-native-elements'
import MapView from 'react-native-maps';
import { Alert, Button, Platform, StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, Image, ScrollView } from "react-native";
import stylesMap from "../Styles/StylesMap.js";
import ip from '../ip';
import stylesMenu from "../Styles/StylesMenu.js";


const MapToken = "AIzaSyDuiEiKCe2KSNhZqvY1pRBqYXvDr4vykVo";

function Map({ route, navigation }) {
  const { rutaSelected } = route.params;
  
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <View style={stylesMap.container}>
      <ImageBackground style={stylesMap.image} source={require("../img/bcg.png")}>
        <View style={stylesMap.card}>

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
                  navigation.navigate('Schedule', {rutaSelected})
                  }}>
                  <Text style={stylesMap.buttonLogOut}>Horarios</Text>
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

          <Text style={stylesMap.nombreRuta}>RUTA: {rutaSelected}</Text>
          <View style={stylesMap.body}>
            {/* <MapboxGL.MapView
              style={{ flex: 1 }}
              styleURL={MapboxGL.StyleURL.Light}
              zoomLevel={14}
              centerCoordinate={[4.0738101, -73.5824382]}
            /> */}
            <ImageBackground style={stylesMap.map} source={require("../img/mapa.png")}>
            </ImageBackground>
          </View>

        </View>
      </ImageBackground>
    </View>
  );
}
export default Map;
