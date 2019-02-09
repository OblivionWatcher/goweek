import React, { Component } from 'react';

import twitterLogo from '../twitter.svg';
import './Login.css';

export default class login extends Component {
    state={
        username: ""
    };
    
    handleSubmit = e => {
        e.preventDefault();

        const { username } = this.state;
        if(!username.lenght) return;

        localStorage.setItem('@GoTwitter:username', username);

        this.props.history.push('/timeline');
    };

    handleInputChange = (e) => {
        this.setState({ username: e.target.value });
    };

    render(){
        return (
            <div className="login-wrapper">
                <img src={twitterLogo} alt="GoTwitter" />
                <form onSubmit={this.handleSubmit}>
                    <input 
                        value={this.state.username}
                        onChange={this.handleInputChange}
                        placeholder="Nome de Usuário"
                    />
                    <button type="submit">Entrar</button>
                </form>
            </div>
        );
    }
}