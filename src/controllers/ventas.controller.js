import ventasModel from "../models/ventas.model.js";
import clienteModel from "../models/cliente.model.js";
import vendedorModel from "../models/vendedor.model.js";
import vehiculoModel  from "../models/vehiculo.model.js";
import { ObjectId } from "mongodb";

export const registrarVenta = async (req, res) => {

    const { id_vendedor, id_cliente, id_vehiculo, precioCompra } = req.body;

    try {

        if (ObjectId.isValid(id_vendedor) && ObjectId.isValid(id_cliente) && ObjectId.isValid(id_vehiculo)) {

            const ven =  await vendedorModel.findById(id_vendedor);
            const veh =  await vehiculoModel.findById(id_vehiculo);
            const cli =  await clienteModel.findById(id_cliente);

            if (ven && veh && cli ) {
                const newVenta = new ventasModel ({
                    id_vendedor, 
                    id_cliente, 
                    id_vehiculo, 
                    precioCompra
                });
        
                const ventaSaved = await newVenta.save();
        
                res.json({
                    message: "Venta registrada"
                });
            }
        } else  res.status(500).json({ message: "Error al intentar hacer la venta" });

    } catch (error) {
        res.status(500).json({ message: "Error al hacer la venta." });
    }
};

export const buscarVenta = async (req, res) => {

    const id = req.params.id;

    try{
        const venta =  await ventasModel.findById(id);

        if (venta) {

            res.status(200).json(venta);
        } else {
            res.status(404).json({ message: "Venta no encontrada" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error al buscar la venta." });
    }
};

export const cancelarVenta = async (req, res) => {

    const id = req.params.id;
    
    const { id_vendedorCancelacion } = req.body;

    try{
        const venta =  await ventasModel.findById(id);

        if (venta) {

            venta.id_vendedorCancelacion = id_vendedorCancelacion;
            venta.fecancelacion = new Date();

            const v = await venta.save();
            res.status(200).json(v);
        } else {
            res.status(404).json({ message: "Venta no encontrada" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error al Cancelar." });
    }
};