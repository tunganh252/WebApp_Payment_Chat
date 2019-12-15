import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from "react-redux";

//action
import {hideReviewGiftCard} from '../../../actions/popupAction'
//image
import ic_close_white from '../../../images/ic_close_white.svg'
import replay from '../../../images/replay.svg'

const Bound = styled.div`
    display:flex;
    width:100vw;
    height:100vh;
    min-width:1024px;
    position:absolute;
    top:0;
    left:0;
    z-index:10;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    background-color: rgba(37, 39, 52, 0.85);
    perspective: 1000px;
    .ic-close{
        width:16px;
        height:16px;
        position:absolute;
        top:30px;
        right:30px;
        cursor: pointer;
    }
    .gift-card-container{
        width: 346.3px;
        height: 480px;
        border-radius: 10px;
        position: relative;
        transition: transform 1s;
        transform-style: preserve-3d;
        .front,.back{
            position: absolute;
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
            border-radius: 10px;
            background-repeat:no-repeat;
            background-size:100% 100%;
            background-position:center center;
        }
        .front{
            
        }
        .back{
            transform: rotateY(180deg);
            display:flex;
            justify-content:center;
            align-items:${props=>props.giftCard.text.position.alignItems};
            .gift-text{
                display:flex;
                justify-content:center;
                /* align-items:center; */
                width:${props=>props.giftCard.text.position.width}px;
                height:${props=>props.giftCard.text.position.height}px;
                margin-top:${props=>props.giftCard.text.position.marginTop?props.giftCard.text.position.marginTop+'px':'unset'};
                margin-bottom:${props=>props.giftCard.text.position.marginBottom?props.giftCard.text.position.marginBottom+'px':'unset'};
                color:${props=>props.giftCard.text.color};
                font-family:Roboto;
                font-size:13px;
                font-weight:400;
                line-height:15px;
                text-align:center;
            }
        }
    }
    .rep-button{
        display:flex;
        flex-direction:row;
        align-items:center;
        margin-top:40px;
        cursor: pointer;
        img{
            width:13px;
            height:16px;
            margin-right:5px;
        }
        p{
            font-family: Roboto;
            font-style: normal;
            font-weight: bold;
            font-size: 13px;
            line-height: 20px;
            color: #FFFFFF;
        }
    }
`

class ReviewGiftCardContainer extends Component {
    isFlip=false
    componentDidMount(){
        setTimeout(() => {
            this.toggleFlipCard()
        }, 1000);
    }
    toggleFlipCard=()=>{
        let giftCard=document.getElementById('flip-card-id')
        if(giftCard){
            if(this.isFlip){
                giftCard.style.transform='rotateY(0deg)';
                this.isFlip=false
            }
            else{
                giftCard.style.transform='rotateY(180deg)';
                this.isFlip=true
            }
        }
    }
    render() {
        let {data} = this.props
        console.log(data.giftCard.text)
        return (
            <Bound giftCard={data.giftCard}>
                <img className='ic-close' src={ic_close_white} alt='close' onClick={()=>{this.props.hideReviewGiftCard()}}/>
                <div className='gift-card-container' id='flip-card-id'>
                    <div style={{backgroundImage:'url('+data.giftCard.front+')'}} className='front' alt='front'/>
                    <div style={{backgroundImage:'url('+data.giftCard.back+')'}} className='back' alt='back'>
                        <div className='gift-text'>
                            <p>{data.giftText}</p>
                        </div>
                    </div>
                </div>
                <div className='rep-button' onClick={()=>this.toggleFlipCard()}>
                    <img src={replay} alt='replay'/>
                    <p>Xem trước/ sau</p>
                </div>
            </Bound>
        )
    }
}

const mapStateToProps = state => {
    return state
};

const mapDispatchToProps = dispatch => ({
    hideReviewGiftCard: () => dispatch(hideReviewGiftCard())
});

export default connect(mapStateToProps,mapDispatchToProps,null,{ forwardRef: true })(ReviewGiftCardContainer);

