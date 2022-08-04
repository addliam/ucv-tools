import './styles/PopUpComponent.css';
import React, { Component } from 'react'

export class PopUp2Component extends Component {
  render() {
    return (
        <div id='pop-up2-container'>
            <div className='pop-up'>
                <h3>Alert notification</h3>
                <p>Your notification will appear here</p>
            </div>
        </div>
    )
  }
}