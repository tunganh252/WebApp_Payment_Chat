import React, { Component } from 'react'
import styled from 'styled-components'

//component
import Contacts from './Contacts'
import Chats from './Chats'
import Controller from './Controller'

const Bound = styled.div`
    flex:1;
    grid-column:2/ span 1;
    background-color:#fff;
    border-radius: 10px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.07);
    display:grid;
    grid-template-columns: repeat(12,1fr);
    overflow:hidden;
`

export default class ChatContainer extends Component {
    render() {
        return (
            <Bound className='container'>
                <Contacts/>
                <Chats/>
                <Controller/>
            </Bound>
        )
    }
}
