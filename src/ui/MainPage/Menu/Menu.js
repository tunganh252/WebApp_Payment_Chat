import React, { Component } from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

//data
import {menuData} from '../../../data/menuData'
import {userLogin} from '../../../data/mockData'

//image
import logo_wee from '../../../images/logo_wee.svg'
import ic_notification from '../../../images/ic_notification.svg'

const Bound = styled.div`
    display:flex;
    height:80px;
    grid-column:2/ span 1;
    flex-direction:row;
    align-items:center;
    position:relative;
    .language-switcher{
        position:absolute;
        display:flex;
        flex-direction:row;
        right:-100px;
        @media screen and (max-width: 1224px) {
            display:none;
        }
        p{
            font-family: Roboto;
            font-size: 14px;
            font-weight: 300;
            font-style: normal;
            font-stretch: normal;
            line-height: normal;
            letter-spacing: normal;
            color: #ffffff;
            margin-right:20px;
            cursor: pointer;
            :last-child{
                margin-right:0px;
            }
        }
        .active{
            font-weight: bold;
        }
    }
    .logo-wee{
        width: 85px;
        height: 34px;
        object-fit: contain;
        margin-right:60px;
    }
    .menu-container{
        display:flex;
        flex-direction:row;
        align-items:center;
        height:25px;
        position:relative;
        flex:1;
        a{
            text-transform:uppercase;
            font-family: Roboto;
            font-size: 12px;
            font-weight: bold;
            font-style: normal;
            font-stretch: normal;
            line-height: normal;
            letter-spacing: 1.5px;
            color: #ffffff;
            text-decoration:none;
            margin-right:20px;
            :last-child{
                margin-right:0;
            }
        }
        #line-active{
            position:absolute;
            bottom:0;
            left:0;
            height:2px;
            border-radius:0.5px;
            background-color:#ffffff;
            transition-property:left, width;
            transition-duration:500ms;
        }
    }
    .notification-btn{
        width:17.2px;
        height:20px;
        margin-right:30px;
        position: relative;
        cursor: pointer;
        img{
            width:17.2px;
            height:20px;
        }
        .notification-count{
            position:absolute;
            display:flex;
            align-items:center;
            justify-content:center;
            height:15px;
            padding:0 5px;
            background-color:#e43a3a;
            border-radius:100px;
            font-family: Roboto;
            font-size: 10px;
            font-weight: 500;
            font-style: normal;
            font-stretch: normal;
            line-height: normal;
            letter-spacing: normal;
            color: #ffffff;
            top:100%;
            left:100%;
            transform:translate(-50%, -50%);
        }
    }
    .user-login-avatar{
        width:36px;
        height:36px;
        border-radius:50%;
        object-fit:cover;
    }
`

export default class Menu extends Component {
    state={
        pathName:'',
        notificationCount:99,
    }
    componentDidMount(){
        setTimeout(() => {
            this.checkActive()
        }, 200);
    }
    componentDidUpdate(){
        setTimeout(() => {
            this.checkActive()
        }, 200);
    }
    checkActive=()=>{
        let path=window.location.pathname
        if(path&&path.length>0){
            let active = menuData.find(item => '/'+item.key === path)
            if(active){
                let menuActive = document.getElementById('menu-item-'+active.key);
                if(menuActive){
                    this.onActive(menuActive.offsetLeft, menuActive.offsetWidth)                           
                }
            }
        }
    }
    renderMenu(){
        return menuData.map((data, i)=>{
            return(
                <Link to={'/'+data.key} id={'menu-item-'+data.key} key={i} onClick={this.onClickMenuItem}>{data.title}</Link>
            )
        })
    }
    onClickMenuItem=(e)=>{
        let activeItem = e.target
        if(activeItem){
            this.onActive(activeItem.offsetLeft, activeItem.offsetWidth)
        }
    }
    onActive=(left,width)=>{
        let lineActive = document.getElementById('line-active');
        if(lineActive){
            lineActive.style.left = left + 'px'
            lineActive.style.width = width + 'px'
        }
    }
    render() {
        let {notificationCount} = this.state;
        console.log('render lai');
        
        return (
            <Bound>
                <img src={logo_wee} className='logo-wee' alt=''></img>
                <div className='menu-container'>
                    {this.renderMenu()}
                    <div id='line-active'></div>
                </div>
                <div className='notification-btn'>
                    <img src={ic_notification} alt=''></img>
                    {
                        notificationCount>0&&
                        <div className='notification-count'>{notificationCount}</div>
                    }
                </div>
                <img src={userLogin.avatar} className='user-login-avatar' alt=''></img>
                <div className='language-switcher'>
                    <p className='active'>VI</p>
                    <p>EN</p>
                </div>
            </Bound>
        )
    }
}
