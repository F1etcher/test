export const DATA = 'DATA'
export const SET_LOGIN = 'SET_LOGIN'


const initialState = {
    data: [],
    name: [],
}

export const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case DATA:
            return {
                ...state, data: action.data
            }
        case SET_LOGIN:
            return {
                ...state, login: action.login
            }
        default:
            return state
    }
}
export const setLogin = (login) => ({type: SET_LOGIN, login})


