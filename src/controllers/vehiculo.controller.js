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
            nombre: vehiculoSaved.nombre,
            edad: vehiculoSaved.edad,
            direccion: vehiculoSaved.direccion,
            ingresos: vehiculoSaved.ingresos,
            pagos: vehiculoSaved.pagos
        })

    } catch (error) {
        console.error("Error al crear el cliente ", error);
    }

};