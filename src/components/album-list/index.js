import React from 'react';
import { connect } from 'react-redux';

import { getAlbums } from '../../actions';
import Album from './album';
import './style.less';

const USER_ID = 2;

const mstp = state => ({
  albums: state.albums
});

const mdtp = { getAlbums };

class AlbumList extends React.Component {
  componentDidMount() {
    const { albums, getAlbums } = this.props;
    if (albums.length <= 1) {
      getAlbums(USER_ID);
    }
  }

  render() {
    const { albums } = this.props;

    return (
      <div className="AlbumList">
        <h2>Albums</h2>
        {albums.map(a => <Album key={a.id} {...a} />)}
      </div>
    );
  }
}

export default connect(mstp, mdtp)(AlbumList);
