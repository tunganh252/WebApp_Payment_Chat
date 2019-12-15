import React, { Component } from "react";
import { DatePicker } from "antd";
import PropTypes from 'prop-types'; 
import locale from "antd/es/date-picker/locale/vi_VN";
import "antd/es/date-picker/style/index.css";

import styled from "styled-components";
//icon
const { RangePicker } = DatePicker;
//styled
const Bound = styled.div`
  margin: 0 20px;
  .range-picker-antd-wee {
    &:hover {
      .ant-calendar-picker-input,
      .ant-input {
        border: solid 0.5px #c9cdd6 !important;
      }
    }
    .ant-calendar-picker-input,
    .ant-input {
      display: inline-block;
      height: 40px;
      width: ${props => props.width };
      border-radius: 60px;
      box-shadow: 0 0 0 -0.5px #c9cdd6 !important;
      border: solid 0.5px #c9cdd6 !important;
      &:focus {
        outline: none !important;
      }
      .ant-calendar-range-picker-separator {
        padding-top: 5px;
      }
      input {
        color: #828897;
        ::placeholder {
          color: #828897;
          font-family: 'UTM-Avo';
          font-size: 14px;
          font-weight: normal;
        }
      }
    }
  }
`;
export default class DatePickerComponent extends Component {
  render() {
    return (
      <Bound width={this.props.width}>
        <RangePicker
          locale={locale}
          className="range-picker-antd-wee"
          separator="-"
          popupStyle={{}}
          dropdownClassName="drop-down-range-picker-wee"
          format="DD-MM-YYYY"
        />
      </Bound>
    );
  }
}
DatePickerComponent.propTypes={
  width:PropTypes.string
}
DatePickerComponent.defaultProps ={
  width:'260px'
}
