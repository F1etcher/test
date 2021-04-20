export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'


const initialState = {
    user: undefined
}

export const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state, user: action.user
            }
        case LOGOUT:
            return {
                ...state, user: null
            }
        default:
            return state
    }
}

export const login = (user) => ({type: LOGIN, user});
export const logout = () => ({type: LOGOUT});

export const selectUser = (state) => state.Users.user;


