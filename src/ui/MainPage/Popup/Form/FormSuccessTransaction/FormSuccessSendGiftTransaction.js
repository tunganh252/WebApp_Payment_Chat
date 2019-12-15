import React, { Component } from 'react'
import styled from 'styled-components'

//images
import ic_vnd_black from '../../../../../images/popup/ic_vnd_black.svg'
import ic_rocket from '../../../../../images/popup/ic_rocket.svg'
import bg_user from '../../../../../images/popup/bg_user.svg'
import ic_gift_done from '../../../../../images/popup/ic_gift_done.svg'
import ic_send_done from '../../../../../images/popup/ic_send_done.svg'

const startAnimationTimeout = 1000;
const startFlipTimeout = 200;
const rocketFireDuration = 900;
const flipAvatarDuration = 1000;
const visibleDuration = 500;

const Bound = styled.div`
    display:flex;
    flex:1;
    flex-direction:column;
    align-items:center;
    font-family: UTM-Avo;
    font-size: 15px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    letter-spacing: 0.1px;
    color: #252734;
    text-align:center;
    padding-top:60px;
    position: relative;
    overflow: hidden;
    .success-visible{
        transition-property:opacity;
        transition-duration:${visibleDuration}ms;
    }
    .success-user{
        display:flex;
        line-height: 1.7;
        margin-bottom:5px;
        flex-direction:row;
        align-items:baseline;
        .success-user-name{
            font-weight: bold;
            line-height: 1.6;
            margin:0 4px;
        }
    }
    .success-money{
        display:flex;
        flex-direction:row;
        align-items:center;
        margin-bottom:12px;
        img{
            width: 22px;
            height: 22px;
            object-fit: contain;
            margin-right:10px;
        }
        p{
            font-family: Roboto !important;
            font-size: 34px;
            font-weight: bold !important;
            line-height: 1.41;
            color: #252734;
        }
    }
    .success-avatar{
        width:200px;
        height:200px;
        display:flex;
        justify-content:center;
        align-items:center;
        margin-bottom:8px;
        background-image:url(${bg_user});
        background-position:center;
        background-size:200px 200px;
        background-repeat:no-repeat;
        perspective: 1000px;
        z-index:2;
        .success-avatar-bound{
            position: relative;
            transition: transform ${flipAvatarDuration}ms;
            transform-style: preserve-3d;
            width: 122px;
            height: 122px;
            border-radius:50%;
            .success-avatar-image,.success-avatar-checked{
                display:flex;
                object-fit:contain;
                position: absolute;
                backface-visibility: hidden;
                width: 100%;
                height: 100%;
                border-radius:50%;
                
            }
            .success-avatar-checked{
                transform: rotateY(180deg);
            }   
        }
        
    }
    #success-transaction-done{
        display:flex;
        flex-direction:column;
        align-items:center;
        text-align:center;
        margin-top:30px;
        opacity:0;
        transition-property:opacity;
        transition-duration:${visibleDuration}ms;
        .title-done{
            font-family: Roboto;
            font-size: 24px;
            font-weight: bold;
            line-height: 1.71;
            letter-spacing: normal;
            color: #222222;
        }
        .success-user{
            font-size:16px;
            color: #222222;
            .success-user-name{
                font-weight: bold;
                line-height: 1.5;
            }
        }
        .finish-button{
            width: 150px;
            height: 40px;
            border-radius: 30px;
            box-shadow: 0 4px 8px 0 rgba(255, 255, 255, 0.25);
            margin-top:25px;
            display:flex;
            justify-content:center;
            align-items:center;
            cursor: pointer;
            p{
                font-family: Roboto;
                font-size: 12px;
                font-weight: bold;
                line-height: 1.83;
                letter-spacing: 0.5px;
                color: #ffffff;
            }
        }
    }
    .success-rocket-way{
        position: absolute;
        top:0;
        left:50%;
        height:515px;
        transform:translate(-50%,0);
        z-index:1;
        width:3px;
        .success-rocket-line{
            position: absolute;
            width:1px;
            height: 106px;
            opacity: 0.25;
            border-style: solid;
            border-width: 0.5px;
            border-image-source:linear-gradient(to top, #9000ff, #482ef6);
            border-image-slice:0.5px;
            background-image: linear-gradient(to top, #9000ff, #482ef6);
            left:50%;
            bottom:47.4px;
            transform:translate(-50%,0);
        }
        #rocket{
            position: absolute;
            width: 19px;
            height: 36px;
            object-fit: contain;
            left:50%;
            top:calc(100% - 35.4px);
            transform:translate(-50%,0);
            transition-property:top;
            transition-duration:${rocketFireDuration}ms;
            transition-timing-function:ease-in;
        }
        .fire-rocket{
            width:100px;
            font-size: 14px;
            line-height:1.6;
            position: absolute;
            left:50%;
            bottom:-34px;
            transform:translate(-50%,0);
        }
    }
`

