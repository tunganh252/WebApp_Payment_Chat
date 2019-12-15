import React, { Component } from 'react'
import styled from 'styled-components'

//image
import ic_gift from '../../../images/popup/ic_gift.svg'
import ic_view from '../../../images/popup/ic_view.svg'

//component
import GiftTicketChoiceControl from './GiftTicketChoiceControl'

const Bound = styled.div`
    display:flex;
    flex-direction:column;
    margin:${props=>props.margin};
    width:100%;
    position: relative;
    p{
        font-family: UTM-Avo;
        font-size: 10px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.71;
        letter-spacing: normal;
    }
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
    .gift-container{
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        width: 102px;
        height: 141px;
        border-radius: 10px;
        border: solid 0.5px rgba(201, 205, 214, 0.25);
        background-color: #f2f2f2;
        cursor: pointer;
        .gift-card{
            width: 102px;
            height: 141px;
            border-radius: 10px;
            object-fit:cover;
        }
        .ic_gift{
            display:flex;
            width:21px;
            height:21px;
            object-fit:contain;
            margin-bottom:5px;
        }
        p{
            color: #252734;
        }
    }
    .review{
        display:flex;
        flex-direction:row;
        margin-top:5px;
        align-items:center;
        cursor: pointer;
        img{
            width: 14px;
            height: 7.9px;
            object-fit:contain;
            margin-right:5px;
        }
        p{
            color: #01a8ff;
        }
    }
`

export default class GiftChoiceControl extends Component {
    state = {
        giftCard:{},
        isShowGiftChoice:false
    }
    onCloseGiftChoice=()=>{
        this.setState({isShowGiftChoice:false})
    }
    onChoiceGiftCard=(giftCard)=>{
        console.log(giftCard)
        if(giftCard){
            this.setState({giftCard, isShowGiftChoice:false})
            this.props.onChange(giftCard)
        }
    }
    render() {
        let {title, margin} = this.props
        let {giftCard, isShowGiftChoice} = this.state
        return (
            <Bound margin={margin} className='item-right'>
                <p className='control-title'>{title}</p>
                <div className='gift-container'
                    onClick={()=>this.setState({isShowGiftChoice:!isShowGiftChoice})}>
                    {
                        giftCard&&giftCard.front?
                        <img src={giftCard.front} alt='gift card' className='gift-card'/>
                        :
                        <React.Fragment>
                            <img src={ic_gift} alt='gift' className='ic_gift'/>
                            <p>Nhấn chọn mẫu</p>
                        </React.Fragment>
                    }
                </div>
                {
                    giftCard&&giftCard.front&&giftCard.back&&
                    <div className='review' onClick={()=>{this.props.onReview()}}>
                        <img src={ic_view} alt='review' className='ic-review'/>
                        <p className='p-review'>Xem trước</p>
                    </div>
                }
                {
                    isShowGiftChoice&&
                    <GiftTicketChoiceControl
                        onChoiceGiftCard={this.onChoiceGiftCard}
                        onClose={this.onCloseGiftChoice}/>
                }
            </Bound>
        )
    }
}
