import profileReducer, { addPost, deletePost } from './profileReducer';

let initState = {        
    posts:[
        {id: 1, message: "My new post", likeCount: "15"},
        {id: 2, message: "My second post", likeCount: "11"},
        {id: 3, message: "Hi, everyone", likeCount: "18"},
        {id: 4, message: "Hello", likeCount: "21"},
        {id: 5, message: "How are you?", likeCount: "55"}
    ],
};

it ('new post should be added', () => {
    // 1. start test data
    let actionCreator = addPost("new text post");
    let state = initState;
    // 2. action
    let newState = profileReducer(state, actionCreator);
    //3. expect result => (newState.posts.length === 6)
    expect(newState.posts.length).toBe(6);
});

it ('new post text ', () => {
    let actionCreator = addPost("new text post");
    let state = initState;
    let newState = profileReducer(state, actionCreator);
    expect(newState.posts[5].message).toBe("new text post");
});

it ('after deleting length of messages should be decrement ', () => {
    let actionCreator = deletePost(1);
    let state = initState;
    let newState = profileReducer(state, actionCreator);
    expect(newState.posts.length).toBe(4);
});
 
it ('after useing incorrect id of the post, array length should not be decrement ', () => {
    let actionCreator = deletePost(100);
    let state = initState;
    let newState = profileReducer(state, actionCreator);
    expect(newState.posts.length).toBe(5);
});