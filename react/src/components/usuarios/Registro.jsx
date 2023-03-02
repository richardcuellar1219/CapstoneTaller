import axios from "axios";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import FormControl from "../ui/FormControl";
import Swal from "sweetalert2";

const Registro = () => {

    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();

    const onRegister = async (values) => {
        const res = await axios.post('http://localhost:3000/api/users/register', values);
        if (res.data.fatal) {
            Swal.fire({
                title: 'Error!',
                text: res.data.fatal,
                icon: 'error'
            })
        } else {
            await Swal.fire({
                title: 'Correcto!',
                text: 'El registro se ha realizado',
                icon: 'success'
            })
            // alert('Correcto');
            navigate('/login');
        }
    }

    return (
        <div style={{
            maxWidth: '800px',
            margin: '0 auto'
        }}>
            <h2>Registro</h2>
            <form onSubmit={handleSubmit(onRegister)}>
                <FormControl>

                    <select class="form-select" multiple aria-label="multiple select example">

                        <option selected>   <em><b>Perfil</b></em>
                        </option>
                        <option value="admin">Administración</option>
                        <option value="mecanico">Mecánico</option>
                    </select>

                    <label>Nombre de usuario</label>
                    <input type="text" {...register('username')} />
                </FormControl>
                <FormControl>
                    <label>Email</label>
                    <input type="email" {...register('email')} />
                </FormControl>
                <FormControl>
                    <label>Password</label>
                    <input type="password" {...register('password')} />
                </FormControl>
                <input
                    type="submit" value="Enviar"
                />

            </form>
        </div >

    );
}

export default Registro;