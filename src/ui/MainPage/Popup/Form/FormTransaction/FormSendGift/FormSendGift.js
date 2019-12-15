import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from "react-redux";

//action
import {showReviewGiftCard,sendPhoneRequireConfirmation} from '../../../../../../actions/popupAction'

//component
import ContactChoiceControl from '../../../../../Control/SelectContactControl/ContactChoiceControl'
import CurrencyInputControl from '../../../../../Control/CurrencyInputControl'
import TextAreaControl from '../../../../../Control/TextAreaControl'
import GiftChoiceControl from '../../../../../Control/SelectGiftControl/GiftChoiceControl'

const Bound = styled.div`
    display:flex;
    flex:1;
    flex-direction:column;
    padding-top:60px;
    .popup-top-content{
        display:grid;
        width:100%;
        grid-template-columns:1fr 102px;
        grid-template-rows:repeat(2, auto);
        .item-right{
            grid-column: 2;
            grid-row: 1 / 3;
        }
    }
`

class FormSendGift extends Component {
    giftCardData={
        giftCard:{},
        text:''
    }
    user=this.props.data.user;
    currency='';
    description=''
    sendPhoneRequireConfirmation=()=>{
        // console.log(this.user, this.currency, this.description)
        if(this.user===null){
            alert('please choice user')
            return;
        }
        if(this.currency===''){
            alert('please choice price')
            return;
        }
        const transaction={
            type:'gift',
            user:this.user,
            currency: this.currency,
            description: this.description
        }
        this.props.sendPhoneRequireConfirmation(transaction)
    }
    render() {
        let {data} = this.props
        return (
            <Bound>
                <p className='popup-title'>{data.title}</p>
                <div className='popup-top-content'>
                    <ContactChoiceControl title='người nhận' margin='40px 0 0 0' users={[data.user]}
                        onChange={(users)=>{this.user=users[0]}}/>
                    <GiftChoiceControl title='MẪU THIỆP' margin='40px 0 0 0'
                        onChange={(giftCard)=>{this.giftCardData.giftCard=giftCard}}
                        onReview={()=>this.props.showReviewGiftCard(this.giftCardData)}/>
                    <CurrencyInputControl title='SỐ TIỀN' margin='30px 0 0 0'
                        onChange={(currency)=>{this.currency=currency}}/>
                </div>
                <TextAreaControl title='Lời chúc' margin='30px 0 0 0' placeHolder='Nhập nội dung' emojiButton={{ id: 'gift', skin: 3 }} maxLength={95}
                    onChange={(text)=>{
                        this.giftCardData.giftText=text
                        this.descriptio=text
                    }}/>
                <div className='submit-btn' >
                    <button type='submit' onClick={()=>{this.sendPhoneRequireConfirmation()}}>XÁC NHẬN</button>
                </div>
            </Bound>
        )
    }
}

const mapStateToProps = state => {
    return state
};

const mapDispatchToProps = dispatch => ({
    showReviewGiftCard: (giftCardData) => dispatch(showReviewGiftCard(giftCardData)),
    sendPhoneRequireConfirmation: (type, user, currency, description) => dispatch(sendPhoneRequireConfirmation(type, user, currency, description)),
});

export default connect(mapStateToProps,mapDispatchToProps,null,{ forwardRef: true })(FormSendGift);