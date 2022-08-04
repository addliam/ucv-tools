import React from 'react'
import './styles/MyProfileComponent.css'
import avatarIco1 from './sources/avatars/people_avatar_icon_1_low.webp'
export const MyProfileComponent = () => {
  return (
    <div id='my-profile-container'>
        <div className="my-profile">
            <div className="presentation">
                <img width='200px' height='200px' className='avatar-image' src={avatarIco1} alt="avatar ico" />
                <h3>Marcos Antonio Prada</h3>
                <h5>Estudiante de Psicologia</h5>
            </div>
            <div className="details-container">
                <div className="detail">
                    <h5 className='detail-title'>Nombres</h5>
                    <p className='detail-content'>Marcos Emilio</p>
                </div>
                <div className="detail">
                    <h5 className='detail-title'>Apellidos</h5>
                    <p className='detail-content'>Antonio Prada</p>
                </div>
                <div className="detail">
                    <h5 className='detail-title'>Email</h5>
                    <p className='detail-content'>marcoap16@gmail.com</p>
                </div>
                <div className="detail">
                    <h5 className='detail-title'>Carrera</h5>
                    <p className='detail-content'>Psicologia</p>
                </div>
                <div className="detail">
                    <h5 className='detail-title'>Fecha nacimiento</h5>
                    <p className='detail-content'>16/04/1992</p>
                </div>
            </div>
        </div>
    </div>
  )
}
