import { MyProfileComponent } from "../components/MyProfileComponent";
import React, {useEffect} from 'react'
import { NavBarComponent } from "../components/NavBarComponent";
export const MiPerfilPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <NavBarComponent active='mi-perfil'/>
      <div style={{'margin':'4.5rem 0 0 0'}} className="main">
      </div>
      <MyProfileComponent />
    </>
  )
}
