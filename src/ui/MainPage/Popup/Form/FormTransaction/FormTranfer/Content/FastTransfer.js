import React, { Component } from 'react';
import styled from "styled-components";
import PropTypes from 'prop-types';

/// Data
import { typeTransferNapas } from '../../../../../../../data/data';

/// Component
import ChoiceDistribution from '../../../../../../Control/ChoiceDistribution';

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
    }
    .block_distribution {
        margin: 12px 0 0 0;
    }
`;

// const CARD_NUMBER = "CARD_NUMBER"; /// số thẻ
// const STK = "STK";

export default class FastTransfer extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {

        }
        this.typeFastTransfer = "";
    }


    _getDataChoice = (typeChoice) => {
        this.typeFastTransfer = typeChoice
        this.props.getTypeFastTransfer(typeChoice)
    }


    render() {
        return (
            <Bound>
                <p className="title nth1">HÌNH THỨC CHUYỂN KHOẢN</p>
                <div className="block_distribution">
                    <ChoiceDistribution
                        getDataChoice={this._getDataChoice}
                        data={typeTransferNapas}
                    />
                </div>
            </Bound>
        )
    }
}

/**
 * [description]: TypeChecking
 */
FastTransfer.propTypes = {
    getTypeFastTransfer: PropTypes.func,
    getDataBank: PropTypes.func
};
