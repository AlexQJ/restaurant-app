import React from 'react'
import Footer from '../Footer/Footer'
import Navigation from '../Navigation/Navigation'
import './style.css'

const Home = () => {
  return (
    <>
        <Navigation />
        <section className='hero'>
            <div className="container">
            <div className="row blog-presentacion">
                <div className="col">
                    <div className="headings">
                        <h1 className='text-white'>Burgertrópolis</h1>
                        <h3 className='text-white'>Hamburguesas al carbón</h3>
                    </div>
                    <div className="descripcion">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde assumenda ipsum exercitationem amet facilis officia praesentium, aspernatur error quod consequatur at ex beatae corporis officiis pariatur quibusdam tempore modi tempora.</p>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium architecto accusantium nostrum minus libero eveniet!</p>
                    </div>
                </div>
            </div>
            </div>
        </section>

        <Footer />
    </>
  )
}

export default Home