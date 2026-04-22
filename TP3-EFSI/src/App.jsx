import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Listado from './Listado'
import Formulario from './Formulario'
import "./Formulario/Formulario.css";
function App() {
 

  
  return (
    <>
      <section id="center">
      
        <div>
          <h1>ADMINISTRADOR DE PACIENTES</h1>
          
        </div>
       <section className = "layout">
        <div>
          <h2>CREAR MI CITA</h2>
          <Formulario></Formulario>
        </div>
        <div>
          <h2>ADMINISITRA TUS CITAS</h2>
                 <Listado> </Listado >

        </div>
       </section>
      </section>

      
      <section id="spacer"></section>
    </>
  )
}

export default App
