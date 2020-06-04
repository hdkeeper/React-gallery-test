import { GET_ALBUM_SUCCESS, GET_ALBUMS_SUCCESS } from '../constants';

const initialState = [];

/*  Описание альбомов:
    [
      { userId, id, title },
      ...
    ]
*/

export default function albums(state = initialState, action) {
  switch (action.type) {
    case GET_ALBUM_SUCCESS: {
      return [...state, action.album];
    }

    case GET_ALBUMS_SUCCESS: {
      return action.albums;
    }
    
    default: {
      return state;
    }
  }
}
