import { SET_USER, GET_POSTS, SINGLE_POST, CREATE_POST } from './constraints'

const initialState = {
    username: '',
    userId: null,
    profilePicture: "",
    posts: [],
    post: {}
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case SET_USER:
            return Object.assign({}, state, action.payload);
    // return {
    //   username: action.payload.username,
    //   userId: action.payload.Id,
    //   profilePicture: action.payload.profilePicture
    // }
        case GET_POSTS:
            return Object.assign({}, state, action.payload);
        case SINGLE_POST:
            return Object.assign({}, state, action.payload)
        case CREATE_POST:
            return Object.assign({}, state, action.payload)
        default:
            return state;
    }
}

