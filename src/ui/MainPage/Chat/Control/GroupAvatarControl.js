import React, { Component } from 'react'
import styled from 'styled-components'

//data
import {userLogin} from '../../../../data/mockData'

const Bound = styled.div`
    display:flex;
    width:${props=>props.width}px;
    height:${props=>props.height}px;
    position: relative;
    img{
        margin:0 !important;
    }
    .gr-ava-left{
        position: absolute;
        top:0;
        left:0;
        width:100%!important;
        height:100%!important;
        border-radius:50%!important;
    }
    .gr-ava-topright{
        position: absolute;
        top:0;
        right:0;
        width:50%!important;
        height:50%!important;
        border-radius:0 100% 0 0!important;
    }
    .gr-ava-bottomright{
        position: absolute;
        bottom:0;
        right:0;
        width:50%!important;
        height:50%!important;
        border-radius:0 0 100% 0!important;
    }
`

export default class GroupAvatarControl extends Component {
    render() {
        let {member,width,height} = this.props
        return (
            <Bound width={width} height={height}>
                <img src={userLogin.avatar} alt='avatar mc' className='gr-ava-left'></img>
                {
                    member&&member[0]&&
                    <img src={member[0].avatar} alt='avatar user' className='gr-ava-topright'></img>
                }
                {
                    member&&member[1]&&
                    <img src={member[1].avatar} alt='avatar user' className='gr-ava-bottomright'></img>
                }
            </Bound>
        )
    }
}
