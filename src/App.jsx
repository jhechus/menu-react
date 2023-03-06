import { BrowserRouter, Route, Routes } from "react-router-dom"
import './index.css'

// Componentes creados 
import Navegacion from "./components/Navegacion"
import Clientes from './pages/Clientes'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Normas from './pages/Normas'
import Trabajos from './pages/Trabajos'


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route 
            path="/"
            element={ <Navegacion/> }
          >
            <Route path="About"    element={ <About/>    } />
            <Route index           element={ <Home/>     } />
            <Route path="Contact"  element={ <Contact/>  } />
            <Route path="Clientes" element={ <Clientes/> } />
            <Route path="Normas"   element={ <Normas/>   } />
            <Route path="Trabajos" element={ <Trabajos/> } />

          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
