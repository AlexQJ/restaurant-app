import React from 'react'
import Navigation from '../Navigation/Navigation'
import Footer from '../Footer/Footer'
import { menu } from '../../data'
import './style.css'
import Title from '../Title/Title'

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
              <Title heading='h4' theme='light' title='Hamburguesas'/>
            
            {
              hamburguesas.map((hamburguesa)=>{
                return(
               <>
                <div class="card mx-3 my-3 py-3" style={{
                  width:'18rem',
                  border: '20px double #e2ad07',
                  background: '#f4ebca'
                }}>
                  <img class="card-img-top" src={hamburguesa.img} alt={hamburguesa.nombre}/>
                  <div class="card-body">
                  <Title heading='h5' theme='light' title={hamburguesa.nombre}/>
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
              <Title heading='h4' theme='dark' title='Bebidas'/>
            
            {
              bebidas.map((bebida)=>{
                return(
               <>

                <div className="card mx-3 my-3 py-3" style={{
                  width:'18rem',
                  border: '20px double #e2ad07',
                  background: '#f4ebca'
                  
                }}>
                    <img className="card-img-top" src={bebida.img} alt={bebida.nombre}/>
                    <Title heading='h5' theme='light' title={bebida.nombre}/>
                    <p className="h6">${bebida.precio}.00 mxn</p>
                  
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