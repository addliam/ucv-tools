import React, {useEffect} from 'react'
import { TableRoomsComponent } from '../components/TableRoomsComponent'
import { NavBarComponent } from '../components/NavBarComponent'
import { FooterComponent } from '../components/FooterComponent'

export const SalasZoomPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
        <NavBarComponent active='salas-zoom'/>
        <div style={{'margin':'4.5rem 0 0 0'}} className="main">
          {/* <SalasZoomHead/> */}
          <TableRoomsComponent/>
        </div>
        <FooterComponent/>
    </div>
  )
}
