import {AppActions} from "./actionsType";

export const setInputChoise = (value: string): AppActions => ({
  type: "SET_INPUT_CHOISE",
  e: value
});
export const setOutputChoise = (value: string): AppActions => {
  return {
    type: "SET_OUTPUT_CHOISE",
    e: value
  };
};
export const setInputCurrencyValue = (value: string | number): AppActions => {
  return {
    type: "SET_INPUT_CURRENCY_VALUE",
    e: value
  };
};
export const setOutputCurrencyValue = (value: string | number): AppActions => {
  return {
    type: "SET_OUTPUT_CURRENCY_VALUE",
    e: value
  };
};
export const setImputValue = (value: Number | string): AppActions => {
  return {
    type: "SET_INPUT_VALUE",
    e: value
  };
};
export const setOutPutValue = (value: Number | string): AppActions => {
  return {
    type: "SET_OUTPUT_VALUE",
    e: value
  };
};
