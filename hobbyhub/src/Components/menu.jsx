import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./menu.css";
import { PiHouseFill } from 'react-icons/pi';
import { FaRegAddressCard } from 'react-icons/fa';
import { BsFillFilePersonFill, BsFillTelephoneFill } from 'react-icons/bs'
import { BiSolidHomeAlt2 } from 'react-icons/bi'
import { LuLayoutList } from 'react-icons/lu'

function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    if (menuOpen) {
      document.body.classList.remove('slideUp');
    } else {
      document.body.classList.add('slideUp');
    }
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.classList.remove('slideUp');
  };

  return (
    <div className={`sidebar ${menuOpen ? "active" : ""}`}>
      <button className={`menu_button ${menuOpen ? "active" : "inactive"}`} onClick={toggleMenu}>
        <div className="lines_btn_menu right"></div>
        <div className="lines_btn_menu left"></div>
        <div id="btn_menu_text">MENU</div>
      </button>
      {menuOpen && (
        <ul className='menu_ul'>
          <li className='Inicio' onClick={closeMenu}>
            <Link to="/"> 
              <button><PiHouseFill className='icon_house'/> Início</button>
            </Link>
          </li>
          <li className='Login' onClick={closeMenu}>
            <Link to="Login"> 
              <button><BsFillFilePersonFill className='icon_login'/> Login</button>
            </Link>
          </li>
          <li className='Cadastro' onClick={closeMenu}>
            <Link to="Cadastro"> 
              <button><FaRegAddressCard className='icon_adress'/> Cadastro</button>
            </Link>
          </li>
          <li className='Home' onClick={closeMenu}>
            <Link to="Home"> 
              <button><BiSolidHomeAlt2 className='icon_home'/> Home</button>
            </Link>
          </li>
          <li className='Contatos' onClick={closeMenu}>
            <Link to="Contatos"> 
              <button><BsFillTelephoneFill className='icon_contact'/> Contatos</button>
            </Link>
          </li>
          <li className='Sobre' onClick={closeMenu}>
            <Link to="Sobre"> 
              <button><LuLayoutList className='icon_about'/> Sobre</button>
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
}

export default Menu;
