import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

//action
import * as types from "../../../actions/types";
import { hidePopupTransaction } from "../../../actions/popupAction";

//image
import ic_close from "../../../images/ic_close.svg";

//Component
//Form in popup transction
import FormSendMoney from "./Form/FormTransaction/FormSendMoney/FormSendMoney";
import FormRequestMoney from "./Form/FormTransaction/FormRequestMoney/FormRequestMoney";
import FormSplitMoney from "./Form/FormTransaction/FormSplitMoney/FormSplitMoney";
import FormSendGift from "./Form/FormTransaction/FormSendGift/FormSendGift";

//--weezzi form
import FormTopup from "./Form/FormTransaction/FormTopup/FormTopup";
import FormBuyCard from "./Form/FormTransaction/FormBuyCard/FormBuyCard";
import FormPayBill from "./Form/FormTransaction/FormPayBill/FormPayBill";
import FormTransfer from "./Form/FormTransaction/FormTranfer/FormTransfer";
//Form confirm
import FormPhoneConfirmation from "./Form/FormConfirm/FormPhoneConfirmation";
import FormSplitConfirmation from "./Form/FormConfirm/FormSplitConfirmation";
//form Success send,gift same kind
import FormSuccessSendGiftTransaction from "./Form/FormSuccessTransaction/FormSuccessSendGiftTransaction";
import FormSuccessRequestTransaction from "./Form/FormSuccessTransaction/FormSuccessRequestTransaction";
import FormSuccessSplitTransation from "./Form/FormSuccessTransaction/FormSuccessSplitTransaction";
//Form success topup,transfer,buycard,paybill
import FormSuccessWeeziTransaction from "./Form/FormSuccessTransaction/FormSuccessWeeziTransaction";
import PopupBankCard from "../Account/PopupBankCard";

