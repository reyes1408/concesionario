
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

export const actualizarVendedor = async (req, res) => {
    const idVendedor = req.params.id;
    const newData = req.body;

    try {
        const vendedor = await vendedorModel.findByIdAndUpdate(idVendedor, newData, { new: true });

        if (vendedor) {
            console.log("Vendedor actualizado: ", vendedor);
            res.status(200).json({ message: "Vendedor actualizado correctamente", vendedor });
        } else {
            res.status(404).json({ message: "Vendedor no encontrado" });
        }
    } catch (error) {
        console.error("Error al actualizar", error);
        res.status(500).json({ message: "Error al actualizar el vendedor" });
    }
}

export const borrarVendedor = async (req, res) => {
    const id = req.params.id;

    try {
        const vendedorDeleted = await vendedorModel.findByIdAndDelete(id);

        if (vendedorDeleted) {
            console.log("Vendedor eliminado", vendedorDeleted);
            res.status(200).json({ message: "Vendedor eliminado correctamente", vendedorDeleted });
        } else {
            console.log("No se encontró un vendedor con este ID");
            res.status(404).json({ message: "No se encontró un vendedor con este ID" });
        }
    } catch (error) {
        console.log("Error al intentar eliminar al vendedor ", error);
        res.status(500).json({ message: "Error al intentar eliminar al vendedor" });
    }
};

export const buscarVendedor = async (req, res) => {
    const id = req.params.id;

    try {

        const sellerFound =  await vendedorModel.findById(id);

        if (sellerFound) {
            console.log("Vendedor encontrado: ", sellerFound);
            res.status(200).json({mensaje: "Vendedor encontrado: ", sellerFound});
        } else {
            console.log("Vendedor no encontrado");
            res.status(404).json({mensaje: "Vendedor no encontrado"});            
        }
        
    } catch (error) {
        console.log("Error al intentar buscar al vendedor ", error);
        res.status(500).json({ message: "Error al intentar buscar al vendedor" });
    }
};