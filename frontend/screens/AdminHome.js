import React, { useEffect, useState } from "react";
import { Icon } from 'react-native-elements'
import { Alert, Platform, Text, View, TextInput, TouchableOpacity, ImageBackground, Image, ScrollView, Modal, modalVisible } from "react-native";
import stylesMenu from '../Styles/StylesAdminMenu';  
import StylesAdminMenu from "../Styles/StylesAdminMenu";
import ip from '../ip';
import axios from "axios";

function Home({ navigation }) {

  const [menuVisible, setMenuVisible] = useState(false);
  const rutas = [
    {name: "CENTRO"}, {name: "LA MADRID"}, {name: "PORFIA"}, {name: "MONTECARLO"}, {name: "AMARILO"}, {name: "VIVA"}, {name: "VILLACENTRO"}, {name: "GRAMA"}, {name: "POSTOBON"}, {name: "TERMINAL"}, {name: "COVISAN"}, {name: "RELIQUIA"}, {name: "ROCHELA"}, {name: "MARACOS"},
  ]
  const horariosB_U = [
    {hora:"5:20 AM", id: "0"}, {hora: "6:20 AM", id:"1"}, {hora: "7:20 AM", id:"2"}, {hora: "8:30 AM", id:"3"}, {hora: "11:15 AM", id:"4"}, {hora: "1:30 PM", id:"5"},
  ]
  const horariosU_B = [
    {hora:"11:00 AM", id:"6"}, {hora: "12:00 M", id:"7"}, {hora: "4:00 PM", id:"8"}, {hora: "5:00 PM", id:"9"}, {hora: "6:10 PM", id:"10"},
  ]

  const [buttonsVisible, setButtonsVisible] = useState(true);
  const [AddRutaVisible, setAddRutasVisible] = useState(false);
  const [EditRutaVisible, setEditRutasVisible] = useState(false);
  const [DelRutaVisible, setDelRutasVisible] = useState(false);
  const [AddRutaExistenteVisible, setAddRutaExistenteVisible] = useState(false);
  const [CompleteCamposAddRutaVisible, setCompleteCamposAddRutaVisible] = useState(false);
  const [CompleteCamposEditRutaVisible, setCompleteCamposEditRutaVisible] = useState(false);
  const [CompleteCamposDelRutaVisible, setCompleteCamposDelRutaVisible] = useState(false);
  const [AddRutaExitoVisible, setAddRutaExitoVisible] = useState(false);
  const [EditRutaExitoVisible, setEditRutaExitoVisible] = useState(false);
  const [DelRutaExitoVisible, setDelRutaExitoVisible] = useState(false);
  const [IntentoDelRutaVisible, setIntentoDelRutaVisible] = useState(false);

  const [NameRuta,setNameRuta] = useState('');

  const [horarios, setHorarios] = useState([]);
  const [selectedH, setSelectedH] = useState(["#ff000000","#ff000000","#ff000000","#ff000000","#ff000000","#ff000000","#ff000000","#ff000000","#ff000000","#ff000000","#ff000000",]);
  
  const toggleHorario = (id, hora) => {
    const index = horarios.findIndex((horario) => horario[0] === id);
    if (index !== -1) {
      horarios.splice(index, 1);
      setHorarios([...horarios]);
    } else {
      horarios.push([id, hora]);
      horarios.sort((a, b) => a[0] - b[0]);
      setHorarios([...horarios]);
    }
  };
  
  const horaDisplay = horarios.map((horario) => horario[1]).join('   |   ');
  const horaDisplay2 = horarios.map((horario) => horario[1]);

  function handlePress(id) {
    setSelectedH((prevSelectedH) => {
      return prevSelectedH.map((item, index) => {
        if (index === id) {
          return item === "#ff000000" ? "#ff000040" : "#ff000000";
        }
        return item;
      });
    });
  }

  const [selectedRoute, setSelectedRoute] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [picker, setPicker] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const {data} = await axios.get(`http://${ip}/getRutas`);
      setPicker(data.map((route) => {
        return(
          <TouchableOpacity key={route.nombre} style={StylesAdminMenu.routeContainer} onPress={() => {
            setSelectedRoute(route);
            setModalVisible(false);
          }}>
            <Text style={StylesAdminMenu.selectedValue}>{route.nombre}</Text>
          </TouchableOpacity>
        );
      }));
    }
    fetchData();
  }, []);
    
  const updateRoutes = async () => {
    const { data } = await axios.get(`http://${ip}/getRutas`);
    setPicker(data.map((route) => {
      return (
        <TouchableOpacity
          key={route.name}
          style={StylesAdminMenu.routeContainer}
          onPress={() => {
            setSelectedRoute(route);
            setModalVisible(false);
          }}
        >
          <Text style={StylesAdminMenu.selectedValue}>{route.nombre}</Text>
        </TouchableOpacity>
      );
    }));
  };

  const add=(horario)=>{
    handlePress(Number(horario.id));
    toggleHorario(horario.id, horario.hora);
  }

  function botones(horarioRuta){
    return horarioRuta.map((horario) => {
      return(
        <TouchableOpacity key={horario.id} style={[stylesMenu.horariosButton, {backgroundColor: selectedH[horario.id]}]} onPress={async() => {
          add(horario); setAddRutaExistenteVisible(false); setAddRutaExitoVisible(false); setCompleteCamposAddRutaVisible(false); setIntentoDelRutaVisible(false);
        }}>
          <Text style={StylesAdminMenu.horariosSelected} >{horario.hora}</Text>
        </TouchableOpacity>
      )
    })
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
                  navigation.navigate('Login')}
                  }>
                  <Text style={stylesMenu.buttonLogOut}>Cerrar sesion</Text>
                </TouchableOpacity>
              </View>
            </View>
            ) : null}
          </View>

          {buttonsVisible ?(
          <View style={stylesMenu.body}>
            <TouchableOpacity onPress={async() => {
              //navigation.navigate('AddRuta');
              setButtonsVisible(!buttonsVisible);
              setAddRutasVisible(!AddRutaVisible);
              }}>
              <Text style={stylesMenu.button}>AGREGAR RUTA</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={async() => {
              //navigation.navigate('DeleteRuta');
              setButtonsVisible(!buttonsVisible);
              setDelRutasVisible(!DelRutaVisible);
              }}>
              <Text style={stylesMenu.button}>ELIMINAR RUTA</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={async() => {
              //navigation.navigate('EditRuta')
              setButtonsVisible(!buttonsVisible);
              setEditRutasVisible(!EditRutaVisible);
              }}>
              <Text style={stylesMenu.button}>EDITAR RUTA</Text>
            </TouchableOpacity>
          </View>
          ) : null}
          
          {AddRutaVisible ?(
            <View style={stylesMenu.AddRuta}>
              <Text style={stylesMenu.subtitle}>AGREGAR RUTA</Text>
              <TouchableOpacity style={stylesMenu.buttonAddRuta} onPress={async() => {
                setAddRutasVisible(!AddRutaVisible);
                setButtonsVisible(!buttonsVisible);
              }}>
                <Icon name="close" color={"#DC251C"}></Icon>
              </TouchableOpacity>

              {CompleteCamposAddRutaVisible ?(
                <Text style={StylesAdminMenu.error}>Complete los campos</Text>
              ) : null}

              {AddRutaExistenteVisible ?(
                <Text style={StylesAdminMenu.error}>Ya existe una ruta con los valores ingresados</Text>
              ) : null}

              {AddRutaExitoVisible ?(
                <Text style={StylesAdminMenu.exito}>Registro exitoso</Text>
              ) : null}
              <TextInput style={StylesAdminMenu.inputAdmin} placeholder="NOMBRE RUTA" autoComplete="off" maxLength={20} value={NameRuta} onChangeText={(text) => {
                setNameRuta(text); setAddRutaExistenteVisible(false); setAddRutaExitoVisible(false); setCompleteCamposAddRutaVisible(false);
              }}></TextInput>

              <View style={StylesAdminMenu.horarios}>
                <Text style={StylesAdminMenu.horariosText}>HORARIOS</Text>
                <View style={StylesAdminMenu.horariosView}>
                  <View style={StylesAdminMenu.horariosSelect}>
                    <Text style={StylesAdminMenu.horariosText}>BARRIOS - UNILLANOS</Text>
                    {botones(horariosB_U)}
                  </View>
                  <View style={{height: '100%', width: 1, backgroundColor: '#000000',}}/>
                  <View style={StylesAdminMenu.horariosSelect}>
                    <Text style={StylesAdminMenu.horariosText}>UNILLANOS - BARRIOS</Text>
                    {botones(horariosU_B)}
                  </View>
                </View>
                <Text style={StylesAdminMenu.horariosText}>HORARIOS SELECCIONADOS</Text>
                <Text style={StylesAdminMenu.horariosText1}>{horaDisplay}</Text>
              </View>
              
              <TouchableOpacity onPress={async() => {
                if(NameRuta === '' || horaDisplay2.length === 0){
                  setCompleteCamposAddRutaVisible(true);
                }else{
                  const data = await axios.get(`http://${ip}/addRuta/${NameRuta.toUpperCase()}/${horaDisplay2}`)
                  if(data.data === true){
                    setNameRuta('');
                    setAddRutaExitoVisible(true);

                    while (horarios.length > 0) {
                      const index = horarios.map((horario) => horario[0]);
                      handlePress(Number(index[index.length - 1]));
                      horarios.pop();
                      setTimeout(() => { }, 50);
                    }
                    updateRoutes();
                    setTimeout(() => {
                      setAddRutaExitoVisible(false);
                    }, 500);
                  }else{
                    setAddRutaExistenteVisible(true);
                  }
                }
              }}>
                <Text style={StylesAdminMenu.buttonConfirm}>Agregar Ruta</Text>
              </TouchableOpacity>
            </View>
          ) : null}
          
          {EditRutaVisible ?(
            <View style={stylesMenu.EditRuta}>
              <Text style={stylesMenu.subtitle}>EDITAR RUTA</Text>
              <TouchableOpacity style={stylesMenu.buttonEditRuta} onPress={async() => {
                setEditRutasVisible(!EditRutaVisible);
                setButtonsVisible(!buttonsVisible);
              }}>
                <Icon name="close" color={"#DC251C"}></Icon>
              </TouchableOpacity>

              <Text style={stylesMenu.title}>...FUNCION EN DESARROLLO...</Text>
            </View>
          ) : null}
          
          {DelRutaVisible ?(
            <View style={stylesMenu.RemoveRuta}>
              <Text style={stylesMenu.subtitle}>ELIMINAR RUTA</Text>
              <TouchableOpacity style={stylesMenu.buttonRemoveRuta} onPress={async() => {
                setDelRutasVisible(!DelRutaVisible);
                setButtonsVisible(!buttonsVisible);
                setSelectedRoute('');
              }}>
                <Icon name="close" color={"#DC251C"}></Icon>
              </TouchableOpacity>

              {CompleteCamposDelRutaVisible ?(
                <Text style={StylesAdminMenu.error}>Complete los campos</Text>
              ) : null}
              {IntentoDelRutaVisible ?(
                <Text style={StylesAdminMenu.error}>Ocurrio un error</Text>,
                <Text style={StylesAdminMenu.error}>Intente de nuevo</Text>
              ) : null}
              {DelRutaExitoVisible ?(
                <Text style={StylesAdminMenu.exito}>Eliminación exitosa</Text>
              ) : null}

              <TouchableOpacity style={stylesMenu.pick} onPress={() =>{
                setCompleteCamposDelRutaVisible(false);
                setModalVisible(true);
              }}>
                <Text style={StylesAdminMenu.selectedValue}>{selectedRoute ? selectedRoute.nombre : 'SELECCIONAR RUTA'}</Text>
              </TouchableOpacity>
              <View style={StylesAdminMenu.container3}>
                <Modal style={stylesMenu.modalBox} animationType="fade" transparent={true} visible={modalVisible} onRequestClose={() => setModalVisible(false)} >
                  <View style={stylesMenu.modalContainer}>
                    <View style={StylesAdminMenu.innerContainer}>
                      {picker}
                    </View>
                  </View>
                </Modal>
              </View>

              <TouchableOpacity onPress={async() => {
                if(selectedRoute === ''){
                  setCompleteCamposDelRutaVisible(true);
                }else{
                  console.log(selectedRoute.nombre);
                  const data = await axios.get(`http://${ip}/delRuta/${selectedRoute.nombre}`)
                  if(data.data === true){
                    setSelectedRoute('');
                    setDelRutaExitoVisible(true);
                    updateRoutes();
                    setTimeout(() => {
                      setDelRutaExitoVisible(false);
                    }, 500);
                  }else{
                    setIntentoDelRutaVisible(true);
                  }
                }
              }}>
                <Text style={StylesAdminMenu.buttonConfirm}>Eliminar Ruta</Text>
              </TouchableOpacity>
            </View>
          ) : null}

        </View>
      </ImageBackground>
    </View>
  );
};
export default Home;