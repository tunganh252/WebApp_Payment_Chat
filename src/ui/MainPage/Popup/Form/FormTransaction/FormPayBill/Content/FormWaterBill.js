import React, { Component } from "react";
import styled from "styled-components";

import { connect } from "react-redux";
import { typeProviderWater,typeInputTransfer } from "../../../../../../../data/data";
//===========================================================
import ChoiceDistribution from "../../../../../../Control/ChoiceDistribution";
import ButtonComponent from "../../../../../../Control/ButtonComponent";
import TextInputControl from "../../../../../../Control/TextInputControl";
//action
import { sendUserRequireConfirmation } from "../../../../../../../actions/popupAction";
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
  
  .block_distribution {
    margin: 12px 0 0 0;
  }
  .ic_send_tranfer {
    display: inline-block;
    :hover {
      cursor: pointer;
    }
  }
`;

class FormWaterBill extends Component {
  provider = "";
  customerCode = "";
  description = "";
  sendUserRequireConfirmation(weeziAssistant) {
    if (this.denominations === "") {
      alert("Please Choice Denominations");
      return;
    } else if (this.customerCode === "") {
      alert("Please Choice Provider");
      return;
    }
    const transaction = {
      type: "paybill",
      key: "waterBill",
      customerCode: this.customerCode,
      provider: this.provider,
      description: this.description
    };
    this.props.sendUserRequireConfirmation(transaction,weeziAssistant);
  }
  componentWillReceiveProps(nextProps) {
    this.customerCode = "";
    this.provider = "";
  }
  render() {
    // const { step } = this.props;
    return (
      <Bound>
        <p className="title nth1">NHÀ CUNG CẤP</p>
        <div className="block_distribution">
          <ChoiceDistribution
            getDataChoice={dataChoice => {
              this.provider = dataChoice;
            }}
            data={typeProviderWater}
          />
        </div>

        <p className="title">NHẬP MÃ KHÁCH HÀNG</p>
        <TextInputControl
          placeHolder="Nhập mã khách hàng"
          typeInput={typeInputTransfer.inputFindUser.type}
          getTextInput={customerCode => {
            this.customerCode = customerCode;
          }}/>
        <ButtonComponent
          text="XÁC NHẬN"
          backgroundColor="linear-gradient(17.54deg, #00CFFF 0%, #0065FF 100%, #005BEC 100%)"
          top="40px"
          clicked={() => {
            this.sendUserRequireConfirmation(this.props.userSelected);
          }}
        />
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
)(FormWaterBill);
