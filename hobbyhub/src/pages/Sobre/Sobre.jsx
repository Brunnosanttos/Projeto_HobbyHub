import React from 'react'
import './Sobre.css'
import logoprojeto from '../../assets/logoprojeto.png';
import {BiLogoGmail} from 'react-icons/bi'
import {RxLinkedinLogo} from 'react-icons/rx'
import {FaGithub} from 'react-icons/fa'
import Footer from '../../Components/footer'

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
            <div className='btn_about'>
              <button id='btn_gmail'> <BiLogoGmail id='icon_gmail'/> GMAIL</button>
              <button id='btn_linkedin'> <RxLinkedinLogo id='icon_linkedin'/> LINKEDIN</button>
              <button id='btn_github'> <FaGithub id='icon_git' /> GITHUB </button>
            </div>
          </section>
          <div className='container_img_left'>
            <img src="" alt="Logo" />
          </div>
        </div>
        <div className='content_about_right'>
        <div className='container_img_right'>
            <img src="" alt="Logo" />
          </div>
          <section className='section_about_right'>
            <div className='btn_about'>
              <button id='btn_gmail'> <BiLogoGmail id='icon_gmail'/> GMAIL</button>
              <button id='btn_linkedin'> <RxLinkedinLogo id='icon_linkedin'/> LINKEDIN</button>
              <button id='btn_github'> <FaGithub id='icon_git' /> GITHUB </button>
            </div>
          </section>
        </div>
        <div className='content_about_left'>
          <section className='section_about_left'>
            <div className='btn_about'>
              <button id='btn_gmail'> <BiLogoGmail id='icon_gmail'/> GMAIL</button>
              <button id='btn_linkedin'> <RxLinkedinLogo id='icon_linkedin'/> LINKEDIN</button>
              <button id='btn_github'> <FaGithub id='icon_git' /> GITHUB </button>
            </div>
          </section>
          <div className='container_img_left'>
            <img src="" alt="Logo" />
          </div>
        </div>
        <div className='content_about_right'>
        <div className='container_img_right'>
            <img src="" alt="Logo" />
          </div>
          <section className='section_about_right'>
            <div className='btn_about'>
              <button id='btn_gmail'> <BiLogoGmail id='icon_gmail'/> GMAIL</button>
              <button id='btn_linkedin'> <RxLinkedinLogo id='icon_linkedin'/> LINKEDIN</button>
              <button id='btn_github'> <FaGithub id='icon_git' /> GITHUB </button>
            </div>
          </section>
        </div>
        <div className='content_about_left'>
          <section className='section_about_left'>
            <div className='btn_about'>
              <button id='btn_gmail'> <BiLogoGmail id='icon_gmail'/> GMAIL</button>
              <button id='btn_linkedin'> <RxLinkedinLogo id='icon_linkedin'/> LINKEDIN</button>
              <button id='btn_github'> <FaGithub id='icon_git' /> GITHUB </button>
            </div>
          </section>
          <div className='container_img_left'>
            <img src="" alt="Logo" />
          </div>
        </div>
        <div className='content_about_right'>
        <div className='container_img_right'>
            <img src="" alt="Logo" />
          </div>
          <section className='section_about_right'>
            <div className='btn_about'>
              <button id='btn_gmail'> <BiLogoGmail id='icon_gmail'/> GMAIL</button>
              <button id='btn_linkedin'> <RxLinkedinLogo id='icon_linkedin'/> LINKEDIN</button>
              <button id='btn_github'> <FaGithub id='icon_git' /> GITHUB </button>
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