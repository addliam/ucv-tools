import React from 'react'
import { useEffect, useState } from 'react';
import './styles/PopUpComponent.css';

const Expire = ({ delay, children }) => {
    const [visible, setVisible] = useState(true);
    useEffect(() => {
      setTimeout(() => {
        setVisible(false);
      }, delay);
    }, [delay]);
    return visible ? <div>{children}</div> : <div />;
  };  

export const PopUpComponent = (props) => {
    
    console.log(`TRIGGER: ${props.trigger}`);
  return (props.trigger) ? (
    <Expire delay={2000}>
        <div className='pop-up'>
            <h3>Alert notification</h3>
            <p>Your notification will appear here</p>
        </div>
    </Expire>
  ):'';
}
