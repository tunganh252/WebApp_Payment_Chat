import React, { Component } from 'react'
import styled from 'styled-components'

//image
import ic_vnd_gray from '../../images/popup/ic_vnd_gray.svg'
import ic_vnd_black from '../../images/popup/ic_vnd_black.svg'

const Bound = styled.div`
    display:flex;
    flex-direction:column;
    margin:${props=>props.margin};
    .control-title{
        font-family: Roboto;
        font-size: 12px;
        font-weight: 500;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.6;
        letter-spacing: 0.1px;
        color: #484a5d;
        text-transform:uppercase;
        margin-bottom:10px;
    }
    .currency-input-container{
        width:100%;
        height:55px;
        display:flex;
        flex-direction:row;
        align-items:center;
        img{
            display:flex;
            width:22.3px;
            height:22px;
        }
        input{
            padding:0 20px;
            border:none;
            outline:none;
            display:flex;
            flex:1;
            font-family: Roboto;
            font-size: 24px;
            font-weight: bold;
            font-style: normal;
            font-stretch: normal;
            line-height: 1.71;
            letter-spacing: normal;
            color: #252734;
            ::placeholder {
                color: rgba(37, 39, 52, 0.25)
            }
        }
    }
`

export default class CurrencyInputControl extends Component {
    currency=0
    strCurrency=''
    state={isFilled:false}
    onKeyPress(event) {
        var x = event.which || event.keyCode;
        if((x >= 48 && x <= 57) || x ===13)
        {
            this.isNumber = true
        } else{
            this.isNumber = false
        }
    }
    onChange = (e) => {
        if(this.isNumber){
            if(e.target.value!=='0'){
                let count = 0;
                let index = null;
                for(index in e.target.value){
                    if(e.target.value[index]==='.'){
                        count = count +1;
                    }
                }
                let amount = e.target.value
                for(let i = 0; i < count; i++){
                    amount = amount.replace(".",'')
                }
                this.currency=amount!==''?amount:0
                if(amount.length>3){
                    amount = amount.replace( /\B(?=(\d{3})+(?!\d))/g, "." )
                }
                e.target.value=amount
                this.strCurrency=amount
            }
            else{
                e.target.value=this.strCurrency
            }
        }
        else{
            e.target.value=this.strCurrency
        }
        if(e.target.value.length>0){
            this.setState({isFilled:true})
        }
        else{
            this.setState({isFilled:false})
        }
        if(this.props.onChange){
            this.props.onChange(this.currency)
        }
    }
    render() {
        let {title, margin} = this.props
        let {isFilled} = this.state
        return (
            <Bound margin={margin}>
                <p className='control-title'>{title}</p>
                <div className='currency-input-container'>
                    <img src={isFilled?ic_vnd_black:ic_vnd_gray} alt='currency'/>
                    <input type='text' id='currency-input-id' placeholder='Nhập số tiền'
                        onKeyPress={this.onKeyPress.bind(this)}
                        onChange={this.onChange.bind(this)}></input>
                </div>
            </Bound>
        )
    }
}
