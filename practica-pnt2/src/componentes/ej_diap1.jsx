import { useEffect } from 'react'

export const Ej_diap1 = () => {
  const nomIntegrantes = [{
    nombre: 'Denise',
    apellido:  'Albert'
  },
  {
    nombre: 'Dante',
    apellido: 'D Angeli'
  },
  {
    nombre: 'Juan',
    apellido: 'Achigar'
  }
]


    useEffect(() => {
        console.log('Componente montado');
    },[]);


  return (
    <ul>{nomIntegrantes.map((integrante, index) => (
      <li key={index}>
        {integrante.nombre} {integrante.apellido}
      </li>
    ))}</ul>
  );
}


