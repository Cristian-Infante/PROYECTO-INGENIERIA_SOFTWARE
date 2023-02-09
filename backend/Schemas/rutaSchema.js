import mongoose from "mongoose";

const rutaSchema = new mongoose.Schema({
    _id: String,
    nombre: String,
});

const Ruta = mongoose.model("rutas", rutaSchema);
export default Ruta;