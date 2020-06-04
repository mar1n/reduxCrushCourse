import { FETCH_POSTS, NEW_POSTS } from './types'

export const fetchPosts = () => dispatch => {
    console.log('fetching')
            fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(posts => dispatch({
                type: FETCH_POSTS,
                payload: posts
            }))
}


export const createPost = (postData) => dispatch => {
    console.log('create post action')
    fetch('http://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
         "Content-type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify(postData)
    })
    .then(res => res.json())
    .then(data => dispatch({
        type: NEW_POSTS,
        payload: postData
    }))
}