import mongoose from 'mongoose';

const ventaSchema = new mongoose.Schema({

    modelo: String,
    anio: {
        type: Number,
        validate: {
            validator: Number.isInteger,
            message: '{VALUE} no es un número entero válido para la edad'
        }
    },
    color: String,
    precio: {
        type: Number,
        validate: {
            validator: Number.isInteger,
            message: '{VALUE} no es un número entero válido para la edad'
        }
    },
    estado: String

});

export default mongoose.model('Vehiculo', ventaSchema);