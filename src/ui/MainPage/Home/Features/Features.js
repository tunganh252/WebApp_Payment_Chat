import React, { Component } from "react";
import styled from "styled-components";
//mock data
import { featureMain } from "../../../../data/homeData";
//component
import BlockFeatureControll from "./Controlls/BlockFeatureControll";
import SecondaryFeatureControll from "./Controlls/SecondaryFeatureControll";
import ProductsSlideControll from "./Controlls/ProductsSlideControll";
import {showPopupTransaction} from '../../../../actions/popupAction'
import {connect} from'react-redux'
//data
//image
const Bound = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(4, auto);
  grid-gap: 20px;
  height: 100%;
`;

class Features extends Component {
  state ={
    // user:this.props.userSelected,
  }
  renderBlockFeatures() {
    // let {user} = this.state
    // console.log(user);
    return featureMain.map((data, i) => {
      return (
        <BlockFeatureControll
          key={i}
          text={data.text}
          image={data.image}
          backgroundGradient={data.backgroundGradient}
          onClick={()=>{
            this.props.showPopupTransaction(data.key);
          }}
        />
      );
    });
  }
  render() {
    return (
      <Bound>
        {this.renderBlockFeatures()}
        <SecondaryFeatureControll />
        <ProductsSlideControll />
      </Bound>
    );
  }
}
const mapStateToProps = state =>({
  userSelected: state.chatReducer.userSelected
});

const mapDispatchToProps = dispatch =>({
  showPopupTransaction: (popupType) => dispatch(showPopupTransaction(popupType))
});

export default connect(mapStateToProps,mapDispatchToProps,null,{ forwardRef: true})(Features)
