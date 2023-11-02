import { Router } from "express";
import { registrarCliente } from "../controllers/cliente.controller.js";
import { registrarVendedor } from "../controllers/vendedor.controller.js";
import { registrarVehiculo } from "../controllers/vehiculo.controller.js";
import { registrarVenta } from "../controllers/ventas.controller.js";

const router = Router();

//RUTAS
router.post('/cliente/registrar', registrarCliente);  //GABO
// router.put('/cliente/actualizar/:id', updateUser);
// router.delete('/cliente/borrar/:id', deleteUser);
// router.get('/cliente/buscar/:id', findUser);

router.post('/vendedor/registrar', registrarVendedor); //MIGUE
// router.put('/vendedor/actualizar/:id', updateUser);
// router.delete('/vendedor/borrar/:id', deleteUser);
// router.get('/vendedor/buscar/:id', findUser);

router.post('/vehiculo/registrar', registrarVehiculo); //MIGUE
// router.put('/vehiculo/actualizar/:id', updateUser);
// router.delete('/vehiculo/borrar/:id', deleteUser);
// router.get('/vehiculo/buscar/:id', findUser);


router.post('/ventas/registrar', registrarVenta); //GABO
// router.put('/ventas/actualizar/:id', updateUser);
// router.put('/ventas/cancelar/:id', deleteUser);
// router.get('/ventas/buscar/:id', findUser);

export default router;
