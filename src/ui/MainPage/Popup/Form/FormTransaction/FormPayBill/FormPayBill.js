import React, { Component } from "react";
import styled from "styled-components";
import FormElectricBill from "./Content/FormElectricBill";
import FormWaterBill from "./Content/FormWaterBill";
const Bound = styled.div`
    padding-top:40px;
    overflow:auto;
    font-family: Roboto;
    letter-spacing: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6;
    .container {
        margin-top:30px;
        width: 100%;
        &_header {
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
        
    }
`;

const ELECTRIC_BILL = 0;
const WATER_BILL = 1;

const headerTransfer = [
  {
    title: "Tiền Điện",
    step: ELECTRIC_BILL
  },
  {
    title: "Tiền Nước",
    step: WATER_BILL
  }
];

export default class FormPayBill extends Component {
  state = {
    step: ELECTRIC_BILL
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

  componentDidMount() {
    this._toggleLineActive();
  }

  render() {
    const { data } = this.props;
    return (
      <Bound>
        <p className="popup-title">{data.title}</p>
        <div className="container">
          <div className="container_header">
            {this._renderHeader()}
            <div
              id={"container_header-line-active-id"}
              className="container_header-line-active"
            />
          </div>
          <div className="container_content">
            {this.state.step===WATER_BILL? <FormWaterBill/>:<FormElectricBill />
}
          </div>
        </div>
      </Bound>
    );
  }
}
