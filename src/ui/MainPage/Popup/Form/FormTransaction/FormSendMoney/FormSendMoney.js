import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from "react-redux";

//action
import {sendPhoneRequireConfirmation} from '../../../../../../actions/popupAction'

//component
import ContactChoiceControl from '../../../../../Control/SelectContactControl/ContactChoiceControl'
import CurrencyInputControl from '../../../../../Control/CurrencyInputControl'
import TextAreaControl from '../../../../../Control/TextAreaControl'

const Bound = styled.div`
    display:flex;
    flex:1;
    flex-direction:column;
    padding-top:60px;
`

class FormSendMoney extends Component {
    user=this.props.data.user;
    currency='';
    description=''
    sendPhoneRequireConfirmation=()=>{
        console.log(this.user, this.currency, this.description)
        if(this.user===null){
            alert('please choice user')
            return;
        }
        if(this.currency===''){
            alert('please choice price')
            return;
        }
        const transaction={type:'send',user:this.user,currency:this.currency,description:this.description}
        this.props.sendPhoneRequireConfirmation(transaction)
    }
    render() {
        let {data} = this.props
        return (
            <Bound>
                <p className='popup-title'>{data.title}</p>
                <ContactChoiceControl title='người nhận' margin='40px 0 0 0' users={[data.user]}
                    onChange={(users)=>{this.user=users[0]}}/>
                <CurrencyInputControl title='SỐ TIỀN' margin='30px 0 0 0'
                    onChange={(currency)=>{this.currency=currency}}/>
                <TextAreaControl title='Nội dung' margin='30px 0 0 0' placeHolder='Nhập nội dung' emojiButton={{ id: 'rabbit', skin: 3 }}
                    onChange={(desc)=>this.description=desc}/>
                <div className='submit-btn' >
                    <button onClick={()=>{this.sendPhoneRequireConfirmation()}} type='submit'>XÁC NHẬN</button>
                </div>
            </Bound>
        )
    }
}

const mapStateToProps = state => {
    return state
};

const mapDispatchToProps = dispatch => ({
    sendPhoneRequireConfirmation: (transaction) => dispatch(sendPhoneRequireConfirmation(transaction)),
});

export default connect(mapStateToProps,mapDispatchToProps,null,{ forwardRef: true })(FormSendMoney);