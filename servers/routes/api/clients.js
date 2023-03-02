const router = require('express').Router();

const { getAll, getById, create, update, deleteById } = require('../../models/client.model');

router.get('/', async (req, res) => {
    console.log(req.user);
    // Recupera todos los clientes
    try {
        const [result] = await getAll();
        res.json(result);
    } catch (error) {
        res.json({ fatal: error.message });
    }
});

router.get('/:clientId', async (req, res) => {
    // recuperar UN ÚNICO cliente con el ID indicado en la url
    const { clientId } = req.params;

    try {
        const [result] = await getById(clientId);
        if (result.length === 0) {
            res.json({ fatal: 'No se ha encontrado el cliente' });
        }
        res.json(result[0]);
    } catch (error) {
        res.json({ fatal: error.message });
    }
});



router.post('/', async (req, res) => {
    try {
        const [result] = await create(req.body);

        // Recuperar de la BD el nuevo cliente
        const [cliente] = await getById(result.insertId);

        res.json(cliente[0]);
    } catch (error) {
        res.json({ fatal: error.message })
    }
});

// PUT localhost:3000/api/clientes/78
router.put('/:clientId', async (req, res) => {
    const { clientId } = req.params;

    try {
        const [result] = await update(clientId, req.body);

        const [cliente] = await getById(clientId);

        res.json(cliente[0]);
    } catch (error) {
        res.json({ fatal: error.message });
    }
});

router.delete('/:clientId', async (req, res) => {
    const { clientId } = req.params;

    try {
        const [result] = await deleteById(clientId);
        // res.json(result);
        res.json({ message: 'Se ha borrado el cliente' });
    } catch (error) {
        res.json({ fatal: error.message });
    }
});

module.exports = router;