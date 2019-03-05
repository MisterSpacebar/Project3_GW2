import React from 'react';

class Login extends React.Component {
    state = {
        username: "",
        password: "",
    }
    validateForm() {
        return this.state.username.length > 0 && this.state.password.length > 0;
    }
    // handleChange = event => {
    //     this.setState({
    //         [event.target.id]: event.target.value
    //     });
    // }
    // handleSubmit = event => {
    //     event.preventDefault();
    //     handleChange(event);
    // }

    render() {
        return (
            <div className="Login">
                <form onSubmit={this.handleSubmit}>
                    <h3>Sign in</h3>
                    <input type="text" ref="username" placeholder="enter you username" />
                    <input type="password" ref="password" placeholder="enter password" />
                    <input type="submit" value="Login" />
                </form>
            </div>
        )
    }
}

export default Login