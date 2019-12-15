import React, { Component } from 'react'
import styled from 'styled-components'

//image
import ic_addcontact from '../../../images/popup/ic_addcontact.svg'
import ic_edit from '../../../images/popup/ic_edit.svg'
import circle_blue from '../../../images/popup/circle_blue.svg'
import { choiceOption } from '../../../data/data'

const Bound = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
    .contact-avatar{
        position: relative;
        width:50px;
        height:50px;
        margin-right:15px;
        cursor: pointer;
        .img_avatar{
            display:flex;
            width:50px;
            height:50px;
            border-radius:50%;
        }
        .img_edit{
            width:13px;
            height:13px;
            position:absolute;
            border-radius:50%;
            right:0;
            bottom:0;
        }
        .block_branch{
            position: relative;
            .content {
                position: absolute;
                top: 50%;
                left: 50%;
                transform:translate(-50%, -50%);
                background-image: linear-gradient(29.74deg, #00CFFF 0%, #0065FF 100%, #005BEC 100%);
                -webkit-background-clip: text;
                background-clip: text;
                -webkit-text-fill-color: transparent;
            }
        }
    }
    p{
        font-family: UTM-Avo;
        font-size: 14px;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        line-height: 1.6;
        letter-spacing: 0.1px;
        color: #222222;
    }
`

export default class ContactItem extends Component {
    state = {
        user: this.props.user,
        type: this.props.type || choiceOption.Contact
    }
    componentWillReceiveProps(n) {
        if (n) {
            this.setState({ user: n.user })
        }
    }
    render() {
        let { user,type } = this.state
        return (
            <Bound>
                <div className='contact-avatar'
                    onClick={() => {
                        this.props.onShowContactDropdown()
                        this.props.autoScroll && this.props.autoScroll();
                    }}>
                        {
                            type !== choiceOption.Branch ?
                            <React.Fragment>
                            <img className='img_avatar' src={user ? user.avatar : ic_addcontact} alt='input plus'></img>
                            {
                                user && 
                                <img src={ic_edit} className='img_edit' alt='edit' />
                            }
                            </React.Fragment>
                            :
                            <figure className="block_branch">
                                <img className='img_avatar' src={ user ? circle_blue : ic_addcontact } alt='ic_branch'></img>
                              
                                 <p className="content">{user && user.short_name}</p> 
                            </figure>
                        }
                </div>
                <p>{user && user.name && user.name.length > 0 ? user.name : this.props.content}</p>
            </Bound>
        )
    }
}
