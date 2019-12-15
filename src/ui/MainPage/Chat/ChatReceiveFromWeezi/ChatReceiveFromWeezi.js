import React, { Component } from 'react';
import styled from "styled-components";
import PropTypes from 'prop-types';

///data
import { messTypes } from '../../../../data/data';

/// components
import TextMessage from '../MessageTypes/TextMessage';
import TopupMessage from '../MessageTypes/TopupMessage';
import BuyCardMessage from '../MessageTypes/BuyCardMessage';
import CardInfo from "../MessageTypes/CardInfo";
import TransferMessage from '../MessageTypes/TransferMessage';
import PayBillMessage from '../MessageTypes/PayBillMessage';

const Bound = styled.div`

`;

export default class ChatReceiveFromWeezi extends Component {
    render() {
        const {avatar,data,isShowRead,margin} = this.props;
        let content;

        switch (data.messType) {
            case messTypes.text: {
                return content = <TextMessage data={data} margin={margin} isShowRead={isShowRead}  avatar={avatar}/>
              }
              case messTypes.topup: {
                return content = <TopupMessage  data={data} margin={margin} isShowRead={true}  avatar={avatar} />;
              }
              case messTypes.buycard: {
                return content = <BuyCardMessage  data={data} margin={margin} isShowRead={true}  avatar={avatar} />;
              }
              case messTypes.cardinfo: {
                return content = <CardInfo  data={data} margin={margin} isShowRead={true}  avatar={avatar} />;
              }
              case messTypes.transfer: {
                return content = <TransferMessage  data={data} margin={margin} isShowRead={true}  avatar={avatar} />;
              }
              case messTypes.payBill: {
                return content = <PayBillMessage  data={data} margin={margin} isShowRead={true}  avatar={avatar} />;
              }
              default:
                  break;
            }

        return (
            <Bound>
                {content}
            </Bound>
        )
    }
}

/**
 * [description]: TypeChecking
 */
ChatReceiveFromWeezi.propTypes = {
    avatar: PropTypes.string,
    data: PropTypes.object,
    isShowRead: PropTypes.bool,
    margin:PropTypes.string
};
