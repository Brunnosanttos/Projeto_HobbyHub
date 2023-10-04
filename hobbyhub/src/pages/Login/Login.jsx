import React from 'react'; 
import './Login.css'; 
import logoprojeto from '../../assets/logoprojeto.png'; 
import {Link} from "react-router-dom";
import {BsFilePerson} from "react-icons/bs";
import {RiLockPasswordLine} from "react-icons/ri";

import Inputs from "../../Components/Inputs/Inputs";
const Login = () => { 
  return (
    <div className='main_login'> {/* Inicia um container principal com classe 'main_login' */}
      <div className='left_login'> {/* Inicia um subcontainer com classe 'left_login' */}
        <div className='card_left'>
          <h2>Bem-vindo!</h2> {/* Título "Bem-vindo!" com classe 'h2' */}
          <img src={logoprojeto} alt="Logo" /> {/* Imagem do logotipo com classe 'Logo' */}
        </div>
      </div>
      <div className='right_login'> {/* Inicia outro subcontainer com classe 'container2' */}
        <div className='card_right'>
          <h1>Login</h1> {/* Título "Login" com classe 'h1' */}
          
         <div className="Ipts_Container">
          <div className="CIpts">
            <Inputs pHolderI="E-Mail ou CPF" TypesI="text" LabelI={"USUÁRIO"}/>
            <div className="IconC">
              <BsFilePerson className="icn-ipts"/>
            </div>
          </div>
          <div className="CIpts">
            <Inputs pHolderI="Senha" TypesI="password" LabelI={"SENHA"}/>
            <div className="IconC">
              <RiLockPasswordLine className="icn-ipts"/>
            </div>
          </div>
        </div>
          <a id='Esqueceu' href="" >Esqueceu a senha?</a> {/* Link "Esqueceu a senha?" */}
          <br></br>
          <br></br>
          <div className="ContainerBTNlogin">
            <Link className='LinksLogin' to="/home">
              <button className='btn'>Login</button> 
               </Link>{/* Botão de login */}
               <div id="ln-btns"></div>
            <Link to="/cadastro" className='LinksLogin'>
                <button className='btn'>Criar nova conta</button>
               {/* Botão "Criar nova conta" */}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login; 
