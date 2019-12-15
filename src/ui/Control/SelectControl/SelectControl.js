import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

//component
import GroupOption from "./GroupOption";
//ic
import ic_select_down from "../.././../images/ic_select_down.svg";
const Bound = styled.div`
  width: ${props => props.width || "260px"};
  position: relative;

  .select-form {
    width: 100%;
    height: 40px;
    border-radius: 60px;
    border: solid 0.5px #c9cdd6;
    background-color: #ffffff;
    display: flex;
    align-items: center;
    padding: 0 15px;
    justify-content: space-between;
    .placeholder {
      font-family: UTM-Avo;
      font-size: 14px;
      font-weight: normal;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.6;
      letter-spacing: 0.1px;
      color: #828897;
      width: 85%;
      text-align: center;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      margin: 0;
    }
    img {
      outline: none;
      :hover {
        cursor: pointer;
      }
    }
  }
`;
export default class SelectControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholder: this.props.placeholder,
      indexActive: 0,
      isShowGroupOption: false
    };
  }

  handleShowOptions() {
    //show group-option
    this.setState({ isShowGroupOption: !this.state.isShowGroupOption });
  }
  handleChangeIndexActive(newIndex) {
    this.setState({ indexActive: newIndex });
  }
  handleChangePlaceholder(newPlace) {
    this.setState({ placeholder: newPlace });
  }


  render() {
    return (
      <Bound>
        {/*input select*/}
        <div className="select-form" width={this.props.width}>
          <p className="placeholder">{this.state.placeholder}</p>
          <img
            src={ic_select_down}
            onClick={this.handleShowOptions.bind(this)}
            alt="Icon Select Down"
          />
        </div>
        {/*group options*/}
        {this.state.isShowGroupOption ? (
          <GroupOption
            indexActive={this.state.indexActive}
            textOptions={this.props.textOptions}
            handleChangeIndexActive={this.handleChangeIndexActive.bind(this)}
            handleChangePlaceholder={this.handleChangePlaceholder.bind(this)}
            handleShowOptions={this.handleShowOptions.bind(this)}
          />
        ) : null}
      </Bound>
    );
  }
}

SelectControl.propTypes = {
  // width: PropTypes.isRequired,
  placeholder: PropTypes.string.isRequired,
  textOptions: PropTypes.array.isRequired
};
