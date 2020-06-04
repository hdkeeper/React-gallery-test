import { put, call, all, takeLatest } from 'redux-saga/effects';

import { GET_ALBUM, GET_ALBUMS, GET_ALBUM_PHOTOS } from './constants';
import * as api from './api';
import { getAlbum, getAlbums, getAlbumPhotos } from './actions';


function* getAlbumSaga({ albumId }) {
  try {
    const album = yield call(api.getAlbum, albumId);
    yield put(getAlbum.success({ album }));

    const photos = yield call(api.getAlbumPhotos, album.id);
    yield put(getAlbumPhotos.success({ albumId: album.id, photos }));
  } catch (error) {
    yield put(getAlbum.failure({ error }));
    console.error(error);
  }
}

function* getAlbumsSaga({ userId }) {
  try {
    const albums = yield call(api.getAlbums, userId);
    yield put(getAlbums.success({ albums }));

    for (let album of albums) {
      const photos = yield call(api.getAlbumPhotos, album.id);
      yield put(getAlbumPhotos.success({ albumId: album.id, photos }));
    }
  } catch (error) {
    yield put(getAlbums.failure({ error }));
    console.error(error);
  }
}

function* getAlbumPhotosSaga({ albumId }) {
  try {
    const photos = yield call(api.getAlbumPhotos, albumId);
    yield put(getAlbumPhotos.success({ albumId, photos }));
  } catch (error) {
    yield put(getAlbumPhotos.failure({ error }));
    console.error(error);
  }
}

export default function* rootSaga() {
  yield all([
    yield takeLatest(GET_ALBUM, getAlbumSaga),
    yield takeLatest(GET_ALBUMS, getAlbumsSaga),
    yield takeLatest(GET_ALBUM_PHOTOS, getAlbumPhotosSaga)
  ]);
}
