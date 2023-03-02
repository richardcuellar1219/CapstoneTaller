const create = ({ username, email, password }) => {
    return db.query(
        'insert into usuario (username, email, password) values (?, ?, ?)',
        [username, email, password]
    )
}

const getByEmail = (email) => {
    return db.query('select * from usuario where email = ?', [email]);
}

const getById = (userId) => {
    return db.query('select * from usuario where id = ?', [userId]);
}

module.exports = {
    create, getByEmail, getById
}