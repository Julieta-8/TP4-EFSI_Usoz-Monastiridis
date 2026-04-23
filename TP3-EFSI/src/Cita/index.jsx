const Cita = ({ Mascota, Dueño, Fecha, Hora, Sintomas }) => {
  const[X, EliminarCita] = useState(" ");
  const Erase = () => {
    EliminarCita(Cita.clear(X))
  }
  return (
    <div className="cita"  name={X}>
      <p><strong>Mascota:</strong> {Mascota}</p>
      <p><strong>Dueño:</strong> {Dueño}</p>
      <p><strong>Fecha:</strong> {Fecha}</p>
      <p><strong>Hora:</strong> {Hora}</p>
      <p><strong>Síntomas:</strong> {Sintomas}</p>

      <button className="boton" onClick={Erase}>ELIMINAR ×</button>
    </div>
  );

};


export default Cita;