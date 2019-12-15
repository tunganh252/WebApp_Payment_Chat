import React, { Component } from "react";
import styled from "styled-components";
import moment from "moment";

//image
import ic_social_payment from "../../../../images/ic_social_payment.svg";
import ic_select_sticker from "../../../../images/ic_select_sticker.svg";
import ic_send from "../../../../images/ic_send.svg";

//data
import { userLogin } from "../../../../data/mockData";

const Bound = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 80px;
  box-shadow: inset 1px 1px 0 0 rgba(0, 0, 0, 0.07);
  padding: 0 20px;
  img {
    cursor: pointer;
  }
  .social-payment-btn {
    width: 13.6px;
    height: 13.6px;
    margin: 0 5px;
  }
  .emoji-btn {
    width: 19px;
    height: 16px;
    margin: 0 10px;
  }
  .send-btn {
    width: 45px;
    height: 45px;
  }
  input {
    display: flex;
    flex: 1;
    border: none;
    outline: none;
    padding: 0 10px;
    font-family: UTM-Avo;
    font-size: 14px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.64;
    letter-spacing: 0.1px;
    color: #000000;
    ::placeholder {
      color: rgba(0, 0, 0, 0.25);
    }
  }
`;

export default class ChatControl extends Component {
  onInputTextKeyUp(e) {
    if (e.keyCode === 13) {
      this.onSendMess();
    }
  }
  onSendMess() {
    let { uID } = this.props;
    let inputText = document.getElementById("input-chat-id");
    if (!inputText) {
      return;
    }
    let textValue = inputText.value.trim();
    if (textValue && textValue.length > 0) {
      let mess = {
        messType: "text",
        time: moment().format("HH:mm"),
        messInfo: {
            text: textValue,
            ico: ""
        },
        fromID: userLogin.id,
        toID: uID,
        isRead: true
      };
      this.props.onSendMess(mess);
    }
    inputText.value = "";
  }
  render() {
    return (
      <Bound>
        <img
          src={ic_social_payment}
          className="social-payment-btn"
          alt="social payment"
          onClick={() => {}}
        />
        <img
          src={ic_select_sticker}
          className="emoji-btn"
          alt="emoji"
          onClick={() => {}}
        />
        <input
          type="text"
          placeholder="Nhắn gì đó"
          id="input-chat-id"
          onKeyUp={this.onInputTextKeyUp.bind(this)}
        />
        <img
          src={ic_send}
          className="send-btn"
          alt="send"
          onClick={() => this.onSendMess()}
        />
      </Bound>
    );
  }
}
