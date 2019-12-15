import React, { Component } from 'react'
import styled from 'styled-components'

const Bound = styled.div`
    display:flex;
    flex-direction:row;
    height:79px;
    border-bottom: solid 1px rgba(255, 255, 255, 0.33);
    align-items:center;
    :last-child{
        border-bottom:none;
    }
    p{
        font-family: Roboto;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        letter-spacing: normal;
        color: #ffffff;
    }
    .mem-avatar{
        width:48px;
        height:48px;
        object-fit:cover;
        margin-right:18px;
        border-radius:50%;
    }
    .mem-profile{
        display:flex;
        flex:1;
        flex-direction:column;
        justify-content:center;
        .mem-name{
            font-size: 17px;
            font-weight: 500;
            line-height: 1.41;
        }
        .mem-username{
            font-family: UTM-Avo;
            font-size: 11px;
            line-height: 1.64;
        }
    }
    .split-money{
        width: 100px;
        height: 35px;
        border: solid 1px #ffffff;
        input{
            width:100%;
            height:100%;
            background-color:transparent;
            border:none;
            outline:none;
            font-family: Roboto;
            font-size: 17px;
            font-weight: 500;
            font-style: normal;
            font-stretch: normal;
            line-height: 1.41;
            letter-spacing: normal;
            color: #ffffff;
            text-align:center;
        }
    }
`

export default class MemberSlitControl extends Component {
    isNumber=false;
    currency=this.props.user.value
    state = {
        valueCurrency:this.props.user&&this.props.user.value?this.props.user.value:0
    }
    componentWillReceiveProps(n){
        if(n){
            if(n.user&&n.user.value){
                this.setState({valueCurrency:n.user.value})
            }
        }
    }
    onKeyDown(event) {
        var x = event.which || event.keyCode;
        if((x >= 48 && x <= 57) || x ===13 || x === 8)
        {
            this.isNumber = true
        } else{
            this.isNumber = false
        }
    }
    onBlur=(e)=>{
        if(e.target.value===''){
            this.setState({valueCurrency:0})
        }
    }
    onFocus=(e)=>{
        if(e.target.value==='0'){
            this.setState({valueCurrency:''})
        }
    }
    onChange = (e) => {
        if(this.isNumber){
            if(e.target.value!==''){
                let count = 0;
                let index =null;
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
                this.setState({valueCurrency:this.currency})
            }
            else{
                this.currency=0
                this.setState({valueCurrency:''})
            }
        }
        else{
            this.setState({valueCurrency:this.currency})
        }
        if(this.props.onChange){
            this.props.onChange(this.currency)
        }
    }
    render() {
        let {user, isDisable} = this.props
        let {valueCurrency} = this.state
        return (
            <Bound>
                <img src={user.avatar} alt='avatar' className='mem-avatar'/>
                <div className='mem-profile'>
                    <p className='mem-name'>{user.isOwner?'Your portion':user.name}</p>
                    <p className='mem-username'>{user.isOwner?'Your won\'t be charged':'@'+user.username}</p>
                </div>
                <div className='split-money'>
                    <input type='text' disabled={isDisable}
                        onKeyDown={this.onKeyDown.bind(this)}
                        onBlur={this.onBlur.bind(this)}
                        onFocus={this.onFocus.bind(this)}
                        onChange={this.onChange.bind(this)} value={valueCurrency.toString().replace( /\B(?=(\d{3})+(?!\d))/g, "." )}></input>
                </div>
            </Bound>
        )
    }
}
