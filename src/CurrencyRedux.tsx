import React from "react";
// @ts-ignore
import styled from "styled-components";

import allReducers from "./Reducers/index";
import InPut from "./CurrencyReduxComponents/InPut";
import OutPut from "./CurrencyReduxComponents/OutPut";

const Conteiner = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const CurrencyRedux: React.FC = () => {
  return (
    <Conteiner>
      <InPut />
      <OutPut />
    </Conteiner>
  );
};

export default CurrencyRedux;
