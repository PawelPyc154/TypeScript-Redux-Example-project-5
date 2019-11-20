import {ExpenseActionTypes} from "./action";
import {
  SET_INPUT_CHOISE,
  SET_OUTPUT_CHOISE,
  SET_INPUT_CURRENCY_VALUE,
  SET_OUTPUT_CURRENCY_VALUE,
  SET_INPUT_VALUE,
  SET_OUTPUT_VALUE
} from "./action";

export interface MyStoreType {
  InputChoise: string;
  OutputChoise: string;
  InputCurrencyValue: string | number;
  OutputCurrencyValue: string | number;
  ImputValue: string | number;
  OutPutValue: string | number;
}

const MyStore: MyStoreType = {
  InputChoise: "EUR",
  OutputChoise: "PLN",
  InputCurrencyValue: "----",
  OutputCurrencyValue: "----",
  ImputValue: "",
  OutPutValue: ""
};

const InputReducer = (
  state = MyStore,
  action: ExpenseActionTypes
): MyStoreType => {
  switch (action.type) {
    case SET_INPUT_CHOISE:
      return {...state, InputChoise: action.e};
    case SET_OUTPUT_CHOISE:
      return {...state, OutputChoise: action.e};
    case SET_INPUT_CURRENCY_VALUE:
      return {...state, InputCurrencyValue: action.e};
    case SET_OUTPUT_CURRENCY_VALUE:
      return {...state, OutputCurrencyValue: action.e};
    case SET_INPUT_VALUE:
      return {...state, ImputValue: action.e};
    case SET_OUTPUT_VALUE:
      return {...state, OutPutValue: action.e};
    default:
      return state;
  }
};
export default InputReducer;
