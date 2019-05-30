import React, { Component } from 'react'
import axios from 'axios'
import { updateUser } from '../redux/userReducer'
import { connect } from 'react-redux'

class Details extends Component {
    componentDidMount() {
        axios.get('/auth/details').then((res) => {
            this.props.updateUser(res.data)
        })
            .catch((err) => {
                this.props.history.push('/login')
            })
    }
    render() {
        console.log('Details Props', this.props)
        return (
            <div>
                <h1>Details</h1>
                {this.props.first_name && (
                    <>
                        <h3>{this.props.first_name}</h3>
                        <h4>${this.props.balance}</h4>
                    </>
                )}
            </div>
        )
    }
}

function mapStateToProps(reduxState) {
    return {
        first_name: reduxState.first_name,
        balance: reduxState.balance
    }
}

export default connect(mapStateToProps, { updateUser })(Details);