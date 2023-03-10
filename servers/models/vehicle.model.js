const getAll = () => {
  return db.query(
    "select v.id as vehid,v.marca,v.modelo,v.color,v.matricula,v.numerochasis,v.kilometraje,v.observaciones,v.imagen,c.nombre,v.recepcion,c.id from vehiculos v inner join clientes c on v.clientes_id=c.id"
  );
};

const create = ({
  recepcion,
  marca,
  modelo,
  color,
  matricula,
  numerochasis,
  kilometraje,
  observaciones,
  imagen,
  clientes_id,
}) => {
  return db.query(
    "insert into vehiculos(recepcion, marca, modelo,color,matricula, numerochasis, kilometraje, observaciones, imagen, clientes_id) values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [
      recepcion,
      marca,
      modelo,
      color,
      matricula,
      numerochasis,
      kilometraje,
      observaciones,
      imagen,
      clientes_id,
    ]
  );
};

const getById = (vehiculotId) => {
  return db.query("select * from vehiculos where id = ?", [vehiculotId]);
};

const creaAlbaran = ({
  fechaentrada,
  tiporeparacion,
  fechasalida,
  descripcion,

  vehiculos_idvehiculos,
  idusuario,
}) => {
  return db.query(
    "insert into reparacion(fechaentrada,tiporeparacion,fechasalida,descripcion,vehiculos_idvehiculos,idusuario) values(?,?,?,?,?,?)",
    [
      fechaentrada,
      tiporeparacion,
      fechasalida,
      descripcion,

      vehiculos_idvehiculos,
      idusuario,
    ]
  );
};

const getAlbaran = () => {
  return db.query(
    "select re.idreparacion,v.modelo,u.username as mecanico,re.fechaentrada,re.tiporeparacion,re.fechasalida,re.descripcion,re.estado from reparacion re inner join vehiculos v on re.vehiculos_idvehiculos=v.id inner join usuario u on u.idusuario=re.idusuario "
  );
};

const getServicios = () => {
  return db.query("select * from tiposervicio");
};
const crearServicio = ({ servicio, costo }) => {
  return db.query("insert into tiposervicio(servicio,costo) values(?,?)", [
    servicio,
    costo,
  ]);
};

const getServiMecanic = (id) => {
  return db.query(
    "select r.idreparacion as codrepar,r.tiporeparacion,v.id as coche from reparacion r inner join vehiculos v on v.id=r.vehiculos_idvehiculos inner join clientes c on c.id=v.clientes_id where (r.estado='pendiente' || r.estado='proceso') and r.idusuario = ?",
    [id]
  );
};

const crearReparaciones = ({
  cantidad,
  estado,
  fecha,
  idservicio,
  observaciones,
  reparacion_idreparacion,
}) => {
  return db.query(
    "insert into reparaciones(fecha,cantidad,observaciones,estado, reparacion_idreparacion,idservicio) values(?,?,?,?,?,?)",
    [
      fecha,
      cantidad,
      observaciones,
      estado,
      reparacion_idreparacion,
      idservicio,
    ]
  );
};

module.exports = {
  getAll,
  create,
  getById,
  creaAlbaran,
  getAlbaran,
  crearServicio,
  getServicios,
  getServiMecanic,
  crearReparaciones,
};
