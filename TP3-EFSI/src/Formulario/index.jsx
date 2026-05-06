
import {useState} from "react"
const Formulario = ({ citas, setCitas }) => {
  
    const CrearCita = (e) =>{
        e.preventDefault();
            const nuevaCita = {
      mascota: e.target.Mascota.value,
      dueño: e.target.Dueño.value,
      fecha: e.target.Fecha.value,
      hora: e.target.Hora.value,
      sintomas: e.target.Sintomas.value
    };

    setCitas([...citas, nuevaCita]);

    e.target.reset();
    
    }

  


return(
<form onSubmit= {CrearCita}>
<h3>Nombre Mascota</h3>
<input type="text" name="Mascota" placeholder="Nombre Mascota" />
<h3>Nombre del Dueño</h3>
<input type="text" name="Dueño" placeholder="Nombre del dueño" />
<h3>Fecha</h3>
<input type="date" name="Fecha"  className="hora"/>
<h3>Hora</h3>
<input type="time" name="Hora"/>
<h3>Sintomas</h3>
<textarea name="Sintomas" id=""></textarea>
<button type="submit">agregar cita</button>
</form>

);


}
export default Formulario;