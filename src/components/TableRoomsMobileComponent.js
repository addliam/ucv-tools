import React from 'react'
import deleteIco from './sources/delete_icon_24x24.png';
import './styles/TableRoomsMobileComponent.css'
export const TableRoomsMobileComponent = () => {
  return (
    <div id='table-rooms-container-mob'>
        <div id='table-rooms-mob'>
            <div className='item-container-mob'>
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
                <tr className='row-item' id='1'>
                    <td className='item-id'>1</td>
                    <td className='item-curso'>Competencia comunicativa</td>
                    <td className='item-link'><a href='./'>https://zoom.us/j/5551112222</a></td>
                    <td className='item-eliminar'><button className='delete-button' type='button'><img className='delete-button-image' height={'20'} width={'20'} alt='delete-icon' src={deleteIco}></img></button></td>
                </tr>
                <tr className='row-item' id='2'>
                    <td className='item-id'>2</td>
                    <td className='item-curso'>Matematica III</td>
                    <td className='item-link'><a href='./'>https://zoom.us/j/5551112222</a></td>
                    <td className='item-eliminar'><button className='delete-button' type='button'><img className='delete-button-image' height={'20'} width={'20'} alt='delete-icon' src={deleteIco}></img></button></td>
                </tr>
                <tr className='row-item' id='3'>
                    <td className='item-id'>3</td>
                    <td className='item-curso'>Catedra de Vallejo</td>
                    <td className='item-link'><a href='./'>https://zoom.us/j/5551112222</a></td>
                    <td className='item-eliminar'><button className='delete-button' type='button'><img className='delete-button-image' height={'20'} width={'20'} alt='delete-icon' src={deleteIco}></img></button></td>
                </tr>
                <tr className='row-item' id='4'>
                    <td className='item-id'>4</td>
                    <td className='item-curso'>Programacion en Python</td>
                    <td className='item-link'><a href='./'>https://zoom.us/j/5551112222</a></td>
                    <td className='item-eliminar'><button className='delete-button' type='button'><img className='delete-button-image' height={'20'} width={'20'} alt='delete-icon' src={deleteIco}></img></button></td>
                </tr>
                <tr className='row-item' id='5'>
                    <td className='item-id'>5</td>
                    <td className='item-curso'>Introduccion base de datos</td>
                    <td className='item-link'><a href='./'>https://zoom.us/j/5551112222</a></td>
                    <td className='item-eliminar'><button className='delete-button' type='button'><img className='delete-button-image' height={'20'} width={'20'} alt='delete-icon' src={deleteIco}></img></button></td>
                </tr>
                <tr className='row-item' id='6'>
                    <td className='item-id'>6</td>
                    <td className='item-curso'>Desarrollo web intro</td>
                    <td className='item-link'><a href='./'>https://zoom.us/j/5551112222</a></td>
                    <td className='item-eliminar'><button className='delete-button' type='button'><img className='delete-button-image' height={'20'} width={'20'} alt='delete-icon' src={deleteIco}></img></button></td>
                </tr>
            </tbody>
            
            </table>
            </div>
        </div>
    </div>
  )
}
