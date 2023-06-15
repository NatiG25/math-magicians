import React, { useState } from 'react';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [obj, setObj] = useState({ total: 0, operation: null, next: null });

  function calculationHandler(e) {
    setObj(calculate(obj, e.target.textContent));
  }

  return (
    <>
      <div className="flex-container">
        <h2>Let us do some maths!</h2>
        <div className="grid-container">
          <div className="span-1">
            {obj.total}
            {obj.operation}
            {obj.next}
          </div>

          <button
            className="calculator-btn"
            type="button"
            onClick={calculationHandler}
          >
            AC
          </button>
          <button
            className="calculator-btn"
            type="button"
            onClick={calculationHandler}
          >
            +/-
          </button>
          <button
            className="calculator-btn"
            type="button"
            onClick={calculationHandler}
          >
            %
          </button>
          <button
            type="button"
            className="operator"
            onClick={calculationHandler}
          >
            ÷
          </button>

          <button
            className="calculator-btn"
            type="button"
            onClick={calculationHandler}
          >
            7
          </button>
          <button
            className="calculator-btn"
            type="button"
            onClick={calculationHandler}
          >
            8
          </button>
          <button
            className="calculator-btn"
            type="button"
            onClick={calculationHandler}
          >
            9
          </button>
          <button
            type="button"
            className="operator"
            onClick={calculationHandler}
          >
            x
          </button>

          <button
            className="calculator-btn"
            type="button"
            onClick={calculationHandler}
          >
            4
          </button>
          <button
            className="calculator-btn"
            type="button"
            onClick={calculationHandler}
          >
            5
          </button>
          <button
            className="calculator-btn"
            type="button"
            onClick={calculationHandler}
          >
            6
          </button>
          <button
            type="button"
            className="operator"
            onClick={calculationHandler}
          >
            -
          </button>

          <button
            className="calculator-btn"
            type="button"
            onClick={calculationHandler}
          >
            1
          </button>
          <button
            className="calculator-btn"
            type="button"
            onClick={calculationHandler}
          >
            2
          </button>
          <button
            className="calculator-btn"
            type="button"
            onClick={calculationHandler}
          >
            3
          </button>
          <button
            type="button"
            className="operator"
            onClick={calculationHandler}
          >
            +
          </button>

          <button
            type="button"
            className="span-2 calculator-btn"
            onClick={calculationHandler}
          >
            0
          </button>
          <button
            className="calculator-btn"
            type="button"
            onClick={calculationHandler}
          >
            .
          </button>
          <button
            type="button"
            className="operator"
            onClick={calculationHandler}
          >
            =
          </button>
        </div>
      </div>
    </>
  );
};

export default Calculator;
