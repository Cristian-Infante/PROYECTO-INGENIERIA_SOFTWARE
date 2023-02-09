import mongoose from "mongoose";

const horarioSchema = new mongoose.Schema({
    _id: String,
    hora: String,
});

const Horario = mongoose.model("horarios", horarioSchema);
export default Horario;