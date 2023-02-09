import mongoose from 'mongoose';

const conectar =         'mongodb://127.0.0.1:27017/UNIRUTAS';

mongoose.set("strictQuery", false);
mongoose.connect(conectar)
  .then(() => {
    console.log("CONNECTED DATABASE \n");
  })
  .catch((error) => {
    console.log("ERROR CONNECTING DATABASE \n", error)
  })
export default mongoose;
