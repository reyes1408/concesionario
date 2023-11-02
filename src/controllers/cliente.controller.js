import clienteModel from "../models/cliente.model.js";

export const registrarCliente = async (req, res) => {

    const { nombre, edad, direccion, ingresos, pagos } = req.body;

    try {

        const newCliente = new clienteModel ({
            nombre,
            edad,
            direccion,
            ingresos,
            pagos
        });

        const clienteSaved = await newCliente.save();

        res.json({
            nombre: clienteSaved.nombre,
            edad: clienteSaved.edad,
            direccion: clienteSaved.direccion,
            ingresos: clienteSaved.ingresos,
            pagos: clienteSaved.pagos
        })

    } catch (error) {
        console.error("Error al crear el cliente ", error);
    }

};