import { Router } from "express";
import { actualizarCliente, borrarCliente, buscarCliente, registrarCliente } from "../controllers/cliente.controller.js";
import { registrarVendedor } from "../controllers/vendedor.controller.js";
import { registrarVehiculo } from "../controllers/vehiculo.controller.js";
import { buscarVenta, cancelarVenta, registrarVenta } from "../controllers/ventas.controller.js";
import { agregarPago } from "../controllers/pagos.controller.js";

import {actualizarVendedor} from "../controllers/vendedor.controller.js";
import {actualizarVehiculo} from "../controllers/vehiculo.controller.js";

import {borrarVendedor} from "../controllers/vendedor.controller.js";
import {borrarVehiculo} from "../controllers/vehiculo.controller.js";

import {buscarVendedor} from "../controllers/vendedor.controller.js";
import {buscarVehiculo} from "../controllers/vehiculo.controller.js";

const router = Router();

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
