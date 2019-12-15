import React, { Component } from "react";
import styled from "styled-components";
//mockdata
const Bound = styled.div`
  background-image: ${props => props.backgroundGradient};
  min-height: 116px;
  border-radius: 10px;
  overflow:hidden;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.07);
  display: grid;
  grid-template-columns: repeat(2, auto);
  align-items: center;
  overflow:hidden;
  &:hover {
    cursor: pointer;
  }
  p {
    font-family: 'Roboto';
    font-size: 16px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.29;
    letter-spacing: normal;
    color: #ffffff;
    text-align: center;
    text-transform: uppercase;
  }
  img {
    height: 80%;
    align-self: end;
    object-fit:cover;
  }
`;

export default class MainFeatureControll extends Component {
  render() {
    return (
      <Bound
        onClick={this.props.onClick}
        backgroundGradient={this.props.backgroundGradient}>
        <p className="text">{this.props.text}</p>
        <img src={this.props.image} alt='img' />
      </Bound>
    );
  }
}
