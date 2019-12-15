import React, { Component } from "react";
import styled from "styled-components";
import FastTransfer from "./Content/FastTransfer";
import Interbank from "./Content/Interbank";
import TextInputControl from "../../../../../Control/TextInputControl";
import {
  typeInputTransfer,
  choiceOption,
  dataBankTransfer,
  dataBranchTransfer
} from "../../../../../../data/data";
import ButtonComponent from "../../../../../Control/ButtonComponent";
import { connect } from "react-redux";
import ContactChoiceControl from "../../../../../Control/SelectContactControl/ContactChoiceControl";
import { sendUserRequireConfirmation } from "../../../../../../actions/popupAction";

const Bound = styled.div`
    display:flex;
    flex:1;
    margin: 30px 0 0 0;
    overflow:auto;
    font-family: Roboto;
    letter-spacing: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6;
    .container {
        width: 100%;
        &_header {
            margin: 30px 0 0 0;
            display: flex;
            align-items: center;
            width: 100%;
            border-bottom: 1px solid #d6d6d6;
            position: relative;
            &-item {
                width: 50%;
                display: flex;
                justify-content: center;
                cursor: pointer;
                &-title{
                    margin: 0 0 5px 0;
                    font-size: 14.5px;
                    text-transform: uppercase;
                    color: #737985;
                    font-weight: 300;
                }
            }
            &-line-active{
                position: absolute;
                background-image: linear-gradient(to right, #00cfff, #0065ff);
                /* width:${props => props.widthLineActive}; */
                height:3px;
                bottom:0;
                left: 0;
                clip-path: polygon(2% 0, 98% 1%, 100% 100%, 0% 100%);
                transition-property:left;
                transition-duration:250ms;
                transition-timing-function:linear;
            }
        }
        .container_content {
            height: 450px;
            overflow: auto;
           
            &_title {
                font-size: 12px;
                font-weight: 500;
                line-height: 1.6;
                letter-spacing: 0.1px;
                color: #484848;
                &.nth1{
                    margin: 30px 0 0 0;
                }
            }
            &_block_infoUser{
                &-FindUser {
                    margin: 30px 0 0 0;
                }
                &-Money {
                    margin: 30px 0 0 0;
                }
                &-Content {
                    margin: 30px 0 0 0;
                }
            }
        }
        .container_content::-webkit-scrollbar { 
                display: none; 
            } 
    }
`;

const FAST_TRANSFER = 0;
const INTERBANK = 1;

const headerTransfer = [
  {
    title: "CK Nhanh 24/7",
    step: FAST_TRANSFER
  },
  {
    title: "Liên ngân hàng",
    step: INTERBANK
  }
];

const CARD_NUMBER = "CARD_NUMBER";
const STK = "STK";

class FormTransfer extends Component {
  bank = null;
  branch = null;
  state = {
    step: FAST_TRANSFER,
    typeFastTransfer: CARD_NUMBER,
    inputFindUser: "",
    inputMoneyVND: "",
    inputContent: ""
  };

  _renderHeader() {
    return headerTransfer.map((item, index) => {
      return (
        <React.Fragment key={index}>
          <div
            className="container_header-item"
            id={"header-item-" + index}
            onClick={() => this._changeStep(item.step)}
          >
            <p
              className="container_header-item-title"
              style={{
                fontWeight: index === this.state.step && "500",
                color: index === this.state.step && "#484848"
              }}
            >
              {item.title}
            </p>
          </div>
        </React.Fragment>
      );
    });
  }

  _getTypeFastTransfer = type => {
    this.setState({
      typeFastTransfer: type
    });
  };

  _getTextInput = type => text => {
    this.setState({ [type]: text });
  };

  // _getDataBank = () => {

  // }
  // _getDataBranch = () => {

  // }

  _handleSubmit = (weeziAssistant) => {
    const {
      inputFindUser,
      inputMoneyVND,
      inputContent,
      step,
      typeFastTransfer
    } = this.state;
    switch (step) {
      case FAST_TRANSFER: {
        /**
         * InputFindUser ---> User --> return user to check
         */
        if (
          inputFindUser === "" ||
          inputMoneyVND === "" ||
          inputContent === "" ||
          !typeFastTransfer ||
          !this.bank
        ) {
          alert("please fill information bank");

          return;
        } else {
          let transaction = {
            type: "transfer",
            key: "fastTransfer",
            numberFindUser: inputFindUser,
            user: inputFindUser,
            currency: inputMoneyVND,
            description:inputContent,
            typeFastTransfer,
            bank: this.bank
          };
          this.props.sendUserRequireConfirmation(transaction,weeziAssistant);
        }

        break;
      }
      case INTERBANK: {
        /**
         * InputFindUser ---> User --> return user to check
         */
        if (
          inputFindUser === "" ||
          inputMoneyVND === "" ||
          inputContent === "" ||
          !typeFastTransfer ||
          !this.bank ||
          !this.branch
        ) {
          alert("please fill information branch");
          return;
        } else {
          let transaction = {
            type: "transfer",
            key: "Interbank",
            numberFindUser: inputFindUser,
            user: inputFindUser,
            currency: inputMoneyVND,
            description:inputContent,
            typeFastTransfer,
            bank: this.bank,
            branch: this.branch
          };
          this.props.sendUserRequireConfirmation(transaction,this.props.weeziAssistant);
        }
        break;
      }
      default:
        break;
    }
  };

