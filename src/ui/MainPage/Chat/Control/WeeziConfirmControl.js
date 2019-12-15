import React, { Component } from "react";
import styled from "styled-components";
import ButtonComponent from "../../../Control/ButtonComponent";
import { connect } from "react-redux";
import { popupDataConfirmPhone } from "../../../../data/data";
//action
import {
  showPopupPhoneConfirm,
  cancelTransaction
} from "../../../../actions/popupAction";
const Bound = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 80px;
  justify-content: center;
  box-shadow: inset 1px 1px 0 0 rgba(0, 0, 0, 0.07);
  padding: 0 20px;
`;

class WeeziConfirmControl extends Component {
  cancelTransaction(oldWeeziAssistant) {
    this.props.cancelTransaction(oldWeeziAssistant);
  }
  showPopupPhoneConfirm(weeziAssistant) {
    console.log(weeziAssistant);
    this.props.showPopupPhoneConfirm(
      "phoneconfirm",
      popupDataConfirmPhone,
      weeziAssistant
    );
  }
  render() {
    return (
      <Bound>
        <ButtonComponent
          text="Đồng Ý"
          right="13px"
          clicked={this.showPopupPhoneConfirm.bind(this, this.props.userSelected)}
        />
        <ButtonComponent
          text="Từ Chối"
          backgroundColor="#E43A3A"
          clicked={this.cancelTransaction.bind(this, this.props.weeziAssistant)}
        />
      </Bound>
    );
  }
}

const mapStateToProps = state => ({
  weeziAssistant: state.chatReducer.weeziAssistant,
  userSelected: state.chatReducer.userSelected
});

const mapDispatchToProps = dispatch => ({
  showPopupPhoneConfirm: (popupType, popupData, weeziAssistant) =>
    dispatch(showPopupPhoneConfirm(popupType, popupData, weeziAssistant)),
  cancelTransaction: oldWeeziAssistant =>
    dispatch(cancelTransaction(oldWeeziAssistant))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  { forwardRef: true }
)(WeeziConfirmControl);
