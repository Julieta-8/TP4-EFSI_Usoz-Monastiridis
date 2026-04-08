const Formulario =() =>{
return(
<form method="post"action="">
<h3>Nombre Mascota</h3>
<input type="text" name="Mascota" placeholder="Nombre Mascota" />
<h3>Nombre del Dueño</h3>
<input type="text" name="Dueño" placeholder="Nombre del dueño" />
<h3>Fecha</h3>
<input type="date" name="Fecha"  class="hora"/>
<h3>Hora</h3>
<input type="hour" name="Hora"/>
<h3>Sintomas</h3>
<textarea name="Sintomas" id=""></textarea>
<button>agregar cita</button>
</form>
);


}
export default Formulario;