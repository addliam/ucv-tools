import React, {useState} from 'react'
import './styles/AddRoomComponent.css'
import meeting from './sources/meeting_pexels_low.webp'
import {createRoom} from './LocalStorageRoomsConnection'

export const SuccessPopUpComponent = () => {
  return (
    <div id='pop-up-success-container'>
        <h4>Item agregado</h4>
        <span>Se agrego la sala correctamente</span>
    </div>
  )
}

export const AddRoomComponent = (props) => {
    const [cursoValue, setCursoValue] = useState('');
    const [linkValue, setLinkValue] = useState('');
    const [showSuccessPopUp, setShowSuccessPopUp] = useState(false);
    const [showFormError, setShowFormError] = useState(false);

    // const resetStatesToDefault = () =>{
    //     setShowFormError(false);
    //     setShowSuccessPopUp(false);
    // }

    const AgregarButtonPressed = () =>{
        const POP_UP_DURATION = 2500;
        // console.log("Form Agregar pressed! ")
        // console.log(`Curso: ${cursoValue} - Link: ${linkValue}`);
        // comunicate here with localStorage
        if (createRoom(cursoValue,linkValue) === 0){
            // If success 
            setShowSuccessPopUp(true);
            setShowFormError(false);
            setTimeout(() => {
                setShowSuccessPopUp(false);            
            }, POP_UP_DURATION);
        }
        else if (createRoom(cursoValue,linkValue) === 1){
            setShowFormError(true);
        }
        // clean values
        setCursoValue('');
        setLinkValue('');  
    }
    // childrenDiv is close button
    const childrenDiv = props.children;
  return (
    <>
    <div className="pop-up-container" style={{display: showSuccessPopUp? 'block':'none' }} >
        <SuccessPopUpComponent/>
    </div>
    <div id='add-room-container'>
        
        <div className='add-room'>
            <div id='image-container'>
                <img id='meeting-image' alt='presencial-meeting' src={meeting}></img>
            </div>
            <div id='form-container'>
                <div id='form-content'>
                    <h3 id='agregar-sala-title'>AGREGAR SALA DE ZOOM</h3>
                    <form onSubmit={(e)=>e.preventDefault()} id='add-form'>
                        <label className='label-add-room'>Curso</label>
                        <input value={cursoValue} minLength='1' maxLength='32' onChange={(e)=>(setCursoValue(e.target.value))} id='curso-input' type='text' autoComplete='off' placeholder='Nombre del curso'></input>
                        <div className='separator'>
                        </div>
                        <label className='label-add-room'>Link</label>
                        <input value={linkValue} minLength='1' maxLength='32' onChange={(e)=>(setLinkValue(e.target.value))} id='link-input' type='text' autoComplete='off' placeholder='Enlace del zoom'></input>
                        <p style={{display: showFormError?'initial':'none'}} className='form-error'>Aseg??rate que los campos sean validos</p>
                        <p id='terminos-condiciones'>He le??do y acepto los <a id='terminos-condiciones-link' href='./#'>t??rminos y condiciones</a> del servicio</p>
                        <button onClick={()=>{AgregarButtonPressed()}} id='agregar-button' >AGREGAR</button>
                    </form>
                </div>
                {childrenDiv}
                {/* <button onClick={()=>{console.log("Close Button pressed :c");}} id='close-button'>X</button> */}
            </div>
        </div>
    </div>
    </>
  )
}