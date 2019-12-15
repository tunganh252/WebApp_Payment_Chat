import React, { Component } from 'react'
import styled from 'styled-components'
//image
import ic_arrow_left from '../../../images/ic_arrow-left.svg'
const Bound = styled.div`
    display: flex;
    flex-direction: column;
    .title{
        font-family: 'UTM-Avo';
        font-size: 18px;
        font-weight: bold;
        color: #222222;
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-bottom: 2.8%;
        p{
            margin-bottom: unset;
            margin-left: 20px;
        }
    }
    .row-info{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        height: 60px;
        box-shadow: inset 0 -1px 0 0 #d0d4da;
        background-color: rgba(0, 0, 0, 0);
        align-items: flex-end;
        p{
            font-family: 'Roboto';
            font-size: 10px;
            font-weight: normal;
            color: #737985;
            margin-bottom: 10px;
            :first-child{
                text-transform: uppercase;
            }            
            :last-child{
                font-family: 'UTM-Avo';
                font-size: 14px;
                color: #222222;
            }
        }
        img{
            margin-bottom: 6px;
            cursor: pointer;
        }
        .switch {
            position: relative;
            display: inline-block;
            width: 42.5px;
            height: 26px;
            bottom: 8px;
            input{
                opacity: 0;
                width: 0;
                height: 0;
            }
            .slider {
                position: absolute;
                cursor: pointer;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-color: #ccc;
                -webkit-transition: .4s;
                transition: .4s;
            }
            .slider:before {
                position: absolute;
                content: "";
                height: 22px;
                width: 22px;
                left: 2.5px;
                bottom: 2.5px;
                background-color: white;
                -webkit-transition: .4s;
                transition: .4s;
            }
            input:checked + .slider {
                background-color: #2196F3;
            }
            input:checked + .slider:before {
            -webkit-transform: translateX(16px);
            -ms-transform: translateX(16px);
            transform: translateX(16px);
            }
            /* Rounded sliders */
            .slider.round {
            border-radius: 26px;
            }
            .slider.round:before {
            border-radius: 50%;
            }
        }
    }    
`

export default class AccountCardInfo extends Component {
    state ={
        data: this.props.data,
        isIndex: '',
    }
    handleOnClick = (isIndex) =>{        
        this.props.receiveIndex(isIndex)
    }
    render() {
        const { data } = this.state
        return (
            <Bound id='account-card-info'>
                <div className='title'>
                    <img onClick ={() => this.handleOnClick(0)} src={ic_arrow_left} alt='icon-arrow-left'/>
                    <p>Thông tin thẻ</p>
                </div>
                <div className='row-info'>
                    <p>Số thẻ</p>
                    <p>{data.bank.cardNumber}</p>
                </div>
                <div className='row-info'>
                    <p>Họ tên</p>
                    <p>{data.bank.accountName}</p>
                </div>
                <div className='row-info'>
                    <p>Loại tài khoản</p>
                    <p>{data.bank.accountType}</p>
                </div>
                <div className='row-info'>
                    <p>Ngày phát hành</p>
                    <p>{data.bank.date}</p>
                </div>
                <div className='row-info'>
                    <p>Khoá thẻ</p>
                    <label className="switch">
                        <input type="checkbox"/>
                        <span className="slider round"></span>
                    </label>
                </div>                
            </Bound>
        )
    }
}
