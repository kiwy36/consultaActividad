import './App.css'
import Navbar from './components/Navbar/Navbar';
import BotonContador from './components/BotonContador/BotonContador';
import ItemListContainer from './components/ItemListcontainer/ItemListContainer';
import CartWidget from './components/CartWidget/CartWidget';
import Saludo from './components/Saludo/Saludo';
function App() {

  return (
    <>
      <Navbar/>
      <Saludo/>
      <BotonContador/>
      <ItemListContainer/>
      <CartWidget/>
    </>
  )
}

export default App
