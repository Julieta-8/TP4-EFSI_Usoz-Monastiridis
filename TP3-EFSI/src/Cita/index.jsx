const Cita = ({ Mascota, Dueño, Fecha, Hora, Sintomas }) => {
  return (
    <div className="cita">
      <p><strong>Mascota:</strong> {Mascota}</p>
      <p><strong>Dueño:</strong> {Dueño}</p>
      <p><strong>Fecha:</strong> {Fecha}</p>
      <p><strong>Hora:</strong> {Hora}</p>
      <p><strong>Síntomas:</strong> {Sintomas}</p>

      <button>Eliminar ×</button>
    </div>
  );
};

export default Cita;