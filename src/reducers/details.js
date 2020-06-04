import { OPEN_DETAILS_DIALOG, CLOSE_DETAILS_DIALOG, SET_DETAILS_PHOTO } from '../constants';

const initialState = {
  isOpen: false,
  albumId: 0,
  photoId: 0
};

export default function details(state = initialState, action) {
  const { albumId, photoId } = action;
  switch (action.type) {
    case OPEN_DETAILS_DIALOG: {
      return {
        isOpen: true,
        albumId,
        photoId
      };
    }

    case CLOSE_DETAILS_DIALOG: {
      return { ...initialState };
    }

    case SET_DETAILS_PHOTO: {
      return {
        ...state,
        photoId
      };
    }
      
    default: {
      return state;
    }
  }
}
