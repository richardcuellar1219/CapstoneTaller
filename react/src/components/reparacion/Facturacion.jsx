import { useForm } from "react-hook-form";
import axios from "axios";
import { useEffect, useState } from "react";

const FacturaCliente = () => {
  const { register, handleSubmit, reset } = useForm();
  const [idc, setIdc] = useState([]);

  const capturaCliente = async (e) => {
    const res = await axios.get(
      "http://localhost:3000/api/clients/" + e.target.value
    );
    if (res.data.fatal === "No se ha encontrado el cliente") {
      alert("DNI no válido");
    } else {
      console.log(res.data);
      setIdc(res.data);
    }
  };

  const creaFactura = () => {};
  useEffect(() => {
    const inputCliente = (document.getElementById(
      "cliente"
    ).value = `${idc.nombre} ${idc.apellidos}`);
    const inputAddres = (document.getElementById(
      "direccion"
    ).value = `${idc.direccion}`);
    const inputPhone = (document.getElementById(
      "telefono"
    ).value = `${idc.telefono}`);
  });

  return (
    <div>
      <div class="container">
        <div class="row">
          <div class="col align-self-center">
            <h1 class="text-center">Factura</h1>

            <form onSubmit={handleSubmit(creaFactura)}>
              <div class="form-group">
                <label for="name">No Factura</label>
                <input
                  type="name"
                  name="numfactura"
                  class="form-control-sm"
                  readOnly
                />
              </div>

              <div class="form-group">
                <label for="date">Fecha</label>
                <input
                  type="date"
                  name="email"
                  class="form-control"
                  id="email"
                />
              </div>

              <div class="form-group">
                <label for="subject">DNI</label>
                <input
                  type="text"
                  name="subject"
                  class="form-control"
                  id="subject"
                  onBlur={capturaCliente}
                />
              </div>
              <div class="form-group">
                <label for="subject">Cliente</label>
                <input
                  type="text"
                  name="subject"
                  class="form-control"
                  id="cliente"
                />
              </div>

              <div class="form-group">
                <label for="subject">Dirección</label>
                <input
                  type="text"
                  name="subject"
                  class="form-control"
                  id="direccion"
                />
              </div>
              <div class="form-group">
                <label for="subject">Teléfono</label>
                <input
                  type="text"
                  name="subject"
                  class="form-control"
                  id="telefono"
                />
              </div>

              <select class="form-select" aria-label="Default select example">
                <option selected>Seleccione servicio</option>
                <option value="1">Aceite y filtros</option>
                <option value="3">Aliniación</option>
                <option value="3">Amortiguadores</option>
                <option value="1">Batería</option>
                <option value="3">Correas</option>
                <option value="1">Chapa y pintura</option>
                <option value="3">Climatizado</option>
                <option value="3">Electricidad</option>
                <option value="2">Frenos</option>
                <option value="2">Inyección</option>
                <option value="2">Mécanica general</option>
                <option value="3">Neumáticos</option>
                <option value="2">Pre-ITV</option>
                <option value="2">Suspensión</option>
              </select>

              <div class="form-group">
                <label for="subject">Total(Impuestos incl.)</label>
                <input
                  type="text"
                  name="subject"
                  class="form-control-sm"
                  id="subject"
                />
              </div>
              <div></div>

              <button type="submit" class="btn btn-primary">
                Enviar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacturaCliente;
