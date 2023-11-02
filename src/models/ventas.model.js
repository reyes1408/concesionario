import mongoose from 'mongoose';

const ventaSchema = new mongoose.Schema({

    id_vendedor: {
        type:mongoose.Schema.Types.ObjectId,
        ref: 'Vendedor'
    },
    id_cliente: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Cliente'
    }, 
    id_vehiculo: {
        type: mongoose.Schema.Types.ObjectId,
        ref:'Vehiculo'
    }, 
    precioCompra: {
        type: Number,
        validate: {
            validator: Number.isInteger,
            message: '{VALUE} no es un número entero válido para la edad'
        }
    },
    fecha: {
        type: Date,
        default: Date.now
    },
    id_vendedorCancelacion: {
        type: mongoose.Schema.Types.ObjectId,
        default: null
    },
    fecancelacion: {
        type: Date,
        default: null
    }
});

export default mongoose.model('Ventas', ventaSchema);