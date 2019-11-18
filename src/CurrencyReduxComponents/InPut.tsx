import React, {useEffect} from "react";
// @ts-ignore
import styled from "styled-components";
import {FaExchangeAlt} from "react-icons/fa";
import {useSelector, useDispatch} from "react-redux";
import axios from "axios";
import {
  setInputChoise,
  setOutputChoise,
  setInputCurrencyValue,
  setOutputCurrencyValue,
  setImputValue,
  setOutPutValue
} from "../Actions/InputValue";
import {Expense} from "../Types/Expense";

const Div = styled.div`
  display: flex;
`;
const InputStyled = styled.input`
  width: 250px;
  height: 50px;
  border: 1px solid white;
  font-size: 30px;
  padding: 5px;

  &:focus {
    outline: none;
    border: 1px solid rgb(255, 0, 157);
  }
`;
const SelectStyled = styled.select`
  width: 100px;
  height: 50px;
  border: 1px solid white;
  font-size: 30px;
  padding: 5px;
  &:focus {
    outline: none;
    border: 1px solid rgb(255, 0, 157);
  }
`;
const FaExchangeAltStyled = styled(FaExchangeAlt)`
  display: inline-block;
  padding: 0px;
  width: 100px;

  align-self: center;
  line-height: 50px;
  font-size: 20px;
  &:hover {
    font-size: 50px;
  }
`;
export interface Props {}

const InPut: React.FC = () => {
  const {
    InputChoise,
    OutputChoise,
    InputCurrencyValue,
    OutputCurrencyValue,
    ImputValue,
    OutPutValue
  } = useSelector((state: {InputReducer: Expense}) => state.InputReducer);

  // const InputChoise = useSelector(state => state.InputReducer.InputChoise);
  // const OutputChoise = useSelector(state => state.InputReducer.OutputChoise);
  // const InputCurrencyValue = useSelector(state => state.InputReducer.InputCurrencyValue);
  // const OutputCurrencyValue = useSelector(state => state.InputReducer.OutputCurrencyValue);
  // const ImputValue = useSelector(state => state.InputReducer.InputValue);
  // const OutPutValue = useSelector(state => state.InputReducer.OutPutValue);

  const dispatch = useDispatch();

  useEffect(() => {
    getValue();
  }, [InputChoise, OutputChoise]);

  const getValue = async () => {
    const res = await axios.get(
      `https://api.exchangeratesapi.io/latest?base=${InputChoise}`
    );
    dispatch(
      setInputCurrencyValue(eval(`res.data.rates.${OutputChoise}.toFixed(4)`))
    );

    dispatch(
      setOutputCurrencyValue(
        (1 / eval(`res.data.rates.${OutputChoise}`)).toFixed(4)
      )
    );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case "InputChoise":
        e.target.value === OutputChoise &&
          dispatch(setOutputChoise(InputChoise));
        dispatch(setInputChoise(e.target.value));
        // dispatch(setOutPutValue(ImputValue * OutputCurrencyValue));
        break;
      case "OutputChoise":
        e.target.value === InputChoise &&
          dispatch(setInputChoise(OutputChoise));
        dispatch(setOutputChoise(e.target.value));
        // dispatch(setOutPutValue(ImputValue * OutputCurrencyValue));
        break;
      default:
    }
  };
  // e => dispatch(setInputChoise(e))
  const handleSwitch = () => {
    dispatch(setInputChoise(OutputChoise));
    dispatch(setOutputChoise(InputChoise));
    dispatch(setInputCurrencyValue(OutputCurrencyValue));
    dispatch(setOutputCurrencyValue(InputCurrencyValue));
    dispatch(setImputValue(OutPutValue));
    dispatch(setOutPutValue(ImputValue));
  };

  const handleInputValue = (e: any) => {
    switch (e.target.name) {
      case "InputChoise":
        console.log(typeof e.target.value);

        // if (typeof e.target.value === "string") {
        //   return;
        // }
        dispatch(setImputValue(e.target.value));
        dispatch(
          setOutPutValue(
            Number((e.target.value * Number(InputCurrencyValue)).toFixed(2))
          )
        );
        break;
      case "OutputChoise":
        dispatch(setOutPutValue(e.target.value));
        dispatch(
          setImputValue(
            Number((e.target.value * Number(OutputCurrencyValue)).toFixed(2))
          )
        );
        break;
      default:
    }
  };

  return (
    <Div>
      <SelectStyled
        value={InputChoise}
        onChange={handleChange}
        name="InputChoise"
        id=""
        style={{
          borderBottomLeftRadius: "10px",
          borderTopLeftRadius: "10px",
          borderRight: "none"
        }}
      >
        <option value="EUR">EUR</option>
        <option value="PLN">PLN</option>
        <option value="USD">USD</option>
      </SelectStyled>
      <InputStyled
        pattern="[0-9]*"
        onChange={handleInputValue}
        value={ImputValue}
        type="number"
        name="InputChoise"
        style={{
          borderBottomRightRadius: "10px",
          borderTopRightRadius: "10px"
        }}
      />
      <FaExchangeAltStyled onClick={handleSwitch} />
      <InputStyled
        onChange={handleInputValue}
        value={OutPutValue}
        type="text"
        name="OutputChoise"
        style={{
          borderBottomLeftRadius: "10px",
          borderTopLeftRadius: "10px",
          borderRight: "none"
        }}
      />
      <SelectStyled
        value={OutputChoise}
        onChange={handleChange}
        name="OutputChoise"
        id=""
        style={{
          borderBottomRightRadius: "10px",
          borderTopRightRadius: "10px"
        }}
      >
        <option value="EUR">EUR</option>
        <option value="PLN">PLN</option>
        <option value="USD">USD</option>
      </SelectStyled>
    </Div>
  );
};

export default InPut;
