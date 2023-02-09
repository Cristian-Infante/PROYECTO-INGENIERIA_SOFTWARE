import mongoose from 'mongoose';

const conectar =         'mongodb://127.0.0.1:27017/UNIRUTAS';

mongoose.set("strictQuery", false);
mongoose.connect(conectar)
  .then(() => {
    console.log("Conectado con exito a base de datos\n");
  })
  .catch((error) => {
    console.log("Error al conectar a la base de datos \n", error)
  })
export default mongoose;
