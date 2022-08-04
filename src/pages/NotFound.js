import React from 'react'
import { Link } from "react-router-dom";
import '../components/styles/NotFound.css'
import cesarVallejo from '../components/sources/cesar_vallejo_no_fondo.gif'
export const NotFound = () => {
  return (
    <div id='not-found-container'>
        <div className="not-found">
            <h1 id='codigo'>404</h1>
            <img id='vallejo' src={cesarVallejo} alt="cesar vallejo sin fondo" />
        </div>
        <div className="text-not-found">
            <span>Lo sentimos! La página que está buscando no pudo ser encontrada</span>
            <Link id='volver-inicio' to='/'>
              Volver al inicio
            </Link>
        </div>
    </div>
  )
}
