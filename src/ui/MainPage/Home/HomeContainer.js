import React, { Component } from "react";
import styled from "styled-components";
//component
import Features from "./Features/Features";
import TransactionHistories from "./TransactionHistories/TransactionHistories";
//POPUP
import PopupTransactionDetailContainer from "../Popup/PopupTransactionDetail/PopupTransactionDetailContainer";

const Bound = styled.div`
  display: flex;
  flex: 1;
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }
  .home-bound {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
  }
`;
export default class HomeContainer extends Component {

  render() {
    return (
      <Bound>
        <div className="home-bound">
          <Features />
          <TransactionHistories />
        </div>
        {/* POPUP*/}
        <PopupTransactionDetailContainer />
      </Bound>
    );
  }
}

