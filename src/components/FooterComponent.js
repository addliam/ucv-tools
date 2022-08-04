import React from 'react'
import './styles/FooterComponent.css'
export const FooterComponent = () => {
  return (
    <footer>
    <div id='footer-container'>
        <div className="footer-items-container">
            <div className="item-foot">
                <h4>UCV Tools</h4>
                <span>Sitio web sin fines de lucro, elaborado con el objetivo de ayudar a estudiantes universitarios de la universidad Cesar Vallejo</span>
            </div>
            <div className="item-foot">
                <a href='./#'>
                    <h4>Sugerencias</h4>
                </a>
                <span>Los desarrolladores estarian encatados de escucharte en caso tengas alguna sugerencia o queja </span>
            </div>
            <div className="item-foot">
                <a href='./#'>
                    <h4>Donaciones</h4>
                </a>
                <span>La pagina seguira siendo gratuita. Puedes realizar tu donacion a nuestras cuentas YAPE</span>
            </div>
            <div className="item-foot">
                <a href='./#'>
                    <h4>Sumate al equipo</h4>
                </a>
                <span>Conoce como puedes formar parte del equipo de desarrollo y mejorar la plataforma</span>
            </div>
        </div>
        <div className='credits'>
            <span id='credits-author'>Made with love by <a id='link-author' href='https://github.com/addliam'>codeli4m</a></span>
        </div>
    </div>
    </footer>
  )
}
