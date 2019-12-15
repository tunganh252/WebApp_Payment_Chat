import React, { Component } from "react";
import classNames from "classnames";
import styled from "styled-components";
//styled
const Bound = styled.div`
  padding: 15px;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  background-color: white;
  border-bottom: 0.5px solid #e2e2e2;
  color: #222222;
  .option-name {
    font-family: UTM-Avo;
    font-size: 14px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.6;
    letter-spacing: 0.1px;
  }
  .tick {
    width: 18px;
    height: 18px;
    background-color: #ffffff;
    border: 1px solid gray;
    border-radius: 50%;
    :hover {
      cursor: pointer;
    }
  }
  .tick-active {
    border: 6px solid white;
    background-color: #0075ff;
  }
`;
export default class OptionItem extends Component {
  handlSelected(e) {
    //change index active option item
    this.props.handleChangeIndexActive(parseInt(e.target.dataset.index)); 
    //change placeholder   
    this.props.handleChangePlaceholder(e.target.closest('.option-item').children[0].textContent);    
  }
  render() {
    return (
      <Bound
        className={classNames("option-item", {
          "option-item-active": this.props.indexActive === this.props.index
        })}
      >
        <p className="option-name">{this.props.textOption}</p>
        <div
          className={classNames("tick", {
            "tick-active": this.props.indexActive === this.props.index
          })}
          data-index={this.props.index}
          onClick={this.handlSelected.bind(this)}
        ></div>
      </Bound>
    );
  }
}