const Bound = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  min-width: 1024px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  justify-content: center;
  align-items: center;
  .popup-container {
    display: none;
    width: 850px;
    height: 620px;
    flex-direction: row;
    background-color: #fff;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.07);
    position: relative;
    .ic-close {
      width: 16px;
      height: 16px;
      position: absolute;
      top: 30px;
      right: 30px;
      cursor: pointer;
    }
    .block-color {
      display: flex;
      width: 261px;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 1;
      background-image: ${props => props.styled.transColor};
      border-radius: 10px 0 0 10px;
      transition-property: width;
      transition-duration: 300ms;
      img {
        width: ${props => props.styled.transImage.width}px;
        height: ${props => props.styled.transImage.height}px;
        left: ${props => props.styled.transImage.left}px;
        object-fit: cover;
        position: absolute;
        bottom: 0;
        transition-property: opacity;
        transition-duration: 300ms;
      }
    }
    .block-form-transaction {
      display: flex;
      flex: 1;
      width: calc(100% - 261px);
      height: 100%;
      padding: 0 67px;
      overflow: ${props => props.styled.overflow};
      position: absolute;
      top: 0;
      left: 262px;
      transition-property: opacity;
      transition-duration: 300ms;
      .popup-scroll {
        display: flex;
        flex: 1;
        flex-direction: column;
        /* height:fit-content; */
        .submit-btn {
          display: flex;
          justify-content: flex-end;
          button {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 174px;
            height: 55px;
            border-radius: 50px;
            margin-top: 40px;
            background: linear-gradient(
              17.54deg,
              #00cfff 0%,
              #0065ff 100%,
              #005bec 100%
            );
            font-family: Roboto;
            font-size: 17px;
            font-weight: bold;
            font-style: normal;
            font-stretch: normal;
            letter-spacing: 0.25px;
            color: #ffffff;
            cursor: pointer;
            border: none;
          }
        }
        .popup-title {
          font-size: 28px;
          font-weight: 500;
          line-height: 1.6;
          color: #222222;
        }
      }
    }
  }
  .show {
    display: flex;
    -webkit-animation-name: show; /* Safari 4.0 - 8.0 */
    -webkit-animation-duration: 0.3s; /* Safari 4.0 - 8.0 */
    animation-name: show;
    animation-duration: 0.3s;
  }
  @keyframes show {
    from {
      opacity: 0.5;
      transform: scale(1.5);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

const PopupOption = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
  min-width: 1024px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 11;
  -webkit-animation-name: show; /* Safari 4.0 - 8.0 */
  -webkit-animation-duration: 0.3s; /* Safari 4.0 - 8.0 */
  animation-name: show;
  animation-duration: 0.3s;
  @keyframes show {
    from {
      opacity: 0.5;
      transform: scale(1.5);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

class PopupContainer extends Component {
  state = {
    isShowTransaction: false,
    content: null,
    contentSuccess: null,

    /////
    isShowPopupOption: false,
    contentPopupOption: null
  };
  componentDidMount() {
    let { data } = this.props;
    let { content, contentPopupOption } = this.state;
    // console.log(data);

    switch (data.key) {
      case "send":
        content = <FormSendMoney data={data.popupData} />;
        this.setState({ content, isShowTransaction: true });
        break;
      case "request":
        content = <FormRequestMoney data={data.popupData} />;
        this.setState({ content, isShowTransaction: true });
        break;
      case "split":
        content = <FormSplitMoney data={data.popupData} />;
        this.setState({ content, isShowTransaction: true });
        break;
      case "gift":
        content = <FormSendGift data={data.popupData} />;
        this.setState({ content, isShowTransaction: true });
        break;
      case "topup":
        content = <FormTopup data={data.popupData} />;
        this.setState({ content, isShowTransaction: true });
        break;
      case "paybill":
        content = <FormPayBill data={data.popupData} />;
        this.setState({ content, isShowTransaction: true });
        break;
      case "buycard":
        content = <FormBuyCard data={data.popupData} />;
        this.setState({ content, isShowTransaction: true });
        break;
      case "transfer":
        content = <FormTransfer data={data.popupData} />;
        this.setState({ content, isShowTransaction: true });
        break;
      case "phoneconfirm":
        content = (
          <FormPhoneConfirmation transaction={this.props.transaction} />
        );
        this.setState({ content, isShowTransaction: true });
        break;
      case "rangeBankCard":
        contentPopupOption = <PopupBankCard data={data.bankCard} />;
        this.setState({ contentPopupOption, isShowPopupOption: true });
        break;
      default:
        break;
    }
  }
  componentWillReceiveProps(n) {
    if (n) {
      if (n.popupReducer) {
        switch (n.popupReducer.type) {
          case types.SEND_PHONE_REQUIRE_CONFIRMATION:
            {
              let content = (
                <FormPhoneConfirmation
                  transaction={n.popupReducer.transaction}
                />
              );
              this.setState({ content });
            }
            break;
          //POPUP CONFIRM SUCCESS TYPE
          case types.SEND_SUCCESS_CONFIRM:
          case types.GIFT_SUCCESS_CONFIRM:
            {
              let content = (
                <FormSuccessSendGiftTransaction
                  transaction={n.popupReducer.transaction}
                  hidePopupTransaction={() => {
                    this.props.hidePopupTransaction();
                  }}
                />
              );
              this.setState({ content });
            }
            break;
          case types.TOPUP_SUCCESS_CONFIRM:
          case types.BUYCARD_SUCCESS_CONFIRM:
          case types.PAYBILL_SUCCESS_CONFIRM:
          case types.TRANSFER_SUCCESS_CONFIRM:
            {
              let content = (
                <FormSuccessWeeziTransaction
                  transaction={n.popupReducer.transaction}
                  hidePopupTransaction={() => {
                    this.props.hidePopupTransaction();
                  }}
                />
              );
              this.setState({ content });
            }
            break;
          case types.REQUEST_SUCCESS_CONFIRM:
            {
              let contentSuccess = (
                <FormSuccessRequestTransaction
                  transaction={n.popupReducer.transaction}
                  hidePopupTransaction={() => {
                    this.props.hidePopupTransaction();
                  }}
                />
              );
              this.setState({ contentSuccess, content: null });

              // let imgTrans = document.getElementById("image-trans-id");
              // let blockColor = document.getElementById("block-color-id");
              // let blockForm = document.getElementById("block-form-id");
              // if (imgTrans && blockColor && blockForm) {
              //   blockColor.style.width = "100%";
              //   imgTrans.style.opacity = 0;
              //   blockForm.style.opacity = 0;
              // }
              // setTimeout(() => {
              //   if (imgTrans && blockColor && blockForm) {
              //     blockColor.style.width = "261px";
              //     imgTrans.style.opacity = 1;
              //     blockForm.style.opacity = 1;
              //   }
              //   this.setState({ contentSuccess, content: null });
              // }, 1000);
            }
            break;
          case types.SEND_SPLIT_CONFIRMATION:
            {
              // let imgTrans = document.getElementById("image-trans-id");
              // let blockColor = document.getElementById("block-color-id");
              // let blockForm = document.getElementById("block-form-id");
              let contentSuccess = (
                <FormSplitConfirmation
                  transaction={n.popupReducer.transaction}
                  back={() => {
                    this.setState({
                      contentSuccess,
                      content: (
                        <FormSplitMoney data={n.popupReducer.popup.popupData} />
                      )
                    });

                    // if (imgTrans && blockColor && blockForm) {
                    //   blockColor.style.width = "100%";
                    //   imgTrans.style.opacity = 0;
                    //   blockForm.style.opacity = 0;
                    // }
                    // setTimeout(() => {
                    //   if (imgTrans && blockColor && blockForm) {
                    //     blockColor.style.width = "261px";
                    //     imgTrans.style.opacity = 1;
                    //     blockForm.style.opacity = 1;
                    //   }
                    // }, 1000);
                  }}
                />
              );
              this.setState({ contentSuccess, content: null });
              // if (imgTrans && blockColor && blockForm) {
              //   blockColor.style.width = "100%";
              //   imgTrans.style.opacity = 0;
              //   blockForm.style.opacity = 0;
              // }
              // setTimeout(() => {
              //   if (imgTrans && blockColor && blockForm) {
              //     blockColor.style.width = "261px";
              //     imgTrans.style.opacity = 1;
              //     blockForm.style.opacity = 1;
              //   }
              //   this.setState({ contentSuccess, content: null });
              // }, 1000);
            }

            break;
          case types.SPLIT_SUCCESS_CONFIRM:
            {
              let contentSuccess = (
                <FormSuccessSplitTransation
                  transaction={n.popupReducer.transaction}
                  hidePopupTransaction={() => {
                    this.props.hidePopupTransaction();
                  }}
                />
              );
              this.setState({ contentSuccess });
            }
            break;
          default:
            break;
        }
      }
    }
  }
  render() {
    let { data } = this.props;
    let {
      isShowTransaction,
      isShowPopupOption,
      content,
      contentSuccess,
      contentPopupOption
    } = this.state;
    return (
      <React.Fragment>
        {isShowTransaction && (
          <Bound styled={data.style}>
            <div
              className={
                isShowTransaction ? "popup-container show" : "popup-container"
              }
            >
              <div className="block-color" id="block-color-id">
                <img
                  src={data.style.transImage.img}
                  alt=""
                  id="image-trans-id"
                ></img>
              </div>
              <div className="block-form-transaction" id="block-form-id">
                <div className="popup-scroll">{content || contentSuccess}</div>
              </div>
              <img
                className="ic-close"
                src={ic_close}
                alt="close"
                onClick={() => {
                  this.props.hidePopupTransaction();
                }}
              />
            </div>
          </Bound>
        )}
        {/* //==============================================//*/}
        {isShowPopupOption && <PopupOption>{contentPopupOption}</PopupOption>}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  popupReducer: state.popupReducer,
  transaction: state.popupReducer.transaction
});

const mapDispatchToProps = dispatch => ({
  hidePopupTransaction: () => dispatch(hidePopupTransaction())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  { forwardRef: true }
)(PopupContainer);
