import React, { Component } from 'react'
import axios from 'axios'
import { updateUser } from '../redux/userReducer'
import { connect } from 'react-redux'


class Login extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: ''
        }
    }

    componentDidMount() {
        axios.get('/auth/user').then((res) => {
            this.props.updateUser(res.data)
            this.props.history.push('/details')
        })
    }

    handleLoginInfoUpdate = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <form>
                    <input
                        type='text'
                        name='username'
                        placeholder='username'
                        onChange={this.handleLoginInfoUpdate} />
                    <input
                        type="password"
                        name="password"
                        placeholder="password"
                        onchange={this.handleLoginInfoUpdate} />
                    <button>Log In</button>
                </form>
            </div>
        )
    }
}

function mapsStateToProps(reduxState) {
    return reduxState
}

export default connect(mapsStateToProps, { updateUser })(Login);