export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'
export const SET_ID = 'SET_ID'


const initialState =
    {
        user: null,
        id:null,
        date:
            [{
                name: null,
                tel: null,
                mail: null,
                avatar: "https://i.pinimg.com/originals/9c/77/46/9c7746225873e02d83b9315501b8dd2f.jpg"
            }]
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
        case SET_ID:
            return {
                ...state, id: action.id
            }
        default:
            return state
    }
}

export const login = (user) => ({type: LOGIN, user});
export const logout = () => ({type: LOGOUT});
export const setUserId = (id) => ({type: SET_ID, id})

export const selectUser = (state) => state.Users.user;


