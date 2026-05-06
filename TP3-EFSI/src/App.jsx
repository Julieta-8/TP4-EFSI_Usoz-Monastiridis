import React, { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Listado from './Listado'
import Formulario from './Formulario'
import "./Formulario/Formulario.css";
function App() {

  const [citas, setCitas] = useState(() => {
    const saved = localStorage.getItem('citas');
    return saved ? JSON.parse(saved) : [];
  });

  const eliminarCita = (indexAEliminar) => {
    const nuevasCitas = citas.filter((_, index) => index !== indexAEliminar);
    setCitas(nuevasCitas);
  };
  useEffect(() =>{
  localStorage.setItem('citas', JSON.stringify(citas));
  
},[citas])
//llamada sincronica:

  return (
    <>
      <section id="center">
      
        <div>
          <h1>ADMINISTRADOR DE PACIENTES</h1>
          
        </div>
       <section className = "layout">
        <div>
          <h2>CREAR MI CITA</h2>
<Formulario citas={citas} setCitas={setCitas} />        </div>
        <div>
          <h2>ADMINISITRA TUS CITAS</h2>
<Listado citas={citas} setCitas={setCitas} eliminarCita={eliminarCita} />
        </div>
       </section>
      </section>

      
      <section id="spacer"></section>
    </>
  )
}

export default App
