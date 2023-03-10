import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import "./App.css";
import DetalleCliente from "./components/clientes/DetalleCliente";
import FormularioClientes from "./components/clientes/FormularioClientes";
import ListaClientes from "./components/clientes/ListaClientes";
import DetalleVehiculo from "./components/vehiculos/DetalleVehiculo";
import FormularioVehiculos from "./components/vehiculos/FormularioVehiculos";
import ListaVehiculos from "./components/vehiculos/ListaVehiculos";
import Menu from "./components/ui/Menu";
import Login from "./components/usuarios/Login";
import Registro from "./components/usuarios/Registro";
import LoginGuard from "./guards/LoginGuard";
import RoleGuard from "./guards/RoleGuard";
import LoggedProvider from "./providers/LoggedProvider";
import Reparacion from "./components/reparacion/Reparacion";
import ListaReparacion from "./components/reparacion/ListaReparacion";
import DetalleReparacion from "./components/reparacion/DetalleReparacion";
import Servicios from "./components/ui/Servicios";
import Facturacion from "./components/reparacion/Facturacion";
import Email from "./components/correo_electronico/Email";
// TODO: Recuperar datos de perfil del usuario LOGGED

function App() {
  return (
    <LoggedProvider>
      <BrowserRouter>
        <div className="App">
          <Menu />
          <Routes>
            <Route path="" element={<Navigate to={"/clientes"} replace />} />
            <Route
              path="clientes"
              element={
                <LoginGuard>
                  <ListaClientes />
                </LoginGuard>
              }
            />
            <Route
              path="clientes/new"
              element={
                <LoginGuard>
                  <RoleGuard roles={["Administracion"]}>
                    <FormularioClientes />
                  </RoleGuard>
                </LoginGuard>
              }
            />
            <Route
              path="clientes/:clienteId"
              element={
                <LoginGuard>
                  <RoleGuard roles={["Administracion", "moderator"]}>
                    <DetalleCliente />
                  </RoleGuard>
                </LoginGuard>
              }
            />
            <Route path="login" element={<Login />} />
            <Route path="registro" element={<Registro />} />
            <Route path="*" element={<Navigate to={"/registro"} replace />} />

            <Route
              path="vehiculos"
              element={
                <LoginGuard>
                  <ListaVehiculos />
                </LoginGuard>
              }
            />
            <Route
              path="vehiculos/new"
              element={
                <LoginGuard>
                  <RoleGuard roles={["Administracion"]}>
                    <FormularioVehiculos />
                  </RoleGuard>
                </LoginGuard>
              }
            />
            <Route
              path="vehiculos/:vehiculoId"
              element={
                <LoginGuard>
                  <RoleGuard roles={["Administracion", "moderator"]}>
                    <DetalleVehiculo />
                  </RoleGuard>
                </LoginGuard>
              }
            />
            <Route
              path="vehiculos/detalle/:id"
              element={
                <LoginGuard>
                  <RoleGuard roles={["Administracion"]}>
                    <DetalleVehiculo />
                  </RoleGuard>
                </LoginGuard>
              }
            />

            <Route
              path="reparacion/new"
              element={
                <LoginGuard>
                  <RoleGuard roles={["Administracion"]}>
                    <Reparacion />
                  </RoleGuard>
                </LoginGuard>
              }
            />
            <Route
              path="reparacion/lista"
              element={
                <LoginGuard>
                  <RoleGuard roles={["Administracion"]}>
                    <ListaReparacion />
                  </RoleGuard>
                </LoginGuard>
              }
            />
            <Route
              path="reparacion/detalle"
              element={
                <LoginGuard>
                  <RoleGuard roles={["Administracion", "Mecanico"]}>
                    <DetalleReparacion />
                  </RoleGuard>
                </LoginGuard>
              }
            />

            <Route
              path="reparacion/servicios"
              element={
                <LoginGuard>
                  <RoleGuard roles={["Administracion"]}>
                    <Servicios />
                  </RoleGuard>
                </LoginGuard>
              }
            />
            <Route
              path="email"
              element={
                <LoginGuard>
                  <RoleGuard roles={["Administracion"]}>
                    <Email />
                  </RoleGuard>
                </LoginGuard>
              }
            />

            <Route
              path="reparacion/factura"
              element={
                <LoginGuard>
                  <RoleGuard roles={["Administracion"]}>
                    <Facturacion />
                  </RoleGuard>
                </LoginGuard>
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </LoggedProvider>
  );
}

export default App;

// import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import './App.css';
// import ListaClientes from './components/Clientes/ListaClientes';
// import FormularioClientes from './components/Clientes/FormularioClientes';
// import Registro from './components/Usuarios/Registro';
// import Login from './components/Usuarios/Login';
// import Menu from './components/ui/Menu';
// import MenuBotones from './components/ui/MenuBotones';

// function App() {
//   return (
//     <BrowserRouter>
//       <div className="App">
//         <Menu />
//         <MenuBotones />
//         <Routes>
//           <Route path='' element={<ListaClientes />} />
//           <Route path='FormularioClientes' element={<FormularioClientes />} />
//           <Route path='Registro' element={<Registro />} />
//           <Route path='Login' element={<Login />} />
//           <Route path='*' element={<div>
//             <h2>404 Page Not Found</h2>
//           </div>} />
//         </Routes>
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;
