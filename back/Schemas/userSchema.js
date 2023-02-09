import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
    _id: Number,
    contraseña: String,
    nombre: String,
    apellido: String,
    rol: String,
});

const User = mongoose.model("usuarios", usersSchema);
export default User;