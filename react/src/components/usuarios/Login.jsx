import axios from "axios";
import jwtDecode from "jwt-decode";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
//import { setLoggedContext } from "../../App";
import { useLocalStorage } from "../../hooks";
import {
  useSetLoggedContext,
  useSetRoleContext,
} from "../../providers/LoggedProvider";

import FormControl from "../ui/FormControl";

const Login = () => {
  const [error, setError] = useState("");
  const [token, setToken] = useLocalStorage("token");
  const { register, handleSubmit, reset } = useForm();

  const setIsLogged = useSetLoggedContext();
  const setRole = useSetRoleContext();

  const onLogin = async (values) => {
    const res = await axios.post(
      "http://localhost:3000/api/users/login",
      values
    );
    if (res.data.fatal) {
      setError(res.data.fatal);
    } else {
      setError("");
      //console.log(jwtDecode(res.data.token));
      setToken(res.data.token);
      setRole(jwtDecode(res.data.token)["user_role"]);

      setIsLogged(true);
      reset();
    }
  };

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "0 auto",
      }}
    >
      <h2>Login</h2>
      <form onSubmit={handleSubmit(onLogin)}>
        <FormControl>
          <label>Email</label>
          <input type="text" {...register("email")} />
        </FormControl>
        <FormControl>
          <label>Password</label>
          <input type="password" {...register("password")} />
        </FormControl>
        <input type="submit" value="Enviar" />
        {error && <p>{error}</p>}
      </form>
      <div>
        <img
          className="imagen-home"
          src={require("../../imagenes/logo_home.png")}
          alt="home"
        />
      </div>
    </div>
  );
};

export default Login;
