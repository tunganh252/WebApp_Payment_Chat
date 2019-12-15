import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import ic_copy_card from "../../../../images/ic_copy_card.svg";
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
      .provider-info,
      .seri-info,
      .denominations-info,
      .code-card-info {
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
          margin-bottom: 5px;
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
    .code-card-info {
      position: relative;
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
      .ic-copy-card {
        position: absolute;
        top: 15px;
        right: 15px;
        :hover {
          cursor: pointer;
        }
      }
    }
  }
  /* .mess-send {
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
  } */
`;
export default class TopupMessage extends Component {


  handleCopy() {}


  render() {
    // const { avatar, data, isShowRead, margin } = this.props;
    const { margin } = this.props;

    return (
      <Bound>
        <div className={"mess-receive"}style={{ margin: margin }}>
          <div className="bubble">
            <div className="provider-info">
              <p className="title">Nhà cung cấp </p>
              <p className="amount">0981864753</p>
            </div>
            <div className="denominations-info">
              <p className="title">Mệnh giá</p>
              <p className="amount">0981864753</p>
            </div>
            <div className="line"></div>
            <div className="seri-info">
              <p className="title">Số Se-ri</p>
              <p className="amount">0981864753</p>
            </div>
            <div className="code-card-info">
              <p className="title">Mã thẻ</p>
              <img
                className="ic-copy-card"
                src={ic_copy_card}
                alt=""
                onClick={this.handleCopy.bind(this)}
              />
              <p className="amount">0981864753</p>
            </div>
          </div>
        </div>
      </Bound>
    );
  }
}

TopupMessage.propTypes = {
  data: PropTypes.shape
};
TopupMessage.defaultProps = {};
