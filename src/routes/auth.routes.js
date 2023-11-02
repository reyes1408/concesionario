import { Router } from "express";
import { actualizarCliente, borrarCliente, buscarCliente, registrarCliente } from "../controllers/cliente.controller.js";
import { registrarVendedor } from "../controllers/vendedor.controller.js";
import { registrarVehiculo } from "../controllers/vehiculo.controller.js";
import { buscarVenta, cancelarVenta, registrarVenta } from "../controllers/ventas.controller.js";
import { agregarPago } from "../controllers/pagos.controller.js";

const router = Router();

//RUTAS
router.post('/cliente/registrar', registrarCliente);  //GABO
router.put('/cliente/actualizar/:id', actualizarCliente);
router.delete('/cliente/borrar/:id', borrarCliente);
router.post('/cliente/buscar/:id', buscarCliente);

router.post('/vendedor/registrar', registrarVendedor); //MIGUE
// router.put('/vendedor/actualizar/:id', updateUser);
// router.delete('/vendedor/borrar/:id', deleteUser);
// router.get('/vendedor/buscar/:id', findUser);

router.post('/vehiculo/registrar', registrarVehiculo); //MIGUE
// router.put('/vehiculo/actualizar/:id', updateUser);
// router.delete('/vehiculo/borrar/:id', deleteUser);
// router.get('/vehiculo/buscar/:id', findUser);

router.post('/ventas/registrar', registrarVenta); //GABO
router.put('/ventas/cancelar/:id', cancelarVenta);
router.get('/ventas/buscar/:id', buscarVenta);

router.put('/pagos/registrar/:id', agregarPago);

export default router;
