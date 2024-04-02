export function CreateCalculatorBlockModule(): {
  calculatorBlockEl: HTMLDivElement;
  calculatorBlockHeaderEl: HTMLDivElement;
  calculatorBlockBodyEl: HTMLDivElement;
} {
  const calculatorBlockEl = document.createElement('div');
  calculatorBlockEl.id = 'calculator';
  calculatorBlockEl.className = 'calculator';
  calculatorBlockEl.style.cssText = `
    top: 100px; 
    left: 50vw; 
    width: 300px; 
    height: 420px; 
  `;

  const calculatorBlockHeaderEl = document.createElement('div');
  calculatorBlockHeaderEl.className = 'calculator-header';

  const calculatorBlockBodyEl = document.createElement('div');
  calculatorBlockBodyEl.className = 'calculator-body';

  calculatorBlockEl.appendChild(calculatorBlockHeaderEl);
  calculatorBlockEl.appendChild(calculatorBlockBodyEl);

  return {
    calculatorBlockEl,
    calculatorBlockHeaderEl,
    calculatorBlockBodyEl
  };
}
