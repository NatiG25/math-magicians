import renderer from 'react-test-renderer';
import operate from './logic/operate';
import Calculator from './components/Calculator';
import About from './components/About';
import Header from './components/Header';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Home';
import App from './App';
import calculate from './logic/calculate';

describe("Operations", () => {
  test("add two numbers", () => {
    expect(operate("25", "4", "+")).toBe("29");
  });

  test("Subtract two numbers", () => {
    expect(operate("25", "4", "-")).toBe("21");
  });

  test("Multiply two numbers", () => {
    expect(operate("25", "4", "x")).toBe("100");
  });

  test("Divide two numbers", () => {
    expect(operate("25", "4", "÷")).toBe("6.25");
  });
});

describe("render react components", () => {
  it("renders correctly", () => {
    const tree = renderer.create(<Calculator />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly", () => {
    const tree = renderer.create(<About />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly", () => {
    const tree = renderer.create(<Home />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Router>
          <Header />
        </Router>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Router>
          <App />
        </Router>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("Functions test", () => {
  test("calculate.js test", () => {
    const initialItems = {
      total: 0,
      next: null,
      operation: null,
    };
    const buttonName = "=";
    if (buttonName === ".") {
      expect(calculate(initialItems, buttonName)).toEqual({
        total: 0,
        next: null,
        operation: null,
      });
    } else if (buttonName === ".") {
      expect(calculate(initialItems, buttonName)).toEqual({
        total: 0.0,
        next: null,
        operation: null,
      });
    } else if (buttonName === "1") {
      expect(calculate(initialItems, buttonName)).toEqual({
        total: null,
        next: "1",
      });
    } else if (buttonName === "=") {
      expect(calculate(initialItems, buttonName)).toEqual({});
    }
  });
});
