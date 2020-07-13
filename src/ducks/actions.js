// import services from './services'
import { SET_USER, GET_POSTS, SINGLE_POST, CREATE_POST } from './constraints'

export function setUser(userId, username, profilePicture) {
  // console.log(profilePicture, 'profilepicture')
  return {
    type: SET_USER,
    payload: {
      userId: userId,
      username: username,
      profilePicture: profilePicture
    }
  }
}
//RESPONSIBLE FOR SENDING ACTION. HAS AN ACTION TYPE
//ALSO HAS A PAYLOAD WHICH IS THE DATA FROM MY AXIOS CALL
//MADE IN MY SERVICES FILE.
export function getPosts(data) {
  // console.log(data, 'action data')
  return {
    type: GET_POSTS,
    payload: {
      posts: data
    }
  }
}

export function singlePost(data) {
  return {
    type: SINGLE_POST,
    payload: {
      post: data
    }
  }
}

export function createPost(data) {
  return {
    type: CREATE_POST,
    payload: {
      posts: data
    }
  }
}