import React, { Component } from "react";
import styled from "styled-components";
//data-text option
import { textOptions } from "../../../../data/mockData";
//component
import SelectControll from "../../../Control/SelectControl/SelectControl";
import DatePicker from "../../../Control/DatePicker/DatePicker";

//icon
import ic_search from "../../../../images/ic_search.svg";
const Bound = styled.div`
  width: 100%;
  height:150px;
  padding: 30px 25px 0 30px;
  box-sizing: border-box;
  .block-title-search {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 17px;
    .title-header {
      font-family: 'Roboto';
      font-size: 28px;
      font-weight: 500;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.6;
      letter-spacing: normal;
      color: #222222;
    }
    .block-search {
      display: flex;
      justify-content: space-between;
      align-items: center;
      input[type=search] {
        border: none;
        outline: none;
        width: 261px;
        height: 38px;
        opacity: 0.5;
        font-family: UTM-Avo;
        font-size: 14px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.6;
        letter-spacing: 0.1px;
        color: #252734;
      }
      .ic_search {
        :hover {
          cursor: pointer;
        }
      }
    }
  }
  .block-filter {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    .title-name {
      font-family: 'UTM-Avo';
      font-size: 14px;
      font-weight: normal;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.6;
      letter-spacing: 0.1px;
      color: #000000;
    }
  }
`;
export default class SearchFilter extends Component {
  render() {
    return (
      <Bound>
        <div className="block-title-search">
          <h1 className="title-header">Lịch sử giao dịch</h1>
          <div className="block-search">
            <input type="search" placeholder="Người Nhận,trạng thái..." />
            <img className="ic_search" src={ic_search} alt='Icon Search' />
          </div>
        </div>
        <div className="block-filter">
          <h4 className="title-name">Lọc giao dịch</h4>
          <DatePicker />
          <SelectControll
            placeholder="Tất cả các giao dịch"
            textOptions={textOptions}
          />
        </div>
      </Bound>
    );
  }
}
