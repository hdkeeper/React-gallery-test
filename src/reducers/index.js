import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import history from '../history';
import albums from './albums';
import photos from './photos';
import details from './details';

export default combineReducers({
  router: connectRouter(history),
  albums,
  photos,
  details
});
