import React, { Component } from 'react'
import styled from 'styled-components'
import {Route} from 'react-router-dom'
import {Switch, Redirect,withRouter} from 'react-router'
import { connect } from "react-redux";
//component
import Menu from './Menu/Menu' 
import HomeContainer from './Home/HomeContainer'
import ChatContainer from './Chat/ChatContainer'
import HistoriesContainer from './Histories/HistoriesContainer'
import Account from './Account/Account'
import Footer from './Footer/Footer'
import PopupContainer from './Popup/PopupContainer'
import ReviewGiftCardContainer from './Popup/ReviewGiftCardContainer'



import * as types from "../../actions/types"
// import { filterTest, flattenObject } from '../../tools/tools';

// const mainPadding = 200

const Bound = styled.div`
    position:relative;
    width:100%;
    height:100%;
    .main-bound{
        width:100%;
        height:100%;
        background-image: linear-gradient(to top, #00cfff, #0065ff, #005bec);
        background-size:100% 200px;
        background-repeat:no-repeat;
        background-position:top left;
        background-color:#F5F7F9;
        display:grid;
        grid-template-columns: 200px 1fr 200px;
        grid-template-rows:80px auto 60px;
        grid-row-gap: 20px;
        justify-content: center;
        .padding-container{
            width:200px;
            grid-row:1/ span 3;
            @media screen and (max-width: 1424px) {
                width:unset;
            }
        }
        .left{
            grid-column:1/ span 1;
        }
        .right{
            grid-column:3/ span 1;
        }
        .container{
            @media screen and (max-width: 1424px) {
                width:1024px;
            }
        }
        @media screen and (max-width: 1424px) {
            grid-template-columns: 1fr 1024px 1fr;
        }
    }
    
`

class MainPage extends Component {
    popupData=null;
    giftData=null;
    state = {
        isShowPopupTrans:false,
        isShowReviewGiftCard:false,
        isShowPopupOption: false
    }
    componentWillReceiveProps(n){
        if(n){
            if(n.popupReducer){
                this.handlePopupTransaction(n.popupReducer)
            }
        }
    }
    handlePopupTransaction=(popupReducer)=>{
        if(popupReducer.type===types.SHOW_POPUP_TRANSACTION){
            this.popupData = popupReducer.popup;
            this.setState({isShowPopupTrans:true})
        }
        if(popupReducer.type===types.SHOW_POPUP_PHONE_CONFIRM){
            this.popupData = popupReducer.popup;
            this.setState({isShowPopupTrans:true})
        }
        if(popupReducer.type===types.HIDE_POPUP_TRANSACTION){
            this.popupData = null;
            this.setState({isShowPopupTrans:false})
        }
        if(popupReducer.type===types.SEND_USER_REQUIRE_CONFIRMATION)   {
            this.popupData = null;
            if( window.location.pathname!=='/messages'){
                this.props.history.push('/messages')   
                //todo             
            }
            this.setState({isShowPopupTrans:false})
        }
        if(popupReducer.type===types.SHOW_REVIEW_GIFT_CARD){
            this.giftData = popupReducer.giftCard;
            this.setState({isShowReviewGiftCard:true})
        }
        if(popupReducer.type===types.HIDE_REVIEW_GIFT_CARD){
            this.giftData = null;
            this.setState({isShowReviewGiftCard:false})
        }
        if(popupReducer.type===types.SEND_PHONE_REQUIRE_CONFIRMATION){
            this.giftData = null;
            this.setState({isShowPopupTrans:true})
        }
        if(popupReducer.type===types.SHOW_POPUP_OPTIONAL){
            this.popupData = popupReducer.popup;
            this.setState({isShowPopupOption:true})
        }
        if(popupReducer.type===types.HIDE_POPUP_OPTIONAL){
            this.popupData = null;
            this.setState({isShowPopupOption:false})
        }
    }
    render() {

        let {isShowPopupTrans, isShowPopupOption, isShowReviewGiftCard} = this.state
        return (
            <Bound>
                <div className='main-bound' style={{filter:isShowPopupTrans?'blur(15px)':'unset'}}>
                    <div className='padding-container left'/>
                    <Menu/>
                    <Switch>
                        <Route exact path="/home" render={()=>{
                            return (
                                <HomeContainer/>
                            )
                        }} />
                        <Route exact path="/messages" render={()=>{
                            return (
                                <ChatContainer/>
                            )
                        }} />
                        <Route path="/account" render={()=>{
                            return (
                                <Account/>
                            )
                        }} />
                        <Route path="/histories"render={()=>{
                            return (
                                <HistoriesContainer/>
                            )
                        }} />
                        <Redirect from='/' to='/home'/>
                    </Switch>
                    <Footer/>
                    <div className='padding-container right'/>
                </div>
                {
                    (isShowPopupTrans || isShowPopupOption )&&
                    <PopupContainer data={this.popupData}/>
                }
                {
                    isShowReviewGiftCard&&
                    <ReviewGiftCardContainer data={this.giftData}/>
                }
            </Bound>
        )
    }
}

const mapStateToProps = state => {
    return({
        popupReducer: state.popupReducer
    })
};

const mapDispatchToProps = dispatch => ({
    
});

export default withRouter (connect(mapStateToProps,mapDispatchToProps,null,{ forwardRef: true })(MainPage));