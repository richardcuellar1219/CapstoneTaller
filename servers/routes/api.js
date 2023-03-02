const router = require('express').Router();

const { checkToken, checkAdmin, checkRole } = require('../helpers/middlewares');

router.use('/clients', /*checkToken,*/ /*checkAdmin,*/ require('./api/clients'));
router.use('/vehicles', /*checkToken, checkRole('regular'),*/  require('./api/vehicles'));
router.use('/users', require('./api/users'));

module.exports = router;