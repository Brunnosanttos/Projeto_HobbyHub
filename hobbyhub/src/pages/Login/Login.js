import React from 'react'; 
import './Login.css'; 
import logoprojeto from '../../assets/logoprojeto.png'; 
import {Link} from "react-router-dom";

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
          
          <label htmlFor="emailCpf">Email ou CPF</label> 
          <input placeholder='Digite o Email ou CPF' className='login_input' type="text" /> 
          
          <label htmlFor="senha">Senha</label> 
          <input placeholder='Digite a senha' className='login_input' type="password" /> 
          
          <a id='Esqueceu' href="" >Esqueceu a senha?</a> {/* Link "Esqueceu a senha?" */}
          <br></br>
          <br></br>
          <div className='btn'>
              <button>Login</button> {/* Botão de login */}
            <Link to="/Cadastro">
              <button>Criar nova conta</button> {/* Botão "Criar nova conta" */}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login; 
