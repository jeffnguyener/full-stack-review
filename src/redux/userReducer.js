const initialState = {
    username: '',
    first_name: '',
    last_name: '',
    balance: null,
    id: null
}

const UPDATE_USER = 'UPDATE_USER'
const CLEAR_USER = 'CLEAR_USER'

export function updateUser(user) {
    return {
        type: UPDATE_USER,
        payload: user
    }
}

export function clearUser() {
    return {
        type: CLEAR_USER
    }
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_USER:
            console.log('ACTION PAYLOAD', action.payload)
            const {user_id: id, username, first_name, balance} = action.payload
            return {username, first_name, balance, id}
        default:
            return state;
    }

}

export default reducer