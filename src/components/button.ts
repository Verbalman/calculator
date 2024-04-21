import { ButtonsModelI } from "../model/buttons.model.ts";

export interface ButtonProps extends ButtonsModelI {}

export const Button = (props: ButtonProps): string => {
  const gridArea = `grid-area: ${props.key}`;
  return `<button 
      type="button" 
      class="calculator-button ${props.className}" 
      value="${props.value}" 
      style="${gridArea}"
    >${props.label}</button>`;
}
