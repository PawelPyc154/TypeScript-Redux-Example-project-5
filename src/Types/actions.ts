export const SET_INPUT_CHOISE = "SET_INPUT_CHOISE";
export const SET_OUTPUT_CHOISE = "SET_OUTPUT_CHOISE";
export const SET_INPUT_CURRENCY_VALUE = "SET_INPUT_CURRENCY_VALUE";
export const SET_OUTPUT_CURRENCY_VALUE = "SET_OUTPUT_CURRENCY_VALUE";
export const SET_INPUT_VALUE = "SET_INPUT_VALUE";
export const SET_OUTPUT_VALUE = "SET_OUTPUT_VALUE";

export interface setInputChoise {
  type: typeof SET_INPUT_CHOISE;
  e: any;
}
export interface setOutputChoise {
  type: typeof SET_OUTPUT_CHOISE;
  e: any;
}
export interface setInputCurrencyValue {
  type: typeof SET_INPUT_CURRENCY_VALUE;
  e: any;
}
export interface setOutputCurrencyValue {
  type: typeof SET_OUTPUT_CURRENCY_VALUE;
  e: any;
}
export interface setImputValue {
  type: typeof SET_INPUT_VALUE;
  e: any;
}
export interface setOutPutValue {
  type: typeof SET_OUTPUT_VALUE;
  e: any;
}

export type ExpenseActionTypes =
  | setInputChoise
  | setOutputChoise
  | setInputCurrencyValue
  | setOutputCurrencyValue
  | setImputValue
  | setOutPutValue;
export type AppActions = ExpenseActionTypes;
