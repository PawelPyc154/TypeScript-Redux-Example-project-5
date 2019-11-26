// import {AppActions} from "./actionsType";
////////////////////////////////////////////////////////
export const SET_INPUT_CHOISE: string = "SET_INPUT_CHOISE";
export interface setInputChoise {
  type: typeof SET_INPUT_CHOISE;
  e: any;
}
export const setInputChoise = (value: string): AppActions => ({
  type: "SET_INPUT_CHOISE",
  e: value
});
////////////////////////////////////////////////////////////
export const SET_OUTPUT_CHOISE: string = "SET_OUTPUT_CHOISE";
export interface setOutputChoise {
  type: typeof SET_OUTPUT_CHOISE;
  e: any;
}
export const setOutputChoise = (value: string): AppActions => {
  return {
    type: "SET_OUTPUT_CHOISE",
    e: value
  };
};
//////////////////////////////////////////////////////////
export const SET_INPUT_CURRENCY_VALUE: string = "SET_INPUT_CURRENCY_VALUE";
export interface setInputCurrencyValue {
  type: typeof SET_INPUT_CURRENCY_VALUE;
  e: any;
}
export const setInputCurrencyValue = (value: string | number): AppActions => {
  return {
    type: "SET_INPUT_CURRENCY_VALUE",
    e: value
  };
};
//////////////////////////////////////////////////////////////
export const SET_OUTPUT_CURRENCY_VALUE: string = "SET_OUTPUT_CURRENCY_VALUE";
export interface setOutputCurrencyValue {
  type: typeof SET_OUTPUT_CURRENCY_VALUE;
  e: any;
}
export const setOutputCurrencyValue = (value: string | number): AppActions => {
  return {
    type: "SET_OUTPUT_CURRENCY_VALUE",
    e: value
  };
};
///////////////////////////////////////////////////////////////
export const SET_INPUT_VALUE = "SET_INPUT_VALUE";
export interface setImputValue {
  type: typeof SET_INPUT_VALUE;
  e: any;
}
export const setImputValue = (value: Number | string): AppActions => {
  return {
    type: "SET_INPUT_VALUE",
    e: value
  };
};
///////////////////////////////////////////////////////////////
export const SET_OUTPUT_VALUE = "SET_OUTPUT_VALUE";
export interface setOutPutValue {
  type: typeof SET_OUTPUT_VALUE;
  e: any;
}
export const setOutPutValue = (value: Number | string): AppActions => {
  return {
    type: "SET_OUTPUT_VALUE",
    e: value
  };
};
/////////////////////////////////////////////////////////////
export type ExpenseActionTypes =
  | setInputChoise
  | setOutputChoise
  | setInputCurrencyValue
  | setOutputCurrencyValue
  | setImputValue
  | setOutPutValue;
export type AppActions = ExpenseActionTypes;
