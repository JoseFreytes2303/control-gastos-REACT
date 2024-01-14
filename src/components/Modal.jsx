import { useState, useEffect } from "react";
import CerrarBtn from "../img/cerrar.svg";
import PropTypes from "prop-types";
import {Mensaje} from "./Mensaje";

export const Modal = ({ setModal, animarModal, setAnimarModal, guardarGasto, gastoEditar, setGastoEditar}) => {
  const [nombre, setNombre] = useState("");
  const [cantidad, setCantidad] = useState("");
  const [categoria, setCategoria] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [id, setId] = useState("");
  const [fecha, setFecha] = useState("");

  useEffect(() => {
    setNombre(gastoEditar.nombre || "");
    setCantidad(gastoEditar.cantidad || "");
    setCategoria(gastoEditar.categoria || "");
    setId(gastoEditar.id || "");
    setFecha(gastoEditar.fecha || "");
  }, [gastoEditar]);
  

  const ocultarModal = () => {
    setAnimarModal(false);
    setGastoEditar({})
    setTimeout(() => {
      setModal(false);
    }, 500);
  };
  const hableSubmit = (e) => {
    e.preventDefault();
    if ([nombre, cantidad, categoria].includes("")) {
      setMensaje("Todos los campos son obligatorios");
      setTimeout(() => {
        setMensaje('');
      }, 3000);
      return;
    }
    guardarGasto({ nombre, cantidad, categoria, id, fecha});
  };
  

  return (
    <div className={`modal ${animarModal ? "animar" : "cerrar"}`}>
      <div className="cerrar-modal">
        <img src={CerrarBtn} alt="Cerrar Modal" onClick={ocultarModal} />
      </div>
      <form
        onSubmit={hableSubmit}
        className={`formulario ${animarModal ? "animar" : "cerrar"}  `}
      >
        <legend>{gastoEditar.nombre ? "Editar Gasto" : 'Nuevo Gasto'}</legend>
        {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
        <div className="campo">
          <label htmlFor="nombre">Nombre Gasto</label>
          <input
            id="nombre"
            type="text"
            placeholder="Añade el nombre del Gasto"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="campo">
          <label htmlFor="cantidad">Cantidad</label>
          <input
            id="cantidad"
            type="number"
            placeholder="Añade la cantidad del Gasto: ej: $3000"
            value={cantidad}
            onChange={(e) => setCantidad(Number(e.target.value))}
          />
        </div>
        <div className="campo">
          <label htmlFor="categoria">Categoria</label>

          <select id="categoria" value={categoria} onChange={(e) => setCategoria(e.target.value)}>
            <option value="">-- Seleccione --</option>
            <option value="ahorro">Ahorro</option>
            <option value="comida">Comida</option>
            <option value="casa">Casa</option>
            <option value="gastos">Gastos</option>
            <option value="ocio">Ocio</option>
            <option value="salud">Salud</option>
            <option value="suscripciones">Suscripciones</option>
            <option value="apuestas">Apuestas</option>
          </select>
        </div>
        <input type="submit" value={gastoEditar.nomre ? "Guardar Cambios" : "Añadir Gasto"}/>
      </form>
    </div>
  );
};
Modal.propTypes = {
  setModal: PropTypes.func.isRequired,
  animarModal: PropTypes.bool.isRequired,
  setAnimarModal: PropTypes.func.isRequired,
  guardarGasto: PropTypes.func.isRequired,
  gastoEditar: PropTypes.object.isRequired,  // Corregido a PropTypes.object
  setGastoEditar: PropTypes.func.isRequired,
};


