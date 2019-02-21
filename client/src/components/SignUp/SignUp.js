import React from 'react';
import { Modal } from 'react-materialize';

class SignUp extends React.Component {
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
            <Modal id="modal2" className="modal SignUp" trigger='/signUp'>
                <div class="modal-content">
                    <form onSubmit={this.handleSubmit}>
                        <h3>Sign Up</h3>
                        <input type="text" ref="username" placeholder="create you username" />
                        <input type="password" ref="password" placeholder="create your password" />
                        <input type="password" ref="password" placeholder="confirm your password" />
                        <input type="submit" value="Login" />
                    </form>
                </div>
                <div class="modal-footer">
                    <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
                </div>
            </Modal>
        )
    }
}

export default SignUp