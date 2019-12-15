import React, { Component } from 'react'
import styled from 'styled-components'
//component
// import EmptyControl from '../../Control/EmptyControl'
//data
import { userLogin } from "../../../data/mockData"
import AccountInfoBank from './AccountInfoBank'
import AccountCardInfo from './AccountCardInfo'
import AccountCardManager from './AccountCardManager'
const Bound = styled.div`
    display: grid;
    width: 100%;
    grid-template-columns: 415px 1fr; 
    grid-template-rows: auto auto;
    grid-gap: 20px;
    overflow: auto;
    border-radius: 10px;
    &::-webkit-scrollbar {
        /* width: 0;
        height: 0; */
        display: none;
    }
    /* &::-webkit-scrollbar-thumb {
        background: #d9dde3;
        background-clip: padding-box;
        border-radius: 20px;
        border: 7px solid white;
    } */
    .info-user-wrapper{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .avatar{
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-evenly;
            border-radius: 10px;
            box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.07);
            background-color: #ffffff;
            margin-bottom: 20px;
            padding: 8% 0;
            img{
                width: 120px;
                height: 120px;
                border-radius: 50%;
                margin-bottom: 10%;
            }
            p{
                font-family: 'Roboto';
                font-size: 16px;                
                color: #222222;
                font-weight: 500;
                margin-bottom: 6px;
                :nth-child(3){
                    font-weight: 300;
                }
                :nth-child(4){
                    font-family: 'UTM-Avo';
                    font-size: 14px;
                    font-weight: normal;
                    margin-bottom: 21px;
                }
            }
            button{
                width: 241px;
                height: 48px;
                border-radius: 50px;
                border: solid 1.5px #c9cdd6;
                background-color: #ffffff;
            }
        }
        .info-user{
            width: 100%;
            height: 100%;
            padding: 8.6% 7.2%;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            border-radius: 10px;
            box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.07);
            background-color: #ffffff;
            .title{
                font-family: 'UTM-Avo';
                font-size: 18px;
                font-weight: bold;
                color: #222222;
            }
            .row-info{
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                width: 100%;
                height: 60px;
                box-shadow: inset 0 -0.5px 0 0 #d0d4da;
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
            }                 
        }
    }        
    .info-bank{
        grid-column: 2 / span 1;
        padding: 50px 0 0;
        display: flex;
        flex-direction: column;
        border-radius: 10px;
        background: #FFFFFF;
        box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.07);
        position: relative;       
        .header-bank{
            display: flex;
            flex-direction: column;
            justify-content: center;
            img{
                margin-bottom: 28px
            }
            .bank-name{
                font-family: 'Roboto';
                font-size: 16px;
                font-weight: normal;
                color: #000720;
                text-align: center;
                margin-bottom: 40px;
            }  
        }
        .account{
            width: 70%;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
        }                 
    }    
`
export default class Account extends Component {
    state = {
        data: userLogin,
        index: 0
    }
    handleLogOut = () => {

    }
    receiveIndex =(isIndex) =>{      
        this.setState({
            index: isIndex
        })        
    }
    renderAccount = () => {
        const {index} = this.state
        switch (index) {
            case 0:
                return <AccountInfoBank receiveIndex={this.receiveIndex} data ={this.state.data}/>
            case 1:
                return <AccountCardInfo receiveIndex={this.receiveIndex} data ={this.state.data}/>
            case 2:
                return <AccountCardManager receiveIndex={this.receiveIndex} data ={this.state.data}/>       
            default:
                break;
        }
    }
    render() {        
        const { data } = this.state        
        return (
            <Bound id='account-scroll'>
                <div className='info-user-wrapper'>
                    <div className='avatar'>
                        <img src={data.avatar} alt='img-avatar' />
                        <p>{data.fullName}</p>
                        <p>{data.username}</p>
                        <p>{data.phone}</p>
                        <button type='button' name='submit' onClick={() => { this.handleLogOut() }} >Đăng Xuất</button>
                    </div>
                    <div className='info-user'>
                        <div className='title'>Thông tin cá nhân</div>
                        <div className='row-info'>
                            <p>Tên đăng ký</p>
                            <p>{data.name}</p>
                        </div>
                        <div className='row-info'>
                            <p>Ngày sinh</p>
                            <p>{data.dateOfBirth}</p>
                        </div>
                        <div className='row-info'>
                            <p>Giới tính</p>
                            <p>{data.gender}</p>
                        </div>
                        <div className='row-info'>
                            <p>Địa chỉ</p>
                            <p>{data.address}</p>
                        </div>
                    </div>
                </div>
                <div className='info-bank'>
                    <div className='header-bank'>
                        <img src={data.bank.logo} alt='logo-vietinbank' />
                        <p className='bank-name'>{data.bank.bankName}</p>
                    </div>
                    <div className='account'>
                        {this.renderAccount()}
                    </div>                                        
                </div>
            {/* <EmptyControl /> */}
            </Bound>
        )
    }
}
