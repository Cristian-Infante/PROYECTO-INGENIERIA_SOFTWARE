import cors from "cors";
import express from "express";
import bodyParser from "body-parser";
import User from "./Schemas/userSchema.js";
import Ruta from "./Schemas/rutaSchema.js";
import Horario from "./Schemas/horarioSchema.js";
const app = express();


import mongoose from 'mongoose';

const stringConnection = 'mongodb+srv://CFIC:160004518@cluster0.zj56lft.mongodb.net/UNIRUTAS';
const conectar =         'mongodb://127.0.0.1:27017/UNIRUTAS';
//const conectar = 'mongodb://localhost:27017';

mongoose.set("strictQuery", false);
mongoose.connect(conectar)
  .then(() => {
    console.log("Conectado con exito a base de datos\n");
  })
  .catch((error) => {
    console.log("Error al conectar a la base de datos \n", error)
  })
export default mongoose;


app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hola Mundo");
})

app.get("/getIP", async (req, res) => {
  console.log(req.ip.substring(7));
  res.send(req.ip.substring(7));
})

app.get("/obtenerUsuario/:id/:pass", async (req, res) => {
  const {id} = req.params;
  const {pass} = req.params;

  const exist = await User.find({});
  let usuario = User.schema;
  usuario = exist.find((user) => user._id === Number(id) && user.contraseña === pass);

  if(usuario !== undefined){
    const flag = usuario.nombre + " " + usuario.apellido;
    if(flag.length > 16){
      console.log(`\t INICIO SESION -->   ROL: ${usuario.rol} | ID: ${usuario._id} | NAME: ${flag} \t\t ${new Date().toUTCString()} | ${req.ip.substring(7)} \n\t\t\t DISPOSITIVO: ${req.headers['user-agent']} \n `);
    }else{
      console.log(`\t INICIO SESION -->   ROL: ${usuario.rol} | ID: ${usuario._id} | NAME: ${flag} \t\t\t ${new Date().toUTCString()} | ${req.ip.substring(7)} \n\t\t\t DISPOSITIVO: ${req.headers['user-agent']} \n `);
    }
  }else{
    console.log(`\t ERROR SESION  -->   \t\tID: ${id} \t\t\t\t\t\t ${new Date().toUTCString()} | ${req.ip.substring(7)} \n\t\t\t DISPOSITIVO: ${req.headers['user-agent']} \n`);
  }

  res.send(usuario !== undefined ? usuario : undefined);
});

app.get("/getRutas", async (req, res) => {
  const exist = await Ruta.find({});
  res.send(exist !== undefined ? exist : undefined);
});

app.get("/getHorario", async (req, res) => {
  const exist = await Horario.find({});
  res.send(exist !== undefined ? exist : undefined);  
});

app.get("/addRuta/:nombre/:horario", async (req, res) => {
  let {nombre} = req.params;
  nombre = nombre.toUpperCase();
  const {horario} = req.params;

  const exist = await Ruta.find({});
  let ruta = Ruta.schema;
  ruta = exist.find((ruta) => ruta.nombre === nombre);

  if(ruta === undefined){
    let id = exist.length;
    console.log(exist.find((ruta) => ruta._id === id))
    while((await Ruta.find({id})).length !== 0){
      console.log("ID: " + id + " ya existe");
      id++;
    }
    const newRuta = new Ruta({
      _id: id,
      nombre: nombre
    });
    await newRuta.save();
    console.log(`\t ADD RUTA  -->   ID: ${id} | NOMBRE: ${nombre} | HORARIO: ${horario}\n`);
    res.send(true);
  }else{
    console.log(`\t ERROR ADD RUTA  -->   NOMBRE: ${nombre} | HORARIO: ${horario}\n`);
    res.send(false);
  }
});

app.get("/delRuta/:nombre", async (req, res) => {
  let {nombre} = req.params;
  nombre = nombre.toUpperCase();

  const ruta = await Ruta.findOne({nombre});
  if (ruta) {
    await ruta.remove();
    console.log(`\t DELETE RUTA  -->   NOMBRE: ${nombre}\n`);
    res.send(true);
  } else {
    console.log(`\t ERROR DEL RUTA  -->   NOMBRE: ${nombre}\n`);
    res.send(false);
  }
});

app.listen(5000, () => {
  console.log("\nConexion establecida en el puerto 5000");
});