import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import FormControl from "../ui/FormControl";

import { dniValidator } from "../../validators";

const FormularioClientes = () => {

    const { register, handleSubmit, reset } = useForm();
    const navigate = useNavigate();

    const creaCliente = async (values) => {
        // POST http://localhost:3000/api/clients
        // En el body enviamos el objeto con los datos
        const res = await axios.post('http://localhost:3000/api/clients', values);
        if (res.data.fatal) {
            // alert(res.data.fatal);
            alert('Error en el server');
        } else {
            alert('Cliente creado correctamente');
            navigate('/clientes');
        }
    }

    return (
        <div style={{
            maxWidth: '800px',
            margin: '0 auto'
        }}>
            <h2>Nuevo cliente</h2>
            <form onSubmit={handleSubmit(creaCliente)}>
                <FormControl>
                    <label>Nombre</label>
                    <input type="text" {...register('nombre')} />
                </FormControl>
                <FormControl>
                    <label>Apellidos</label>
                    <input type="text" {...register('apellidos')} />
                </FormControl>
                <FormControl>
                    <label>Dirección</label>
                    <input type="text" {...register('direccion')} />
                </FormControl>
                <FormControl>
                    <label>✉️ Email</label>
                    <input type="text" {...register('email')} />
                </FormControl>
                <FormControl>
                    <label>DNI</label>
                    <input type="text" {...register('dni', {
                        validate: dniValidator
                    })} />
                </FormControl>
                <FormControl>
                    <label>Telefono</label>
                    <input type="number" {...register('telefono')} />
                </FormControl>
                <FormControl>
                    <label>Fecha ingreso</label>
                    <input type="date" {...register('fechaingreso')} />
                </FormControl>
                <input type="submit" value="Enviar" />
            </form>
        </div>
    );
}

export default FormularioClientes;



