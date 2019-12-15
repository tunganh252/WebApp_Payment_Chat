import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";

//action
import { sendMess, getAllChat } from "../../../actions/chatAction";
//data
import { userLogin } from "../../../data/mockData";
//component
import GroupAvatarControl from "./Control/GroupAvatarControl";
import ChatControl from "./Control/ChatControl";
import WeeziControl from "./Control/WeeziControl";
import WeeziConfirmControl from "./Control/WeeziConfirmControl";
//Message Types
import ChatReceiveFromWeezi from "./ChatReceiveFromWeezi/ChatReceiveFromWeezi";

const Bound = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  grid-column: 4 / span 6;
  box-shadow: inset 1px 1px 0 0 rgba(0, 0, 0, 0.07);
  overflow: hidden;
  p {
    font-family: Roboto;
    font-size: 14px;
    font-weight: normal;
    font-style: normal;
    font-stretch: normal;
    line-height: normal;
    letter-spacing: normal;
  }
  .chats-user-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 80px;
    box-shadow: inset 0 -1px 0 0 rgba(0, 0, 0, 0.07);
    img {
      width: 36px;
      height: 36px;
      object-fit: cover;
      border-radius: 50%;
    }
    p {
      margin-top: 8px;
      font-weight: 500;
      color: #050c1d;
    }
  }
  .chats-container {
    flex: 1;
    overflow: auto;
    .chat-scroll {
      display: flex;
      flex: 1;
      width: 100%;
      height: fit-content;
      flex-direction: column;
      padding: 10px 40px 0 20px;
    }
  }
  .chats-control {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 80px;
    box-shadow: inset 1px 1px 0 0 rgba(0, 0, 0, 0.07);
    padding: 0 20px;
    img {
      cursor: pointer;
    }
    .social-payment-btn {
      width: 13.6px;
      height: 13.6px;
      margin: 0 5px;
    }
    .emoji-btn {
      width: 19px;
      height: 16px;
      margin: 0 10px;
    }
    .send-btn {
      width: 45px;
      height: 45px;
    }
    input {
      display: flex;
      flex: 1;
      border: none;
      outline: none;
      padding: 0 10px;
      font-family: UTM-Avo;
      font-size: 14px;
      font-weight: normal;
      font-style: normal;
      font-stretch: normal;
      line-height: 1.64;
      letter-spacing: 0.1px;
      color: #000000;
      ::placeholder {
        color: rgba(0, 0, 0, 0.25);
      }
    }
  }
`;

class Chats extends Component {
  state = {
    user: this.props.userSelected
  };


  // componentWillReceiveProps(n) {
  //   if (n) {
  //     let { userSelected } = n;
  //     if (userSelected) {
  //       this.setState({ user: userSelected });
  //     }
  //   }
  // }


  static getDerivedStateFromProps(nextProps, prevState) {
    
    if (nextProps.userSelected !== prevState.user) {
      return {
        user: nextProps.userSelected
      }
    }

    return null;
  }
  

  componentDidMount() {
    // this.socket = io('localhost:6969');
    // this.socket.on('chat', res => this.setState({user: res})) // lắng nghe event có tên 'id'
    // this.socket.on('newMessage', (response) => {this.newMessage(response)}); //lắng nghe event 'newMessage' và gọi hàm newMessage khi có event
  }
  onSendMess(message) {    
    if (!message) {
      return;
    }
    let { user } = this.state;
    let chatContainer = document.getElementById("chats-container-id");
    let chatScroll = document.getElementById("chat-scroll-id");
      //send to server==> note:  todo
      // this.props.onSendMessage(mess)
      user.chats.push(message);      
      this.setState({ user }, () => {
        if (chatContainer && chatScroll) {
          chatContainer.scrollTo(0, chatScroll.scrollHeight);
        }
      });
  }

  renderChat() {
    let { user } = this.state;
    if (user && user.chats) {
      return user.chats.map((data, i) => {
        let isShowRead = false;
        let margin = "0 0 10px 0";
        if (data.fromID === userLogin.id && data.isRead) {
          isShowRead = true;
        }
        if (i < user.chats.length - 1) {
          let nextChat = user.chats[i + 1];
          if (nextChat.fromID === userLogin.id && nextChat.isRead) {
            isShowRead = false;
          }
          if (nextChat.fromID !== data.fromID) {
            margin = "0 0 10px 0";
          }
        }
        return (
            <ChatReceiveFromWeezi
              key={i}
              avatar = {user.avatar}
              data = {data}
              isShowRead={isShowRead}
              margin={margin}
            />
        );
      });
    }
  }
  render() {
    let { user } = this.state;
    return (
      <Bound>
        <div className="chats-user-info">
          {user.isGroup && user.member && user.member.length >= 2 ? (
            <GroupAvatarControl member={user.member} width={36} height={36} />
          ) : (
            <img src={user.avatar} alt="avatar" />
          )}
          <p>{user.name}</p>
        </div>
        <div className="chats-container" id="chats-container-id">
          <div className="chat-scroll" id="chat-scroll-id">
            {this.renderChat()}
          </div>
        </div>
        {user.id !== -1 ? (
          <ChatControl
            uID={user.id}
            onSendMess={mess => this.onSendMess(mess)}
          />
        ) : this.props.isShowWeeziConfirm ? (
          <WeeziConfirmControl />
        ) : (
          <WeeziControl />
        )}
      </Bound>
    );
  }
}

const mapStateToProps = state => ({
  userSelected: state.chatReducer.userSelected,
  isShowWeeziConfirm: state.popupReducer.isShowWeeziConfirm
});

const mapDispatchToProps = dispatch => ({
  onSendMessage: mess => dispatch(sendMess(mess)),
  getAllChat: () => dispatch(getAllChat())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  { forwardRef: true }
)(Chats);
