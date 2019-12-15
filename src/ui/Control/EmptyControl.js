import React, { Component } from 'react'
import styled from 'styled-components'

//img
import ic_empty from '../../images/ic_empty.svg'

const Bound = styled.div`
    display:flex;
    flex-direction:column;
    img{
        display:flex;
        width:200px;
        height:200px;
        margin-bottom:30px;
    }
    p{
        display:flex;
        font-family: UTM-Avo;
        font-size: 10px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: normal;
        letter-spacing: 0.1px;
        color: #000000;
    }
`


export default class EmptyControl extends Component {
    render() {
        return (
            <Bound>
                <img src={ic_empty} alt='empty'/>
                <p>Trang này đội thiết kế đang đào bới!  👋</p>
            </Bound>
        )
    }
}
