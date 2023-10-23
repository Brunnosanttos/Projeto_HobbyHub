import React, { useState } from 'react';
import {Link} from "react-router-dom";
import "./menu.css";
import { PiHouseFill } from 'react-icons/pi';
import {FaRegAddressCard} from 'react-icons/fa';
import {BsFillFilePersonFill, BsFillTelephoneFill} from 'react-icons/bs'
import {BiSolidHomeAlt2} from 'react-icons/bi'
import {LuLayoutList} from 'react-icons/lu'

function Menu() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
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
          <li className='Inicio' onClick={closeMenu}><Link to="/"> <PiHouseFill className='icon_house'/> Início</Link></li>
          <li className='Login' onClick={closeMenu}><Link to="Login"> <BsFillFilePersonFill className='icon_login'/>Login </Link></li>
          <li className='Cadastro' onClick={closeMenu}><Link to="Cadastro"> <FaRegAddressCard className='icon_adress'/> Cadastro</Link></li>
          <li className='Home' onClick={closeMenu}><Link to="Home"> <BiSolidHomeAlt2 className='icon_home'/> Home</Link></li>
          <li className='Contatos' onClick={closeMenu}><Link to="Contatos"> <BsFillTelephoneFill className='icon_contact'/> Contatos</Link></li>
          <li className='Sobre' onClick={closeMenu}><Link to="Sobre"> <LuLayoutList className='icon_about'/> Sobre</Link></li>
        </ul>
      )}
    </div>
  );
}

export default Menu;
