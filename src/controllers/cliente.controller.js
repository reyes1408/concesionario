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
            id: clienteSaved._id,
            nombre: clienteSaved.nombre,
            edad: clienteSaved.edad,
            direccion: clienteSaved.direccion,
            ingresos: clienteSaved.ingresos
        })

    } catch (error) {
        console.error("Error al crear el cliente ", error);
    }
};

export const buscarCliente = async (req, res) => {

    const id = req.params.id;

    try {
        const cli =  await clienteModel.findById(id);
        
        if (cli) {

            res.status(200).json(cli);
        } else {
            res.status(404).json({mensaje: "Cliente no encontrado"});            
        }
        
    } catch (error) {
        res.status(500).json({ message: "Error al intentar buscar Cliente" });
    }
};

export const actualizarCliente = async (req, res) => {

    const id = req.params.id;

    const { nombre, edad, direccion, ingresos } = req.body;
    try{
        const cli =  await clienteModel.findById(id);

        if (cli) {

            cli.nombre = nombre;
            cli.edad = edad;
            cli. direccion = direccion;
            cli.ingresos = ingresos;

            const c = await cli.save();
            //console.log(JSON.stringify(c));
            res.status(200).json(c);
        } else {
            res.status(404).json({ message: "Cliente no encontrado" });
        }
    } catch (error) {
        console.error("Error al actualizar", error);
        res.status(500).json({ message: "Error al actualizar." });
    }
};

export const borrarCliente = async (req, res) => {
    
    const id = req.params.id;

    try{
        const cli =  await clienteModel.findByIdAndDelete(id);

        if (cli) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: "Cliente no encontrado" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error al eliminar cliente." });
    }
};