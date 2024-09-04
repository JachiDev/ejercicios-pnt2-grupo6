import './App.css'
import { Ej_diap1 } from './componentes/ej_diap1'
import { Ej_diap2 } from './componentes/ej_diap2'

function App() {
 
  return (
    <>
    <Ej_diap2/>
      <div className='container'>
        <div>
          <h1>Grupo 1</h1>
        </div>

        <ul>{<Ej_diap1/>}</ul>
      </div>
    </>
  )
}

export default App
