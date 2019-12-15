import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import ic_checkbox_fill from "../../images/popup/ic_checkbox_fill.svg";

const Bound = styled.div`
  .block_distribution {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 10px;
  }
`;
const BlockContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: relative;
  height: 68px;
  background: #ffffff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.07);
  border-radius: 10px;
  border: 1px solid #222222;
  box-sizing: border-box;
  border-radius: 6px;
  cursor: pointer;
  .content_item {
    font-family: UTM Avo;
    font-size: 11px;
    line-height: 16px;
    color: #737985;
    margin: 7px 0 0 0;
  }
  .checkbox_fill {
    position: absolute;
    top: 3px;
    right: 5px;
  }
`;

export default class ChoiceDistribution extends Component {
  state = {
    blockSelected: -1
  };


  componentWillReceiveProps(next) {
    if (next) {
      if (next.resetBlock) {
        this.setState({ blockSelected: -1 })
      }
    }
  }


  _renderBlock() {
    return this.props.data.map((item, index) => {
      return <BlockContent key={index}
        onClick={() => this._handleClick(item.type, index)}
        style={{
          border: index === this.state.blockSelected && `${item.border_active}`
        }}
      >
        <img src={index === this.state.blockSelected ? item.img_active : item.img_default} alt="ic_distribution" />
        {
          item.title ?
            <p className="content_item">{item.title}</p>
            : null
        }
        {
          (index === this.state.blockSelected &&
            <figure className="checkbox_fill"><img src={ic_checkbox_fill} alt="ic_checkbox_fill" /></figure>)
        }
      </BlockContent>
    })
  }

  _handleClick = (data, index) => {
    this.props.getDataChoice(data);
    this.setState({
      blockSelected: index
    });
  };

  render() {
    return (
      <Bound>
        <div className="block_distribution">{this._renderBlock()}</div>
      </Bound>
    );
  }
}

/**
 * [description]: TypeChecking
 */
ChoiceDistribution.propTypes = {
  data: PropTypes.array,
  getDataChoice: PropTypes.func,
};
