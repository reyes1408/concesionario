import mongoose from 'mongoose';

const vendedorSchema = new mongoose.Schema({
    
    nombre: String,
    edad: {
        type: Number,
        validate: {
            validator: Number.isInteger,
            message: '{VALUE} no es un número entero válido para la edad'
        }
    },
    direccion: String,

});

export default mongoose.model('Vendedor', vendedorSchema);