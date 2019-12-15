import React, { Component, Fragment } from "react";
import OptionItem from "./OptionItem";
import PropTypes from "prop-types";
import styled from "styled-components";
const Bound = styled.div`
  z-index: 999;
  outline: none;
  border-radius: 10px;
  box-shadow: 0 7px 20px 0 rgba(0, 0, 0, 0.07);
  position: absolute;
  width: 100%;
  max-height: 45vh;
  top: 60px;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  .option-item-active {
    background-color: #0075ff;
    color: white;
  }
`;
// const BackDrop = styled.div`
//   width: 100vw;
//   height: 100vh;
//   position: fixed;
//   top: 0px;
//   left: 0px;
//   background-color: transparent;
// `;
export default class GroupOption extends Component {
  isEnter=false

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount(){
    setTimeout(() => {
        window.addEventListener('click', this.handleClick)
    }, 0);
}
componentWillUnmount(){
    window.removeEventListener('click', this.handleClick)
}

handleClick=()=>{  
  this.props.handleShowOptions();
}
  render() {
    const {
      indexActive,
      textOptions,
      handleChangeIndexActive,
      handleChangePlaceholder,
    } = this.props;
    return (
      <Fragment>
        <Bound className="group-option" onMouseEnter={()=>this.isEnter=true} onMouseLeave={()=>this.isEnter=false}>
          {textOptions.map((data, i) => {
            return (
              <OptionItem
                key={i}
                textOption={data}
                index={i}
                indexActive={indexActive}
                handleChangeIndexActive={handleChangeIndexActive}
                handleChangePlaceholder={handleChangePlaceholder}
              />
            );
          })}
        </Bound>
      </Fragment>
    );
  }
}

GroupOption.propTypes = {
  handleChangeIndexActive: PropTypes.func.isRequired,
  handleChangePlaceholder: PropTypes.func.isRequired,
  handleShowOptions: PropTypes.func.isRequired,
  textOptions: PropTypes.array.isRequired
};
