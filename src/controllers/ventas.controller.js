import ventasModel from "../models/ventas.model.js";

export const registrarVenta = async (req, res) => {

    const { id_vendedor, id_cliente, id_vehiculo, precioCompra } = req.body;
    

    try {

        const newVenta = new ventasModel ({
            id_vendedor, 
            id_cliente, 
            id_vehiculo, 
            precioCompra
        });

        const ventaSaved = await newVenta.save();

        res.json({
            nombre: ventaSaved.nombre,
            edad: ventaSaved.edad,
            direccion: ventaSaved.direccion,
            ingresos: ventaSaved.ingresos,
            pagos: ventaSaved.pagos
        })

    } catch (error) {
        console.error("Error al crear el cliente ", error);
    }

};