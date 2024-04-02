import { CreateCalculatorBlockModule } from "./modules/create-calculator-block.module.ts";
import { CalculatorMovingModule } from "./modules/calculator-moving.module.ts";
import { SetStyleModule } from "./modules/set-style.module.ts";
import { CalculatorActionsModule } from "./modules/calculator-actions.module.ts";


export function calculator(): void {
  const {
    calculatorBlockEl,
    calculatorBlockHeaderEl,
    calculatorBlockBodyEl,
  } = CreateCalculatorBlockModule();

  if (!calculatorBlockEl) {
    return;
  }

  SetStyleModule();
  CalculatorMovingModule(calculatorBlockEl, calculatorBlockHeaderEl);

  const historyEl = document.createElement('div');
  historyEl.id = 'calculator-history';
  historyEl.className = 'calculator-history';
  calculatorBlockHeaderEl.appendChild(historyEl);

  const displayEl = document.createElement('div');
  displayEl.id = 'calculator-display';
  displayEl.className = 'calculator-display';
  calculatorBlockHeaderEl.appendChild(displayEl);

  CalculatorActionsModule(calculatorBlockBodyEl, displayEl, historyEl);

  document.body.appendChild(calculatorBlockEl);
}

window.Calculator = calculator;
