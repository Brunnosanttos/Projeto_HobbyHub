import React from 'react'
import './Sobre.css'
import logoprojeto from '../../assets/logoprojeto.png';

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
            <div>

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
            <div>

            </div>
          </section>
        </div>
    </div>
  )
}

export default Sobre