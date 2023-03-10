import {
  AuthError
} from "expo-auth-session";
import {
  Dimensions,
  StyleSheet,
  TextInput
} from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    resizeMode: "cover",
  },
  container1: {
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    resizeMode: "cover",
    padding: 15,
  },
  card: {
    width: Dimensions.get("window").width * 0.95,
    height: Dimensions.get("window").height * 1.01,
    alignItems: "center",
  },
  button: {
    backgroundColor: "#ffffff77",
    fontSize: 20,
    padding: 15,
    width: Dimensions.get("window").width * 0.80,
    textAlign: "center",
    marginTop: 10,
    borderRadius: 10,
    color: "#DC251C",
  },
  topHeader: {
    top: 15,
    backgroundColor: "#ffffff77",
    width: Dimensions.get("window").width * 0.95,
    borderRadius: 15,
    alignItems: "center",
  },
  header: {
    height: 50,
    width: Dimensions.get("window").width * 0.98,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: 'row',
    marginBottom: -35,
    zIndex: 1,
  },
  title: {
    fontSize: 40,
    textAlign: "center",
    color: "#DC251C",
    fontWeight: "bold",
  },
  logo: {
    marginTop: 5,
    width: 50,
    height: 40,
  },
  menuHeader: {
    top: -30,
    right: Dimensions.get("window").width * -0.39,
    zIndex: 1,
  },
  buttonMenu: {
    top: 22,
    width: 40,
    height: 40,
    backgroundColor: "#ffffff77",
    fontSize: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginBottom: 0,
    zIndex: 1,
  },
  menuBody: {
    top: -52,
    width: Dimensions.get("window").width * 0.90,
    alignItems: "center",
    height: 100,
    borderRadius: 10,
    paddingTop: 40,
    paddingBottom: 65,
    marginBottom: -55,
  },
  buttonLogOut: {
    backgroundColor: "#ffffff77",
    fontSize: 20,
    padding: 10,
    width: 250,
    borderWidth: 0,
    borderColor: "#DC251C",
    textAlign: "center",
    borderRadius: 10,
    marginTop: 10,
    color: "#DC251C",
  },
  body: {
    backgroundColor: "#ffffff77",
    top: Dimensions.get("window").height * 0.30,
    width: Dimensions.get("window").width * 0.95,
    height: Dimensions.get("window").height * 0.3,
    alignItems: "center",
    justifyContent: "center",
    padding: 15,
    borderRadius: 15,
  },
  subtitle: {
    fontSize: 30,
    textAlign: "center",
    color: "#DC251C",
    fontWeight: "bold",
  },
  buttonAddRuta: {
    width: 40,
    height: 40,
    backgroundColor: "#ffffff77",
    fontSize: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    right: Dimensions.get("window").width * -0.40,
    top: -40,
    zIndex: 1,
    marginBottom: -25,
  },
  buttonRemoveRuta: {
    width: 40,
    height: 40,
    backgroundColor: "#ffffff77",
    fontSize: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    right: Dimensions.get("window").width * -0.40,
    top: -40,
    zIndex: 1,
    marginBottom: -25,
  },
  buttonEditRuta: {
    width: 40,
    height: 40,
    backgroundColor: "#ffffff77",
    fontSize: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    right: Dimensions.get("window").width * -0.40,
    top: -40,
    zIndex: 1,
    marginBottom: -25,
  },
  horarios: {
    backgroundColor: "#ffffff77",
    width: Dimensions.get("window").width * 0.92,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderRadius: 10,
    margin: 10,
  },
  horariosView: {
    width: Dimensions.get("window").width * 0.92,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  horariosText: {
    fontSize: 15,
    marginBottom: 10,
    textAlign: "center",
  },
  horariosText1: {
    fontSize: 15,
    marginBottom: 10,
    textAlign: "center",
  },
  horariosSelect: {
    width: Dimensions.get("window").width * 0.46,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
  },
  horariosSelected: {
    fontSize: 13,
  },
  horariosButton: {
    width: Dimensions.get("window").width * 0.15,
    borderWidth: 1, 
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    borderRadius: 10,
    margin: 5,
  },
  AddRuta:{
    top: Dimensions.get("window").height * 0.15,
    backgroundColor: "#ffffff77",
    width: Dimensions.get("window").width * 0.95,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    padding: 15,
    
  },
  RemoveRuta:{
    top: Dimensions.get("window").height * 0.31,
    backgroundColor: "#ffffff77",
    width: Dimensions.get("window").width * 0.95,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    padding: 15,
    
  },
  EditRuta:{
    top: Dimensions.get("window").height * 0.35,
    backgroundColor: "#ffffff77",
    width: Dimensions.get("window").width * 0.95,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15,
    padding: 15,
    
  },




  pick: {
    width: 250,
    height: 50,
    backgroundColor: "#ffffff77",
    fontSize: 20,
    padding: 10,
    margin: 10,
    textAlign: "center",
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalBox: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  container3: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedValue: {
    fontSize: 20,
  },
  modalContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000000cf',
    width: Dimensions.get("window").width * 0.95,
    right: Dimensions.get("window").width * -0.025,
    top: Dimensions.get("window").height * 0.22,
    borderRadius: 15,
  },
  innerContainer: {
    backgroundColor: '#ffffff77',
    borderRadius: 15,
    padding: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    width: Dimensions.get("window").width * 0.95,
  },
  routeContainer: {
    backgroundColor: '#ffffff77',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    margin: 5,
    borderRadius: 10,
    width: Dimensions.get("window").width * 0.39,
  },




  inputAdmin: {
    backgroundColor: "#ffffff77",
    fontSize: 20,
    height: 50,
    width: 250,
    padding: 10,
    margin: 10,
    textAlign: "center",
    borderRadius: 10,
  },
  buttonConfirm: {
    backgroundColor: "#ffffff77",
    fontSize: 20,
    padding: 20,
    width: 250,
    textAlign: "center",
    marginTop: 30,
    borderRadius: 10,
    color: "#DC251C",
  },
  error: {
    backgroundColor: "#ff000035",
    width: 250,
    borderColor: "#DC251C",
    borderRadius: 5,
    color: "#000000",
    textAlign: "center",
    padding: 5,
    fontSize: 15,
  },
  exito: {
    backgroundColor: "#529C5070",
    width: 250,
    borderColor: "#DC251C",
    borderRadius: 5,
    color: "#000000",
    textAlign: "center",
    padding: 5,
    fontSize: 15,
  },
});