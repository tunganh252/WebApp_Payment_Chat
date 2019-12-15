import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
//data
import {discount} from '../../../../../../data/data'
//component
import ButtonComponent from "../../../../../Control/ButtonComponent";
import ChoiceDenominations from "../../../../../Control/ChoiceDenominations";
import ContactChoiceControl from "../../../../../Control/SelectContactControl/ContactChoiceControl";
//action
import { sendUserRequireConfirmation } from "../../../../../../actions/popupAction";
//close popup
const Bound = styled.div`
  position: relative;
  height: 100%;
  padding-top: 40px;
  .popup-top-content {
    position: relative;
  }
  .submit-btn {
    button {
      margin-top: 190px;
    }
  }
`;
class FormTopup extends Component {
  user = null;
  denominations = ""; //===currency
  description = "";
  sendUserRequireConfirmation(weeziAssistant) {
    //check user
    // console.log(this.user, this.denominations, this.description);
    if (this.user === null) {
      alert("please choice user");
      return;
    }
    if (this.denominations === "") {
      alert("please choice denominations");
      return;
    }
    const transaction = {
      type: "topup",
      denominations: this.denominations,
      user: this.user,
      discount:discount,
      description: this.description
    };
    this.props.sendUserRequireConfirmation(transaction,weeziAssistant);
  }

  render() {
    const { data } = this.props;
    return (
      <Bound>
        <p className="popup-title">{data.title}</p>
        <div className="popup-top-content">
          <ContactChoiceControl
            title="người nhận"
            margin="40px 0 0 0"
            users={[]}
            onChange={users => {
              this.user = users[0];
            }}
          />
          <ChoiceDenominations
            onChange={denominations => {
              this.denominations = denominations;
            }}
          />

          <ButtonComponent
            text="XÁC NHẬN"
            backgroundColor="linear-gradient(17.54deg, #00CFFF 0%, #0065FF 100%, #005BEC 100%)"
            top="190px"
            clicked={() => {
              this.sendUserRequireConfirmation(this.props.userSelected);
            }}
          />
        </div>
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
)(FormTopup);
