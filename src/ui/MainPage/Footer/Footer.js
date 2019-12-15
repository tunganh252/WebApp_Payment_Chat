import React, { Component } from 'react'
import styled from 'styled-components'

//data
import {footerMenuData, socialData} from '../../../data/footerData'

const Bound = styled.div`
    display:flex;
    height:50px;
    padding-top:10px;
    grid-column:2/ span 1;
    flex-direction:row;
    justify-content:space-between;
    font-family: UTM-Avo;
    font-size: 10px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: 1.6;
    letter-spacing: 0.1px;
    color: #828897;
    .footer-menu,.social{
        display:flex;
        flex-direction:row;
        height:fit-content;
    }
    .footer-menu{
        a{
            border-right: 1px solid #828897;
            padding: 0 10px;
            margin:0;
            :last-child{
                border-right:unset;
            }
        }
    }
    a{
        display:flex;
        flex-direction:row;
        align-items:center;
        text-decoration:none;
        margin-right:20px;
        color: #828897;
        img{
            margin-right:10px;
        }
        :last-child{
            margin-right:0;
        }
    }
    p{
        height:fit-content;
    }
`

export default class Footer extends Component {

    renderFooterMenu(){
        return footerMenuData.map((data, i)=>{
            return(
                <a key={i} href="/#">{data.title}</a>
            )
        })
    }
    renderSocial(){
        return socialData.map((data, i)=>{
            return(
                <a key={i} href='/#'>
                    <img src={data.icon} alt="icon"/>
                    {data.title}
                </a>
            )
        })
    }
    render() {
        return (
            <Bound>
                <div className='footer-menu'>
                    {this.renderFooterMenu()}
                </div>
                <div className='social'>
                    {this.renderSocial()}
                </div>
                <p>Copyright © 2019 Test. All rights reserved.</p>
            </Bound>
        )
    }
}
