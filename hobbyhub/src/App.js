import './App.css';
import Menu from './Components/menu';
import Login from './pages/Login/Login';
import Cadastro from './pages/Cadastro/Cadastro';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './pages/Inicio/Inicio';
import Home from './pages/Home/Home';


function App() {
  return (
<Router>
      <div className="Container">
      <Menu className="menu_button_header"/>
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App;