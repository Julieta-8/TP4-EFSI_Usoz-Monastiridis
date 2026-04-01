const Cita = ({Mascota, Dueño, Fecha, Hora, Sintomas}) => {
  return (
    <ul>
      <li>Mascota: {Mascota}</li>
      <li>Dueño: {Dueño}</li>
      <li>Fecha: {Fecha}</li>
      <li>Hora: {Hora}</li>
      <li>Sintomas: {Sintomas}</li>
      <button>Eliminar ×</button>
    </ul>
  );
}

export default Cita;