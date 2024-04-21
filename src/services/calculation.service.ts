type OperatorFunc = (a: number, b: number) => number;

type OperatorsObject = {
  [key: string]: OperatorFunc
};

interface Operators {
  first: OperatorsObject;
  second: OperatorsObject;
  third: OperatorsObject;
}

const operators: Operators = {
  first: {
    '%': (a, b) => a / b,
  },
  second: {
    '*': (a, b) => a * b,
    '/': (a, b) => (b !== 0 ? a / b : Infinity), // Handle divide by zero
  },
  third: {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
  },
};

export const Calculation = (arr: string[], key: string): string => {
  const buffer = [...arr];
  const minLength = 2;

  console.log('buffer 2:', key, buffer);

  const checkResult = (result: string) => buffer.length > minLength ? Calculation(buffer, key) : result;

  for (const operator in operators.first) {
    const operatorIndex = buffer.indexOf(operator);
    if (operatorIndex === -1) {
      continue;
    }

    const [operand1] = buffer.splice(operatorIndex - 1, 2).map(Number);
    if (!isNaN(operand1)) {
      const result = operators.first[operator](operand1, 100).toString();
      buffer.splice(operatorIndex - 1, 0, result);
      return checkResult(result);
    }
  }

  for (const operator in operators.second) {
    const operatorIndex = buffer.indexOf(operator);
    if (operatorIndex === -1) {
      continue;
    }

    const [operand1, , operand2] = buffer.splice(operatorIndex - 1, 3).map(Number);
    if (!isNaN(operand1) && !isNaN(operand2)) {
      const result = operators.second[operator](operand1, operand2).toString();
      buffer.splice(operatorIndex - 1, 0, result);
      return checkResult(result);
    }
  }

  const [val1, operator , val2] = buffer;
  if (operators.third.hasOwnProperty(operator)) {
    const operand1 = Number(val1);
    const operand2 = Number(val2);
    if (!isNaN(operand1) && !isNaN(operand2)) {
      const result = operators.third[operator](operand1, operand2).toString();
      buffer.splice(0, 3, result);
      return checkResult(result);
    }
  }

  return '';
}
