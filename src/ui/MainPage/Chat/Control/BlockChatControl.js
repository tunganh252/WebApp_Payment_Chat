import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from "react-redux";

//data
// import {userLogin} from '../../../../data/mockData'
//image
import ic_star from '../../../../images/ic_star.svg'
//action
import {changeUserChat} from '../../../../actions/chatAction'
//component
import GroupAvatarControl from './GroupAvatarControl'

const Bound = styled.div`
    display:flex;
    width:100%;
    height:80px;
    box-shadow: inset 0 -1px 0 0 rgba(0, 0, 0, 0.07);
    flex-direction:row;
    align-items:center;
    cursor: pointer;
    position: relative;
    .contact-line-active{
        position: absolute;
        background-color: #01a8ff;
        width:4px;
        height:100%;
        top:0;
        right:-4px;
        transition-property:right;
        transition-duration:300ms;
        transition-timing-function:linear;
    }
    .avatar{
        position: relative;
        display:flex;
        align-items:center;
        justify-content:center;
        width: 48px;
        height: 48px;
        border-style: solid;
        border-width: 1px;
        border-color: transparent;
        border-radius:50%;
        margin:0 10px 0 8px;
        ::after{
            position: absolute;
            top: 0; bottom: 0;
            left: 0; right: 0;
            background: #fff;
            content: '';
            border-radius: 50%;
        }
        img{
            display:flex;
            width: 40px;
            height: 40px;
            object-fit: cover;
            border-radius:50%;
            z-index:1;
        }
    }
    .user-contact{
        display:flex;
        flex-direction:column;
        flex:1;
        width:calc(100% - 68px);
        height:100%;
        p{
            font-family: UTM-Avo;
            font-size: 10px;
            font-style: normal;
            font-weight: normal;
            font-stretch: normal;
            line-height: normal;
            letter-spacing: normal;
        }
        div{
            display:flex;
            flex-direction:row;
            flex:1;
        }
        .top{
            align-items:flex-end;
            margin-bottom:3px;
            position: relative;
            .user-name{
                font-family: Roboto;
                font-size: 14px;
                font-weight: 500;
                color: #050c1d;
            }
            .p-time{
                position: absolute;
                right:10px;
                line-height:1.71;
                color: #9ea1ab;
                z-index:1;
            }
            .star{
                width:16px;
                height:16px;
                position: absolute;
                right:10px;
                z-index:1;
            }
        }
        .bottom{
            align-items:flex-start;
            flex-direction:column;
            .p-mess{
                display: block;
                flex:1;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
                line-clamp:2;
                width:calc(100% - 10px);
                line-height: 1.5;
                text-overflow: ellipsis;
                overflow: hidden;
                white-space: nowrap;
                padding-right:10px;
                color: #828897;
            }
            .avatar-group{
                display:flex;
                flex:1;
                flex-direction:row;
                img{
                    width:14px;
                    height:14px;
                    margin-right:4px;
                    border-radius:50%;
                }
            }
        }
    }
`

class BlockChatControl extends Component {
    state={
        user:this.props.user,
        lastMess:'',
        isActive:false
    }
    componentWillMount(){
        let {user} = this.props
        if(user){
            if(user.chats && user.chats.length>0){
                this.setState({lastMess:user.chats[user.chats.length-1]})
            }
        }
    }
    componentDidMount(){
        let {userSelected} = this.props
        this.toggleActiveBlockChat(userSelected)
    }
    componentWillReceiveProps(n){
        if(n){
            this.toggleActiveBlockChat(n.userSelected)
        }
    }
    toggleActiveBlockChat=(userSelected)=>{
        let {index} = this.props
        let lineActive = document.getElementById('contact-line-active-id-'+index)
        let {user} = this.state
        if(lineActive){
            if(!userSelected){
                if(index === -1){
                    lineActive.style.right='0px'
                }
            }
            else{
                
                if(userSelected.id === user.id){
                    lineActive.style.right='0px'
                }
                else{
                    lineActive.style.right='-4px'
                }
            }
        }
    }
    renderAvatarGroup(){
        let {user} = this.state
        if(user&&user.member){
            return user.member.map((data,i)=>{
                return(
                    <img key={i} src={data.avatar} alt='member avatar'></img>
                )
            })
        }
    }
    render() {
        let {index} = this.props
        let {user, lastMess} = this.state
        return (
            <Bound onClick={()=>this.props.onChangeContact(user)}>
                <div id={'contact-line-active-id-'+index} className='contact-line-active'/>
                <div className='avatar' 
                    style={{
                        backgroundImage:user.isOnline?'linear-gradient(to top, #00cfff, #0065ff, #005bec)':'unset',
                        borderColor:user.isOnline?'transparent':'#f2f2f2'
                    }}>
                    {
                        user.isGroup&&user.member&&user.member.length>=2?
                        <GroupAvatarControl member={user.member} width={40} height={40}/>
                        :
                        <img src={user.avatar} alt='avatar'/>
                    }
                </div>
                <div className='user-contact'>
                    <div className='top'>
                        <p className='user-name'>{user.name}</p>
                        
                        {
                            user.isMarked?
                            <img src={ic_star} alt='mark' className='star'/>
                            :
                            <p className='p-time'>{lastMess.time}</p>
                        }
                        
                    </div>
                    <div className='bottom'>
                        <p className='p-mess'>{lastMess.messInfo.text}</p>
                        {
                            user.isGroup&&user.member&&
                            <div className='avatar-group'>
                                {this.renderAvatarGroup()}
                            </div>
                        }
                    </div>
                </div>
            </Bound>
        )
    }
}

const mapStateToProps = state => ({
    userSelected: state.chatReducer.userSelected
});

const mapDispatchToProps = dispatch => ({
    onChangeContact: (user) => dispatch(changeUserChat(user)),
});

export default connect(mapStateToProps,mapDispatchToProps,null,{ forwardRef: true })(BlockChatControl);
  