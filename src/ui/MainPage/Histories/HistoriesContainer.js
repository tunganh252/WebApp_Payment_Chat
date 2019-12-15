import React, { Component } from "react";
import styled from "styled-components";
// import EmojiPicker from "../../Control/EmojiPicker/EmojiPickerContainer";
//component
import SearchFilter from "./SearchFilter/SearchFilter";
import TableHistoriesTransaction from "./TableHistoriesTransaction/TableHistoriesTransaction";
import PopupTransactionDetailContainer from "../Popup/PopupTransactionDetail/PopupTransactionDetailContainer";
//Picker Emoji

const Bound = styled.div`
  flex: 1;
  grid-column: 2 / span 1;
  background-color: white;
  border-radius: 20px;
  height: 100%;
  overflow: hidden;
`;

export default class HistoriesContainer extends Component {
  render() {
    return (
      <Bound>
        <SearchFilter />
        <TableHistoriesTransaction />
        {/*Popup*/}
        <PopupTransactionDetailContainer />
      </Bound>
    );
  }
}
