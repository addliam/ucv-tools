import './styles/HomePageComponent.css'
import {NavBarComponent} from './NavBarComponent'
import {FooterComponent} from './FooterComponent'
import React from 'react'
import apunteExample from './sources/modelo_apunte_ucvTools.png'
import meetingAbstract from './sources/vector_online_meetup_low.webp'
import chicosEstudiando from './sources/vector_chicos_libro_estudiando_low.webp'
export const HomePageComponent = () => {
  return (
    <div id='homepage-container'>
        <NavBarComponent/>
        <div className="main">
            <section id='bloque-1' className='bloque'>
                <div id='bloque-1-content' className='bloque-content'>                
                    <div id='text-content'>
                        <h2 id='app-title'>UCV Tools</h2>
                        <span>Un sitio hecho para hacerte la vida universitaria más facil.</span>
                        <span>Encontrarás diversas herramientas que potenciarán tu carrera.</span>
                        <button id='comienza-ahora'>Comienza ahora</button>
                    </div>
                    <img src={chicosEstudiando} alt="chicos estudiando vector" width='432px' height='352px'/>
                    <div></div>
                </div>
            </section>
            <section id='bloque-2' className='bloque'>
                <div id='bloque-2-content' className='bloque-content'>                
                    <div id='text-content'>
                        <h2 className='blue-title' id='bloque-2-title'>Tus salas de Zoom en un solo lugar</h2>
                        <span>Organiza los links de tus salas de zoom para cada curso y accede de manera rápida.</span>
                    </div>
                    <img id='meeting-abstract' src={meetingAbstract} alt="meeting abstract vector" width='auto' height='320px'/>
                </div>
            </section>
            <section id='bloque-3' className='bloque'>
                <div id='bloque-3-content' className='bloque-content'>                
                    <img id='meeting-abstract' src={apunteExample} alt="meeting abstract vector" width='350px' height='auto'/>
                    <div id='text-content'>
                        <h2 className='blue-title' id='bloque-3-title'>Organiza tus apuntes por curso</h2>
                        <span>Selecciona información relevante, organízala y escríbela para mejorar tu concentración.</span>
                    </div>
                </div>
            </section>
            <section id='bloque-4' className='bloque'>
                <div id='bloque-4-content' className='bloque-content'>                
                    <div id='text-content'>
                        <h2 className='blue-title' id='bloque-4-title'>Mejora tu investigación cientifica</h2>
                        <span id='bloque-4-description'>Conoce los recursos y estrategias que potenciarán tu desarrollo de investigación.</span>
                    </div>
                    <div id="recursos-investigacion">
                        <div className="item-container">
                            <div className='item' id='myloft'>
                                {/* img from differents colors */}
                            </div>
                            <span className='item-title'>MyLoft Library</span>
                        </div>
                        <div className="item-container">
                            <div className='item' id='myloft'>
                                {/* img from differents colors */}
                            </div>
                            <span className='item-title'>UCV Biblioteca</span>
                        </div>
                        <div className="item-container">
                            <div className='item' id='myloft'>
                                {/* img from differents colors */}
                            </div>
                            <span className='item-title'>IBM recursos</span>
                        </div>
                        <div className="item-container">
                            <div className='item' id='myloft'>
                                {/* img from differents colors */}
                            </div>
                            <span className='item-title'>UNAM biblioteca</span>
                        </div>
                        <div className="item-container">
                            <div className='item' id='myloft'>
                                {/* img from differents colors */}
                            </div>
                            <span className='item-title'>PUCP Library</span>
                        </div>
                        <div className="item-container">
                            <div className='item' id='myloft'>
                                {/* img from differents colors */}
                            </div>
                            <span className='item-title'>Guia de ensayos </span>
                        </div>
                    </div>
                </div>
            </section>
            <FooterComponent/>
        </div>
    </div>
  )
}
