import React from 'react';
import { Route } from 'react-router';

import { PhotoList } from '../components';

export default <Route key="/album" exact path="/album/:id" component={PhotoList} />;
