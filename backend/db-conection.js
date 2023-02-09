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