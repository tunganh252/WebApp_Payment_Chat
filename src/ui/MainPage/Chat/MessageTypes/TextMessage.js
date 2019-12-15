import React, { Component } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { userLogin } from "../../../../data/mockData";

import success_done from "../../../../images//popup/success_done.svg";


const Bound = styled.div`
  .mess-send,
  .mess-receive {
    display: flex;
    flex-direction: row;
    align-items: baseline;
    .bubble {
      display: flex;
      padding: 10px 18px;
      border-radius: 20px;
      border-radius: 20px;
      p {
        font-size: 14px;
        line-height: 1.6;
        letter-spacing: 0.1px;
      }
    }
    p {
      font-family: UTM-Avo;
      font-size: 10px;
      line-height: 1.71;
      letter-spacing: normal;
      color: #c9cdd6;
    }
    .ava-read {
      display: flex;
      width: 16px;
      height: 16px;
      border-radius: 50%;
      object-fit: cover;
      position: absolute;
      right: calc(-16px - 5px);
      bottom: 0;
    }
  }
  .mess-send {
    flex-direction: row-reverse;
    position: relative;
    max-width: 100%;
    .bubble {
      max-width: 90%;
      background-color: #0075ff;
      border-bottom-right-radius: 5px;
      margin-left: 10px;
      p {
        width: 100%;
        color: #fff;
        word-wrap: break-word;
      }
    }
  }
  .mess-receive {
    max-width: 100%;
    .bubble {
      background-color: #f2f2f2;
      border: solid 0.3px #e7e7e7;
      border-bottom-left-radius: 5px;
      margin-right: 10px;
      max-width: 90%;
      p {
        width: 100%;
        color: #252734;
        word-wrap: break-word;
      }
    }
  }

  .emoji_kiss{
    margin: 0 0 0 5px;
  }
  .ic_done{
    margin: 0 5px 0 0;
  }
`;

const ic_kiss = "😘";

export default class TextMessage extends Component {
  render() {
    const { avatar, data, isShowRead, margin } = this.props;
// console.log(data);

    return (
      <Bound>
        <div
          className={
            data.fromID === userLogin.id ? "mess-send" : "mess-receive"
          }
          style={{ margin: margin }}
        >
          <div className="bubble">
          {
              data.messInfo.icon === "done" &&
                <img className="ic_done" src={success_done} alt="done"/>
            }
            <p>{data.messInfo.text}</p>
            {
              data.messInfo.icon === "kiss" &&
              <span className="emoji_kiss" role="img" aria-label="kiss">{ic_kiss}</span>
            }
          </div>
          <p>{data.time}</p>
          {isShowRead === true && (
            <img src={avatar} className="ava-read" alt="read" />
          )}
        </div>
      </Bound>
    );
  }
}

TextMessage.propTypes = {
  isShowRead: PropTypes.bool,
  data: PropTypes.shape({
      mess:PropTypes.string,
      messType:PropTypes.string,
      time:PropTypes.string,
      fromID:PropTypes.number,
      toID:PropTypes.number

    }).isRequired,
  margin: PropTypes.string,
  avatar: PropTypes.string.isRequired
};
TextMessage.defaultProps = {
  isShowRead: false
};
