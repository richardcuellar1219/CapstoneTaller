const getAll = () => {
    return db.query('select * from clientes');
}

const getById = (clientId) => {
    return db.query('select * from clientes where id = ?', [clientId]);
}

const getByVehiculoId = (vehicleId) => {
    return db.query(
        'select * from clientes where id = ?',
        [vehicleId]
    )
}




const create = ({ nombre, apellidos, direccion, email, dni, telefono, fechaingreso }) => {
    return db.query(
        'insert into clientes (nombre, apellidos, direccion, email, dni, telefono, fechaingreso) values (?, ?, ?, ?, ?, ?, ?)',
        [nombre, apellidos, direccion, email, dni, telefono, fechaingreso]
    );
}

const update = (clientId, { nombre, apellidos, direccion, email, dni, telefono, fechaingreso }) => {
    return db.query(
        'update clientes set nombre = ?, apellidos = ?, direccion = ?, email = ?, dni = ?, telefono = ?, fechaingreso = ?, where id = ?',
        [nombre, apellidos, direccion, email, dni, telefono, fechaingreso,
            clientId]
    )
}

const deleteById = (clientId) => {
    return db.query('delete from clientes where id = ?', [clientId]);
}

module.exports = {
    getAll, getById, create, update, deleteById, getByVehiculoId
}