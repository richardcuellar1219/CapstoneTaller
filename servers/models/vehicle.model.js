const getAll = () => {
    return db.query('select * from vehiculos');
}

module.exports = {
    getAll
}