import React, { Component } from 'react'
import styled from "styled-components";
import PropTypes from 'prop-types';
import { typeInputTransfer } from '../../data/data';

import ic_search_black from '../../images/popup/ic_search_black.svg'
import ic_vnd_gray from '../../images/popup/ic_vnd_gray.svg'
// import ic_vnd_black from '../../images/popup/ic_vnd_black.svg'

const Bound = styled.div`
    .form{
        font-family: UTM Avo;
        position: relative;
        .inputText {
            width: 100%;
            border: none;
            text-align: center;
            margin: 0 0 10px 0;
            font-size: 15px;
            line-height: 26px;
            color:#0075FF;
            text-shadow: 0px 0px 0px #000;
            -webkit-text-fill-color: transparent;
            padding: ${props => props.pdInput || "0 32px"};
        }
        .inputText:focus {
            outline: none;
        }
        .inputText::placeHolder {
            display: flex;
            align-items: center;
            text-align: center;
            opacity: 0.5;
        }
        input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button { 
            -webkit-appearance: none; 
        }
        .findUserName {
            position: absolute;
            font-size: 13px;
            letter-spacing: 0.1px;
            color: #0075FF;
            text-transform: uppercase;
            padding: 5px 0;
        }
        .ic_search {
            position: absolute;
            top: 3px;
            right: 0;
            width:18px;
            height: 18px;
            cursor: pointer;
        }
        .ic_vnd {
            position: absolute;
            top: 3px;
            right: 25%;
            width:16px;
            height: 16px;
            img {
                width:100%;
                height: 100%;
                object-fit:contain;
            }
        }
    }
    .lineInput {
        width: 100%;
        transition: .2s all;
        &.line_default {
            border: 0.5px solid #BABABA;
        }
        &.line_active {
            border: 0.5px solid #0075FF;
        }
    }
`;

/**
 * @param {number}: 1: find number_card ---> show UserName
 */


export default class TextInputControl extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            selectedInput: false,
            typeInput: -1,
            isShowSearch: false,
            // isFillMoney: false
        }
        this.input = React.createRef();
        this.isMouseInput = false;
        this.currency = 0
        this.strCurrency = ''
    }

    _mouseDownInput() {
        this.setState({ selectedInput: true })
    }
    _onChange = (event) => {
        let currentInput = "";
        currentInput = this.input.current.value;
        if (this.state.typeInput === typeInputTransfer.inputFindUser.type) {
            const value = this.input.current.value
            const check = /^[0-9]*$/g.test(value)
            this.input.current.value = value.replace(/[^0-9.]/g, '')
            if (value === "")
                this.setState({ isShowSearch: false })
            else if (value.length > 0 && check)
                this.setState({ isShowSearch: true })
            currentInput = this.input.current.value
        }
        if (this.state.typeInput === typeInputTransfer.inputMoneyVND.type) {
            this._renderValidCurrencyMoney(event)
            currentInput = this.currency;
        }
        this.props.getTextInput(currentInput)
    }

    _onKeyPress = (event) => {
        var x = event.which || event.keyCode;
        if ((x >= 48 && x <= 57) || x === 13) {
            this.isNumber = true;
        } else {
            this.isNumber = false
        }
    }

    _renderValidCurrencyMoney = (e) => {
        if (this.isNumber) {
            if (e.target.value !== '0') {
                let count = 0;
                let index = null;
                for (index in e.target.value) {
                    if (e.target.value[index] === '.') {
                        count = count + 1;
                    }
                }
                let amount = e.target.value
                for (let i = 0; i < count; i++) {
                    amount = amount.replace(".", '')
                }
                this.currency = amount !== '' ? amount : 0
                if (amount.length > 3) {
                    amount = amount.replace(/\B(?=(\d{3})+(?!\d))/g, ".")
                }
                e.target.value = amount
                this.strCurrency = amount
            }
            else {
                e.target.value = this.strCurrency
            }
        } else {
            e.target.value = this.strCurrency
        }
    }

    _handelClick = () => {
        let { selectedInput } = this.state
        if (!this.isMouseInput) {
            if (selectedInput) {
                setTimeout(() => {
                    this.setState({
                        selectedInput: false
                    })
                }, 50);
            }
        }
    }


    _handleSearch = () => {

    }


    render() {
        const { typeInput } = this.state;
        return (
            <Bound
                pdInput={this.props.pdInput}
            >
                <form className="form" onSubmit={this._handleSubmit}
                    onClick={() => {
                        if (this.isMouseInput === true)
                            this._mouseDownInput()
                    }}
                >
                    <input className="inputText"
                        type="text"
                        ref={this.input}
                        placeholder={this.props.placeHolder}
                        onMouseEnter={() => {
                            this.isMouseInput = true
                        }}
                        onMouseLeave={() => {
                            this.isMouseInput = false;
                        }}
                        onChange={this._onChange}
                        onKeyPress={typeInput === typeInputTransfer.inputMoneyVND.type ? this._onKeyPress : null}
                    />
                    {
                        typeInput === typeInputTransfer.inputFindUser.type ?
                            <React.Fragment>
                                <div className="findUserName">{this.props.userName}</div>
                                {
                                    this.state.isShowSearch &&
                                    <figure className="ic_search"
                                        onClick={this._handleSearch}
                                    ><img src={ic_search_black} alt="ic_search" /></figure>
                                }
                            </React.Fragment>
                            : typeInput === typeInputTransfer.inputMoneyVND.type ?
                                <React.Fragment>
                                    <figure className="ic_vnd"><img src={ic_vnd_gray} alt="ic_vnd" /></figure>
                                </React.Fragment> : null
                    }
                </form>
                <div className={this.state.selectedInput ? "lineInput line_active" : "lineInput line_default"} ></div>
            </Bound>
        )
    }

    componentDidMount() {
        document.body.addEventListener('click', this._handelClick)
    }

    componentWillUnmount() {
        document.body.removeEventListener('click', this._handelClick)
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.typeInput !== prevState.typeInput) {
            return {
                typeInput: nextProps.typeInput
            }
        }
        return null;
    }


}


/**
 * [description]: TypeChecking
 */
TextInputControl.propTypes = {
    placeHolder: PropTypes.string,
    typeInput: PropTypes.number,
    userName: PropTypes.string,
    getTextInput: PropTypes.func
};