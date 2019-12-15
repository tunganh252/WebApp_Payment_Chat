import React, { Component } from "react";
import styled from "styled-components";
// import PropTypes from "prop-types";
import classNames from "classnames";
import { connect } from "react-redux";
//action
import {
  getAllTransactionHistories,
  changeTransactionInfo
} from "../../../../actions/transactionHistoriesAction";

//ic
import ic_pos_cancel from "../../../../images/ic_pos_cancel.svg";

const Bound = styled.div`
  height: calc(100% - 150px);
  .table-head {
    height: 40px;
    display: grid;
    grid-template-columns: 17% 19% 24% 12% 23% 5%;
    margin: 0 20px;
    .table-head-item {
      line-height: 40px;
      font-family: Roboto;
      font-size: 10px;
      font-weight: normal;
      font-style: normal;
      font-stretch: normal;
      letter-spacing: normal;
      color: #484a5d;
      :first-child {
        padding-left: 10px;
      }
      :nth-child(4) {
        text-align: center;
      }
    }
  }
  .year {
    height: 40px;
    border-radius: 3px;
    box-shadow: inset 0 -0.5px 0 0 #e2e2e2;
    background-color: #ffffff;
    font-family: UTM-Avo;
    font-size: 14px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    letter-spacing: 0.1px;
    color: #01a8ff;
    padding-left: 35px;
    line-height: 40px;
  }

  .bound-table-body {
    height: calc(100% - 80px);
    overflow: overlay;
    &::-webkit-scrollbar {
      width: 12px;
      height: 0;
    }
    &::-webkit-scrollbar-thumb {
      background: #d9dde3;
      background-clip: padding-box;
      border-radius: 20px;
      border: 5px solid white;
    }
    .table-body {
      display: grid;
      height: 60px;
      margin: 0 20px;
      grid-template-columns: 17% 19% 24% 12% 23% 5%;
      :nth-child(2n) {
        border-radius: 3px;
        background-color: #f5f7f9;
      }
      :last-child {
        margin-bottom: 20px;
      }
      .table-body-item {
        font-family: UTM-Avo;
        font-size: 14px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        letter-spacing: 0.1px;
        color: #050c1d;
        display: flex;
        align-items: center;
        :first-child {
          padding-left: 15px;
        }
        :nth-child(3) {
          img {
            width: 36px;
            height: 36px;
            border-radius: 50%;
            display: inline-block;
            margin-right: 10px;
          }
        }
        :nth-child(4) {
          justify-content: center;
          .amount {
            padding: 10px;
            border-radius: 100px;
            text-align: center;
          }
          .add-money {
            border: solid 1px #0075ff;
            color: #0075ff;
          }
          .sub-money {
            border: solid 1px #e43a3a;
            color: #e43a3a;
          }
        }
        :last-child {
          justify-content: center;
          img {
            :hover {
              cursor: pointer;
            }
          }
        }
      }
    }
  }
`;

class TableHistoriesTransaction extends Component {
  handleShowPopup(newTransaction) {
    // //add gradien into newtransaction
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
    //change transaction info in popup
    this.props.changeTransactionInfo(newTransaction);

    //show popup
    document.getElementById("home-back-drop").classList.add("show");
    document.getElementById("home-popup-content").style.right = "0";
  }
  renderTableHead() {
    return (
      <div className="table-head">
        <div className="table-head-item">NGÀY GIAO DỊCH</div>
        <div className="table-head-item">LOẠI GIAO DỊCH</div>
        <div className="table-head-item">GỬI CHO</div>
        <div className="table-head-item">SỐ DƯ +/-</div>
        <div className="table-head-item">THÔNG ĐIỆP</div>
        <div className="table-head-item"></div>
      </div>
    );
  }
  renderTableBody() {
    return (
      <div className="bound-table-body">
        {this.props.transactionHistories.map((data, i) => {
          return data.transaction.map((dt, j) => {
            return (
              <div className="table-body" key={(i + 1) * (j + 1)}>
                <div className="table-body-item">
                  <p>
                    {data.date.replace("Tháng", "/")}, {dt.time}
                  </p>
                </div>
                <div className="table-body-item">
                  <p>Nhận từ yêu cầu</p>
                </div>
                <div className="table-body-item">
                  <img src={dt.avatar} alt="Avatar" />
                  <p className="fullname">{dt.fullname}</p>
                </div>
                <div className="table-body-item">
                  <p
                    className={classNames(
                      "amount ",
                      { "add-money": dt.sign === "+" },
                      { "sub-money": dt.sign === "-" }
                    )}
                  >
                    {dt.sign} {dt.amount}
                  </p>
                </div>
                <div className="table-body-item">
                  <p>{dt.description}</p>
                </div>
                <div className="table-body-item">
                  <img
                    src={ic_pos_cancel}
                    alt="Icon Click Show Popup"
                    onClick={this.handleShowPopup.bind(this, {
                      ...dt,
                      date: data.date
                    })}
                  />
                </div>
              </div>
            );
          });
        })}
      </div>
    );
  }
  render() {
    return (
      <Bound>
        {this.renderTableHead()}
        <div className="year">2019</div>
        {this.renderTableBody()}
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
)(TableHistoriesTransaction);
