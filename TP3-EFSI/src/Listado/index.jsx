import Cita from "./Cita";//Va a buscar la carpeta que se llame index

const Listado = ({Mascota, Dueño, Fecha, Hora, Sintomas} ) =>{
    const Mascotas = ['Uma', 'Gris', 'Mawa']
    const Dueños = ['Brisa', 'Juli', 'Flor']
    const Fechas = ['2010-12-26', '2008-11-08', '2009-06-16']
    const Horas = ['12:26', '08:11', '06:16']
    const Sintomass = ['Se le está cayendo el pelo', 'Estornuda mucho', 'Le duele la pansa']

    return (

        <ul>
            {Mascotas.map(n=><Cita Mascota={n}/>)}
             {Dueños.map(n=><Cita Dueño={n}/>)}
              {Fechas.map(n=><Cita Fecha={n}/>)}
               {Horas.map(n=><Cita Hora={n}/>)}
                {Sintomass.map(n=><Cita Sintomas={n}/>)}

    </ul>
    )
}

export default Listado;