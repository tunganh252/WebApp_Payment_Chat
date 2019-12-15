import React, { Component } from "react";
import styled from "styled-components";

//data
import { giftData } from "../../../data/giftData";

const Bound = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  background-color: #ffffff;
  position: absolute;
  width: 562px;
  top: 29px;
  right: calc(100% + 20px);
  z-index: 1;
  .gift-tab {
    display: flex;
    width: 100%;
    height: 50px;
    border-radius: 10px 10px 0 0;
    overflow: overlay;
    &::-webkit-scrollbar {
      width: 20px;
      /* height: 0; */
    }
    &::-webkit-scrollbar-thumb {
      background: #d9dde3;
      background-clip: padding-box;
      border-radius: 20px;
      border: 7px solid white;
    }
    /* background-color: rgba(0, 40, 88, 0.85); */
    .gift-title-scroll {
      display: flex;
      flex-direction: row;
      width: fit-content;
      height: 50px;

      .gift-title {
        display: flex;
        width: 140px;
        height: 40px;
        margin-bottom: 10px;
        justify-content: center;
        align-items: center;
        background-color: #f8f8f8;

        box-shadow: inset -1px -1px 0 0 rgba(255, 255, 255, 0.15);
        cursor: pointer;
        p {
          font-family: Roboto;
          font-size: 11px;
          font-weight: bold;
          font-style: normal;
          font-stretch: normal;
          line-height: 1.18;
          letter-spacing: 0.05px;
          color: #bababa;
        }
      }
      .active {
        background-color: #0075ff;
        p {
          color: #f2f2f2;
        }
      }
    }
  }
  .gift-ticket-choice-container {
    border-top:1px solid #E2E2E2;

    display: flex;
    overflow: auto;
    width: 100%;
    max-height: 456px;
    .gift-scroll {
      display: grid;
      width: calc(100% - 60px);
      padding: 30px;
      grid-template-columns: repeat(4, 103px);
      grid-column-gap: 30px;
      grid-row-gap: 30px;
      .gift-item {
        width: 103px;
        height: 141px;
        border-radius: 10px;
        overflow: hidden;
        img {
          width: 102px;
          height: 141px;
          object-fit: contain;
          cursor: pointer;
        }
      }
    }
  }
`;

export default class GiftTicketChoiceControl extends Component {
  isEnter = false;
  state = {
    step: giftData[0].key
  };
  componentDidMount() {
    setTimeout(() => {
      window.addEventListener("click", this.handleClick);
    }, 0);
  }
  componentWillUnmount() {
    window.removeEventListener("click", this.handleClick);
  }
  handleClick = e => {
    if (!this.isEnter) {
      this.props.onClose();
    }
  };
  renderGiftTab() {
    let { step } = this.state;
    return giftData.map((data, i) => {
      return (
        <div
          key={i}
          className={step === data.key ? "gift-title active" : "gift-title"}
          onClick={() => this.setState({ step: data.key })}
        >
          <p>{data.title}</p>
        </div>
      );
    });
  }
  renderGiftContainer() {
    let { step } = this.state;
    let giftTicket = giftData.find(item => item.key === step);
    if (giftTicket && giftTicket.tickets) {
      return giftTicket.tickets.map((data, i) => {
        return (
          <div
            key={i}
            className="gift-item"
            onClick={() => this.props.onChoiceGiftCard(data)}
          >
            <img src={data.front} alt="gift" />
          </div>
        );
      });
    }
  }
  render() {
    return (
      <Bound
        onMouseEnter={() => (this.isEnter = true)}
        onMouseLeave={() => (this.isEnter = false)}
      >
        <div
          className="gift-tab"
          id="gift-tab"
          onWheel={event => {
            const scrollHorizontal = document.getElementById("gift-tab");
            // if (event.nativeEvent.wheelDelta > 0) {
            //     console.log('scroll up');
            //   } else {
            //     console.log('scroll down');
            //   }
            if (scrollHorizontal) {
              scrollHorizontal.scrollLeft -= event.nativeEvent.wheelDelta;
              // console.log(scrollHorizontal.scrollLeft);
            }
          }}
        >
          <div className="gift-title-scroll">{this.renderGiftTab()}</div>
        </div>
        <div className="gift-ticket-choice-container">
          <div className="gift-scroll">{this.renderGiftContainer()}</div>
        </div>
      </Bound>
    );
  }
}
