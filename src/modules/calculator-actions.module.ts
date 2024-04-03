import { ButtonsModel } from "../model/buttons.model.ts";
import { CalculationService } from "../services/calculation.service.ts";

export function CalculatorActionsModule(parentEl: HTMLDivElement, displayEl: HTMLDivElement, historyEl: HTMLDivElement): void {
  let buffer: string[] = [];
  let history: any[] = [];
  let isMark: boolean = false;
  const operatorsArray = ['/', '*', '-', '+'];

  const checkAction = (key: string): void => {
    switch (key) {
      case 'ac':
      case "Backspace":
      case "Delete":
        displayEl.innerText = '';
        buffer = [];
        history = [];
        break;
      case '+/-':
        console.log('plus-minus');
        break;
      case "%": {
        isMark = true;

        if (buffer.length) {
          buffer.push(key);

          const calculationResult = CalculationService(buffer, key);
          console.log('calculationResult =>', calculationResult);

          history[history.length - 1] = `(${history[history.length - 1]}${key})`;
          displayEl.innerText = calculationResult.toString();
        }

        break;
      }
      case "NumpadDecimal":
      case ".":
      case ",":
        console.log('.');
        break;

      case "=": {
        isMark = false;
        let equalRes = '';

        if (buffer.length === 2 && buffer[1] !== '%') {
          buffer.push(buffer[0]);
          history.push(buffer[0]);
        }

        if (buffer.length >= 3 || (buffer.length === 2 && buffer[1] === '%')) {
          const calculationResult = CalculationService(buffer, key);
          equalRes = calculationResult.toString();
          console.log('= calculation:', equalRes);

          buffer = [];
          buffer.push(equalRes);
          displayEl.innerText = equalRes.toString();
        }

        if (history[history.length - 1] !== key) {
          history.push(key + equalRes.toString());
        }
        break;
      }

      case "/":
      case "*":
      case "-":
      case "+": {
        isMark = true;

        if (buffer.length) {

          // replace operator
          if (operatorsArray.includes(buffer[buffer.length - 1])) {
            buffer[buffer.length - 1] = key;
            history[history.length - 1] = key;
            break;
          }

          const calculationResult = CalculationService(buffer, key);
          console.log('calculation:', calculationResult);
          displayEl.innerText = calculationResult || buffer[0];

          buffer.push(key);
          history.push(key);
        }

        break;
      }

      case "9":
      case "8":
      case "7":
      case "6":
      case "5":
      case "4":
      case "3":
      case "2":
      case "1":
      case "0": {
        const pushValue = (): void => {
          buffer.push(key);
          history.push(key);
        };

        displayEl.innerText = isMark ? key : displayEl.innerText + key;

        if (isMark) {
          pushValue();
        } else if (buffer.length) {
          const bufferIndex = buffer.length - 1;
          const val = buffer[bufferIndex] ? buffer[bufferIndex] + key : key;
          buffer[bufferIndex] = val;
          history[history.length - 1] = val;
        } else {
          pushValue();
        }

        isMark = false;
        break;
      }
    }

    historyEl.innerText = history.join('');

    // console.log('history:', history);
    console.log('buffer:', buffer);
  };

  const fragment = ButtonsModel.map((item) => {
    const gridArea = `grid-area: ${item.key}`;
    return `<button 
      type="button" 
      class="calculator-button ${item.className}" 
      value="${item.value}" 
      style="${gridArea}"
    >${item.label}</button>`;
  }).join('');
  const buttonsElList = document.createRange().createContextualFragment(fragment);
  buttonsElList.querySelectorAll('button').forEach((el) => {
    el.addEventListener('click', (event: MouseEvent) => checkAction((event.target as HTMLButtonElement).value));
  });
  parentEl.appendChild(buttonsElList);

  window.addEventListener('keypress', (event: KeyboardEvent) => checkAction(event.key));
}
