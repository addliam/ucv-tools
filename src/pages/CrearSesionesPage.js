
import React from 'react'
import {NavBarComponent} from '../components/NavBarComponent'
import {FooterComponent} from '../components/FooterComponent'
import '../components/styles/CrearSesionesPage.css'
import evidenciaVersionCLI from '../components/sources/crear-sesiones/evidencia__crear_sesiones.PNG'
import downloadWhiteIcon from '../components/sources/crear-sesiones/download_white_icon.png'

export const CrearSesionesPage = () => {
  return (
    <div id='crear-sesiones-page'>
        <NavBarComponent/>
        <div className="main">
            <h1>HERRAMIENTA EN DESARROLLO</h1>
            <p id='description'>
                La herramienta tendrá como finalidad automatizar el proceso de creación de múltiples carpetas para organizar las sesiones de la Universidad.
            </p>
            <div className="image-container">
                <img src={evidenciaVersionCLI} alt="crear sesiones para universidad pruebas de funcionamiento" />
            </div>
            <p id='instruction'>Descarga el archivo y ubicalo en la carpeta UCV raiz.</p>
            <button id="download-beta">
                <img id="download-icon" src={downloadWhiteIcon} alt="download beta version crear sesiones ucv tools" />
                <a href="https://drive.google.com/file/d/1MvJrQ64pMxxClAQlXqhqSXb9jpcV5qgw/view?usp=sharing">
                    Descargar version Beta
                </a>
            </button>
            <p id="note"><strong>NOTA:</strong> Algunos antivirus detectan erróneamente el software como virus porque puede crear archivos en cantidad. Pero ejecutar el programa no dañará tu computadora. Puedes revisar el <a rel='noreferrer noopener' id='codigo-fuente-crear-sesiones' href="https://github.com/addliam/crear-sesiones-carpetas/blob/main/sesionesCarpetas.c" >codigo fuente aqui. </a></p>
        </div>
        <FooterComponent/>
    </div>
  )
}
