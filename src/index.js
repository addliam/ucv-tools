import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import {TableRoomsComponent} from './components/TableRoomsComponent'
// import {TableRoomsMobileComponent} from './components/TableRoomsMobileComponent'
// import {NavBarComponent} from './components/NavBarComponent'
// import {AddRoomComponent} from './components/AddRoomComponent'
// import { HomePageComponent } from './components/HomePageComponent';
// import { InicioPage } from './pages/InicioPage';
// import { SalasZoomPage } from './pages/SalasZoomPage';
import 'typeface-roboto';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { InicioPage } from './pages/InicioPage';
import { SalasZoomPage } from './pages/SalasZoomPage';
import { NotFound } from './pages/NotFound';
import { MiPerfilPage } from './pages/MiPerfilPage';
import { InvestigacionPage } from './pages/InvestigacionPage';
import { CrearSesionesPage } from './pages/CrearSesionesPage';
// import { NavBarComponent } from './components/NavBarComponent';
const root = ReactDOM.createRoot(document.getElementById('root'));

export const Index = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<InicioPage />}/>
      <Route path="/inicio"  element={<InicioPage />}/>
      <Route path="/salas-zoom" element={<SalasZoomPage />}/>
      <Route path="/investigacion" element={<InvestigacionPage />}/>
      <Route path="/mi-perfil" element={<MiPerfilPage />}/>
      <Route path="/crear-sesiones" element={<CrearSesionesPage />}/>
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
  )
}

root.render(
  <>
    <Index/>
    {/* <head>
      <link href='http://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' type='text/css'/>
    </head> */}
    {/* <SalasZoomPage/> */}
    {/* <App/> */}
    {/* <HomePageComponent/> */}
    {/* <TableRoomsComponent/> */}
    {/* <TableRoomsMobileComponent/> */}
    {/* <NavBarComponent/> */}
  </>
);