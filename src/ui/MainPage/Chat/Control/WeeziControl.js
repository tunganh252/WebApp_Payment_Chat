import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from "react-redux";

//action
import {showPopupTransaction} from '../../../../actions/popupAction'

// data
import {weeziAssistant,popupTransactionPopup} from '../../../../data/data'

const Bound = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 120px;
  box-shadow: inset 1px 1px 0 0 rgba(0, 0, 0, 0.07);
  padding: 0 52px;
`;
const Block = styled.div`
width:100%;
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-row-gap: auto;
  justify-content: center;
  cursor: pointer;
  .block-icon {
    width: 44px;
    height: 44px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    justify-self: center;
    background-image: ${props => props.backgroundGradient};
  }
  .text {
    max-width: 84px;
    font-family: UTM-Avo;
    font-size: 14px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.3;
    letter-spacing: 0.1px;
    color: #222222;
    text-align: center;
  }
`;

class WeeziControl extends Component {
  renderBlockFeatures() {
    return Object.keys(popupTransactionPopup)
    .map((data, i) => {
      return popupTransactionPopup[data];
    })
    .slice(5)
    .map((data, i) => {
      return (
        <Block backgroundGradient={data.backgroundGradient} key={i}  onClick={()=>{this.props.showPopupTransaction(data.key, weeziAssistant)}}>
          <div className="block-icon">
            <img src={data.image} alt="" />
          </div>
          <div className="text">{data.text}</div>
        </Block>
      );
    });
  }

  render() {
    return <Bound>{this.renderBlockFeatures()}</Bound>;
  }
}


const mapStateToProps = state => ({
    // state
});

const mapDispatchToProps = dispatch => ({
    showPopupTransaction: (popupType,popupData) => dispatch(showPopupTransaction(popupType, popupData))
});

export default connect(mapStateToProps,mapDispatchToProps,null,{ forwardRef: true })(WeeziControl);