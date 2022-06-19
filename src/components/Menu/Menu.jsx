import React from 'react'
import Navigation from '../Navigation/Navigation'
import Footer from '../Footer/Footer'
import { menu } from '../../data'
import './style.css'

const Menu = () => {

  const hamburguesas = menu[0].hamburguesas;
  const bebidas = menu[1].bebidas;

  return (
    <>
        <Navigation />
        <div className="carta">
          <div className="container hamburguesas">
          <h2 className='h1 text-center' style={{
            marginTop:'30px'
          }}>Nuestro menu</h2>
            <div className="row justify-content-center menu" style={{
              backgroundImage: "url('images/menu/table-bg1.jpg')",
              backgroundSize: 'cover',
              backgroundRepeat:'no-repeat',
              padding: '50px',
              borderRadius: '10px'
            }}>
              <h4 className='h4 text-center text-light'>Hamburguesas</h4>
            
            {
              hamburguesas.map((hamburguesa)=>{
                return(
               <>

                <div class="card mx-3 my-3 py-3" style={{
                  width:'18rem'
                }}>
                  <img class="card-img-top" src={hamburguesa.img} alt={hamburguesa.nombre}/>
                  <div class="card-body">
                    <h5 class="card-title">{hamburguesa.nombre}</h5>
                    <p class="card-text">{hamburguesa.ingredientes}</p>
                    <p class="h6">${hamburguesa.precio}.00 mxn</p>
                  </div>
                </div>
               </>

                )
              })
            }
            </div>
            <div className="row justify-content-center menu" style={{
              backgroundImage: "url('images/menu/table-bg.jpg')",
              backgroundSize: 'cover',
              backgroundRepeat:'no-repeat',
              padding: '50px',
              borderRadius: '10px'
            }}>
              <h4 className='h4 text-center text-bg-dark'>Bebidas</h4>
            
            {
              bebidas.map((bebida)=>{
                return(
               <>

                <div class="card mx-3 my-3 py-3" style={{
                  width:'18rem'
                }}>
                  
                    <h5 class="card-title">{bebida.nombre}</h5>
                    <p class="h6">${bebida.precio}.00 mxn</p>
                  
                </div>
               </>

                )
              })
            }
            </div>
          </div>
        </div>

        <Footer />
    </>
  )
}

export default Menu