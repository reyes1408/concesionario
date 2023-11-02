import mongoose from 'mongoose';

const clienteSchema = new mongoose.Schema({

    nombre: String,
    edad: {
        type: Number,
        validate: {
            validator: Number.isInteger,
            message: '{VALUE} no es un número entero válido para la edad'
        }
    },
    direccion: String,
    ingresos: Number,
    pagos: [
        {
            id_venta: mongoose.Schema.Types.ObjectId,
            montoPagado: Number,
            fecha: {
                type: Date,
                default: Date.now
            }
        }
    ]
});

export default mongoose.model('Cliente', clienteSchema);