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
      width: 333px;
      border-radius: 20px 20px 20px 5px;
      border: solid 0.3px #e7e7e7;
      background-color: #ffffff;
      display: grid;
      grid-template-columns: 50% 50%;
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
      .provider,
      .customerCode,
      .customerName,
      .customerPhone,
      .periodBill,
      .payment {
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
        &.providerName {
            text-transform: uppercase;
        }
        &.period{
            white-space: nowrap; 
            overflow: hidden;
            text-overflow: ellipsis;
        }
      }
    }
  }
`;

export default class PayBillMessage extends Component {
  render() {
    const { data, margin } = this.props;
    return (
      <Bound>
        <div className={"mess-receive"} style={{ margin: margin }}>
          <div className="bubble">
            <figure className="editBlock"><img src={ic_editNote} alt="edit"></img></figure>
            <div className="provider">
              <p className="title">Nhà cung cấp</p>
              <p className="amount providerName">{data.messInfo.provider || "EVN Ho Chi Minh"}</p>
            </div>
            <div className="customerCode">
              <p className="title">Mã khách hàng</p>
              <p className="amount">
                  {data.messInfo.customerCode || "PE02315611898121"}
                {/* {revestNumber(data.messInfo.denominations)} */}
              </p>
            </div>
            <div className="line"></div>
            <div className="customerName">
              <p className="title">Tên khách hàng</p>
              <p className="amount">{data.messInfo.customerName || "Thôi Mỹ Phương"}</p>
            </div>
            <div className="customerPhone">
              <p className="title">Số điện thoại</p>
              <p className="amount">
                {data.messInfo.customerPhone || "0366618162"}
              </p>
            </div>
            <div className="line"></div>
            <div className="periodBill">
              <p className="title">Kỳ</p>
              <p className="amount period">
                {data.messInfo.periodBill || "02,03,04,06,12/2019"}
              </p>
            </div>
            <div className="payment">
              <p className="title">Số tiền</p>
              <p className="amount money">
                {revestNumber(data.messInfo.payment || "6.200.944")} VND
              </p>
            </div>
          </div>
        </div>
      </Bound>
    );
  }
}
