import { Router } from "express";

import { registrarCliente, buscarCliente, actualizarCliente, borrarCliente } from "../controllers/cliente.controller.js";
import { registrarVendedor, buscarVendedor, actualizarVendedor, borrarVendedor } from "../controllers/vendedor.controller.js";
import { registrarVehiculo, buscarVehiculo, actualizarVehiculo, borrarVehiculo } from "../controllers/vehiculo.controller.js";
import { registrarVenta, buscarVenta, cancelarVenta } from "../controllers/ventas.controller.js";
import { agregarPago } from "../controllers/pagos.controller.js";

const router = Router(); // Jordi Daniel Reyes H.

//RUTAS
router.post('/cliente/registrar', registrarCliente);  //Gabriel Reyes
router.put('/cliente/actualizar/:id', actualizarCliente);
router.delete('/cliente/borrar/:id', borrarCliente);
router.post('/cliente/buscar/:id', buscarCliente);

router.post('/vendedor/registrar', registrarVendedor); //Miguel Angel A.
router.put('/vendedor/actualizar/:id', actualizarVendedor);
router.delete('/vendedor/borrar/:id', borrarVendedor);
router.post('/vendedor/buscar/:id', buscarVendedor);

router.post('/vehiculo/registrar', registrarVehiculo); //Miguel Angel A.
router.put('/vehiculo/actualizar/:id', actualizarVehiculo);
router.delete('/vehiculo/borrar/:id', borrarVehiculo);
router.get('/vehiculo/buscar/:id', buscarVehiculo);

router.post('/ventas/registrar', registrarVenta); //Gabriel Reyes
router.put('/ventas/cancelar/:id', cancelarVenta);
router.get('/ventas/buscar/:id', buscarVenta);

router.put('/pagos/registrar/:id', agregarPago); // Gabriel Reyes

export default router;
