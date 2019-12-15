import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import {revestNumber} from '../../../../tools'

import ic_copy from "../../../../images/popup/ic_copy.svg";

const Bound = styled.div`
  .mess-receive {
    position: relative;
    display: flex;
    .bubble {
      width: 328px;
      border-radius: 20px 20px 20px 5px;
      border: solid 0.3px #e7e7e7;
      background-color: #ffffff;
      display: grid;
      grid-template-columns: 55% 45%;
      grid-template-rows: 1fr 1px 1fr;
      background-color: #f2f2f2;
      .line {
        width: 100%;
        border-radius: 5px;
        border: solid 0.3px #e7e7e7;
        background-color: #ffffff;
        grid-column: 1 / span 2;
      }
      .phone-info,
      .discount-info,
      .seriNumber{
        padding: 15px 18px;
      }
      
      .payment-amount-info,
      .denominations-info,
      .cardNumber {
        padding: 15px 0;
      }
      .phone-info,
      .discount-info,
      .denominations-info,
      .payment-amount-info,
      .seriNumber,
      .cardNumber {
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
      .cardNumber{
        position: relative;
        .ic_copy{
          position: absolute;
          top: 10px;
          right: 13px;
          cursor: pointer;
        }
      }
      .amount {
        font-family: UTM-Avo;
        font-size: 15px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.46;
        letter-spacing: normal;
        color: #222222;
        margin: 5px 0 0 0;
        &.payment{
          color:#0075FF;
          font-family: Roboto;
          font-size: 17px;
          font-weight: 500;
        }
      }
    }
  }
`;

const CONFIRM = "confirm";
const SUCCESS = "success";

export default class BuyCardMessage extends Component {

  state = {
    step: CONFIRM
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.data.messInfo.key !== prevState.step && nextProps.data.messInfo.key === SUCCESS) {
      return{
        step: SUCCESS
      } 
    }
    return null;
  }
 
  

  render() {
    // const { avatar, data, isShowRead, margin } = this.props;
    const { data, margin } = this.props;
    console.log(this.state);
    console.log(this.props);
    
    return (
      <Bound>

      {
      this.state.step === CONFIRM ?
        <div className={"mess-receive"} style={{ margin: margin }}>
          <div className="bubble">
            <div className="phone-info">
              <p className="title">Nhà cung cấp</p>
              <p className="amount">{data.messInfo.provider}</p>
            </div>
            <div className="denominations-info">
              <p className="title">Mệnh giá</p>
              <p className="amount">{revestNumber(data.messInfo.denominations)}</p>
            </div>
            <div className="line"></div>
            <div className="discount-info">
              <p className="title">Chiết khấu</p>
              <p className="amount">{ data.messInfo.discount}</p>
            </div>
            <div className="payment-amount-info">
              <p className="title">Số tiền thanh toán</p>
              <p className="amount payment">{ revestNumber(data.messInfo.paymentAmount)} VND</p>
            </div>
          </div>
        </div>
        : this.state.step === SUCCESS &&
        <div className={"mess-receive"} style={{ margin: margin }}>
          <div className="bubble">
            <div className="phone-info">
              <p className="title">Nhà cung cấp</p>
              <p className="amount">{data.messInfo.provider}</p>
            </div>
            <div className="denominations-info">
              <p className="title">Mệnh giá</p>
              <p className="amount">{revestNumber(data.messInfo.denominations)}</p>
            </div>
            <div className="line"></div>
            <div className="seriNumber">
              <p className="title">Số se-ri </p>
              <p className="amount">{data.messInfo.seriNumber || "031548-161-315-818"}</p>
            </div>
            <div className="cardNumber">
              <figure className="ic_copy"><img src={ic_copy} alt="ic_copy"
                onClick={this._handleCopy}
              ></img></figure>
              <p className="title">Mã thẻ</p>
              <p className="amount payment" id="idCardNumber">{data.messInfo.cardNumber ||"7470-8461-8633"}</p>
            </div>
          </div>
        </div>
    }

      </Bound>
    );
  }

  _handleCopy = () => {
    let copyCardNumber = document.getElementById('idCardNumber').textContent;
    alert('copy done: ',copyCardNumber)
  }
}

BuyCardMessage.propTypes = {
    isShowRead: PropTypes.bool,
    data: PropTypes.shape({
      mess: PropTypes.string,
      messType: PropTypes.string,
      time: PropTypes.string,
      fromID: PropTypes.number,
      toID: PropTypes.number
    }).isRequired};
BuyCardMessage.defaultProps = {};
