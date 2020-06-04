/**
 * GET-запрос для JSON-данных
 * @param {string} url
 * @returns Promise -> any
 */
const get = url => fetch(url)
  .then((result) => {
    if (!result.ok) {
      return Promise.reject(result);
    }
    return result.json();
  })
  .catch(error => Promise.reject(error));


const API_BASE = 'http://127.0.0.1:3000';

// Запросить список альбомов
export const getAlbums = userId => get(`${API_BASE}/users/${userId}/albums`);

// Запросить один альбом
export const getAlbum = albumId => get(`${API_BASE}/albums/${albumId}`);

// Запросить фотографии из альбома
export const getAlbumPhotos = albumId => get(`${API_BASE}/albums/${albumId}/photos`);
