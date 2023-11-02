import { Router } from "express";
import { registrarCliente } from "../controllers/cliente.controller.js";
import { registrarVendedor } from "../controllers/vendedor.controller.js";
import { registrarVehiculo } from "../controllers/vehiculo.controller.js";
import { registrarVenta } from "../controllers/ventas.controller.js";

import {actualizarVendedor} from "../controllers/vendedor.controller.js";
import {actualizarVehiculo} from "../controllers/vehiculo.controller.js";

import {borrarVendedor} from "../controllers/vendedor.controller.js";
import {borrarVehiculo} from "../controllers/vehiculo.controller.js";

import {buscarVendedor} from "../controllers/vendedor.controller.js";
import {buscarVehiculo} from "../controllers/vehiculo.controller.js";

const router = Router();

//RUTAS
router.post('/cliente/registrar', registrarCliente);  //GABO
// router.put('/cliente/actualizar/:id', updateUser);
// router.delete('/cliente/borrar/:id', deleteUser);
// router.get('/cliente/buscar/:id', findUser);

router.post('/vendedor/registrar', registrarVendedor); //MIGUE
router.put('/vendedor/actualizar/:id', actualizarVendedor);
router.delete('/vendedor/borrar/:id', borrarVendedor);
router.post('/vendedor/buscar/:id', buscarVendedor);

router.post('/vehiculo/registrar', registrarVehiculo); //MIGUE
router.put('/vehiculo/actualizar/:id', actualizarVehiculo);
router.delete('/vehiculo/borrar/:id', borrarVehiculo);
router.get('/vehiculo/buscar/:id', buscarVehiculo);


router.post('/ventas/registrar', registrarVenta); //GABO
// router.put('/ventas/actualizar/:id', updateUser);
// router.put('/ventas/cancelar/:id', deleteUser);
// router.get('/ventas/buscar/:id', findUser);

export default router;
