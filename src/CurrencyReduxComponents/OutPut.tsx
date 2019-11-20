import React from "react";
// @ts-ignore
import styled from "styled-components";
import {useSelector} from "react-redux";
import {Expense} from "../store/reduser1/Expense";

const Div = styled.div`
  display: flex;
`;

const OutputStyled = styled.div`
  width: 350px;
  height: 50px;
  border: 1px solid white;
  margin: 10px 50px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
`;

const OutPut: React.FC = () => {
  const InputChoise = useSelector(
    (state: {InputReducer: Expense}) => state.InputReducer.InputChoise
  );
  const OutputChoise = useSelector(
    (state: {InputReducer: Expense}) => state.InputReducer.OutputChoise
  );
  const InputCurrencyValue = useSelector(
    (state: {InputReducer: Expense}) => state.InputReducer.InputCurrencyValue
  );
  const OutputCurrencyValue = useSelector(
    (state: {InputReducer: Expense}) => state.InputReducer.OutputCurrencyValue
  );

  return (
    <Div>
      <OutputStyled>
        1 {InputChoise}= {InputCurrencyValue} {OutputChoise}
      </OutputStyled>
      <OutputStyled>
        1 {OutputChoise}= {OutputCurrencyValue} {InputChoise}
      </OutputStyled>
    </Div>
  );
};

export default OutPut;
