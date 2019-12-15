import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import {revestNumber} from '../../../../tools'
const Bound = styled.div`
  .mess-receive {
    position: relative;
    display: flex;
    .bubble {
      width: 328px;
      height: 140px;
      border-radius: 20px 20px 20px 5px;
      border: solid 0.3px #e7e7e7;
      background-color: #ffffff;
      display: grid;
      grid-template-columns: 1fr 1fr;
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
      .denominations-info,
      .payment-amount-info {
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
        font-family: UTM-Avo;
        font-size: 15px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.46;
        letter-spacing: normal;
        color: #222222;
      }
    }
    .payment-amount-info {
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
    }
  }
`;
export default class TopupMessage extends Component {
    
  render() {
    const { data, margin } = this.props;
    // const { avatar, data, isShowRead, margin } = this.props;

    return (
      <Bound>
        <div className={"mess-receive"}style={{ margin: margin }}>
          <div className="bubble">
            <div className="phone-info">
              <p className="title">Số điện thoại</p>
              <p className="amount">{data.messInfo.phone}</p>
            </div>
            <div className="denominations-info">
              <p className="title">Mệnh giá</p>
              <p className="amount">{revestNumber(data.messInfo.denominations)} VND</p>
            </div>
            <div className="line"></div>
            <div className="discount-info">
              <p className="title">Chiết khấu</p>
              <p className="amount">{ data.messInfo.discount}</p>
            </div>
            <div className="payment-amount-info">
              <p className="title">Số tiền thanh toán</p>
              <p className="amount">{ revestNumber(data.messInfo.paymentAmount)} VND</p>
            </div>
          </div>
        </div>
      </Bound>
    );
  }
}

TopupMessage.propTypes = {
  isShowRead: PropTypes.bool,
  data: PropTypes.shape({
    mess: PropTypes.string,
    messType: PropTypes.string,
    time: PropTypes.string,
    fromID: PropTypes.number,
    toID: PropTypes.number
  }).isRequired
};
TopupMessage.defaultProps = {};
