import React from 'react'
import './cards.css'

const cards = () => {
  return (
    <section className='card_main'>
        <h3>Título do hobby</h3>
        <div className='footer_card'>
            <div id='content_footer'>
                <p>Localização</p>
                <p>data</p>
            </div>
            <div id='btn'>
                <button>Saiba mais</button>
            </div>
        </div>
    </section>
  )
}

export default cards