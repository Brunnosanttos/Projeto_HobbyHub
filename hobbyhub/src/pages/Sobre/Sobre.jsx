import React from 'react'
import './Sobre.css'
import logoprojeto from '../../assets/logoprojeto.png';
import {BiLogoGmail} from 'react-icons/bi'
import {RxLinkedinLogo} from 'react-icons/rx'
import {FaGithub} from 'react-icons/fa'
import Footer from '../../Components/footer'
import vitor from '../../assets/vitor.jpg'
import Benicio from '../../assets/Benicio.jpg'
import Ytalo from '../../assets/Ytalo.jpg'
import Paulo from '../../assets/Paulo.jpg'
import Bruno from '../../assets/Bruno.jpg'
import Kauã from '../../assets/Kauã.jpg'

const Sobre = () => {
  return (
    <div className='main_about'>
      <div className='logo_about'>
        <img src={logoprojeto} alt="Logo" />
      </div>
      <div className='tittle_about'>
        <h1>Time de desenvolvedores</h1>
      </div>
        <div className='content_about_left'>
          <section className='section_about_left'>
            <div className='descricao_dev'>
              <p>Olá, meu nome é Vitor, nascido no dia 08/01/2001. Atualmente estou cursando análise e desenvolvimento de sistemas, no 5° período. Sempre fui imerso na tecnologia, fiz meu primeiro curso de informática com 12 anos e desde de então me apaixonei pela área. Com 18 anos iniciei uma graduação de gastronomia, me formei com 20 e com 21 iniciei ADS pois além de gostar da área, percebi que profissões voltadas a tecnologia era o presente e o futuro.</p>
            <div className='btn_about'>
              <button id='btn_gmail'> <BiLogoGmail id='icon_gmail'/> GMAIL</button>
              <button id='btn_linkedin'> <RxLinkedinLogo id='icon_linkedin'/> LINKEDIN</button>
              <button id='btn_github'> <FaGithub id='icon_git' /> GITHUB </button>
            </div>
            </div>
          </section>
          <div className='container_img_left'>
            <img src={vitor} alt="vitor" />
          </div>
        </div>
        <div className='content_about_right'>
        <div className='container_img_right'>
          <img src={Benicio} alt="benicio" />
          </div>
          <section className='section_about_right'>
          <div className='descricao_dev'>
              <p>É com grande satisfação que me apresento como Benício Alves de Barros Júnior. Desde os meus oito anos, desenvolvi uma paixão inabalável pela área de tecnologia, especialmente nos jogos. Iniciei meu percurso no universo da programação por meio do Minecraft, utilizando a linguagem Java para desenvolver plugins.
              Ao longo dos anos, meu entusiasmo me guiou até a faculdade de Análise e Desenvolvimento de Sistemas (ADS), onde aprofundei meus conhecimentos e habilidades. Atualmente, atuo como desenvolvedor web, e estou confiante de que esta é apenas uma etapa inicial em minha trajetória profissional. Minha dedicação à tecnologia desde tenra idade moldou minha jornada, e estou ansioso para continuar evoluindo e contribuindo para o avanço do mundo digital. E neste projeto fiquei encarregado pelo ux desing.</p>
            <div className='btn_about'>
              <button id='btn_gmail'> <BiLogoGmail id='icon_gmail'/> GMAIL</button>
              <button id='btn_linkedin'> <RxLinkedinLogo id='icon_linkedin'/> LINKEDIN</button>
              <button id='btn_github'> <FaGithub id='icon_git' /> GITHUB </button>
            </div>
            </div>
          </section>
        </div>
        <div className='content_about_left'>
        <section className='section_about_left'>
            <div className='descricao_dev'>
              <p>Me chamo Ytalo atualmente tenho 22 anos, e hoje estou cursando ADS (Análise e Desenvolvimento de Sistemas). Para ser bem honesto ingressei no curso achando que só era codificar, mas vi que o importante mesmo é você saber como codificar e o que codificar, pois a parte essencial de um projeto é seu documento, ali está tudo o que o cliente necessita, fazendo com que seja desenvolvido o que de fato o cliente espera, o documento é a chave para todo projeto, então entendi que o curso não se tratava só de codificar e criar softwares e sim de um ciclo de vida extenso se um projeto que pode ser revolucionário, me apeguei a esta área de requisitos, e sei que posso chegar ainda mais longe.</p>
            <div className='btn_about'>
              <button id='btn_gmail'> <BiLogoGmail id='icon_gmail'/> GMAIL</button>
              <button id='btn_linkedin'> <RxLinkedinLogo id='icon_linkedin'/> LINKEDIN</button>
              <button id='btn_github'> <FaGithub id='icon_git' /> GITHUB </button>
            </div>
            </div>
          </section>
          <div className='container_img_left'>
            <img src={Ytalo} alt="Ytalo" />
          </div>
        </div>
        <div className='content_about_right'>
        <div className='container_img_right'>
            <img src={Kauã} alt="Kauã" />
          </div>
          <section className='section_about_right'>
          <div className='descricao_dev'>
              <p>Olá, meu nome é Kauã, sou usuário de minoxidil e uso as roupas da minha prima.................</p>
            <div className='btn_about'>
              <button id='btn_gmail'> <BiLogoGmail id='icon_gmail'/> GMAIL</button>
              <button id='btn_linkedin'> <RxLinkedinLogo id='icon_linkedin'/> LINKEDIN</button>
              <button id='btn_github'> <FaGithub id='icon_git' /> GITHUB </button>
            </div>
            </div>
          </section>
        </div>
        <div className='content_about_left'>
        <section className='section_about_left'>
            <div className='descricao_dev'>
              <p>Olá, meu nome é Antônio Paulo, e estou prestes a concluir o curso de Análise e Desenvolvimento de Sistemas. Antes de ingressar nesse curso, eu nunca tinha tido qualquer contato com a área de tecnologia. Entrei no curso de forma inesperada, mas acabei me apaixonando por esse campo. Mesmo enfrentando desafios na jornada de aprendizado ao longo do curso, não desisti, e sinto que estou apenas no início. Estou muito orgulhoso de ter participado da construção do Hobby Hub e acredito que este é apenas o começo de uma grande jornada.</p>
            <div className='btn_about'>
              <button id='btn_gmail'> <BiLogoGmail id='icon_gmail'/> GMAIL</button>
              <button id='btn_linkedin'> <RxLinkedinLogo id='icon_linkedin'/> LINKEDIN</button>
              <button id='btn_github'> <FaGithub id='icon_git' /> GITHUB </button>
            </div>
            </div>
          </section>
          <div className='container_img_left'>
            <img src={Paulo} alt="Paulo" />
          </div>
        </div>
        <div className='content_about_right'>
        <div className='container_img_right'>
            <img src={Bruno} alt="Bruno" />
          </div>
          <section className='section_about_right'>
          <div className='descricao_dev'>
              <p>Me chamo Bruno, tenho 22 anos e sempre fui apaixonado por tecnologia, curso ADS. E neste projeto fiquei encarregado de ser o desenvolvedor front-end, porém, por ser gerente do projeto, dei suporte em todas as fases do processo do projeto.</p>
            <div className='btn_about'>
              <button id='btn_gmail'> <BiLogoGmail id='icon_gmail'/> GMAIL</button>
              <button id='btn_linkedin'> <RxLinkedinLogo id='icon_linkedin'/> LINKEDIN</button>
              <button id='btn_github'> <FaGithub id='icon_git' /> GITHUB </button>
            </div>
            </div>
          </section>
        </div>
        <div className='footer_about'>
          <Footer/>
        </div>
    </div>
  )
}

export default Sobre