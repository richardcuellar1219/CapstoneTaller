var express = require('express');
const { getAll } = require('../models/client.model');
var router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
    console.log(req.user);
    // conn.connect((err) => {
    //   conn.query('SELECT * FROM clientes', (err, result) => {
    //     res.json(result);
    //   })
    // })

    getAll()
        .then((result) => {
            // result es un array con dos posiciones
            // La primera posición del array es el resultado de la query
            // La segunda posición del array es un array con la definición de los campos que extraemos de la tabla
            res.json(result[0]);
        })
        .catch((error) => {
            console.log(error);
        });
});

/* GET clients for id */
// router.get('/:clientId', (req, res) => {
//   const clientId = parseInt(req.params.clientId);

//   conn.connect((err) => {
//     conn.query('SELECT * FROM clientes WHERE clientes.id=?', [clientId], (err, result) => {
//       res.json(result);
//     })
//   })

// })


router.get('/new', (req, res) => {
    res.send('Muestra el formulario de nuevo cliente');
});

router.post('/create', (req, res) => {
    console.log(req);
    console.log(req.body);
    res.send('Crear un nuevo cliente');
});

router.get('/edit', (req, res) => {
    res.send('Formulario de actualizacion de un cliente');
});

router.put('/update', (req, res) => {
    res.send('Actualizando un cliente')
})

router.delete('/delete/:client_id', (req, res) => {
    //cuando pasamos los valores dinámicos por ruta, existe un elemenot params que los recoge
    console.log(parseInt(req.params.client_id));
    res.send('Borrando un cliente')
})

router.get('/:client_id/budgets/:budget_id', (req, res) => {
    const { client_id, budget_id } = req.params;
    console.log(client_id, budget_id);
    res.send('cliente presupuesto');
})

router.get('/search', (req, res) => {
    console.log(req.query);
    res.send('busqueda de cliente');
})




module.exports = router;
