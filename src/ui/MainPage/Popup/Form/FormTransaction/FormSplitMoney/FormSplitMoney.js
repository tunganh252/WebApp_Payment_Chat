import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

//action
import { sendSplitConfirmation } from "../../../../../../actions/popupAction";

//component
import ContactChoiceControl from "../../../../../Control/SelectContactControl/ContactChoiceControl";
import CurrencyInputControl from "../../../../../Control/CurrencyInputControl";
import TextAreaControl from "../../../../../Control/TextAreaControl";

const Bound = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 60px 0;
`;

class FormSplitMoney extends Component {
  users = [];
  currency = 0;
  description = "";
  sendSplitConfirmation = () => {
    if (this.users === null || this.users.length === 0) {
      alert("please choice user");
      return;
    }
    if (this.currency === 0) {
      alert("please choice price");
      return;
    }
    for(let i = 0; i < this.users.length; i++){
        if(!this.users[i]){
            this.users.splice(i, 1);
            i--;
        }
    }
    const transaction = {
      type: "split",
      users: this.users,
      currency: this.currency,
      description: this.description
    };
    this.props.sendSplitConfirmation(transaction);
  };
  render() {
    let { data } = this.props;
    return (
      <Bound>
        <p className="popup-title">{data.title}</p>
        <ContactChoiceControl
          title="người nhận"
          margin="40px 0 0 0"
          isMultiple={true}
          onChange={users => {
            this.users = users;
          }}
        />
        <CurrencyInputControl
          title="SỐ TIỀN"
          margin="30px 0 0 0"
          onChange={currency => {
            this.currency = currency;
          }}
        />
        <TextAreaControl
          title="Nội dung"
          margin="30px 0 0 0"
          placeHolder="Nhập nội dung"
          emojiButton={{ id: "desert", skin: 3 }}
          onChange={desc => (this.description = desc)}
        />
        <div className="submit-btn">
          <button
            type="submit"
            onClick={() => {
              this.sendSplitConfirmation();
            }}
          >
            XÁC NHẬN
          </button>
        </div>
      </Bound>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = dispatch => ({
  sendSplitConfirmation: transaction =>
    dispatch(sendSplitConfirmation(transaction))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  { forwardRef: true }
)(FormSplitMoney);
