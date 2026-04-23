
import {useSate} from "react"
const Formulario =() =>{

    const setCita = (e) =>{
        e.preventDefault();
         const formulario = e.target;
        
        formulario.Mascota.value = "";

        setCita([
            ...citas,
            formulario.Mascota.value,
             formulario.Dueño.value,
              formulario.Fecha.value.
             formulario.Hora.value,
             formulario.Sintomas.value,
        ]);

    }

return(
<form onSubmit= {setCita}>
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
<button>agregar cita</button>
</form>
);


}
export default Formulario;