import React from 'react'
import './Sobre.css'
import logoprojeto from '../../assets/logoprojeto.png';
import {RxLinkedinLogo} from 'react-icons/rx'
import {FaGithub} from 'react-icons/fa'
import Footer from '../../Components/footer'
import Ytalo from '../../assets/Ytalo.jpg'
import Bruno from '../../assets/Bruno.jpg'
import Ricardo from '../../assets/Ricardo.jpg'

const Sobre = () => {
  return (
    <div className='main_about'>
      <div className='logo_about'>
        <img src={logoprojeto} alt="Logo" />
      </div>
      <div className='tittle_about'>
        <h1>Time de desenvolvedores</h1>
      </div>
        <div className='content_about_right'> 
        <div className='container_img_right'>
            <img src={Bruno} alt="Bruno" />
          </div>
          <section className='section_about_right'>
          <div className='descricao_dev'>
              <p>Me chamo Bruno, tenho 23 anos e sempre fui apaixonado por tecnologia, curso ADS. E neste projeto fiquei encarregado de ser o desenvolvedor front-end e back-end, porém, por ser gerente do projeto, dei suporte em todas as fases do processo do projeto.</p>
            <div className='btn_about'>
              <a href="https://www.linkedin.com/in/bruno-santos-69a692235/" target="_blank"><button id='btn_linkedin'> <RxLinkedinLogo id='icon_linkedin'/> LINKEDIN</button></a>
              <a href="https://github.com/Brunnosanttos" target="_blank"><button id='btn_github'> <FaGithub id='icon_git' /> GITHUB </button></a>
            </div>
            </div>
          </section> 
        </div> 
        <div className='content_about_left'>
        <section className='section_about_left'>
            <div className='descricao_dev'>
              <p>Me chamo Ricardo, sou desenvolvedor Full Stack com experiências nas mais variadas técnologias disponíveis no mercado, sempre focando em praticidade e qualidade na entrega de demandas.</p>
            <div className='btn_about'>
              <a href="https://www.linkedin.com/in/ricardo-vinicius-7599221b7/" target="_blank"><button id='btn_linkedin'> <RxLinkedinLogo id='icon_linkedin'/> LINKEDIN</button></a>
              <a href="https://github.com/RicardoMelo2501" target="_blank"><button id='btn_github'> <FaGithub id='icon_git' /> GITHUB </button></a>
            </div>
            </div>
          </section>
          <div className='container_img_left'>
            <img src={Ricardo} alt="Ricardo" />
          </div>
        </div>
        <div className='content_about_left'>
        <section className='section_about_left'>
            <div className='descricao_dev'>
              <p>Me chamo Ytalo atualmente tenho 22 anos, e hoje estou cursando ADS (Análise e Desenvolvimento de Sistemas). Para ser bem honesto ingressei no curso achando que só era codificar, mas vi que o importante mesmo é você saber como codificar e o que codificar, pois a parte essencial de um projeto é seu documento, ali está tudo o que o cliente necessita, fazendo com que seja desenvolvido o que de fato o cliente espera, o documento é a chave para todo projeto, então entendi que o curso não se tratava só de codificar e criar softwares e sim de um ciclo de vida extenso se um projeto que pode ser revolucionário, me apeguei a esta área de requisitos, e sei que posso chegar ainda mais longe.</p>
            <div className='btn_about'>
              <a href="https://www.linkedin.com/in/vitor-gabriel-b42563218" target="_blank"><button id='btn_linkedin'> <RxLinkedinLogo id='icon_linkedin'/> LINKEDIN</button></a>
              <a href="" target="_blank"><button id='btn_github'> <FaGithub id='icon_git' /> GITHUB </button></a>
            </div>
            </div>
          </section>
          <div className='container_img_left'>
            <img src={Ytalo} alt="Ytalo" />
          </div>
        </div>
        <div className='footer_about'>
          <Footer/>
        </div>
    </div>
  )
}

export default Sobre