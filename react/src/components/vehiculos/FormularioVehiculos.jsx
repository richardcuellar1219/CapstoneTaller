import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import FormControl from "../ui/FormControl";



const FormularioVehiculos = () => {

    const { register, handleSubmit, reset } = useForm();
    const navigate = useNavigate();

    const creaVehiculo = async (values) => {
        // POST http://localhost:3000/api/vehicles
        // En el body enviamos el objeto con los datos
        const res = await axios.post('http://localhost:3000/api/vehicles/clients', values);
        if (res.data.fatal) {
            // alert(res.data.fatal);
            alert('Error en el server');
        } else {
            alert('Vehiculo creado correctamente');
            navigate('/vehiculos');
        }
    }

    return (
        <div style={{
            maxWidth: '800px',
            margin: '0 auto'
        }}>
            <h2>Nuevo vehiculo</h2>
            <form onSubmit={handleSubmit(creaVehiculo)}>
                <FormControl>
                    <label>Marca</label>
                    <input type="text" {...register('marca')} />
                </FormControl>
                <FormControl>
                    <label>Modelo</label>
                    <input type="text" {...register('modelo')} />
                </FormControl>
                <FormControl>
                    <label>Color</label>
                    <input type="text" {...register('color')} />
                </FormControl>
                <FormControl>
                    <label>Matrícula</label>
                    <input type="text" {...register('matricula')} />
                </FormControl>
                <FormControl>
                    <label>Número de chasis</label>
                    <input type="text" {...register('numerochasis')} />
                </FormControl>
                <FormControl>
                    <label>Kilometraje</label>
                    <input type="number" {...register('kilometraje')} />
                </FormControl>
                <FormControl>
                    <label>Observaciones</label>
                    <input type="text" {...register('observaciones')} />
                </FormControl>
                <FormControl>
                    <label>Imagen</label>
                    <input type="text" {...register('imagen')} />
                </FormControl>
                <FormControl>
                    <label>Clientes_id</label>
                    <input type="text" {...register('clientes_id')} />
                </FormControl>
                <FormControl>
                    <label>Recepción</label>
                    <input type="date" {...register('recepcion')} />
                </FormControl>
                <input type="submit" value="Enviar" />
            </form>
        </div>
    );
}

export default FormularioVehiculos;



