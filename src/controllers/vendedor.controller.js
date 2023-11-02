
import vendedorModel from "../models/vendedor.model.js";

export const registrarVendedor = async (req, res) => {

    const { nombre, edad, direccion } = req.body;

    try {

        const newVendedor = new vendedorModel ({
            nombre,
            edad,
            direccion
        });

        const vendedorSaved = await newVendedor.save();

        res.json({
            nombre: vendedorSaved.nombre,
            edad: vendedorSaved.edad,
            direccion: vendedorSaved.direccion
        })

    } catch (error) {
        console.error("Error al crear el cliente ", error);
    }

};