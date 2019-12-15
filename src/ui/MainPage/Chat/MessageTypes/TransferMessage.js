import React, { Component } from "react";
import styled from "styled-components";

//// image
import ic_editNote from "../../../../images/popup/ic_editNote.svg";
import { revestNumber } from "../../../../tools";

const Bound = styled.div`
  .mess-receive {
    display: flex;
    .bubble {
    position: relative;
      width: 328px;
      /* height: 140px; */
      border-radius: 20px 20px 20px 5px;
      border: solid 0.3px #e7e7e7;
      background-color: #ffffff;
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 1fr 1px 1fr;
      background-color: #f2f2f2;
        .editBlock {
            position: absolute;
            right: 15px;
            top: 12px;
            cursor: pointer;
        }
      .line {
        width: 100%;
        border-radius: 5px;
        border: solid 0.3px #e7e7e7;
        background-color: #ffffff;
        grid-column: 1 / span 2;
      }
      .user-info,
      .numberUser,
      .bank-info,
      .payment-amount-info,
      .transfee,
      .description {
        padding: 15px 18px;
        .title {
          font-family: Roboto;
          font-size: 11px;
          font-weight: 500;
          font-stretch: normal;
          font-style: normal;
          line-height: 1.18;
          letter-spacing: 0.05px;
          color: #737985;
          text-transform: uppercase;
        }
      }
      .amount {
        margin: 5px 0 0 0;
        font-family: UTM-Avo;
        font-size: 15px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.46;
        letter-spacing: normal;
        color: #222222;
        &.money{
            color: #0075FF;
            font-family: Roboto;
        }
        &.userName {
            text-transform: uppercase;
        }
      }
    }
    /* .payment-amount-info {
      .amount {
        font-family: Roboto;
        font-size: 17px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.41;
        letter-spacing: normal;
        color: #0075ff;
      }
    } */
  }
`;

export default class TransferMessage extends Component {
  render() {
    const { data, margin } = this.props;
    return (
      <Bound>
        <div className={"mess-receive"} style={{ margin: margin }}>
          <div className="bubble">
            <figure className="editBlock"><img src={ic_editNote} alt="edit"></img></figure>
            <div className="user-info">
              <p className="title">Chuyển cho</p>
              {/* <p className="amount">{data.messInfo.user.name || "PHẠM KIỀU OANH"}</p> */}
              <p className="amount">{ "PHẠM KIỀU OANH"}</p>
            </div>
            <div className="numberUser">
              <p className="title">Số tài khoản</p>
              <p className="amount">
                  {data.messInfo.numberFindUser}
                {/* {revestNumber(data.messInfo.denominations)} */}
              </p>
            </div>
            <div className="line"></div>
            <div className="bank-info">
              <p className="title">Tên ngân hàng</p>
              <p className="amount">{data.messInfo.bank.name}</p>
            </div>
            <div className="line"></div>
            <div className="payment-amount-info">
              <p className="title">Số tiền</p>
              <p className="amount money">
                {revestNumber(data.messInfo.currency)} VND
              </p>
            </div>
            <div className="transfee">
              <p className="title">Phí giao dịch</p>
              <p className="amount">
                {revestNumber(data.messInfo.transFee || "0")} VND
              </p>
            </div>
            <div className="line"></div>
            <div className="description">
              <p className="title">Nội dung</p>
              <p className="amount">
                {data.messInfo.description}
              </p>
            </div>
          </div>
        </div>
      </Bound>
    );
  }
}
