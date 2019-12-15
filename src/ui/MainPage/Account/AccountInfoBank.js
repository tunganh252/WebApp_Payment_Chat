import React, { Component } from 'react'
import styled from 'styled-components'
const Bound = styled.div`
    display: flex;
    flex-direction: column;    
    .row-info{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;
        height: 60px;
        box-shadow: inset 0 -0.5px 0 0 #d0d4da;
        background-color: rgba(0, 0, 0, 0);
        align-items: flex-end; 
        position: relative;
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
            img{
                width: 6px;
                height: 12px;
                position: absolute;
                right: 15px;
                bottom: 12px; 
                cursor: pointer;               
            }
        }        
    }
    .title{
        font-family: 'UTM-Avo';
        font-size: 18px;
        font-weight: bold;
        color: #222222;
        margin-top: 6%;
    }
    .cancel{
        font-family: 'UTM-Avo';
        font-size: 14px;
        font-weight: normal;
        color: #e43a3a;
        text-align: end;
        margin-top: 50px;
    }         
`
export default class AccountInfoBank extends Component {
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
            <Bound>
                <div className='row-info'>
                    <p>Số tài khoản</p>
                    <p>{data.bank.accountNumber}</p>
                </div>
                <div className='row-info'>
                    <p>Chủ tài khoản</p>
                    <p>{data.bank.accountName}</p>
                </div>
                <div className='row-info'>
                    <p>Loại tài khoản</p>
                    <p>{data.bank.accountType}</p>
                </div>
                <div className='title'>Quản lý thẻ</div>
                <div className='row-info'>
                    <p>Thông tin thẻ</p>
                    <p style={{ color: '#0075FF', width: '100px' }} onClick ={() => this.handleOnClick(1)}>
                        {data.bank.cardInfo} 
                        <img  src={data.bank.iconArrow} alt='ic-arrow-next' />
                    </p>
                </div>
                <div className='row-info'>
                    <p>Giới hạn giao dịch</p>
                    <p style={{ color: '#0075FF', width: '100px'}} onClick ={() => this.handleOnClick(2)}>
                        {data.bank.transactionLimit} 
                        <img src={data.bank.iconArrow} alt='ic-arrow-next' />
                    </p>
                </div>
                <div className='cancel'>Huỷ liên kết thẻ</div>                
            </Bound>
        )
    }
}
