import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Listado from './Listado'
import Formulario from './Formulario'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
      
        <div>
          <h1>Administrador de Pacientes</h1>
          
        </div>
       <section class = "layout">
        <div>
          <h1>CREAR MI CITA</h1>
          <Formulario></Formulario>
        </div>
        <div>
          <h1>ADMINSITRA TUS CITAS</h1>
                  <Listado />

        </div>
       </section>
      </section>

      
      <section id="spacer"></section>
    </>
  )
}

export default App
