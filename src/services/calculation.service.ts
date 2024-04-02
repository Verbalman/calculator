export const CalculationService = (arr: string[], key: string): string => {
  let buffer = [...arr];
  const minLength = 2;

  const getNumbers = (item: string[], index: number): {
    firstVal: number;
    firstIndex: number;
    secondVal: number;
    secondIndex: number;
  } => {
    const firstIndex = index - 1;
    const secondIndex = index + 1;
    return {
      firstVal: Number(item[firstIndex]),
      firstIndex,
      secondVal: Number(item[secondIndex]),
      secondIndex,
    };
  };

  const filterEmptyVal = (array: string[]): string[] => array.filter((item) => item !== '');

  console.log('buffer 2:', key, buffer);

  const multiplyOperatorIndex = buffer.indexOf('*');
  if (multiplyOperatorIndex !== -1) {
    const {
      firstVal,
      firstIndex,
      secondVal,
      secondIndex,
    } = getNumbers(buffer, multiplyOperatorIndex);
    const multiplyResult = (firstVal * secondVal).toString();
    buffer[multiplyOperatorIndex] = multiplyResult;
    buffer[firstIndex] = '';
    buffer[secondIndex] = '';
    buffer = filterEmptyVal(buffer);

    if (buffer.length > minLength) {
      return CalculationService(buffer, key);
    }

    return multiplyResult;
  }

  // TODO: Fix divide by zero (Infinity)
  const divideOperatorIndex = buffer.indexOf('/');
  if (divideOperatorIndex !== -1) {
    const {
      firstVal,
      firstIndex,
      secondVal,
      secondIndex,
    } = getNumbers(buffer, divideOperatorIndex);
    const divideResult = (firstVal / secondVal).toString();
    buffer[divideOperatorIndex] = divideResult;
    buffer[firstIndex] = '';
    buffer[secondIndex] = '';
    buffer = filterEmptyVal(buffer);

    if (buffer.length > minLength) {
      return CalculationService(buffer, key);
    }

    return divideResult;
  }

  const plusOperatorIndex = buffer.indexOf('+');
  if (plusOperatorIndex !== -1 && plusOperatorIndex <= 1 && key !== '*' && key !== '/') {
    const {
      firstVal,
      firstIndex,
      secondVal,
      secondIndex,
    } = getNumbers(buffer, plusOperatorIndex);
    const plusResult = (firstVal + secondVal).toString();
    buffer[plusOperatorIndex] = plusResult;
    buffer[firstIndex] = '';
    buffer[secondIndex] = '';
    buffer = filterEmptyVal(buffer);

    if (buffer.length > minLength) {
      return CalculationService(buffer, key);
    }

    return plusResult;
  }

  const minusOperatorIndex = buffer.indexOf('-');
  if (minusOperatorIndex !== -1 && minusOperatorIndex <= 1 && key !== '*' && key !== '/') {
    const {
      firstVal,
      firstIndex,
      secondVal,
      secondIndex,
    } = getNumbers(buffer, minusOperatorIndex);
    const minusResult = (firstVal - secondVal).toString();
    buffer[minusOperatorIndex] = minusResult;
    buffer[firstIndex] = '';
    buffer[secondIndex] = '';
    buffer = filterEmptyVal(buffer);

    if (buffer.length > minLength) {
      return CalculationService(buffer, key);
    }

    return minusResult;
  }

  return '';
}
