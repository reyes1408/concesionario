import app from "./app.js";
import { connectDB } from './db.js';
import dotenv from "dotenv";

dotenv.config();

connectDB();

const port = process.env.PORT || 3001;

app.listen(port);
console.log('Server corriendo en el puerto: ', port);