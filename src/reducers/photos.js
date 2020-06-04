import { GET_ALBUM_PHOTOS_SUCCESS } from '../constants';

const initialState = {};

/*  Список фотографий:
    {
      albumId: [
        { albumId, id, title, url, thumbnailUrl },
        ...
      ],
      ...
    }
*/

export default function photos(state = initialState, action) {
  switch (action.type) {
    case GET_ALBUM_PHOTOS_SUCCESS: {
      const { albumId, photos } = action;
      return {
        ...state,
        [albumId]: photos
      };
    }
    
    default: {
      return state;
    }
  }
}
