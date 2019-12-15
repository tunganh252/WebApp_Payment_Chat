import React, { Component } from "react";
import styled from "styled-components";
import {connect} from 'react-redux'
//data
import { popupTransactionPopup } from "./../../../../../data/data";
import {weeziAssistant} from "./../../../../../data/data";
//action
import {showPopupTransaction} from '../../../../../actions/popupAction'



//styled 
const Bound = styled.div`
  min-height: 156px;
  border-radius: 10px;
  box-shadow: 0 7px 64px 0 rgba(0, 0, 0, 0.07);
  background-color: #ffffff;
  flex: 1;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  align-items: center;
  grid-column-gap: 20px;
  grid-column: 1 / span 2;
`;
const Block = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-row-gap: 10px;
  /* align-items:center; */
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

class SecondaryFeatureControll extends Component {
  renderBlockFeatures() {
    return Object.keys(popupTransactionPopup)
      .map((data, i) => {
        return popupTransactionPopup[data];
      })
      .slice(5)
      .map((data, i) => {
        return (
          <Block backgroundGradient={data.backgroundGradient} key={i}   onClick={()=>{this.props.showPopupTransaction(data.key, weeziAssistant)}}  >
            <div className="block-icon">
              <img src={data.image} alt="" />
            </div>
            <div className="text">{data.text}</div>
          </Block>
        );
      });

    // return
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

export default connect(mapStateToProps,mapDispatchToProps,null,{ forwardRef: true })(SecondaryFeatureControll)