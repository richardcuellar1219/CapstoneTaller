const jwt = require('jsonwebtoken');

const { getById } = require('../models/user.model');

const checkToken = async (req, res, next) => {
    // 1 - Comprobar si el token viene incluido en las cabeceras
    if (!req.headers['authorization']) {
        return res.json({ fatal: 'Tienes que incluir la cabecera Authorization' });
    }

    const token = req.headers['authorization'];

    // 2 - Comprobar si el token es correcto
    // 3 - Comprobar si el token está caducado
    let obj;
    try {
        obj = jwt.verify(token, 'en un lugar de la mancha');
    } catch (error) {
        console.log(error.message);
        return res.json({ fatal: 'El token es incorrecto' });
    }

    // OBJ -> { user_id: 55, user_role: 'admin', exp: 1674067587, iat: 1673635587 }
    const [result, fields] = await getById(obj.user_id);
    req.user = result[0];

    next();
}

const checkAdmin = (req, res, next) => {
    if (req.user.role !== 'admin') {
        return res.json({ fatal: 'zona restringida. Solo administradores' });
    }
    next();
}

const checkRole = (role) => {
    return (req, res, next) => {
        if (req.user.role !== role) {
            return res.json({ fatal: `zona restringida. Solo para ${role}` });
        }
        next();
    };
}

module.exports = {
    checkToken, checkAdmin, checkRole
}