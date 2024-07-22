import { ItemListContainer } from "./components/ItemListContainer"
import { NavBar } from "./components/NavBar"
function App() {

  return (
    <>
     <NavBar />
     <ItemListContainer greeting="¡Bienvenidos a la tienda de cámaras más grande de Argentina!" />
    </>
  )
}

export default App
