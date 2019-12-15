import React, { Component } from "react";
import styled from "styled-components";
//data-productSlide
import { productSlide } from "../../../../../data/homeData";
//img
import ic_unit_vnd from "../../../../../images/popup/ic_vnd_blue.svg";
import ic_arrow_forward from "../../../../../images/ic_arrow_forward.svg";
import ic_arrow_back from "../../../../../images/ic_arrow_back.svg";
const Bound = styled.div`
  display:flex;
  flex:1;
  min-height: 156px;
  box-sizing: border-box;
  border-radius: 10px;
  box-shadow: 0 7px 64px 0 rgba(0, 0, 0, 0.07);
  background-color: #ffffff;
  grid-column: 1 / span 2;
  position: relative;
  .wrapper-slide {
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    align-items: start;
    .slide-item {
      transition: 1s;
      flex-shrink: 0;
      height: 100%;
      width: 100%;
      padding: 28px;
      box-sizing:border-box;
      .name-product {
        height: 50%;
        font-family: UTM-Avo;
        font-size: 15px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.46;
        letter-spacing: normal;
        color: #222222;
        display: flex;
        align-items: flex-end;
      }
      .top {
        width: 100%;
        height: 50%;
        display: flex;
        justify-content: space-between;
        .price {
          display: flex;
          align-items: center;
          .amount {
            background-image: linear-gradient(
              to top,
              #00cfff,
              #0065ff,
              #005bec
            );
            font-family: Roboto;
            font-size: 28px;
            font-weight: bold;
            font-style: normal;
            font-stretch: normal;
            line-height: 1.46;
            letter-spacing: normal;
            -webkit-background-clip: text;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            margin-right: 5px;
            margin-bottom:0;
          }
        }
      }
    }
  }

  .slide-controll {
    position: absolute;
    right: 45px;
    bottom: 28px;
    :hover {
      cursor: pointer;
    }
  }
`;

export default class ProductsSlideControll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      i: 0 //position item current
    };
  }

  //slide start ------------------
  handleBack(length) {
    if (this.state.i <= -length+1) {
      return;
    }
    this.setState({ i: this.state.i - 1 }, () => {
      document.querySelectorAll(".slide-item").forEach(element => {
        element.style.transform = `translateX(${this.state.i * 100}%)`;
      });
    });
  }
  handleForward() {
    if (this.state.i >=0) {
      return;
    }
    this.setState({ i: this.state.i + 1 }, () => {
      document.querySelectorAll(".slide-item").forEach(element => {
        element.style.transform = `translateX(${this.state.i * 100}%)`;
      });
    });
  }
  //slide end------------
  render() {
    return (
      <Bound>
        <div className="wrapper-slide" id="wrapper-slide">
          {productSlide.map((data, i) => {
            return (
              <div className="slide-item" id={`item${i}`} key={i}>
                <div className="top">
                  <div className="price">
                    <p className="amount">{data.price}</p>
                    <img className="unit" src={ic_unit_vnd} alt='' />
                  </div>
                  <img className="img-product" src={data.image} alt='' />
                </div>
                <p className="name-product">{data.name}</p>
              </div>
            );
          })}
        </div>
        <div className="slide-controll">
          <img
            className="ic-arrow-forward"
            src={ic_arrow_forward}
            onClick={this.handleForward.bind(this)}
            alt=''
          />
          <img
            className="ic-arrow-forward"
            src={ic_arrow_back}
            onClick={this.handleBack.bind(this,productSlide.length)}
            alt=''
          />
        </div>
      </Bound>
    );
  }
}
