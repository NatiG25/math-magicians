import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [obj, setObj] = useState({ total: 0, operation: null, next: null });

  function calculationHandler(e) {
    setObj(calculate(obj, e.target.textContent));
  }

  return (
    <div className="grid-container">
      <div className="span-1">
        {obj.total}
        {obj.operation}
        {obj.next}
      </div>

      <button type="button" onClick={calculationHandler}>AC</button>
      <button type="button" onClick={calculationHandler}>+/-</button>
      <button type="button" onClick={calculationHandler}>%</button>
      <button type="button" className="operator" onClick={calculationHandler}>÷</button>

      <button type="button" onClick={calculationHandler}>7</button>
      <button type="button" onClick={calculationHandler}>8</button>
      <button type="button" onClick={calculationHandler}>9</button>
      <button type="button" className="operator" onClick={calculationHandler}>x</button>

      <button type="button" onClick={calculationHandler}>4</button>
      <button type="button" onClick={calculationHandler}>5</button>
      <button type="button" onClick={calculationHandler}>6</button>
      <button type="button" className="operator" onClick={calculationHandler}>-</button>

      <button type="button" onClick={calculationHandler}>1</button>
      <button type="button" onClick={calculationHandler}>2</button>
      <button type="button" onClick={calculationHandler}>3</button>
      <button type="button" className="operator" onClick={calculationHandler}>+</button>

      <button type="button" className="span-2" onClick={calculationHandler}>0</button>
      <button type="button" onClick={calculationHandler}>.</button>
      <button type="button" className="operator" onClick={calculationHandler}>=</button>

    </div>
  );
};

export default Calculator;
