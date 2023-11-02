import vehiculoModel from "../models/vehiculo.model.js";

export const registrarVehiculo = async (req, res) => {

    const { modelo, anio, color, precio, estado } = req.body;

    try {

        const newVehiculo = new vehiculoModel ({
            modelo, 
            anio, 
            color, 
            precio, 
            estado
        });

        const vehiculoSaved = await newVehiculo.save();

        res.json({
            modelo: vehiculoSaved.modelo,
            anio: vehiculoSaved.anio,
            color: vehiculoSaved.color,
            precio: vehiculoSaved.precio,
            estado: vehiculoSaved.estado
        })

    } catch (error) {
        console.error("Error al crear el cliente ", error);
    }

};