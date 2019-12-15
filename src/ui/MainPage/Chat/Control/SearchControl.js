import React, { Component } from 'react'
import styled from 'styled-components'

//image
import ic_search from '../../../../images/ic_search.svg'

const Bound = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    width:100%;
    height:80px;
    box-shadow: inset 0 -1px 0 0 rgba(0, 0, 0, 0.07);
    img{
        display:flex;
        width:22%.5px;
        height:22%.5px;
        margin: 0 20px;
    }
    input{
        display:flex;
        flex:1;
        border:none;
        outline:none;
        font-family: UTM-Avo;
        font-size: 12px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.6;
        letter-spacing: 0.1px;
        color: #050c1d;
        ::placeholder {
            color: rgba(5, 12, 29, 0.25);
        }
    }
`

export default class SearchControl extends Component {
    render() {
        return (
            <Bound>
                <img src={ic_search} alt='search user'/>
                <input type='text' placeholder='Tìm kiếm danh bạ'/>
            </Bound>
        )
    }
}
