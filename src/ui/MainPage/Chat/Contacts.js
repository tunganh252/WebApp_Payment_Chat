import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from "react-redux";

//action
import {getAllChat} from '../../../actions/chatAction'

//data
import {weeziAssistant} from '../../../data/data'
// import {listChat} from '../../../data/mockData'

//component
import SearchControl from './Control/SearchControl'
import BlockChatControl from './Control/BlockChatControl'

const Bound = styled.div`
    display:flex;
    flex:1;
    grid-column:1/ span 3;
    box-shadow: inset -1px 1px 0 0 rgba(0, 0, 0, 0.07);
    flex-direction:column;
    overflow:hidden;
    .contact-container{
        flex:1;
        overflow-x:hidden;
        overflow-y:auto;
        &::-webkit-scrollbar {
            width: 4px;
            height: 0;
        }
        &::-webkit-scrollbar-thumb {
            background: #d9dde3;
            background-clip: padding-box;
            border-radius: 20px;
            /* border: 7px solid white; */
        }
        .contact-scroll{
            display:flex;
            flex-direction:column;            
        }
    }
`

class Contacts extends Component {
    contacts = []
    state = {
        chats:this.props.chats,
        indexSelected:-1
    }
    componentWillMount(){
        this.props.getAllChat()
    }
    componentWillReceiveProps(n){
        if(n){
            if(n.chats){
                this.setState({chats:n.chats})
            }
        }
    }
    onSearchContact=(keySearch)=>{
        
    }
    renderListContact(){
        let {chats} = this.state
        return chats.map((data,i)=>{
            return(
                <BlockChatControl key={i} user={data} index={i}/>
            )
        })
    }
    render() {
        return (
            <Bound>
                <SearchControl onSearchContact={()=>this.onSearchContact}/>
                <BlockChatControl user={weeziAssistant} index={-1}/>
                <div className='contact-container'>
                    <div className='contact-scroll'>
                        {this.renderListContact()}
                    </div>
                </div>
            </Bound>
        )
    }
}

const mapStateToProps = state => ({
    chats: state.chatReducer.chats
});

const mapDispatchToProps = dispatch => ({
    getAllChat: () => dispatch(getAllChat()),
});

export default connect(mapStateToProps,mapDispatchToProps,null,{ forwardRef: true })(Contacts);