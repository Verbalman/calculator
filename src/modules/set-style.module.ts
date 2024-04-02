export function SetStyleModule(): void {
  const id = 'calculator-style';

  if (document.getElementById(id)) {
    return;
  }

  try {
    const css = `
      #calculator * { 
        box-sizing: border-box; 
        margin: 0; 
        padding: 0
      }
      #calculator {
        position: fixed;
        background-color: #222831;
        border: 1px solid #222831;
        border-radius: 8px;
      }
      #calculator .calculator-header {
        display: flex;
        flex-direction: column;
        position: relative;
        width: 100%; 
        height: 120px; 
        background-color: #31363F;
        border-radius: 8px 8px 0 0;
      }
      #calculator .calculator-header .calculator-history {
        width: 100%;
        height: 50%;
        padding: 8px;
        color: #ffffff;
      }
      #calculator .calculator-header .calculator-display {
        align-self: flex-end;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        width: 100%;
        height: 50%;
        padding: 2px 0;
        color: #76ABAE;
        font-size: 2rem;
        font-weight: 500;
        font-style: normal;
        line-height: 2rem;
        white-space: nowrap;
        overflow: hidden;
        background-color: transparent;
        border-left: 12px solid transparent;
        border-right: 12px solid transparent;
      }
      #calculator .calculator-body {
        display: grid;
        grid-template-areas:
          "ac plus-minus percent divide"
          "seven eight nine multiply"
          "four five six minus"
          "one two three plus"
          "zero zero point equal";
        gap: 1px;  
        position: relative;
        width: 100%; 
        height: calc(100% - 120px); 
        background-color: transparent;
        border-radius: 0 0 8px 8px;
        overflow: hidden;
      }
      #calculator .calculator-button {
        cursor: pointer;
        width: auto;
        min-width: 50px;
        height: auto;
        min-height: 50px;
        background-color: #EEEEEE;
        border: none;
        box-shadow: none;
        outline: none;
      }
      #calculator .calculator-button:active {
        background-color: #76ABAE;
      }
    `;

    const style = document.createElement('style');
    style.id = id;
    style.innerHTML = css.replace(/\s*\n\s*/g,"").replace(/: /g, ":");

    document.head.appendChild(style);
  } catch (e) {
    console.error('Cannot set calculator styles!', e);
  }
};
