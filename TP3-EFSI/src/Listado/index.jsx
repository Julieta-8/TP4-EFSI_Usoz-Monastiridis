import Cita from "../Cita";
import { useState } from 'react'
import  "../Cita/Cita.css"
const Listado = () => {
 [citas, setCita] = useState({
   Mascota: 'Uma',
      Dueño: 'Brisa',
      Fecha: '2010-12-26',
      Hora: '12:26',
      Sintomas: 'Se le está cayendo el pelo'

})
  /*const citas = [
    {
      Mascota: 'Uma',
      Dueño: 'Brisa',
      Fecha: '2010-12-26',
      Hora: '12:26',
      Sintomas: 'Se le está cayendo el pelo'
    },
    {
      Mascota: 'Gris',
      Dueño: 'Juli',
      Fecha: '2008-11-08',
      Hora: '08:11',
      Sintomas: 'Estornuda mucho'
    },
    {
      Mascota: 'Mawa',
      Dueño: 'Flor',
      Fecha: '2009-06-16',
      Hora: '06:16',
      Sintomas: 'Le duele la panza'
    }
  ];*/

  return (
    <div>
      {citas.map((cita, index) => (
        <Cita
          key={index}
          Mascota={cita.Mascota}
          Dueño={cita.Dueño}
          Fecha={cita.Fecha}
          Hora={cita.Hora}
          Sintomas={cita.Sintomas}
        />
      ))}
    </div>
  );
};

export default Listado;