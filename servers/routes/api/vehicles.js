const router = require("express").Router();

const { getByVehiculoId } = require("../../models/client.model");
const {
  getAll,
  create,
  getById,
  creaAlbaran,
  getAlbaran,
  crearServicio,
  getServicios,
  getServiMecanic,
  crearReparaciones,
} = require("../../models/vehicle.model");

router.get("/", async (req, res) => {
  try {
    const [vehicles] = await getAll();
    /* 
    for (let vehicle of vehicles) {
      const [clients] = await getByVehiculoId(vehicle.id);
      vehicle.clientes = clients;
    } */
    //console.log(vehicles);
    res.json(vehicles);
  } catch (error) {
    res.json({ fatal: error.message });
  }
});

router.get("/albaran", async (req, res) => {
  try {
    const result = await getAlbaran();
    if (result.length === 0) {
      res.json({ fatal: "No se ha encontrado el vehiculo" });
    }
    res.json(result[0]);
  } catch (error) {
    res.json({ fatal: error.message });
  }
});

router.get("/servicio", async (req, res) => {
  try {
    const result = await getServicios();
    res.json(result[0]);
  } catch (error) {
    res.json({ fatal: error.message });
  }
});

router.get("/mecanico/:id", async (req, res) => {
  try {
    const result = await getServiMecanic(req.params.id);
    res.json(result[0]);
  } catch (error) {
    res.json({ fatal: error.message });
  }
});

router.get("/:vehiculotId", async (req, res) => {
  // recuperar UN ÚNICO cliente con el ID indicado en la url
  try {
    const [result] = await getById(req.params.vehiculotId);
    if (result.length === 0) {
      res.json({ fatal: "No se ha encontrado el vehiculo" });
    }
    res.json(result[0]);
  } catch (error) {
    res.json({ fatal: error.message });
  }
});

router.post("/", async (req, res) => {
  //console.log(req.body);
  try {
    const [result] = await create(req.body);
    console.log(result);
    res.json(result[0]);
  } catch (error) {
    res.json({ fatal: error.message });
  }
});

router.post("/albaran", async (req, res) => {
  console.log(req.body);
  try {
    const [result] = await creaAlbaran(req.body);
    //console.log(result);
    res.json(result[0]);
  } catch (error) {
    res.json({ fatal: error.message });
  }
});
router.post("/servicio", async (req, res) => {
  try {
    const [result] = await crearServicio(req.body);
    res.json(result[0]);
  } catch (error) {
    res.json({ fatal: error.message });
  }
});

router.post("/mecanico/new", async (req, res) => {
  //res.send("reaparaciones");
  try {
    const [result] = await crearReparaciones(req.body);
    res.json(result[0]);
  } catch (error) {
    res.json({ fatal: error.message });
  }
});

module.exports = router;
