import React, { Component } from 'react'
import styled from 'styled-components'
import {connect} from "react-redux";

import { revestNumber } from '../../../tools'
import ic_scroll_money from '../../../images/ic_scroll_money.svg'

const Bound = styled.div`
    width: 335px;
    height: 170px;
    border-radius: 12px;
    box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.2);
    background-image: linear-gradient(to top, #00cfff, #005cec, #005bec);
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items:center;
    justify-content: space-evenly;
    position: absolute;
    right: 10px;
    top: ${props => props.top || "80px"};
    transition:0.6s;
    transform-origin: 100% 0;

    -webkit-animation-name: showPopupBankCard; /* Safari 4.0 - 8.0 */
    -webkit-animation-duration: 0.6s; /* Safari 4.0 - 8.0 */
    animation-name: showPopupBankCard;
    animation-duration: 0.6s;
    @keyframes showPopupBankCard {
    from {
        opacity:0;
        transform: scale(0);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
    .title-card{
        font-family: 'UTM-Avo';
        font-size: 15px;
        font-weight: normal;
        color: #ffffff;
    }
    .block-money{
        position: relative;
        width: 305px;
        height: 60px;
        border-radius: 8px;
        background-color: #ffffff;
        display: flex;
        align-items: center;
        justify-content: center;
        img{
            position: absolute;
            top: 17px;
            left: 14px;  
            margin-left: unset !important;          
        }        
        .money{
            font-size: 32px;
            margin-bottom: unset;
            font-family: 'Roboto';            
            font-weight: bold;
            color: #000720;
            text-align: center;
        }
    }
    .input-range{
        display: flex;
        flex-direction: column;
        width: 100%;
        padding: 0 15px;
        .number-money{
            display: flex;
            flex-direction: row;  
            justify-content: space-between;        
            font-family: 'UTM-Avo';
            font-size: 13px;
            font-weight: bold;
            color: #ffffff;       
        }
        input {
            width: 100%;
            -webkit-appearance: none;
            height: 2px;
            outline:none;
            margin-bottom: 5px;
        }
        input::-webkit-slider-thumb {
            box-shadow: 0px 0px 0px #ffe000;
            width: 20px;
            height: 14px;
            border-radius: 2px;
            background-image: url(${ic_scroll_money});
            cursor: pointer;
            -webkit-appearance: none;
            z-index: 4;
        }
    }
`

class PopupBankCard extends Component {
    state = {
        data: this.props.data,
        value: null,
        dataOffset: {
            top: 70,
        }
    };
    handleChange = (event) => {
        this.setState({ value: event.target.value }, () => {
            this.props.getValue(this.state.value)
        });
    }
    // componentWillReceiveProps(n){
    //     if (n) {
    //         if (n.popupReducer.popup.dataOffset) {
    //             this.setState({
    //                 dataOffset: n.popupReducer.popup.dataOffset
    //             })
    //         }
    //     }
    // }
    componentDidMount(){
        const {dataOffset} = this.props;
        let topPosition;
        if (dataOffset.top + this.PopupBankCard.offsetHeight > window.innerHeight - window.screenTop) {
            topPosition = dataOffset.top - this.PopupBankCard.offsetHeight
        }
        this.setState({
            dataOffset:{
                top:topPosition ? topPosition - this.props.dataOffset.top : 70
            }
        })
    }

    render() {
        const { data,dataOffset } = this.state
        return (
            <Bound id='popup-range'
                top={dataOffset && dataOffset.top + "px"}
                ref={ref => this.PopupBankCard = ref}
            >
                <div className='title-card'>{data.title}</div>
                <div className='block-money'>
                    <img src={data.imageMoney} alt='img-symbol-money' />
                    <div className='money'>{this.state.value ? revestNumber(this.state.value) : revestNumber(data.value)}</div>
                </div>
                <div className='input-range'>
                    <input
                        id="typeinp"
                        type="range"
                        min={data.minValue}
                        max={data.maxValue}
                        value={this.state.value ? this.state.value : data.value}
                        onChange={this.handleChange}
                        step={data.step} />
                    <div className='number-money'>
                        <div>{revestNumber(data.minValue)}</div>
                        <div>{revestNumber(data.maxValue)}</div>
                    </div>
                </div>
            </Bound>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    popupReducer: state.popupReducer
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  
});
  
export default connect(mapStateToProps, mapDispatchToProps, null, { forwardRef: true })(PopupBankCard);