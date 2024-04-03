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

  const updateBuffer = (firstIndex: number | undefined, secondIndex: number | undefined, resultIndex: number | undefined, result: string): void => {
    if (resultIndex !== undefined && result) {
      buffer[resultIndex] = result;
    }

    if (firstIndex !== undefined) {
      buffer[firstIndex] = '';
    }

    if (secondIndex !== undefined) {
      buffer[secondIndex] = '';
    }


    buffer = filterEmptyVal(buffer);
  }

  console.log('buffer 2:', key, buffer);

  const percentOperatorIndex = buffer.indexOf('%');
  if (percentOperatorIndex !== -1) {
    const {
      firstVal,
      firstIndex,
    } = getNumbers(buffer, percentOperatorIndex);

    if (!isNaN(firstVal)) {
      const percentResult = (firstVal / 100).toString();
      updateBuffer(firstIndex, undefined, percentOperatorIndex, percentResult);

      if (buffer.length > minLength) {
        return CalculationService(buffer, key);
      }

      return percentResult;
    }
  }

  const multiplyOperatorIndex = buffer.indexOf('*');
  if (multiplyOperatorIndex !== -1) {
    const {
      firstVal,
      firstIndex,
      secondVal,
      secondIndex,
    } = getNumbers(buffer, multiplyOperatorIndex);

    if (!isNaN(firstVal) && !isNaN(secondVal)) {
      const multiplyResult = (firstVal * secondVal).toString();
      updateBuffer(firstIndex, secondIndex, multiplyOperatorIndex, multiplyResult);

      if (buffer.length > minLength) {
        return CalculationService(buffer, key);
      }

      return multiplyResult;
    }
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

    if (!isNaN(firstVal) && !isNaN(secondVal)) {
      const divideResult = (firstVal / secondVal).toString();
      updateBuffer(firstIndex, secondIndex, divideOperatorIndex, divideResult);

      if (buffer.length > minLength) {
        return CalculationService(buffer, key);
      }

      return divideResult;
    }
  }

  const plusOperatorIndex = buffer.indexOf('+');
  if (plusOperatorIndex !== -1 && plusOperatorIndex <= 1 && key !== '*' && key !== '/') {
    const {
      firstVal,
      firstIndex,
      secondVal,
      secondIndex,
    } = getNumbers(buffer, plusOperatorIndex);

    if (!isNaN(firstVal) && !isNaN(secondVal)) {
      const plusResult = (firstVal + secondVal).toString();
      updateBuffer(firstIndex, secondIndex, plusOperatorIndex, plusResult);

      if (buffer.length > minLength) {
        return CalculationService(buffer, key);
      }

      return plusResult;
    }
  }

  const minusOperatorIndex = buffer.indexOf('-');
  if (minusOperatorIndex !== -1 && minusOperatorIndex <= 1 && key !== '*' && key !== '/') {
    const {
      firstVal,
      firstIndex,
      secondVal,
      secondIndex,
    } = getNumbers(buffer, minusOperatorIndex);

    if (!isNaN(firstVal) && !isNaN(secondVal)) {
      const minusResult = (firstVal - secondVal).toString();
      updateBuffer(firstIndex, secondIndex, minusOperatorIndex, minusResult);

      if (buffer.length > minLength) {
        return CalculationService(buffer, key);
      }

      return minusResult;
    }
  }

  return '';
}
