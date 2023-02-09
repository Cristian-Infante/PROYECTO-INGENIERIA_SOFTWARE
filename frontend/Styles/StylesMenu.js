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
    resizeMode: "cover",
    padding: 15,
  },
  card: {
    height: Dimensions.get("window").height * 1.01,
    alignItems: "center",
    borderRadius: 25,
  },
  button: {
    backgroundColor: "#ffffff77",
    fontSize: 20,
    padding: 15,
    width: Dimensions.get("window").width * 0.84,
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
    top: 2.2,
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
    top: -7,
    right: Dimensions.get("window").width * -0.39,
    zIndex: 1,
  },
  buttonMenu: {
    width: 40,
    height: 40,
    backgroundColor: "#ffffff77",
    fontSize: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    zIndex: 1,
  },
  menuBody: {
    top: -35,
    width: Dimensions.get("window").width * 0.90,
    alignItems: "center",
    height: 100,
    borderRadius: 10,
    paddingTop: 40,
    paddingBottom: 65,
    marginBottom: -45,
  },
  buttonLogOut: {
    backgroundColor: "#ffffff77",
    fontSize: 20,
    padding: 10,
    width: 250,
    textAlign: "center",
    marginTop: -5,
    marginBottom: 0,
    borderRadius: 10,
    color: "#DC251C",
  },
  bodyP: {
    top: 25,
    backgroundColor: "#ffffff77",
    paddingBottom: 10,
    height: Dimensions.get("window").height * 0.915,
    borderRadius: 15,
  },
  body: {
    paddingHorizontal: 20,
    borderRadius: 15,
  },
});