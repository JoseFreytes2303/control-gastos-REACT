import PropTypes from "prop-types";
import { NuevoPresupuesto } from "./NuevoPresupuesto";
import { ControPresupuesto } from "./ControPresupuesto";

const Header = ({
  presupuesto,
  setPresupuesto,
  isValidPresupuesto,
  setIsValidPresupuesto,
  gastos,
  setGastos
}) => {
  return (
    <header>
      <h1>Planificador de Gastos</h1>
      {isValidPresupuesto ? (
        <ControPresupuesto 
        gastos={gastos} 
        setGastos={setGastos}
        presupuesto={presupuesto} 
        setPresupuesto={setPresupuesto}
        setIsValidPresupuesto={setIsValidPresupuesto}
        />
      ) : (
        <NuevoPresupuesto
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          setIsValidPresupuesto={setIsValidPresupuesto}
        />
      )}
    </header>
  );
};

Header.propTypes = {
  presupuesto: PropTypes.number.isRequired,
  setPresupuesto: PropTypes.func.isRequired,
  isValidPresupuesto: PropTypes.bool.isRequired,
  setIsValidPresupuesto: PropTypes.func.isRequired,
  gastos: PropTypes.array.isRequired,
  setGastos : PropTypes.func.isRequired
};

export { Header };
