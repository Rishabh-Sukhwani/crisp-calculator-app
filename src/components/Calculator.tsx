
import { useState } from "react";
import Display from "./Display";
import Button from "./Button";

const Calculator = () => {
  const [display, setDisplay] = useState("0");
  const [firstOperand, setFirstOperand] = useState<number | null>(null);
    const [operator, setOperator] = useState<string | null>(null);
    const [waitingForSecondOperand, setWaitingForSecondOperand] = useState(false);
    const [memory, setMemory] = useState<number>(0);

  const clearAll = () => {
    setDisplay("0");
    setFirstOperand(null);
    setOperator(null);
    setWaitingForSecondOperand(false);
  };

  const inputDigit = (digit: string) => {
    if (waitingForSecondOperand) {
      setDisplay(digit);
      setWaitingForSecondOperand(false);
    } else {
      setDisplay(display === "0" ? digit : display + digit);
    }
  };

  const inputDecimal = () => {
    if (waitingForSecondOperand) {
      setDisplay("0.");
      setWaitingForSecondOperand(false);
      return;
    }

    if (!display.includes(".")) {
      setDisplay(display + ".");
    }
  };

  const handleOperator = (nextOperator: string) => {
    const inputValue = parseFloat(display);

    if (firstOperand === null) {
      setFirstOperand(inputValue);
    } else if (operator) {
      const result = performCalculation(operator, firstOperand, inputValue);
      setDisplay(String(result));
      setFirstOperand(typeof result === "string" ? null : result);
    }

    setWaitingForSecondOperand(true);
    setOperator(nextOperator);
  };

  const performCalculation = (op: string, first: number, second: number): number | string => {
    switch (op) {
      case "+":
        return first + second;
      case "-":
        return first - second;
      case "×":
        return first * second;
      case "÷":
        return second === 0 ? "Error" : first / second;
      default:
        return second;
    }
  };

  const handleEquals = () => {
    if (firstOperand === null || operator === null) {
      return;
    }

    const inputValue = parseFloat(display);
    const result = performCalculation(operator, firstOperand, inputValue);
    
    setDisplay(typeof result === "string" ? result : String(result));
    setFirstOperand(null);
    setOperator(null);
    setWaitingForSecondOperand(false);
  };

  const handlePercentage = () => {
    const currentValue = parseFloat(display);
    const percentValue = currentValue / 100;
    setDisplay(String(percentValue));
  };

  const toggleSign = () => {
    const currentValue = parseFloat(display);
    setDisplay(String(-1 * currentValue));
  };

  const memoryAdd = () => {
    setMemory(memory + parseFloat(display));
  };

  const memoryClear = () => {
    setMemory(0);
  };

  const memoryRecall = () => {
    setDisplay(String(memory));
  };

  return (
    <div className="p-4 bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl shadow-lg max-w-md w-full mx-auto">
      <Display value={display} />
      
      <div className="grid grid-cols-4 gap-3 mt-6">
        {/* First row */}
        <Button onClick={memoryClear} variant="secondary">MC</Button>
        <Button onClick={memoryRecall} variant="secondary">MR</Button>
        <Button onClick={memoryAdd} variant="secondary">M+</Button>
        <Button onClick={clearAll} variant="accent">C</Button>
        
        {/* Second row */}
        <Button onClick={() => inputDigit("7")}>7</Button>
        <Button onClick={() => inputDigit("8")}>8</Button>
        <Button onClick={() => inputDigit("9")}>9</Button>
        <Button onClick={() => handleOperator("÷")} variant="operator">÷</Button>
        
        {/* Third row */}
        <Button onClick={() => inputDigit("4")}>4</Button>
        <Button onClick={() => inputDigit("5")}>5</Button>
        <Button onClick={() => inputDigit("6")}>6</Button>
        <Button onClick={() => handleOperator("×")} variant="operator">×</Button>
        
        {/* Fourth row */}
        <Button onClick={() => inputDigit("1")}>1</Button>
        <Button onClick={() => inputDigit("2")}>2</Button>
        <Button onClick={() => inputDigit("3")}>3</Button>
        <Button onClick={() => handleOperator("-")} variant="operator">−</Button>
        
        {/* Fifth row */}
        <Button onClick={() => inputDigit("0")} className="col-span-2">0</Button>
        <Button onClick={inputDecimal}>.</Button>
        <Button onClick={() => handleOperator("+")} variant="operator">+</Button>
        
        {/* Sixth row */}
        <Button onClick={toggleSign} variant="secondary">+/-</Button>
        <Button onClick={handlePercentage} variant="secondary">%</Button>
        <Button onClick={handleEquals} variant="equals" className="col-span-2">=</Button>
      </div>
    </div>
  );
};

export default Calculator;
