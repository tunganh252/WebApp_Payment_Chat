import React, { Component } from "react";
import styled from "styled-components";
import {connect} from 'react-redux';


import { revestNumber } from "../../../../../tools";
//image
import bg_user from "../../../../../images/popup/bg_user.svg";
import ic_topup_done from "../../../../../images/popup/ic_topup_done.svg";
import { sendMessAcceptSuccess } from "../../../../../actions/popupAction";

const flipAvatarDuration = 1000;
// const visibleDuration = 500;

const Bound = styled.div`
 display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  font-family: UTM-Avo;
  font-size: 15px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: 0.1px;
  color: #252734;
  text-align: center;
  padding-top: 60px;
  position: relative;
  overflow: hidden;
  .success-title {
    font-family: Roboto;
    font-size: 24px;
    font-weight: bold;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.41;
    letter-spacing: normal;
    color: #000;
    margin-top: 40px;
  }
  .success-avatar {
    margin-top:90px;
    width: 200px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 8px;
    background-image: url(${bg_user});
    background-position: center;
    background-size: 200px 200px;
    background-repeat: no-repeat;
    perspective: 1000px;
    z-index: 2;
    .success-checked {
      position: relative;
      transition: transform ${flipAvatarDuration}ms;
      transform-style: preserve-3d;
      width: 122px;
      height: 122px;
      border-radius: 50%;
    }
  }
  .success-content {
    .success-content-info {
      width: 414px;
      font-family: UTM-Avo;
      font-size: 16px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 1.7;
      letter-spacing: 0.1px;
      color: #222222;
      text-align: center;
      span {
        font-family: UTMAvo;
        font-size: 16px;
        font-weight: bold;
        line-height: 1.71;
        margin-left: 5px;
        display: inline-block;
      }
    }
  }
  .finish-button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 154px;
    height: 40px;
    border-radius: 30px;
    box-shadow: 0 4px 8px 0 rgba(255, 255, 255, 0.25);
    color: #000;
    margin-top: 40px;
    cursor: pointer;
    background-image: linear-gradient(to top, #00cfff, #0065ff, #005bec);
    p {
      font-family: Roboto;
      font-size: 12px;
      font-weight: bold;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.83;
      letter-spacing: 0.5px;
      color: #fff;
    }
  }
`;

class FormSuccessTopupTransaction extends Component {
  renderSuccessTransactionInfo(transaction) {

    const dataTransaction = this.props.popupReducer.transaction;
    const userSelected = this.props.userSelected;
      
    switch (transaction.type) {
      case "paybill": {
        const type = "paybill";
        this.props.sendMessAcceptSuccess(type,dataTransaction, userSelected)
        return (
          <div className="success-content">
            <div className="success-content-info">
              Bạn đã thanh toán hóa đơn thành công
            </div>
            <div className="success-content-info">
              Mã khách hàng
              <span className="customer-code">{transaction.customerCode}</span>
            </div>
            <div className="success-content-info">
              Số tiền <span className="customer-code">500.000 VND</span>
            </div>
          </div>
        );
      }
      case "buycard": {
        const type = "buycard";
        this.props.sendMessAcceptSuccess(type,dataTransaction, userSelected)
        return (
          <div className="success-content">
            <div className="success-content-info">
              Bạn đã mua mã thẻ thành công
            </div>
            <div className="success-content-info">
              Số tiền
              <span className="customer-code">
                {revestNumber(transaction.denominations)} VND
              </span>
            </div>
          </div>
        );
      }
      case "topup": {
        const type = "topup";
        this.props.sendMessAcceptSuccess(type,dataTransaction, userSelected);
        return (
          <div className="success-content">
            <div className="success-content-info">
              Bạn đã gửi thành công topup
            </div>
            <div className="success-content-info">
              tới
              <span className="customer-code">{transaction.user.name}</span>
            </div>
          </div>
        );
      }
      case "transfer": {
        const type = "transfer";
        this.props.sendMessAcceptSuccess(type,dataTransaction, userSelected);
        return (
          <div className="success-content">
            <div className="success-content-info">
              Bạn đã chuyển cho
              <span className="customer-code">{transaction.user} &nbsp;</span>
              số tiền
              <span className="customer-code">
                {revestNumber(transaction.currency)} VND
              </span>
            </div>
          </div>
        );
      }
      default:
        break;
    }
  }
  render() {
    let { transaction } = this.props;

    return (
      <Bound id="topup-bound">
        <div className="success-avatar">
          <img
            id="success-checked"
            className="success-checked"
            src={ic_topup_done}
            alt="cheked"
          />
        </div>
        <p className="success-title">Thành Công</p>

        {this.renderSuccessTransactionInfo(transaction)}
        <div
          className="finish-button"
          onClick={() => this.props.hidePopupTransaction()}
        >
          <p>XONG</p>
        </div>
      </Bound>
    );
  }
}
const mapStateToProps = state => ({
  popupReducer: state.popupReducer,
  userSelected: state.chatReducer.userSelected,
});

const mapDispatchToProps = dispatch => ({
  sendMessAcceptSuccess: (type,dataTransaction, weeziAssistant) => dispatch(sendMessAcceptSuccess(type,dataTransaction, weeziAssistant)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  { forwardRef: true }
)(FormSuccessTopupTransaction);