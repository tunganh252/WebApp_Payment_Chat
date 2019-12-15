import React, { Component } from "react";
import styled from "styled-components";
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";
import PropTypes from "prop-types";

const Bound = styled.div`
  width: 421px !important;
  position: absolute;
  z-index: 99;
  visibility: hidden;
  bottom: ${props => props.bottom};
  right: ${props => props.right};
  outline: none;
  .emoji-mart {
    width: 100% !important;
    border: none;
    box-shadow: 0 7px 20px 0 rgba(0, 0, 0, 0.07);
    z-index: 99;
    background-color: white;
    &:after {
      content: "";
      display: inline-block;
      width: 0;
      height: 0;
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      border-top: 10px solid #fff;
      position: absolute;
      left: 384px;
    }
    .emoji-mart-search {
      display: none;
    }
    .emoji-mart-category-label {
      display: none;
    }
    .emoji-mart-anchor,
    .emoji-mart-anchor-selected {
      outline: none;
    }
    .emoji-mart-anchor-bar {
      background-color: #0065ff !important;
    }
    .emoji-mart-scroll {
      overflow: overlay;
      height: 210px;
      .emoji-mart-emoji {
        outline: none;
      }
      &::-webkit-scrollbar {
        width: 5px;
        height: 0;
      }
      &::-webkit-scrollbar-thumb {
        background: #d9dde3;
        background-clip: padding-box;
        border-radius: 20px;
      }
    }
  }
`;

export default class EmojiPickerContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isEnter: false
    };
  }
  componentDidMount() {
    window.onclick = () => {
      if (!this.state.isEnter) {
        if (document.getElementById("emoji-picker-weezi")) {
          document
            .getElementById("emoji-picker-weezi")
            .classList.remove("visible");
        }
      }
    };
  }
  render() {
    const { right, bottom, handleChageEmoji } = this.props;
    return (
      <Bound
        id="emoji-picker-weezi"
        right={right}
        bottom={bottom}
        ref={this.refEmoji}
        onMouseEnter={() => this.setState({ isEnter: true })}
        onMouseLeave={() => this.setState({ isEnter: false })}
      >
        <Picker
          onSelect={handleChageEmoji}
          set="apple"
          showPreview={false}
          showSkinTones={false}
        />
      </Bound>
    );
  }
}

EmojiPickerContainer.propTypes = {
  handleChageEmoji: PropTypes.func.isRequired,
  hanleShowEmojiPicker: PropTypes.func.isRequired,
  top: PropTypes.string,
  left: PropTypes.string
};
EmojiPickerContainer.defaultProps = {
  right: "-10px",
  bottom: "50px"
};
//==========================================================
