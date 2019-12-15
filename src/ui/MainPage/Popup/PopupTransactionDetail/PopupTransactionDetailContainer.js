import React, { Component, Fragment } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { connect } from "react-redux";

//ic
import ic_close_popup from "../../../../images/ic_close-popup.svg";

const BoundBackDrop = styled.div`
  background-color: #0000001c;
  display: none;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  transition: 0.5s;
`;
const BoundPopupContent = styled.div`
  position: fixed;
  top: 0;
  right: -362px;
  z-index: 2;
  width: 362px;
  height: 100vh;
  box-shadow: 0 0 64px 0 rgba(0, 0, 0, 0.14);
  background-color: #ffffff;
  padding: 0 36px;
  transition: 0.5s;
  .bound-content {
    height: 90%;
    display: flex;
    align-items: center;
    .content {
      width: 100%;
      .action-name {
        background-image: ${props => props.gradient};
        font-family: Roboto;
        font-size: 22px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.41;
        letter-spacing: normal;
        -webkit-background-clip: text;
        background-clip: text;
        -webkit-text-fill-color: transparent;
      }
      .block-friend-account-info {
        display: flex;
        align-items: center;
        margin: 20px 0;
        img {
          width: 54px;
          height: 54px;
          border-radius: 50%;
          object-fit: cover;
          margin-right: 10px;
        }
        .account-info {
          .fullname {
            font-family: UTMAvo;
            font-size: 17px;
            font-weight: bold;
            font-style: normal;
            font-stretch: normal;
            line-height: 1.29;
            letter-spacing: normal;
            color: #000720;
          }
          .account-name {
            font-family: UTM-Avo;
            font-size: 11px;
            font-weight: normal;
            font-style: normal;
            font-stretch: normal;
            line-height: 1.64;
            letter-spacing: normal;
            color: #222222;
          }
        }
      }
      .block-amount {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 0.5px solid #d0d4da;
        height: 53px;

        .title {
          font-family: Roboto;
          font-size: 11px;
          font-weight: 500;
          font-style: normal;
          font-stretch: normal;
          line-height: 1.18;
          letter-spacing: 0.05px;
          color: #6d6d6d;
          text-transform: uppercase;
        }
        .amount {
          background-image: ${props => props.gradient};
          font-family: Roboto;
          font-size: 17px;
          font-weight: bold;
          font-style: normal;
          font-stretch: normal;
          line-height: 1.29;
          letter-spacing: normal;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      }
      .block-date {
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-bottom: 0.5px solid #d0d4da;
        height: 53px;

        .title {
          font-family: Roboto;
          font-size: 11px;
          font-weight: 500;
          font-style: normal;
          font-stretch: normal;
          line-height: 1.18;
          letter-spacing: 0.05px;
          color: #6d6d6d;
          text-transform: uppercase;
        }
        .date {
          font-family: UTM-Avo;
          font-size: 15px;
          font-weight: normal;
          font-style: normal;
          font-stretch: normal;
          line-height: 1.7;
          letter-spacing: 0.1px;
          color: #222222;
        }
      }
      .block-description {
        height: 106px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .title {
          font-family: Roboto;
          font-size: 11px;
          font-weight: 500;
          font-style: normal;
          font-stretch: normal;
          line-height: 1.18;
          letter-spacing: 0.05px;
          color: #6d6d6d;
          text-transform: uppercase;
        }
        .description {
          font-family: UTM-Avo;
          font-size: 15px;
          font-weight: normal;
          font-style: normal;
          font-stretch: normal;
          line-height: 1.7;
          letter-spacing: 0.1px;
          color: #222222;
        }
      }
      .block-transaction-no {
        display: flex;
        align-items: center;
        .title {
          font-family: Roboto;
          font-size: 11px;
          font-weight: 500;
          font-style: normal;
          font-stretch: normal;
          line-height: 1.18;
          letter-spacing: 0.05px;
          color: #6d6d6d;
          text-transform: uppercase;
          margin-right: 5px;
        }
        .transaction-no {
          font-family: Roboto;
          font-size: 11px;
          font-weight: 500;
          font-style: normal;
          font-stretch: normal;
          line-height: 1.18;
          letter-spacing: 1px;
          color: #222222;
        }
      }
    }
  }
  .close-popup {
    text-align: center;
    .icon-close {
      display: inline-block;
      padding: 5px;
      margin-bottom: 5px;
      border: 1px solid #bababa;
      border-radius: 50%;
      :hover {
        cursor: pointer;
      }
    }
    .text_close {
      font-family: Roboto;
      font-size: 13px;
      font-weight: normal;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.29;
      letter-spacing: normal;
      color: #bababa;
    }
  }
`;

class PopupTransactionDetailContainer extends Component {
  handleHiddenPopup() {
    document.getElementById("home-back-drop").classList.remove("show");
    document.getElementById("home-popup-content").style.right = "-362px";
  }

  render() {
    const { transactionInfo } = this.props;
    return (
      <Fragment>
        <BoundPopupContent
          className="popup-content"
          id="home-popup-content"
          gradient={transactionInfo.gradient}
        >
          <div className="bound-content">
            <div className="content">
              <p className="action-name">{transactionInfo.action}</p>
              <div className="block-friend-account-info">
                <img src={transactionInfo.avatar} alt="Avatar" />
                <div className="account-info">
                  <div className="fullname">{transactionInfo.fullname}</div>
                  <div className="account-name">{transactionInfo.account}</div>
                </div>
              </div>
              <div className="block-amount">
                <p className="title">Amount</p>
                <p className="amount">
                  {transactionInfo.sign + transactionInfo.amount}
                </p>
              </div>
              <div className="block-date">
                <p className="title">Date</p>
                <p className="date">
                  {transactionInfo.date + " , " + transactionInfo.time}
                </p>
              </div>
              <div className="block-description">
                <p className="title">Description</p>
                <p className="description">{transactionInfo.description}</p>
              </div>
              <div className="block-transaction-no">
                <p className="title">Transaction no #</p>
                <p className="transaction-no">
                  {transactionInfo.transactionNo}
                </p>
              </div>
            </div>
          </div>

          <div
            className="close-popup"
            onClick={this.handleHiddenPopup.bind(this)}
          >
            <img src={ic_close_popup} className="icon-close" alt="Cion Close" />
            <p className="text_close">Close</p>
          </div>
        </BoundPopupContent>
        <BoundBackDrop
          className="back-drop"
          id="home-back-drop"
        ></BoundBackDrop>
      </Fragment>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    transactionInfo: state.transactionHistoriesReducer.transactionInfo
  };
};

export default connect(
  mapStateToProps,
  null
)(PopupTransactionDetailContainer);

PopupTransactionDetailContainer.defaultProps = {
  transactionInfo: {
    avatar: "avatar",
    gradient: "linear-gradient(to top, #00a548, #bdd50a)",
    amount: "12345",
    action: "action",
    sign: "+",
    date: "1/1/1999",
    time: "12:34",
    transactionNo: "123456",
    description: "Toi ngheo qua ma",
    fullname: "Nux"
  }
};
PopupTransactionDetailContainer.propTypes = {
  transactionInfo: PropTypes.shape({
    avatar: PropTypes.string,
    gradient: PropTypes.string,
    amount: PropTypes.string,
    action: PropTypes.string,
    sign: PropTypes.string,
    date: PropTypes.string,
    time: PropTypes.string,
    transactionNo: PropTypes.string,
    description: PropTypes.string,
    fullname: PropTypes.string
  }).isRequired
};
