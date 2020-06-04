import {
  GET_ALBUM, GET_ALBUM_SUCCESS, GET_ALBUM_FAILURE,
  GET_ALBUMS, GET_ALBUMS_SUCCESS, GET_ALBUMS_FAILURE,
  GET_ALBUM_PHOTOS, GET_ALBUM_PHOTOS_SUCCESS, GET_ALBUM_PHOTOS_FAILURE,
  OPEN_DETAILS_DIALOG, CLOSE_DETAILS_DIALOG, SET_DETAILS_PHOTO
} from './constants';

// Запросить список альбомов
export const getAlbums = userId => ({
  type: GET_ALBUMS,
  userId
});

// Запросить один альбом
export const getAlbum = albumId => ({
  type: GET_ALBUM,
  albumId
});

// Запросить фотографии из альбома
export const getAlbumPhotos = albumId => ({
  type: GET_ALBUM_PHOTOS,
  albumId
});

/**
 * Добавить дополнительные действия
 * @param {function} action
 * @param {object} what - { action: 'ACTION_CONST' }
 */
const addActions = (action, what) => {
  Object.keys(what).forEach((name) => {
      action[name] = payload => ({ type: what[name], ...payload });
  });
};

addActions(getAlbums, {
  success: GET_ALBUMS_SUCCESS,
  failure: GET_ALBUMS_FAILURE
});

addActions(getAlbum, {
  success: GET_ALBUM_SUCCESS,
  failure: GET_ALBUM_FAILURE
});

addActions(getAlbumPhotos, {
  success: GET_ALBUM_PHOTOS_SUCCESS,
  failure: GET_ALBUM_PHOTOS_FAILURE
});

// Открыть диалог
export const openDetailsDialog = (albumId, photoId) => ({
  type: OPEN_DETAILS_DIALOG,
  albumId,
  photoId
});

// Закрыть диалог
export const closeDetailsDialog = () => ({
  type: CLOSE_DETAILS_DIALOG
});

// Перейти к другой фотографии в диалоге
export const setDetailsPhoto = photoId => ({
  type: SET_DETAILS_PHOTO,
  photoId
});
