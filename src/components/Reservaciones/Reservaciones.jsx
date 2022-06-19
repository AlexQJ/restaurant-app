import React, { useState } from "react";
import Navigation from "../Navigation/Navigation";
import Footer from '../Footer/Footer'
import { createItem, getItems } from "../../manage";
import "./style.css";
import Success from "../Success/Success";

const Reservaciones = () => {
  let fActual = new Date().toISOString().slice(0,16);
  const [nombre, setNombre] = useState("");
  const [personas, setPersonas] = useState(0);
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [fecha, setFecha] = useState("");
  const [mensaje, setMensaje] = useState("Sin mensaje");

  let reservado = document.getElementById('reservado');
  

  const handleSubmit = (e) => {
    e.preventDefault();
    createItem({ nombre, correo, personas, telefono, fecha, mensaje });
    if(nombre && personas && correo && telefono && fecha ){
      reservado.style.display = 'block';
    }
  };
  const handleRequest = (e) => {
    e.preventDefault();
    getItems();
  };


  return (
    <>
      <Navigation />
      <div className="container">
        <div className="row">
          <div className="col">
            <section className="formulario my-4">
              <h1>Reservar una mesa</h1>
              <Success />
              <form>
                <div className="form-group">
                  <label htmlFor="nombre">Nombre</label>
                  <input
                    type="text"
                    className="form-control"
                    id="nombre"
                    placeholder="Ingresa tu nombre.."
                    required
                    onChange={(e) => setNombre(e.target.value)}
                  />
                  <label htmlFor="personas">¿Para cuantas personas?</label>
                  <input
                    type="number"
                    className="form-control"
                    id="personas"
                    placeholder="Personas"
                    min="1"
                    required
                    onChange={(e) => setPersonas(e.target.value)}
                  />
                  <label htmlFor="correo">Correo</label>
                  <input
                    type="email"
                    className="form-control"
                    id="correo"
                    placeholder="name@example.com"
                    required
                    onChange={(e) => setCorreo(e.target.value)}
                  />
                  <label htmlFor="tel">Telefono</label>
                  <input
                    type="tel"
                    className="form-control"
                    id="tel"
                    placeholder="555-555-5555"
                    minLength="10"
                    maxLength="10"
                    required
                    onChange={(e) => setTelefono(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="fecha">Fecha de reservacion</label>
                  <input
                    type="datetime-local"
                    className="form-control fecha"
                    id="fecha"
                    step="900"
                    min={fActual}
                    max="2022-07-14T00:00"
                    required
                    onChange={(e) => setFecha(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="mensaje">
                    Notas adicionales{" "}
                    <span className="opcional">*Opcional</span>
                  </label>
                  <textarea
                    className="form-control"
                    id="mensaje"
                    placeholder="Instrucciones adicionales"
                    rows="3"
                    onChange={(e) => setMensaje(e.target.value)}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  id="btnEnviar"
                  className="btn btn-primary"
                  onClick={handleSubmit}
                >
                  Reservar
                </button>
                <button
                  type="submit"
                  className="btn btn-secondary"
                  onClick={handleRequest}
                >
                  Ver reservaciones
                </button>
              </form>
            </section>
          </div>
        </div>
      </div>
<Footer />

    </>
  );
};

export default Reservaciones;
