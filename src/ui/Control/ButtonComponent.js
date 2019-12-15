import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
const Bound = styled.div`
  display: flex;
  justify-content: ${props => props.flexDirection};
  button {
    width: ${props => props.widthProp};
    height: ${props => props.heightProp};
    border-radius: ${props => props.borderRadius};
    background: ${props => props.backgroundColor};
    line-height: ${props => props.heightProp};
  margin: ${props => props.topProp} ${props => props.rightProp}
      ${props => props.bottomProp} ${props => props.leftProp};
    text-align: center;
    font-family: Roboto;
    font-size: 17px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    color: #ffffff;
    outline: none;
    border: none;
    :hover {
      cursor: pointer;
    }
  }
`;
export default class ButtonComponent extends Component {
  render() {
    const {
      text,
      top,
      right,
      left,
      bottom,
      height,
      width,
      borderRadius,
      flexDirection,
      backgroundColor,
      clicked
    } = this.props;
    return (
      <Bound
        className="button-component"
        backgroundColor={backgroundColor}
        heightProp={height}
        widthProp={width}
        borderRadius={borderRadius}
        topProp={top}
        leftProp={left}
        bottomProp={bottom}
        rightProp={right}
        flexDirection={flexDirection}
      >
        <button onClick={clicked}>{text}</button>
      </Bound>
    );
  }
}

ButtonComponent.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  text: PropTypes.string,
  backgroundColor: PropTypes.string,
  borderRadius: PropTypes.string,
  top: PropTypes.string,
  right: PropTypes.string,
  bottom: PropTypes.string,
  left: PropTypes.string,
  flexDirection: PropTypes.string,
  clicked: PropTypes.func.isRequired
};
ButtonComponent.defaultProps = {
  text: "Hello Weezi",
  height: "50px",
  width: "180px",
  borderRadius: "150px",
  backgroundColor: "#0075ff",
  top: "0px",
  right: "0px",
  bottom: "0px",
  left: "0px",
  flexDirection: "flex-end"
};
