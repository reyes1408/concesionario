import ventasModel from "../models/ventas.model.js";
import clienteModel from "../models/cliente.model.js";
import { ObjectId } from "mongodb";

export const agregarPago = async (req, res) => {

    const id = req.params.id;

    const { id_venta, montoPagado } = req.body;

    try {

        if (ObjectId.isValid(id) && ObjectId.isValid(id_venta)) {

            const cli =  await clienteModel.findById(id);
            const ven =  await ventasModel.findById(id_venta);

            if (cli && ven) {
                cli.pagos.push({
                    id_venta,
                    montoPagado
                });

                await cli.save();
                res.status(200).json({
                    message: "Pago realizado"
                });
            }
        } else {
            res.status(404).json({ message: "Cliente no encontrado" });
        }
    } catch (error) {
        console.error("Error al actualizar", error);
        res.status(500).json({ message: "Error al actualizar." });
    }
}
