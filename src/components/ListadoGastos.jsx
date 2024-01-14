// ListadoGastos.jsx
import PropTypes from "prop-types";
import { Gastos } from "./Gastos"; // Cambié Gasto por Gastos

export const ListadoGastos = ({
  gastos,
  setGastoEditar,
  eliminarGasto,
  filtro,
  gastosFiltrados,
}) => {
  return (
    <div className="listado-gastos contenedor">
      {filtro ? (
        <>
          <h2>{gastosFiltrados.length ? "Gastos:" : "No hay gastos aún"}</h2>
          {gastosFiltrados.map((gasto) => (
            <Gastos
              key={gasto.id}
              gasto={gasto}
              setGastoEditar={setGastoEditar}
              eliminarGasto={eliminarGasto}
            />
          ))}
        </>
      ) : (
        <>
          <h2>{gastos.length ? "Gastos:" : "No hay gastos aún"}</h2>
          {gastos.map((gasto) => (
            <Gastos
              key={gasto.id}
              gasto={gasto}
              setGastoEditar={setGastoEditar}
              eliminarGasto={eliminarGasto}
            />
          ))}
        </>
      )}
    </div>
  );
};

// ListadoGastos.jsx
ListadoGastos.propTypes = {
  gastos: PropTypes.array.isRequired,
  setGastoEditar: PropTypes.func.isRequired,
  eliminarGasto: PropTypes.func.isRequired,
  gastosFiltrados: PropTypes.array.isRequired,
  filtro: PropTypes.string.isRequired, // Cambié de bool a string
};
