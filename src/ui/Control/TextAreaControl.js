import React, { Component } from "react";
import styled from "styled-components";

//image
// import ic_vnd_gray from "../../images/popup/ic_vnd_gray.svg";
//Emoji Picker
import { Emoji } from "emoji-mart";
import EmojiPiker from "../Control/EmojiPicker/EmojiPickerContainer";
const Bound = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${props => props.margin};
  width: 100%;
  .control-title {
    font-family: Roboto;
    font-size: 12px;
    font-weight: 500;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.6;
    letter-spacing: 0.1px;
    color: #484a5d;
    text-transform: uppercase;
    margin-bottom: 10px;
  }
  .text-area {
    position: relative;
    width: 100%;
    .block-emoji {
      top: 5px;
      right: 20px;
      position: absolute;
      font-family: UTM-Avo;
      font-size: 32px;
      font-weight: normal;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.6;
      letter-spacing: 0.1px;
      color: #484848;
      .emoji-item {
        :hover {
          cursor: pointer;
        }
      }
    }
    textarea {
      width: 100%;
      min-height: 88px;
      display: flex;
      border-radius: 5px;
      border: solid 1px #e2e2e2;
      outline: none;
      font-family: UTM-Avo;
      font-size: 14px;
      font-weight: normal;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.6;
      letter-spacing: 0.1px;
      color: #222222;
      resize: none;
      padding: 10px 52px 0 10px;
      .emoji {
        cursor: pointer;
      }
      ::placeholder {
        color: rgba(34, 34, 34, 0.25);
      }
    }
  }
`;

export default class TextAreaControl extends Component {
  state = {
    emojiButton: this.props.emojiButton
  };
  onChangeTexArea = e => {
    if (!this.props.onChange) {
      return;
    }
    let value = e.target.value;
    if (value && value.length > 0) {
      this.props.onChange(value);
    }
  };
  //-------------show emoji picker
  hanleShowEmojiPicker(event) {
    event.stopPropagation();
    document.getElementById("emoji-picker-weezi").classList.toggle("visible");
  }
  handleChageEmoji(emoji) {
    this.setState({ emojiButton: { ...this.state.emojiButton, id: emoji.id } });
  }
  render() {
    let { title, margin, placeHolder, maxLength } = this.props;
    return (
      <Bound margin={margin}>
        <p className="control-title">{title}</p>
        <div className="text-area">
          <textarea
            placeholder={placeHolder}
            maxLength={maxLength}
            onChange={this.onChangeTexArea}
          ></textarea>

          {/*Picker Emoji*/}
          <div className="block-emoji">
            <div
              className="emoji-item"
              onClick={this.hanleShowEmojiPicker.bind(this)}
            >
              <Emoji emoji={this.state.emojiButton} size={32} />
            </div>
            <EmojiPiker
              handleChageEmoji={this.handleChageEmoji.bind(this)}
              hanleShowEmojiPicker={this.hanleShowEmojiPicker.bind(this)}
            />
          </div>
        </div>
      </Bound>
    );
  }
}