  componentDidMount() {
    this._toggleLineActive();
  }

  render() {
    const { typeFastTransfer, step } = this.state;
    let content;
    if (step === FAST_TRANSFER) {
      content = (
        <div>
          <FastTransfer
            getTypeFastTransfer={this._getTypeFastTransfer}
            // getDataBank={this._getDataBank}
          />
        </div>
      );
    } else if (step === INTERBANK) {
      content = (
        <Interbank
          getTypeFastTransfer={this._getTypeFastTransfer}
          // getDataBranch={this._getDataBranch}
        />
      );
    }

    const inputFindUser = this._getTextInput("inputFindUser");
    const inputMoneyVND = this._getTextInput("inputMoneyVND");
    const inputContent = this._getTextInput("inputContent");

    const { data } = this.props;
    return (
      <Bound>
        <div className="container" id="scrollFrom">
          <p className="popup-title">{data.title}</p>
          <div className="container_header">
            {this._renderHeader()}
            <div
              id={"container_header-line-active-id"}
              className="container_header-line-active"
            />
          </div>
          <div className="container_content">

            {/* //================================================== */}

            <div className="main_content">{content}</div>

            <div className="choice_bank">
              <ContactChoiceControl
                title="ngân hàng"
                margin="40px 0 0 0"
                data={dataBankTransfer}
                autoScroll={this._autoScroll}
                typeChoice={choiceOption.Bank}
                onChange={users => {
                  this.bank = users[0];
                }}
                // users={[data.user]}
              />
            </div>
            {step === INTERBANK && (
              <div className="choice_branch" id="scrollTo2">
                <ContactChoiceControl
                  title="Chi nhánh"
                  margin="40px 0 0 0"
                  typeChoice={choiceOption.Branch}
                  data={dataBranchTransfer}
                  autoScroll={this._autoScroll}
                  onChange={users => {
                    this.branch = users[0];
                  }}
                  // users={[data.user]}
                />
              </div>
            )}
            <p id="scrollTo2" className="container_content_title nth1">
              THÔNG TIN NGƯỜI NHẬN
            </p>
            <div className="container_content_block_infoUser">
              <div className="container_content_block_infoUser-FindUser">
                <TextInputControl
                  typeInput={typeInputTransfer.inputFindUser.type}
                  placeHolder={
                    typeFastTransfer === CARD_NUMBER
                      ? typeInputTransfer.inputFindUser.content_nth1
                      : typeFastTransfer === STK &&
                        typeInputTransfer.inputFindUser.content_nth2
                  }
                  getTextInput={inputFindUser}
                  pdInput="0 32px"
                />
              </div>
              <div className="container_content_block_infoUser-Money">
                <TextInputControl
                  typeInput={typeInputTransfer.inputMoneyVND.type}
                  placeHolder={typeInputTransfer.inputMoneyVND.content}
                  getTextInput={inputMoneyVND}
                  pdInput="0 140px"
                />
              </div>
              <div className="container_content_block_infoUser-Content">
                <TextInputControl
                  typeInput={typeInputTransfer.inputContent.type}
                  placeHolder={typeInputTransfer.inputContent.content}
                  getTextInput={inputContent}
                />
              </div>
            </div>
            <div id="scrollTo">
              <ButtonComponent
                text="XÁC NHẬN"
                backgroundColor="linear-gradient(17.54deg, #00CFFF 0%, #0065FF 100%, #005BEC 100%)"
                top="60px"
                clicked={this._handleSubmit.bind(this,this.props.userSelected)}
              />
            </div>

            {/* //================================================== */}
          </div>
        </div>
      </Bound>
    );
  }

  _changeStep = async step => {
    await this.setState({ step });
    await this._toggleLineActive();
  };
  _toggleLineActive = () => {
    const { step } = this.state;
    const lineActive = document.getElementById(
      "container_header-line-active-id"
    );
    const item = document.getElementById("header-item-" + step);
    if (lineActive && item) {
      lineActive.style.left = item.offsetLeft + "px";
      lineActive.style.width = item.offsetWidth + "px";
    }
  };
  _autoScroll = () => {
    this.scrollFrom();
  };

  scrollTo() {
    document
      .getElementById(
        `${this.state.step === FAST_TRANSFER ? "scrollTo" : "scrollTo2"}`
      )
      .scrollIntoView();
  }
  scrollFrom() {
    document.getElementById("scrollFrom").scrollIntoView();
    this.scrollTo();
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  sendUserRequireConfirmation: (transaction,weeziAssistant) =>
    dispatch(sendUserRequireConfirmation(transaction,weeziAssistant))
});
const mapStateToProps = (state, ownProps) => ({
  userSelected:state.chatReducer.userSelected,
  weeziAssistant: state.chatReducer.weeziAssistant

});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  { forwardRef: true }
)(FormTransfer);