export default class FormSuccessSendTransaction extends Component {

    componentDidMount(){
        setTimeout(() => {
            this.startAnim()
        }, startAnimationTimeout);
    }
    startAnim=()=>{
        let rocket = document.getElementById('rocket');
        if(rocket){
            rocket.style.top='-100px';
            let avatar = document.getElementById('avatar-bound-id')
            if(avatar){
                setTimeout(() => {
                    avatar.style.transform='rotateY(180deg)'
                    let visibleArr = document.getElementsByClassName('success-visible')
                    if(visibleArr){
                        setTimeout(() => {
                            for(let i = 0; i< visibleArr.length;i++){
                                if(visibleArr[i]){
                                    visibleArr[i].style.opacity = 0;
                                }
                            }
                            let successDone = document.getElementById('success-transaction-done')
                            let rocketWay = document.getElementById('success-rocket-way')
                            if(successDone&&rocketWay){
                                setTimeout(() => {
                                    rocketWay.style.display = 'none';
                                    successDone.style.opacity = 1;
                                }, visibleDuration);
                            }
                        }, flipAvatarDuration - 400);
                    }
                }, startFlipTimeout);
            }
            
        }
    }
    render() {
        let {transaction} = this.props
        console.log(transaction)
        return (
            <Bound>
                <span className='success-user success-visible'>You’re sending {transaction.type==='gift'&&'gift'} to <p className='success-user-name'>{transaction.user.name}</p></span>
                <div className='success-money success-visible'>
                    <img src={ic_vnd_black} alt='money'/>
                    <p>{transaction.currency.replace( /\B(?=(\d{3})+(?!\d))/g, "." )}</p>
                </div>
                <div className='success-avatar'>
                    <div className='success-avatar-bound' id='avatar-bound-id'>
                        <img className='success-avatar-image' src={transaction.user.avatar} alt='avatar'/>
                        <img className='success-avatar-checked' src={transaction.type==='send'?ic_send_done:ic_gift_done} alt='cheked'/>
                    </div>
                </div>
                <div id='success-transaction-done'>
                    <p className='title-done'>{transaction.type==='gift'?'Tặng Quà':'Gửi Tiền'}</p>
                    <span className='success-user'>Bạn đã gửi thành công </span>
                    <span className='success-user'><p className='success-user-name'>
                        {transaction.currency.replace( /\B(?=(\d{3})+(?!\d))/g, "." ) + ' VND'}</p> tới <p className='success-user-name'>{transaction.user.name}</p></span>
                    <div className='finish-button' style={{backgroundImage:transaction.type==='send'?'linear-gradient(to top, #9000ff, #482ef6)':'linear-gradient(to top, #f61280, #ea57db)'}}
                        onClick={()=>this.props.hidePopupTransaction()}>
                        <p>XONG</p>
                    </div>
                </div>
                <div className='success-rocket-way success-visible' id='success-rocket-way'>
                    <div className='success-rocket-line'/>
                    <img id='rocket' src={ic_rocket} alt='rocket'/>
                    <p className='fire-rocket'>Fire the {transaction.type==='send'?'money':'gift'}</p>
                </div>
            </Bound>
        )
    }
}
