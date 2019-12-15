import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from "react-redux";

//action
import {showPopupTransaction} from '../../../actions/popupAction'

//data
import {transactionButton} from '../../../data/data'
// import {userLogin} from '../../../data/mockData'

//image
import ic_search from '../../../images/ic_search.svg'
import ic_arrow_down from '../../../images/ic_arrow_down.svg'

//component
import GroupAvatarControl from './Control/GroupAvatarControl'

const Bound = styled.div`
    display:flex;
    flex:1;
    grid-column:10/ span 3;
    box-shadow: inset 1px 1px 0 0 rgba(0, 0, 0, 0.07);
    flex-direction:column;
    overflow:hidden;
    p{
        font-family: UTM-Avo;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        font-size: 12px;
        line-height: 1.6;
        letter-spacing: 0.1px;
        color: #222222;
    }
    .block{
        display:flex;
        /* width:calc(100% - 40px); */
        height:39.5px;
        border-bottom:0.5px solid #e2e2e2;
        flex-direction:row;
        align-items:center;
        padding:0 20px;
        cursor:pointer;
    }
    .controller-user-info{
        display:flex;
        width:100%;
        height:189.5px;
        border-bottom:0.5px solid #e2e2e2;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        img{
            width:92px;
            height:92px;
            border-radius:50%;
            object-fit:cover;
        }
        .full-name{
            margin-top:15px;
            font-family: Roboto;
            font-size: 16px;
            font-weight: 500;
            margin-bottom:3px;
            color: #050c1d;
            letter-spacing: normal;
        }
        .user-name{
            font-size: 10px;
            line-height: 1.71;
            color: #484a5d;
            letter-spacing: normal;
        }
    }
    .controller-transaction{
        display:flex;
        width:100%;
        height:69.5px;
        border-bottom:0.5px solid #e2e2e2;
        flex-direction:row;
        align-items:center;
        justify-content:center;
        .transaction-btn{
            width:40px;
            height:40px;
            margin-right:14px;
            cursor: pointer;
            :last-child{
                margin-right:0px;
            }
        }
    }
    .controller-search-mess{
        p{
            display:flex;
            flex:1;
        }
        img{
            display:flex;
            width:20px;
            height:20px;
            margin-left:5px;
        }
    }
    .controller-transaction-his{

    }
    .controller-notification-toggle{
        p{
            display:flex;
            flex:1;
        }
        .toogle-btn{
            flex:unset;
        }
    }
    .controller-share-file{
        p{
            display:flex;
            flex:1;
        }
        img{
            display:flex;
            width:20px;
            height:8px;
            margin-left:5px;
            object-fit: contain;
        }
    }
    .share-file-collection{
        display:flex;
        flex:1;
        overflow:auto;
        .collection-scroll{
            display:grid;
            flex:1;
            width:100%; 
            grid-template-columns:repeat(3, 1fr);
            grid-auto-rows: minmax(min-content, max-content);
            margin-bottom: auto;
            overflow:hidden;
            .file-item{
                width:100%;
                object-fit:cover;
            }
        }
        
    }
`

class Controller extends Component {
    state={
        user:this.props.userSelected,
        isNotify:true
    }
    componentDidMount(){
        this.refreshUI()
        window.addEventListener('resize',this.refreshUI)
    }
    componentWillReceiveProps(n){
        if(n){
            let {userSelected} = n
            if(userSelected){
                this.setState({user:userSelected},()=>this.refreshUI())
            }
        }
    }
    componentWillUnmount(){
        window.removeEventListener('resize',this.refreshUI)
    }
    refreshUI=()=>{
        let collectionBound = document.getElementById('collection-id');
        let collectionArr = document.getElementsByClassName('file-item')
        if(collectionBound){
            let height = collectionBound.offsetWidth/3;
            collectionBound.style.gridTemplateRows=height+'px';
            if(collectionArr){
                for(let i = 0; i< collectionArr.length;i++){
                    collectionArr[i].style.height=height+'px';
                }
            }
        }
    }

    //todo
    renderTransactionButton(){
        let {user} = this.state
        return transactionButton.map((data, i)=>{
            return (
                <img key={i} className='transaction-btn' src={data.background} alt={data.key}
                    onClick={()=>{this.props.showPopupTransaction(data.key, user)}}/>
            )
        })
    }
    renderFileCollection(){
        let {user} = this.state
        if(user.collection && user.collection.length>0){
            return user.collection.map((data, i)=>{
                return (
                    <img key={i} className='file-item' src={data} alt='file'
                        onClick={()=>{}}/>
                )
            })
        }
    }
    render() {
        let {user,isNotify} = this.state
        return (
            <Bound>
                <div className='controller-user-info'>
                    {
                        user.isGroup&&user.member&&user.member.length>=2?
                        <GroupAvatarControl member={user.member} width={92} height={92}/>
                        :
                        <img src={user.avatar} alt='avatar'/>
                    }
                    <p className='full-name'>{user.name}</p>
                    {
                        !user.isGroup&&
                        <p className='user-name'>{'@'+user.username}</p>
                    }
                </div>
                {
                    user.id!==-1&&
                    <div className='controller-transaction'>
                        {this.renderTransactionButton()}
                    </div>
                }
                <div className='block controller-search-mess'>
                    <p>Tìm kiếm tin nhắn</p>
                    <img src={ic_search} alt='search user'/>
                </div>
                <div className='block controller-transaction-his'>
                    <p>Lịch sử giao dịch</p>
                </div>
                <div className='block controller-notification-toggle' onClick={()=>{this.setState({isNotify:!isNotify})}}>
                    <p>Thông báo</p>
                    <p className='toogle-btn'
                        style={{color:isNotify?'#0075ff':'#828897'}}>
                        {isNotify?'BẬT':'TẮT'}
                    </p>
                </div>
                {
                    user.id!==-1&&
                    <div className='block controller-share-file'>
                        <p>Phương tiện được chia sẻ</p>
                        <img src={ic_arrow_down} alt='arrow'/>
                    </div>
                }
                {/* {
                    user.id!==-1&& */}
                    <div className='share-file-collection' id='collection-id'>
                        <div className='collection-scroll'>
                            {this.renderFileCollection()}
                        </div>
                    </div>
                {/* } */}
            </Bound>
        )
    }
}

const mapStateToProps = state => ({
    userSelected: state.chatReducer.userSelected,
});

const mapDispatchToProps = dispatch => ({
    showPopupTransaction: (popupType,popupData) => dispatch(showPopupTransaction(popupType, popupData))
});

export default connect(mapStateToProps,mapDispatchToProps,null,{ forwardRef: true })(Controller);