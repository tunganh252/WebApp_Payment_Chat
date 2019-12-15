import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

//action
import { splitSuccessConfirm } from "../../../../../actions/popupAction";

//data
import { userLogin } from "../../../../../data/mockData";

//image
import ic_back from "../../../../../images/popup/ic_back.svg";
import ic_vnd_white from "../../../../../images/popup/ic_vnd_white.svg";
import ic_refresh from "../../../../../images/popup/ic_refresh.svg";
import submit_button from "../../../../../images/popup/submit_button.svg";

//component
import MemberSlitControl from "../../../../Control/MemberSlitControl";

const Bound = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-image: linear-gradient(to top, #00a548, #bdd50a);
  padding: 30px 80px;
  transition-property: opacity;
  transition-duration: 300ms;
  /* opacity: 0; */
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
  .split-confirm-title {
    display: flex;
    position: relative;
    align-items: center;
    p {
      font-size: 28px;
      font-weight: 500;
      line-height: 1.6;
    }
    .ic-back {
      position: absolute;
      left: -40px;
      width: 20px;
      height: 16px;
      cursor: pointer;
    }
  }
  .split-confirm-item-title {
    font-size: 11px;
    font-weight: 500;
    line-height: 1.18;
    letter-spacing: 0.05px;
    text-transform: uppercase;
  }
  .split-confirm-summary {
    display: grid;
    width: 100%;
    height: 85px;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 20px;
    margin-top: 30px;
    .summary-item {
      display: flex;
      flex: 1;
      flex-direction: column;
      .summary-block {
        display: flex;
        flex: 1;
        flex-direction: row;
        align-items: center;
        height: 59px;
        padding: 0 10px;
        border-radius: 5px;
        border: solid 0.5px rgba(255, 255, 255, 0.33);
        margin-top: 12px;
        img {
          width: 22px;
          height: 22px;
          margin: 0 17px 0 5px;
        }
        #currency {
          font-size: 24px;
          font-weight: bold;
          line-height: 1.21;
          letter-spacing: 0.43px;
        }
        #description {
          font-family: UTM-Avo;
          font-size: 15px;
          line-height: 1.7;
          letter-spacing: 0.1px;
          max-height: 100%;
        }
      }
    }
  }
  .split-confirm-members {
    display: flex;
    flex: 1;
    flex-direction: column;
    margin-top: 30px;
    overflow: hidden;
    .members-top {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      .split-all {
        display: flex;
        flex-direction: row;
        align-items: center;
        cursor: pointer;
        .split-icon {
          width: 12px;
          height: 10px;
          margin-right: 6px;
        }
        p {
          font-weight: 500;
          font-size: 11px;
          line-height: 13px;
          text-align: right;
          text-transform: uppercase;
        }
      }
    }
    .members-container {
      display: flex;
      flex-direction: column;
      overflow: auto;
      .members-scroll {
        display: flex;
        flex-direction: column;
        height: fit-content;
      }
    }
  }
  .split-confirm-footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 90px;
    p {
      font-family: UTM-Avo;
      font-size: 14px;
      line-height: 1.6;
      letter-spacing: 0.1px;
    }
    .submit-button {
      width: 70px;
      height: 70px;
      cursor: pointer;
    }
  }
`;

class FormSplitConfirmation extends Component {
  state = {
    currency:
      this.props.transaction && this.props.transaction.currency
        ? this.props.transaction.currency
        : 0,
    users: []
  };
  componentWillMount() {
    this.refreshUI();
  }
  componentDidMount() {
    let bound = document.getElementById("split-bound");
    if (bound) {
      bound.style.opacity = 1;
    }
  }
  refreshUI = () => {
    let { transaction } = this.props;
    let { users } = this.state;
    if (transaction) {
      let currency =
        transaction && transaction.currency ? transaction.currency : 0;
      let splitValue = Math.floor(
        transaction.currency / (transaction.users.length + 1)
      );
      let ownerValue =
        transaction.currency - splitValue * transaction.users.length;
      users = [];
      users.push({ ...userLogin, value: ownerValue, isOwner: true });
      if (transaction.users) {
        transaction.users.forEach(user => {
          if (user) {
            users.push({ ...user, value: splitValue });
          }
        });
      }
      console.log(users, currency);
      this.setState({ users, currency });
    }
  };
  calcCurrency = (userID, currencyChange) => {
    let { currency, users } = this.state;
    currency = 0;
    if (users) {
      users.forEach(user => {
        if (userID === user.id) {
          user.value = parseFloat(currencyChange);
        }
        currency += user.value;
      });
    }
    this.setState({ currency, users });
  };
  sendSplitSuccessConfirm = () => {
    let { transaction } = this.props;
    let { users, currency } = this.state;
    if (users === null) {
      alert("please choice user");
      return;
    }
    if (currency === 0) {
      alert("please choice price");
      return;
    }

    const transactionInfo = {
      type: "split",
      users: users,
      currency: currency,
      description: transaction.description
    };
    this.props.sendSplitSuccessConfirm(transactionInfo);
  };
  renderMember() {
    let { users } = this.state;
    if (users) {
      return users.map((data, i) => {
        if (data) {
          return (
            <MemberSlitControl
              key={i}
              user={data}
              isDisable={false}
              onChange={currencyChange => {
                this.calcCurrency(data.id, currencyChange);
              }}
            />
          );
        }

        return true;
      });
    }
  }
  render() {    
    let { transaction } = this.props;
    let { users, currency } = this.state;
    return (
      <Bound id="split-bound">
        <div className="split-confirm-title">
          <p>Kiểm tra và gửi yêu cầu</p>
          <img
            className="ic-back"
            src={ic_back}
            alt="back"
            onClick={() => this.props.back()}
          ></img>
        </div>
        <div className="split-confirm-summary">
          <div className="summary-item">
            <p className="split-confirm-item-title">
              bạn và {users.length} người khác
            </p>
            <div className="summary-block">
              <img src={ic_vnd_white} alt="currency" />
              <p id="currency">
                {currency.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
              </p>
            </div>
          </div>
          <div className="summary-item">
            <p className="split-confirm-item-title">Message</p>
            <div className="summary-block">
              <p id="description">{transaction.description}</p>
            </div>
          </div>
        </div>
        <div className="split-confirm-members">
          <div className="members-top">
            <p className="split-confirm-item-title">
              Chỉnh số tiền bạn muốn chia
            </p>
            <div className="split-all" onClick={this.refreshUI.bind(this)}>
              <img className="split-icon" src={ic_refresh} alt="split" />
              <p>Đặt lại</p>
            </div>
          </div>
          <div className="members-container">
            <div className="members-scroll">{this.renderMember()}</div>
          </div>
        </div>
        <div className="split-confirm-footer">
          <p>Yêu cầu của bạn sẽ có hiệu lực trong 30 ngày</p>
          <img
            className="submit-button"
            src={submit_button}
            alt="submit"
            onClick={() => {
              this.sendSplitSuccessConfirm();
            }}
          />
        </div>
      </Bound>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => ({
  sendSplitSuccessConfirm: (type, users, currency, description) =>
    dispatch(splitSuccessConfirm(type, users, currency, description))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  { forwardRef: true }
)(FormSplitConfirmation);
