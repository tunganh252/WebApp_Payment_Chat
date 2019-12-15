import React, { Component } from "react";
import styled from "styled-components";
import { typeInputTransfer } from "../../../../../../../data/data";
import { connect } from "react-redux";
//action
import { sendUserRequireConfirmation } from "../../../../../../../actions/popupAction";
//component
import TextInputControl from "../../../../../../Control/TextInputControl";
import ButtonComponent from '../../../../../../Control/ButtonComponent'
const Bound = styled.div`
  margin: 30px 0 0 0;
  font-family: Roboto;
  font-stretch: normal;
  font-style: normal;
  .title {
    font-size: 12px;
    font-weight: 500;
    line-height: 1.6;
    letter-spacing: 0.1px;
    color: #484848;
    margin: 30px 0 30px 0;
  }
`;

class GameCard extends Component {
  customerCode = "";
  description = "";
  sendUserRequireConfirmation(weeziAssistant) {
    if (this.customerCode === "") {
      alert("Please Enter Customer Code");
      return;
    }

    const transaction = {
      type: "paybill",
      key:"electricBill",
      customerCode: this.customerCode,
      description: this.description
    };
    this.props.sendUserRequireConfirmation(transaction,weeziAssistant);
  }
  componentWillReceiveProps(nextProps) {
    this.denominations = "";
    this.provider = "";
  }
  render() {
    // const { step } = this.props;
    return (
      <Bound>
        <p className="title">NHẬP MÃ KHÁCH HÀNG</p>
        <TextInputControl
          placeHolder="Nhập mã khách hàng"
          typeInput={typeInputTransfer.inputFindUser.type}
          getTextInput={customerCode => {
            this.customerCode = customerCode;
          }}
        />
                 <ButtonComponent
            text="XÁC NHẬN"
            backgroundColor="linear-gradient(17.54deg, #00CFFF 0%, #0065FF 100%, #005BEC 100%)"
            top="190px"
            clicked={() => {
              this.sendUserRequireConfirmation(this.props.userSelected);
            }}/>
      </Bound>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    sendUserRequireConfirmation: (transaction,weeziAssistant) => {
      dispatch(sendUserRequireConfirmation(transaction,weeziAssistant));
    }
  };
};
const mapStateToProps = state => ({
  userSelected:state.chatReducer.userSelected
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GameCard);
