import React, { Component } from 'react'

//component
import LoginPage from './LoginPage/LoginPage'
import MainPage from './MainPage/MainPage'

export default class Main extends Component {
    state = {
        isLogin:true
    }
    render() {
        let {isLogin} = this.state
        let content;
        if(isLogin){
            content = <MainPage/>
        }
        else{
            content = <LoginPage/>
        }
        return (
            content
        )
    }
}
