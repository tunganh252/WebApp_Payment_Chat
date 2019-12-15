import React, { Component } from "react";
import styled from "styled-components";
//redux
import { connect } from "react-redux";
//action
import {
  getAllTransactionHistories,
  changeTransactionInfo
} from "../../../../actions/transactionHistoriesAction";
//ic
import ic_history_red from "../../../../images/popup/ic_history_red.svg";
//component

//Styled
const Bound = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  grid-column: 2 / span 1;
  border-radius: 10px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.07);
  background-color: #ffffff;
  text-align: center;
  padding: 30px 0;
  box-sizing: border-box;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 20px;
    height: 0;
  }
  &::-webkit-scrollbar-thumb {
    background: #d9dde3;
    background-clip: padding-box;
    border-radius: 20px;
    border: 7px solid white;
  }
`;
//================================
const Item = styled.div`
  .date {
    font-family: Roboto;
    font-size: 12px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.6;
    letter-spacing: 0.1px;
    color: #6d6d6d;
    margin: 15px 0;
  }
  .vertical-line {
    width: 2px;
    height: 45px;
    background-color: gray;
    margin: 0 auto;
  }

  .transaction {
    position: relative;
    display: inline-block;
    .block-transaction {
      :hover {
        cursor: pointer;
      }
      position: absolute;
      bottom: 0;
      width: 125px;
      height: 40px;
      border-radius: 10px;
      display: flex;
      align-items: center;
      justify-content: space-around;
      span {
        font-family: Roboto;
        font-size: 16px;
        font-weight: bold;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.19;
        letter-spacing: normal;
        color: #ffffff;
      }
      img {
      }
    }
    .buycard {
      background-image: linear-gradient(to top, #f7bb25, #ff2424);
    }
    .topup {
      background-image: linear-gradient(to top, #9000ff, #482ef6 99%, #482ef6);
    }
    .billing {
      background-image: linear-gradient(to top, #00cfff, #0065ff, #005bec);
    }
    .transfer {
      background-image: linear-gradient(to top, #00a548, #bdd50a);
    }
    .minus {
      left: 40px;
      span {
        order: 1;
      }
      img {
        order: 2;
      }
    }
    .plus {
      right: 40px;
      span {
        order: 2;
      }
      img {
        order: 1;
      }
    }
  }
`;
class TransactionHistories extends Component {
  handleShowPopup(newTransaction) {
    //add gradien into newtransaction
    switch (newTransaction.type) {
      case "buycard":
        newTransaction.gradient = "linear-gradient(to top, #f7bb25, #ff2424)";
        break;
      case "topup":
        newTransaction.gradient =
          "linear-gradient(to top, #9000ff, #482ef6 99%, #482ef6)";
        break;

      case "billing":
        newTransaction.gradient =
          "linear-gradient(to top, #00cfff, #0065ff, #005bec)";
        break;

      case "transfer":
        newTransaction.gradient = "linear-gradient(to top, #00a548, #bdd50a)";
        break;
      default:
        break;
    }
    //chang transaction in popup
    this.props.changeTransactionInfo(newTransaction);

    //show popup
    document.getElementById("home-back-drop").classList.add("show");
    document.getElementById("home-popup-content").style.right = "0";
  }
  render() {
    return (
      <Bound>
        {this.props.transactionHistories.map((data, i) => {
          return (
            <Item key={i}>
              <div className="date">{data.date}</div>
              <div className="vertical-line"></div>
              <img
                className="ic_history_red"
                src={ic_history_red}
                alt="Icon Start Day"
              />
              {data.transaction.map((dt, j) => {
                return (
                  <div key={(i + 1) * (j + 1)}>
                    <div className="vertical-line"></div>
                    <div className="transaction">
                      <img
                        className="ic_history"
                        src={dt.icon_history}
                        alt=""
                      />
                      <div
                        className={
                          "block-transaction " +
                          `${dt.type}` +
                          `${dt.sign === "-" ? " minus" : " plus"}`
                        }
                        //i,j is positon date and time of block histories in timeline
                        onClick={this.handleShowPopup.bind(this, {
                          ...dt,
                          date: data.date
                        })}
                      >
                        <img src={dt.icon} alt="" />
                        <span>
                          {dt.sign} {dt.amount}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Item>
          );
        })}
      </Bound>
    );
  }
  componentDidMount() {
    this.props.getAllTransactionHistories();
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getAllTransactionHistories: () => {
      dispatch(getAllTransactionHistories());
    },
    changeTransactionInfo: newInfo => {
      dispatch(changeTransactionInfo(newInfo));
    }
  };
};
const mapStateToProps = (state, ownProps) => {
  return {
    transactionHistories: state.transactionHistoriesReducer.transactionHistories
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TransactionHistories);
