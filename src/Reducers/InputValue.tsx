import {ExpenseActionTypes} from "../Types/actions";
import {Expense} from "../Types/Expense";

const MyStore: Expense = {
  InputChoise: "EUR",
  OutputChoise: "PLN",
  InputCurrencyValue: "----",
  OutputCurrencyValue: "----",
  ImputValue: "",
  OutPutValue: ""
};

const InputReducer = (state = MyStore, action: ExpenseActionTypes): Expense => {
  switch (action.type) {
    case "SET_INPUT_CHOISE":
      return {...state, InputChoise: action.e};
    case "SET_OUTPUT_CHOISE":
      return {...state, OutputChoise: action.e};
    case "SET_INPUT_CURRENCY_VALUE":
      return {...state, InputCurrencyValue: action.e};
    case "SET_OUTPUT_CURRENCY_VALUE":
      return {...state, OutputCurrencyValue: action.e};
    case "SET_INPUT_VALUE":
      return {...state, ImputValue: action.e};
    case "SET_OUTPUT_VALUE":
      return {...state, OutPutValue: action.e};
    default:
      return state;
  }
};
export default InputReducer;
