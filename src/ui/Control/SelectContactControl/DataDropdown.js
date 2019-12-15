import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from "react-redux";

//// data
// import { dataBankTransfer } from '../../../data/data';

//action
// import {getAllContact, searchContact} from '../../../actions/contactAction'

//image
import ic_search_gray from '../../../images/popup/ic_search_gray.svg'
import ic_avatadefault from '../../../images/ic_avatadefault.svg'
import { choiceOption } from '../../../data/data';



const Bound = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    max-height:252px;
    position: absolute;
    top:calc(100% + 20px);
    left:0;
    backdrop-filter: blur(10px);
    z-index:1;
    border-radius: 10px;
    box-shadow: 0px 7px 20px rgba(0, 0, 0, 0.07);
    background-color: #ffffff;
    p{
        font-family: 'UTM-Avo'!important;
        font-weight: normal;
        font-style: normal;
        font-stretch: normal;
        letter-spacing: normal;
        width: unset; 
    }
    .contact-scroll{
        display:flex;
        flex-direction:column;
        overflow-y:auto;
        padding: 0 16px;
        width: 100%;
        &::-webkit-scrollbar {
            width: 15px;            
        }       
        /* Handle */
        &::-webkit-scrollbar-thumb {
            background: #f2f2f2;
            background-clip: padding-box;
            border-radius: 20px;
            border: 5px solid white;
        }
    }
    
    .contact-item{
        width:100%;
        height:66px;
        display:grid;
        grid-template-columns:36px 1fr;
        grid-column-gap: 10px;
        flex-direction:row;
        align-items:center;
        cursor: pointer;
        .contact-avatar{
            display:flex;
            width:36px;
            height:36px;
            border-radius:50%;
            object-fit:cover;
        }
        .contact-right{
            display:flex;
            flex-direction:column;
            flex:1;
            height:66px;
            justify-content:center;
            border-bottom:1px solid rgba(255, 255, 255, 0.15);
            .contact-name{
                font-family: 'UTM-Avo';
                font-size: 14px;
                line-height: 1.6;
                letter-spacing: 0.1px;
                color: #222222;
            }
            .contact-username{
                font-family: 'UTM-Avo';
                font-size: 10px;
                line-height: 1.71;
                color: #bababa;
            }
        }
    }
    .search-contact-control{
        width:100%;
        height:60px;
        background: #ffffff;
        backdrop-filter: blur(10px);
        margin:0;
        padding: 0 16px;
        border-radius: 10px 10px 0 0;
        box-shadow: inset 0px -1px 0px rgba(0, 0, 0, 0.1);
        img{
            display:flex;
            width:18px;
            height:18px;
        }
        #search-contact-input-id{
            border:none;
            outline:none;
            font-family: 'UTM-Avo';
            font-size: 14px;
            font-weight: normal;
            font-style: normal;
            font-stretch: normal;
            line-height: 1.6;
            letter-spacing: 0.1px;
            /* color: rgba(226,226,226 0.25); */
            background: #FFFFFF;
            backdrop-filter: blur(10px);
            ::placeholder {
                color: rgba(34,34,34,0.25);
            }
        }
    }

`

class DataDropdown extends Component {
  keySearch = ''
  isEnter = false
  state = {
    contacts: this.props.data,
    isNoResultSearch: false,
    type: this.props.type || choiceOption.Bank
  }
  // componentWillMount() {
  //   this.props.getAllContact()
  // }
  componentDidMount() {
    setTimeout(() => {
      window.addEventListener('click', this.handleClick)
    }, 300);
  }
  // componentWillReceiveProps(n){
  //     if(n){
  //         this.setState({contacts:n.contacts})
  //         if(n.contacts.length===0 && this.keySearch.length>0){
  //             this.setState({isNoResultSearch:true})
  //         }
  //         else{
  //             this.setState({isNoResultSearch:false})
  //         }
  //     }
  // }
  componentWillUnmount() {
    window.removeEventListener('click', this.handleClick)
  }
  handleClick = (e) => {
    if (!this.isEnter) {
      this.props.onClose()
    }
  }
  renderContact() {
    let { usersChoise } = this.props
    let { contacts, type } = this.state
    return contacts.map((data, i) => {
      let isChoise = false;
      for (let i = 0; i < usersChoise.length; i++) {
        if (usersChoise[i]) {
          if (usersChoise[i].id === data.id) {
            isChoise = true
            break;
          }
        }
      }
      if (isChoise) {
        return false;
      }
      return (
        <div key={i} className='contact-item' onClick={() => this.props.onChoiceUser(data)}>
            {
                type === choiceOption.Bank ? 
                <img className='contact-avatar' src={data.avatar} alt='avatar' />
                : type === choiceOption.Branch ?
                <p></p>
                : null
            }
          <div className='contact-right'>
            <p className='contact-name'>{data.name}</p>
            <p className='contact-username'>{'@'+data.pin_code}</p>
          </div>
        </div>
      )
    })
  }
  onInputSearchChange = (e) => {
    this.keySearch = e.target.value
    this.props.searchContact(this.keySearch)
  }
  render() {
    let { isNoResultSearch } = this.state

    return (
      <Bound onMouseEnter={() => this.isEnter = true} onMouseLeave={() => this.isEnter = false}>
        <div className='contact-item search-contact-control'>
          <img src={ic_search_gray} alt='search' />
          <input type='text' id='search-contact-input-id' placeholder='Nhập username hoặc số điện thoại'
            // onChange={this.onInputSearchChange.bind(this)} 
            />
        </div>
        <div className='contact-scroll'>
          {
            isNoResultSearch &&
            <div className='contact-item'>
              <img className='contact-avatar' src={ic_avatadefault} alt='avatar' />
              <div className='contact-right'>
                <p className='contact-name'>{this.keySearch}</p>
                <p className='contact-username'>{'Số không có trong danh sách bạn bè'}</p>
              </div>
            </div>
          }
          {this.renderContact()}
        </div>
      </Bound>
    )
  }
}

const mapStateToProps = state => ({
  contacts: state.contactReducer.contacts
});

const mapDispatchToProps = dispatch => ({
  // getAllContact: () => dispatch(getAllContact()),
  // searchContact: (keySearch) => dispatch(searchContact(keySearch))
});

export default connect(mapStateToProps, mapDispatchToProps, null, { forwardRef: true })(DataDropdown);