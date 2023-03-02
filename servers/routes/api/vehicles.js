const router = require('express').Router();

const { getByVehiculoId } = require('../../models/client.model');
const { getAll } = require('../../models/vehicle.model');

router.get('/clients', async (req, res) => {
    try {
        const [vehicles] = await getAll();

        for (let vehicle of vehicles) {
            const [clients] = await getByVehiculoId(vehicle.id);
            vehicle.clientes = clients;
        }

        res.json(vehicles);
    } catch (error) {
        res.json({ fatal: error.message });
    }
})

module.exports = router;

