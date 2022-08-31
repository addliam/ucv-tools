import './styles/TableRoomsComponent.css';
import React, {useEffect, useState} from 'react';
import deleteIco from './sources/delete_icon_24x24.png';
import './styles/SalasZoomPage.css'
import {AddRoomComponent} from '../components/AddRoomComponent'
import { getAllRooms, createDatabaseIfNotExists, deleteRoomByID} from '../components/LocalStorageRoomsConnection'
// import {resetStatesToDefault} from '../components/AddRoomComponent'

// const exampleRooms = ['Competencia comunicativa', 'https://zoom.us/j/5551112222', 'Matematica I', 'https://zoom.us/j/5551112222', 'Fundamentos Programacion', 'https://zoom.us/j/5551112222', 'Web Development', 'https://zoom.us/j/5551112223']

const setRoomsInOrder = (arrayRooms) => {
    const orderedRooms = []
    for (let i=0;i<arrayRooms.length;i+=2){
        var itemRoom = [];
        itemRoom.push(arrayRooms[i]);
        itemRoom.push(arrayRooms[i+1]);
        orderedRooms.push(itemRoom);
    }
    // console.log("-- Ordered Rooms --");
    // console.log(orderedRooms);
    return orderedRooms;
}

export const RowItemComponent = (props) => {
    const itemId = props.itemId;
    const itemCurso = props.itemCurso;
    const itemLink = props.itemLink;
    const deleteElementById = (identifier) => {
        let indexIdentifier = identifier - 1 ;
        console.log(`You are trying delete element with ID: ${indexIdentifier}`);
        deleteRoomByID(indexIdentifier);
        props.refreshFunction();
    }
  return (
    <tr className='row-item' id={itemId}>
        <td data-title='Id' className='item-id'>{itemId}</td>
        <td data-title='Curso' className='item-curso'>{itemCurso}</td>
        <td data-title='Link' className='item-link'>
            <a target="_blank" rel="noopener noreferrer" href={itemLink}>{itemLink}</a>
            </td>
        <td data-title='Eliminar' className='item-eliminar'>
            <button onClick={()=>(deleteElementById(itemId))} className='delete-button' type='button'><img className='delete-button-image' height={'20'} width={'20'} alt='delete-icon' src={deleteIco}></img></button>
        </td>
    </tr> 
  )
}

export const TableRoomsComponent = () => {
    const [showAddRoomPopUp, setShowAddRoomPopUp] = useState(false);
    const [myOrderedRooms, setMyOrderedRooms] = useState([]);
    const refreshArrayOfRooms = () =>{
        const allExistentRooms = getAllRooms();
        if (allExistentRooms != null){
            let myOrderedArrayOfRooms = setRoomsInOrder(allExistentRooms);
            setMyOrderedRooms(myOrderedArrayOfRooms);
        }else{
            setMyOrderedRooms([]);
        }
    }
    useEffect(() => {
      refreshArrayOfRooms();    
      return () => {
      }
    }, [showAddRoomPopUp])
    
    useEffect(() => {
      createDatabaseIfNotExists();
      refreshArrayOfRooms();
      return () => {
      }
    }, [])
    // const actualizarButtonHandler = () =>{
    //     ShowRoomsOnConsole();
    //     refreshArrayOfRooms();
    // }
    const AgregarButtonHandler = () => {
        console.log("Agregar Pressed")
        setShowAddRoomPopUp(true);
    }
    const closeAddRoomButtonHandler = () => {
        setShowAddRoomPopUp(false);
        // AddRoomComponent.props.resetStates();
    }

    const closeAddRoomButton = (
        <button id='close-add-room-button' onClick={(e)=>(closeAddRoomButtonHandler())}>X</button>
    )
  return (
    <>
    <div id='pop-up-add-room-container' style={{position:'fixed', display: showAddRoomPopUp ? 'initial':'none'}}>
        <AddRoomComponent children={closeAddRoomButton} />
    </div>
        <div id='salas-head-container'>
            <h3 id='head-title'>MIS SALAS DE ZOOM</h3>
            <p id='salas-zoom-decription'>Organiza los links de tus salas de zoom para cada curso y accede de manera rápida.</p>
            <div className='salas-buttons-container'>
                {/* <button onClick={()=>{actualizarButtonHandler()}} id='actualizar'>Actualizar</button> */}
                <button onClick={()=>{AgregarButtonHandler()}} id='agregar'>Agregar</button>
            </div>
        </div>
    {/* <SalasZoomHead /> */}
    <div id='table-rooms-container'>
        <table className='table-rooms'>
            <thead>
                <tr id='row-description-container'>
                    <th id='description-id' className='row-description'>ID</th>
                    <th id='description-curso' className='row-description'>Curso</th>
                    <th id='description-link' className='row-description'>Link</th>
                    <th id='description-eliminar' className='row-description'>Del</th>
                </tr>
            </thead>
            <tbody>
                {/* <tr className='row-item' id='1'>
                    <td className='item-id'>1</td>
                    <td className='item-curso'>Competencia comunicativa</td>
                    <td className='item-link'><a href='./'>https://zoom.us/j/5551112222</a></td>
                    <td className='item-eliminar'><button className='delete-button' type='button'><img className='delete-button-image' height={'20'} width={'20'} alt='delete-icon' src={deleteIco}></img></button></td>
                </tr> */}
                {myOrderedRooms.map((e,indx)=> {
                    return <RowItemComponent refreshFunction={refreshArrayOfRooms} key={indx} itemId={indx+1} itemCurso={e[0]} itemLink={e[1]} />
                } )}            
            </tbody>
        </table>
    </div>
    </>
  )
}
