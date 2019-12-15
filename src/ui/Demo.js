import React, { Component } from 'react'
import styled from 'styled-components'

import {giftData} from  '../data/giftData'

const Bound = styled.div`
    display:flex;
    position: relative;
    width:100vw;
    height:100vh;
    justify-content:center;
    align-items:center;
    perspective: 1000px;
    .flip-box-inner {
        border: 1px solid #f1f1f1;
        background-color: transparent;
        width: 300px;
        height: 200px;
        position: relative;
        text-align: center;
        transition: transform 0.8s;
        transform-style: preserve-3d;
        :hover{
            transform: rotateY(180deg);
        }
        .flip-box-front, .flip-box-back {
            position: absolute;
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
            background-position:center;
            background-repeat:no-repeat;
            background-size:100%;
        }
        .flip-box-front {
            background-color: #bbb;
            color: black;
        }
        .flip-box-back {
            background-color: dodgerblue;
            color: black;
            transform: rotateY(180deg);
            p{
                /* position: absolute; */
                width:13px;
                height:90px;
                /* top:50%;
                left:50%; */
                /* transform:translate(-50%,-50%); */
            }
        }
    }
`

export default class Demo extends Component {
    isFlip=false
    componentDidMount(){
        setTimeout(() => {
            this.toggleFlipCard()
        }, 1000);
    }
    toggleFlipCard=()=>{
        let giftCard=document.getElementById('inner')
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
        return (
            <Bound>
                <div class="flip-box-inner" id='inner'>
                    <div style={{backgroundImage:'url('+giftData[0].tickets[0].front+')'}} className='flip-box-front' alt='front'/>
                    <div style={{backgroundImage:'url('+giftData[0].tickets[0].back+')'}} className='flip-box-back' alt='back'>
                        <p className='gift-text'>text tex teacx</p>
                    </div>
                    {/* <img src={giftData[0].tickets[0].front} className='flip-box-front' alt='front'/>
                    <img src={giftData[0].tickets[0].back} className='flip-box-back' alt='back'/> */}
                </div>
            </Bound>
        )
    }
}
