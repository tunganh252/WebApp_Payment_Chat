import React, { Component } from "react";
import styled from "styled-components";

//image
import ic_request_done from "../../../../../images/popup/ic_request_done.svg";
import bg_user from "../../../../../images/popup/bg_user.svg";
import { revestNumber } from "../../../../../tools";
const flipAvatarDuration = 1000;

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
  #success-transaction-done {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    margin-top: 30px;
    .title-done {
      font-family: Roboto;
      font-size: 24px;
      font-weight: bold;
      line-height: 1.71;
      letter-spacing: normal;
      color: #222222;
    }
    .success-user {
        width:454px;
        text-align:center;
      font-size: 16px;
      color: #222222;
      .success-user-name,.success-currency {
        font-weight: bold;
        line-height: 1.5;
      }
    }
    .finish-button {
      width: 150px;
      height: 40px;
      border-radius: 30px;
      box-shadow: 0 4px 8px 0 rgba(255, 255, 255, 0.25);
      margin-top: 25px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-image: linear-gradient(30.72deg, #f7bb25 0%, #ff2424 100%);
      cursor: pointer;
      p {
        font-family: Roboto;
        font-size: 12px;
        font-weight: bold;
        line-height: 1.83;
        letter-spacing: 0.5px;
        color: #ffffff;
      }
    }
  }
`;

export default class FormSuccessRequestTransaction extends Component {
  componentDidMount() {
    let bound = document.getElementById("request-bound");
    if (bound) {
      bound.style.opacity = 1;
    }
  }
  render() {
    let { transaction } = this.props;
    return (
      <Bound id="request-bound">
        <div className="success-avatar">
          <img
            id="success-checked"
            className="success-checked"
            src={ic_request_done}
            alt="cheked"
          />
        </div>
        <div id="success-transaction-done">
          <p className="title-done">Nhắc Nợ </p>
          <div className="success-user">
            Bạn đã gửi thành công yêu cầu gửi tiền{" "}
            <span className='success-currency'>{revestNumber(transaction.currency)} VND </span>
            tới <span className="success-user-name">{transaction.user.name}</span>
          </div>

          <div
            className="finish-button"
            onClick={() => this.props.hidePopupTransaction()}
          >
            <p>XONG</p>
          </div>
        </div>
      </Bound>
    );
  }
}
