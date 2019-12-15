import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

//action
import {
  sendSuccessConfirm,
  topupSuccessConfirm,
  buycardSuccessConfirm,
  tranferSuccessConfirm,
  paybillSuccessConfirm
} from "../../../../../actions/popupAction";

//image
import phone_confirm_require from "../../../../../images/popup/phone_confirm_require.svg";

const Bound = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding-top: 60px;
  p {
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.6;
    letter-spacing: normal;
    color: #222222;
    text-align: center;
  }
  .confirm-p-title {
    font-family: Roboto;
    font-size: 28px;
    font-weight: 500 !important;
    margin-top: 26px;
  }
  .confirm-p-content {
    font-family: UTM-Avo !important;
    font-size: 14px;
    letter-spacing: 0.1px !important;
    margin-top: 5px;
  }
  img {
    width: 277px;
    height: 355px;
    object-fit: contain;
    position: absolute;
    bottom: 0;
  }
`;

class FormPhoneConfirmation extends Component {
  componentDidMount() {
    let { transaction } = this.props;
    setTimeout(() => {
      switch (transaction.type) {
        case "topup": {
          this.props.topupSuccessConfirm(transaction);
          break;
        }
        case "buycard": {
          this.props.buycardSuccessConfirm(transaction);
          break;
        }
        case "paybill": {
          this.props.paybillSuccessConfirm(transaction);
          break;
        }
        case "send": {
          this.props.sendSuccessConfirm(transaction);
          break;
        }
        case "gift": {
          this.props.giftSuccessConfirm(transaction);
          break;
        }
        case "transfer": {
          this.props.tranferSuccessConfirm(transaction)
          break;
        }
        default:
          break;
      }
    }, 3000);
  }
  render() {
    return (
      <Bound>
        <p className="confirm-p-title">Sử dụng điện thoại để tiếp tục</p>
        <p className="confirm-p-content">
          Hệ thống đã gửi 1 yêu cầu nhận diện khuôn mặt vào điện thoại đã đăng
          nhập truớc đó, vui lòng kiểm tra điện thoại và cấp quyền truy cập.
        </p>
        <img src={phone_confirm_require} alt="phone" />
      </Bound>
    );
  }
}

const mapStateToProps = state => {
  return state;
};
const mapDispatchToProps = dispatch => ({
  sendSuccessConfirm: transaction => dispatch(sendSuccessConfirm(transaction)),
  giftSuccessConfirm: transaction => dispatch(sendSuccessConfirm(transaction)),
  topupSuccessConfirm: transaction =>
    dispatch(topupSuccessConfirm(transaction)),
  buycardSuccessConfirm: transaction =>
    dispatch(buycardSuccessConfirm(transaction)),
  tranferSuccessConfirm: transaction =>
    dispatch(tranferSuccessConfirm(transaction)),
  paybillSuccessConfirm: transaction =>
    dispatch(paybillSuccessConfirm(transaction))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  { forwardRef: true }
)(FormPhoneConfirmation);
