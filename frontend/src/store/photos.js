import { csrfFetch } from './csrf';

const LOAD = 'photos/LOAD';
const ADD_ONE = 'photos/ADD_ONE';
const REMOVE_ONE = 'photos/REMOVE_ONE'
const UPDATE_ONE = 'photos/UPDATE_ONE'

const load = list => ({
    type: LOAD,
    list,
  });
  
const addPhoto = photo => ({
    type: ADD_ONE,
    photo,
  });

const removePhoto = photoId => ({
    type: REMOVE_ONE,
    photoId,
  });

export const getPhotos = () => async dispatch => {
    const response = await csrfFetch(`/api/photos`);
  
    if (response.ok) {
      const photos = await response.json();
      dispatch(load(photos));
    }
  };

  
export const retrievePhoto = (photoId) => async dispatch => {
    const response = await csrfFetch(`/api/photos/${photoId}`)
    if (response.ok) {
      const photo = await response.json();
      dispatch(addPhoto(photo))
    }
  }

export const createPhoto = (Photo) => async dispatch => {
  const response = await csrfFetch(`/api/photos`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(Photo),
  })
  if (response.ok) {
    const newPhoto = await response.json();
    const photoResult = await dispatch(addPhoto(newPhoto))
    return photoResult;
  }
}

export const editPhoto = (Photo) => async dispatch => {
    const response = await csrfFetch(`/api/photos/${Photo.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(Photo),
    })
    if (response.ok) {
      const editedPhoto = await response.json();
      dispatch(addPhoto(editedPhoto))
      return editedPhoto;
    }
  }

export const deletePhoto = (Photo) => async dispatch => {
    const response = await csrfFetch(`/api/photos/${Photo.id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(Photo),
    })
    if (response.ok) {
      const deletedPhoto = await response.json();
      dispatch(removePhoto(deletedPhoto))
    }
  }


  const initialState = {};

  const photoReducer = (state = initialState, action) => {
    switch (action.type) {
      case LOAD: {
        const allPhotos = {};
        action.list.forEach(photo => {
            allPhotos[photo.id] = photo;
        });
        return {
          ...allPhotos,
          ...state,
        };
      }
      case ADD_ONE: {
        if (!state[action.photo.id]) {
          const newState = {
            ...state,
            [action.photo.id]: action.photo
          };
          return newState;
        }
        return {
          ...state,
          [action.photo.id]: {
            ...action.photo,
          }
        };
      }
      case REMOVE_ONE: {
          const newState = { ...state };
          console.log("photoId", action.photoId)
          delete newState[action.photoId];
          return newState;
        }
      case UPDATE_ONE:{
        return {
            ...state,
            [action.photo.id]: {
              ...state[action.photo.id],
              ...action.photo,
            }
          };
      }
      default: {
        return state;
    }
  }
}
  export default photoReducer;

