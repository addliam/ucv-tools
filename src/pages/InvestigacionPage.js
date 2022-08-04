import React, {useEffect} from 'react'
import {InvestigationComponent} from '../components/InvestigationComponent'
import { NavBarComponent } from '../components/NavBarComponent'
import { FooterComponent } from '../components/FooterComponent'

export const InvestigacionPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div>
        <NavBarComponent active='investigacion'/>
        <div style={{'margin':'4.5rem 0 0 0'}} className="main">
          <InvestigationComponent/>
        </div>
        <FooterComponent/>
    </div>
  )
}
