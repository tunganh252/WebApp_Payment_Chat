import React, { Component } from "react";
import styled from "styled-components";

//images
import ic_done_white from "../../../../../images/popup/ic_done_white.svg";

//component
import MemberSlitControl from "../../../../Control/MemberSlitControl";

const Bound = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  border-radius: 10px;
  background-image: linear-gradient(to top, #00a548, #bdd50a);
  padding: 30px 80px;
  align-items: center;
  top: 0;
  left: 0;
  z-index: 2;
  p {
    font-family: Roboto;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    letter-spacing: normal;
    color: #ffffff;
  }
  .img-success {
    display: flex;
    width: 120px;
    height: 120px;
    margin-top: 40px;
  }
  .split-success-title {
    font-size: 28px;
    font-weight: 500;
    line-height: 1.6;
    margin-top: 23px;
  }
  .members-container {
    display: flex;
    flex: 1;
    width: 100%;
    overflow: auto;
    .members-scroll {
      display: flex;
      flex: 1;
      height: fit-content;
      flex-direction: column;
    }
  }
  .split-confirm-footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 90px;
    width: 100%;
    p {
      font-family: UTM-Avo;
      font-size: 14px;
      line-height: 1.6;
      letter-spacing: 0.1px;
    }
    .finish-button {
      width: 125px;
      height: 40px;
      border-radius: 55px;
      box-shadow: 0 4px 8px 0 rgba(255, 255, 255, 0.25);
      background-color: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      p {
        font-family: Roboto;
        background-image: linear-gradient(to top, #00a548, #bdd50a);
        font-size: 12px;
        font-weight: bold;
        line-height: 1.83;
        letter-spacing: 0.5px;
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
  }
`;

export default class FormSuccessSplitTransaction extends Component {
  state = {};
  renderMember() {
    let { transaction } = this.props;
    // console.log(transaction);
    if (transaction && transaction.users) {
      return transaction.users.map((data, i) => {
        if (data) {
          if (!data.isOwner) {
            return (
              <MemberSlitControl
                key={i}
                user={data}
                isDisable={true}
                onChange={() => {}}
              />
            );
          }
        }

        return true;
      });
    }
  }
  render() {
    return (
      <Bound>
        <img className="img-success" src={ic_done_white} alt="success" />
        <p className="split-success-title">Đã gửi yêu cầu chia tiền</p>
        <div className="members-container">
          <div className="members-scroll">{this.renderMember()}</div>
        </div>
        <div className="split-confirm-footer">
          <p>Yêu cầu của bạn sẽ có hiệu lực trong 30 ngày</p>
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
