import { csrfFetch } from './csrf';

const LOAD = 'comments/LOAD';
const ADD_ONE = 'comments/ADD_ONE';
const REMOVE_ONE = 'comments/REMOVE_ONE'
const UPDATE_ONE = 'comments/UPDATE_ONE'

const load = list => ({
    type: LOAD,
    list,
  });
  
const addComment = comment => ({
    type: ADD_ONE,
    comment,
  });

const removeComment = commentId => ({
    type: REMOVE_ONE,
    commentId,
  });

export const getComments = () => async dispatch => {
    const response = await csrfFetch(`/api/comments`);
  
    if (response.ok) {
      const comments = await response.json();
      dispatch(load(comments));

    }
  };

  
export const retrieveComment = (commentId) => async dispatch => {
    const response = await csrfFetch(`/api/comments/${commentId}`)
    if (response.ok) {
      const comment = await response.json();
      dispatch(addComment(comment))
    }
  }

export const createComment = (Comment) => async dispatch => {
  const response = await csrfFetch(`/api/photos/${Comment.photoId}/comments`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(Comment),
  })
  if (response.ok) {
    const newComment = await response.json();
    const commentResult = await dispatch(addComment(newComment))
    return commentResult;
  }
  else{
    const errorResponse = await response.json();
    return errorResponse;
  }
}

export const editComment = (comment) => async dispatch => {
    const response = await csrfFetch(`/api/comments/${comment.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(comment),
    })
    if (response.ok) {
      const editedComment = await response.json();
      dispatch(addComment(editedComment))
      return editedComment;
    }
  }

export const deleteComment = (comment) => async dispatch => {
    const response = await csrfFetch(`/api/comments/${comment.id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(comment),
    })
    if (response.ok) {
      dispatch(removeComment(comment.id))
      return true;
    }
  }


  const initialState = {};

  const commentReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOAD: {
        const allComments = {};
        action.list.forEach(comment => {
            allComments[comment.id] = comment;
        });
        return {
          ...allComments,
          ...state,
        };
      }
      case ADD_ONE: {
        if (!state[action.comment.id]) {
          const newState = {
            ...state,
            [action.comment.id]: action.comment
          };
          return newState;
        }
        return {
          ...state,
          [action.comment.id]: {
            ...action.comment,
          }
        };
      }
      case REMOVE_ONE: {
          const newState = { ...state };
          delete newState[ action.commentId];
          return newState;
        }
      case UPDATE_ONE:{
        return {
            ...state,
            [action.comment.id]: {
              ...state[action.comment.id],
              ...action.comment,
            }
          };
      }
      default: {
        return state;
    }
  }
}
  export default commentReducer;

