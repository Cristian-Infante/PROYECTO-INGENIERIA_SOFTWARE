import React, { useEffect, useState } from "react";
import { Alert, Button, Platform, StyleSheet, Text, View, TextInput, TouchableOpacity, ImageBackground, Image, ScrollView } from "react-native";
import stylesLogin from "../Styles/StylesLogin.js";
import axios from "axios";
import ip from '../ip';
import { NetworkInfo } from "react-native-network-info";



function Login({ navigation }) {

  const [elementVisible, setElementVisible] = useState(false);
  const [elementVisible1, setElementVisible1] = useState(false);
  const [code,setTextC] = useState('');
  const [pssw,setTextP] = useState('');

  
  return (
    <View style={stylesLogin.container} >
      <ImageBackground style={stylesLogin.image} source={require("../img/bcg.png")}>
        <View style={stylesLogin.card}>

          <Text style={stylesLogin.title}>UNIRUTAS</Text>
          <Image style={stylesLogin.logo} source={require("../img/logo.webp")} alt="Logo" width="200" height="150"></Image>
          <View>
            {elementVisible1 ?(
              <Text style={stylesLogin.alert}>Complete los campos</Text>
            ) : null}
            {elementVisible ?(
              <Text style={stylesLogin.errorLogin}>Usuario y/o contraseña incorrectos.</Text>
            ) : null}
          </View>
          <TextInput style={stylesLogin.intputLogin} placeholder="CÓDIGO" autoComplete="off" keyboardType="number-pad" maxLength={12} value={code} onChangeText={(text) => {
            setTextC(text)
            setElementVisible1(false)
            setElementVisible(false)
          }}></TextInput>
          <TextInput style={stylesLogin.intputLogin} placeholder="CONTRASEÑA" autoComplete="off" secureTextEntry keyboardType="number-pad" maxLength={12} value={pssw} onChangeText={(text) => {
            setTextP(text)
            setElementVisible1(false)
            setElementVisible(false)
          }}></TextInput>
          <Text>¿Ha olvidado su contraseña?</Text>
          <TouchableOpacity onPress={async() => {


            /* const data = await axios.get('https:/${ip}/getIP')
            console.log(data.data);
            setIP(data.data) */


            if((code === "") || (pssw === "")){
              setElementVisible1(true)
            }else{
              //const {data} = await axios.get(`http:// 192.168.43.129:5000/obtenerUsuario/${code}/${pssw}`);
              //console.log(ip);
              const {data} = await axios.get(`http://${ip}/obtenerUsuario/${code}/${pssw}`);
              //setUserName(data.nombre);
              setTextP("");
              if(data !== ""){
                setTextC("");
                if(data.rol !== "ADM"){
                  navigation.navigate('Home');
                }else{
                  navigation.navigate('AdminHome');
                }
              }else{
                setElementVisible(true)
              }
            }
          }}
          >
          <Text style={stylesLogin.buttonLogin}>Iniciar Sesion</Text>
          </TouchableOpacity>
  
        </View>
      </ImageBackground>
    </View>
  );
};
export default Login;
