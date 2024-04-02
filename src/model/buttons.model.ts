export interface ButtonsModelI {
  className: string;
  key: string;
  value: string | number;
  label: string;
  size: number;
}

export const ButtonsModel: ButtonsModelI[] = [

  // line one
  {
    className: 'calculator-button-ac',
    key: 'ac',
    value: 'ac',
    label: 'AC',
    size: 1,
  },
  {
    className: 'calculator-button-plus-minus',
    key: 'plus-minus',
    value: '+/-',
    label: '+/-',
    size: 1,
  },
  {
    className: 'calculator-button-percent',
    key: 'percent',
    value: '%',
    label: '%',
    size: 1,
  },
  {
    className: 'calculator-button-divide',
    key: 'divide',
    value: '/',
    label: '/',
    size: 1,
  },

  // line two
  {
    className: 'calculator-button-seven',
    key: 'seven',
    value: 7,
    label: '7',
    size: 1,
  },
  {
    className: 'calculator-button-eight',
    key: 'eight',
    value: 8,
    label: '8',
    size: 1,
  },
  {
    className: 'calculator-button-nine',
    key: 'nine',
    value: 9,
    label: '9',
    size: 1,
  },
  {
    className: 'calculator-button-multiply',
    key: 'multiply',
    value: '*',
    label: '*',
    size: 1,
  },

  // line three
  {
    className: 'calculator-button-four',
    key: 'four',
    value: 4,
    label: '4',
    size: 1,
  },
  {
    className: 'calculator-button-five',
    key: 'five',
    value: 5,
    label: '5',
    size: 1,
  },
  {
    className: 'calculator-button-six',
    key: 'six',
    value: 6,
    label: '6',
    size: 1,
  },
  {
    className: 'calculator-button-minus',
    key: 'minus',
    value: '-',
    label: '-',
    size: 1,
  },

  // line four
  {
    className: 'calculator-button-one',
    key: 'one',
    value: 1,
    label: '1',
    size: 1,
  },
  {
    className: 'calculator-button-two',
    key: 'two',
    value: 2,
    label: '2',
    size: 1,
  },
  {
    className: 'calculator-button-three',
    key: 'three',
    value: 3,
    label: '3',
    size: 1,
  },
  {
    className: 'calculator-button-plus',
    key: 'plus',
    value: '+',
    label: '+',
    size: 1,
  },

  // line four
  {
    className: 'calculator-button-zero',
    key: 'zero',
    value: '0',
    label: '0',
    size: 2,
  },
  {
    className: 'calculator-button-point',
    key: 'point',
    value: '.',
    label: '.',
    size: 1,
  },
  {
    className: 'calculator-button-equal',
    key: 'equal',
    value: '=',
    label: '=',
    size: 1,
  },
];
