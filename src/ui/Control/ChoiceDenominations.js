import React, { Component } from "react";
import styled from "styled-components";
import { denominationsData } from "../../data/data";
import { revestNumber } from "../../tools";
import PropTypes from "prop-types";
const Bound = styled.div`
  margin: 30px 0 0 0;
  .title-denominations {
    text-transform: uppercase;
    font-family: "Roboto";
    font-size: 12px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6;
    letter-spacing: 0.1px;
    color: #484a5d;
    margin-bottom: 10px;
  }
  .bound-denominations {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    .active-denominations {
      background-color: #0075ff;
      border: solid 1px #0075ff;

      color: white;
    }
  }
`;
const DenominationsBlock = styled.div`
  display: flex;
  border-radius: 6px;
  border: solid 1px #222222;
  height: 36px;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  color: #222222;
  :hover {
    cursor: pointer;
  }
  .amount,
  .currency-symbol {
    font-family: UTM-Avo;
    font-size: 14px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.6;
    letter-spacing: 0.1px;
  }
  .amount {
    margin-right: 5px;
  }
`;
export default class ChoiceDenominations extends Component {
  state = {
    indexActive: -1
  };
  handleClick(i, data) {
    this.props.onChange(data);
    // console.log(data);

    this.setState({ indexActive: i });
  }

  componentWillReceiveProps(next) {
    console.log(next);
    if (next) {
      if (next.resetBlock) {
        this.setState({ indexActive: -1 });
      }
    }
  }
  renderDenominations() {
    return denominationsData.map((data, i) => {
      return (
        <DenominationsBlock
          className={this.state.indexActive === i ? "active-denominations" : ""}
          key={i}
          onClick={this.handleClick.bind(this, i, data)}
        >
          <div className="amount">{revestNumber(data)}</div>
          <div className="currency-symbol">VND</div>
        </DenominationsBlock>
      );
    });
  }

  render() {
    return (
      <Bound>
        <div className="title-denominations">Mệnh Giá</div>
        <div className="bound-denominations">{this.renderDenominations()}</div>
      </Bound>
    );
  }
}

/**
 * [description]: TypeChecking
 */
ChoiceDenominations.propTypes = {
  onChange: PropTypes.func,
  resetBlock: PropTypes.number
};
