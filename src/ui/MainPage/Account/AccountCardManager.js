import React, { Component } from 'react'
import styled from 'styled-components'
import {connect} from 'react-redux';

//image
import ic_arrow_left from '../../../images/ic_arrow-left.svg'
import ic_arrow_down from '../../../images/ic_arrow_down_black.svg'
import PopupBankCard from './PopupBankCard'
import { bankCard } from '../../../data/mockData'
import { revestNumber } from '../../../tools'
import { _getBoundingClientRect } from '../../../tools/tools'
import { showPopupOptional } from '../../../actions/popupAction';
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
        position: relative;
        .show-popup-range{
            opacity:1;
            transform:scale(1);
        }        
        p{
            font-family: 'Roboto';
            font-size: 10px;
            font-weight: normal;
            color: #737985;
            margin-bottom: 10px;
            :first-child{
                text-transform: uppercase;
            }            
            :nth-child(2){
                font-family: 'UTM-Avo';
                font-size: 14px;
                color: #222222;
            }
        }
        img{
            margin-left: 12px;
            cursor: pointer;
        }
        .switch {
            position: relative;
            display: inline-block;
            width: 42.5px;
            height: 25.83px;
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
            border-radius: 25.83px;
            }
            .slider.round:before {
            border-radius: 50%;
            }
        }
    }
    .note{
        font-family: 'UTM-Avo';
        font-size: 11px;
        font-weight: normal;
        color: #bababa;
    }
`

 class AccountCardManager extends Component {
    state = {
        data: this.props.data,
        isIndex: '',
        isShow: false,
        value: 1000000,
        dataOffset: {
            top: 0,
            left: 0
        }
    }
    handleOnClick = (isIndex) => {
        this.props.receiveIndex(isIndex)
    }

    showPopUp =  () => {
        const test = _getBoundingClientRect("showCardBank", 0, 0);
        this.setState({
                dataOffset:test,
                isShow:!this.state.isShow
        });

        // document.getElementById('popup-range').classList.toggle('show-popup-range');
        // document.getElementById('account-scroll')

    }
    getValue = (isValue) => {
        this.setState({ value: isValue })
    }

    
    componentDidMount(){
        const test = _getBoundingClientRect("showCardBank", 0, 0);
        this.setState({dataOffset:test })
    }
    render() {
        const { data } = this.state
        return (
            <Bound>
                <div className='title'>
                    <img onClick={() => this.handleOnClick(0)} src={ic_arrow_left} alt='icon-arrow-left' />
                    <p>Quản lý thẻ</p>
                </div>
                <div className='row-info'>
                    <p>Hạn mức tối đa /giao dịch</p>
                    <p>{data.bank.transactionLevel}<img onClick={() => { }} src={ic_arrow_down} alt='icon-arrow_down' /></p>
                </div>
                <div className='row-info'>
                    <p>Hạn mức tối đa /ngày</p>
                    <p>{data.bank.transactionLimitDate}<img onClick={() => { }} src={ic_arrow_down} alt='icon-arrow_down' /></p>
                </div>
                <div className='note'>Hạn mức giao dịch tối đa theo ngày không giới hạn số lượt giao dịch có thể thực hiện.</div>
                <div className='row-info'>
                    <p>Bỏ qua smart OTP</p>
                    <label className="switch">
                        <input type="checkbox" />
                        <span className="slider round"></span>
                    </label>
                </div>
                <div className='note'>Tính năng cho phép người dùng giao dịch không cần xác thực Smart OTP khi số tiền giao dịch nhỏ hơn hạn mức được cài đặt.</div>
                <div className='row-info'>
                    <p>Hạn mức tối đa /ngày</p>
                    <p id="showCardBank">{revestNumber(this.state.value)}<img onClick={() => { this.showPopUp() }} src={ic_arrow_down} alt='icon-arrow_down' /></p>
                    {
                        this.state.isShow &&
                            <PopupBankCard
                            dataOffset={this.state.dataOffset}
                            data={bankCard} getValue={this.getValue} />
                    }
                </div>
            </Bound>
        )
    }
}



const mapDispatchToProps = (dispatch, ownProps) => ({
    showPopupOptional: (transaction) => dispatch(showPopupOptional(transaction)),
  });
  const mapStateToProps = (state, ownProps) => ({
  
  });
  
  export default connect(mapStateToProps, mapDispatchToProps, null, { forwardRef: true })(AccountCardManager);
  
