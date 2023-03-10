const getAll = () => {
  return db.query(
    "select idusuario,username from usuario where role='Mecanico'"
  );
};
const create = ({ username, email, password, role }) => {
  return db.query(
    "insert into usuario (username, email, password, role) values (?,?, ?, ?)",
    [username, email, password, role]
  );
};

const getByEmail = (email) => {
  return db.query("select * from usuario where email = ?", [email]);
};

const getById = (userId) => {
  return db.query("select * from usuario where id = ?", [userId]);
};

module.exports = {
  getAll,
  create,
  getByEmail,
  getById,
};
