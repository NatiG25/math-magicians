import React from 'react';
import calculate from '../logic/calculate';

class Calculator extends React.Component {
  constructor(props) {
    // 1
    super(props);
    this.state = {
      total: '0',
      next: null,
      operation: null,
    };
    this.calculationHandler = this.calculationHandler.bind(this);
  }

  calculationHandler(e) {
    this.setState((state) => calculate(state, e.target.textContent));
  }

  render() {
    const obj = this.state;
    return (
      <div className="grid-container">
        <div className="span-1">
          {obj.total}
          {obj.operation}
          {obj.next}
        </div>

        <button type="button" onClick={this.calculationHandler}>AC</button>
        <button type="button" onClick={this.calculationHandler}>+/-</button>
        <button type="button" onClick={this.calculationHandler}>%</button>
        <button type="button" className="operator" onClick={this.calculationHandler}>÷</button>

        <button type="button" onClick={this.calculationHandler}>7</button>
        <button type="button" onClick={this.calculationHandler}>8</button>
        <button type="button" onClick={this.calculationHandler}>9</button>
        <button type="button" className="operator" onClick={this.calculationHandler}>x</button>

        <button type="button" onClick={this.calculationHandler}>4</button>
        <button type="button" onClick={this.calculationHandler}>5</button>
        <button type="button" onClick={this.calculationHandler}>6</button>
        <button type="button" className="operator" onClick={this.calculationHandler}>-</button>

        <button type="button" onClick={this.calculationHandler}>1</button>
        <button type="button" onClick={this.calculationHandler}>2</button>
        <button type="button" onClick={this.calculationHandler}>3</button>
        <button type="button" className="operator" onClick={this.calculationHandler}>+</button>

        <button type="button" className="span-2" onClick={this.calculationHandler}>0</button>
        <button type="button" onClick={this.calculationHandler}>.</button>
        <button type="button" className="operator" onClick={this.calculationHandler}>=</button>

      </div>

    );
  }
}

export default Calculator;
