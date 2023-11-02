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

export const actualizarVehiculo = async (req, res) => {

    const idVehicle = req.params.id;
    const newData = req.body;

    try {
        const vehiculo = await vehiculoModel.findByIdAndUpdate(idVehicle, newData, { new: true });

        if (vehiculo) {
            console.log("Vehiculo actualizado: ", vehiculo);
            res.status(200).json({ message: "Vehiculo actualizado correctamente", vehiculo });
        } else {
            res.status(404).json({ message: "Vehiculo no encontrado" });
        }
    } catch (error) {
        console.error("Error al actualizar", error);
        res.status(500).json({ message: "Error al actualizar el vehiculo" });
    }
}

export const borrarVehiculo = async (req, res) => {

    const id = req.params.id;

    try {
        const vehicleDeleted = await vehiculoModel.findByIdAndDelete(id);

        if (vehicleDeleted) {
            console.log("Vehiculo eliminado", vehicleDeleted);
            res.status(200).json({ message: "Vehiculo eliminado correctamente", vehicleDeleted });
        } else {
            console.log("No se encontró un vehiculo con este ID");
            res.status(404).json({ message: "No se encontró un vehiculo con este ID" });
        }
    } catch (error) {
        console.log("Error al intentar eliminar al vehiculo ", error);
        res.status(500).json({ message: "Error al intentar eliminar al vehiculo" });
    }
};

export const buscarVehiculo = async (req, res) => {

    const id = req.params.id;

    try {

        const vehicleFound =  await vehiculoModel.findById(id);

        if (vehicleFound) {
            console.log("Vehiculo encontrado: ", vehicleFound);
            res.status(200).json({mensaje: "Vehiculo encontrado: ", vehicleFound});
        } else {
            console.log("Vehiculo no encontrado");
            res.status(404).json({mensaje: "Vehiculo no encontrado"});            
        }
        
    } catch (error) {
        console.log("Error al intentar buscar al vehiculo ", error);
        res.status(500).json({ message: "Error al intentar buscar al vehiculo" });
    }
};