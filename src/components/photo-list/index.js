import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';

import { getAlbum, closeDetailsDialog } from '../../actions';
import ThumbnailCard from './thumbnail-card';
import DetailsContent from './details-content';
import './style.less';

Modal.setAppElement('#root');
const modalStyle = {
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.66)'
  },
  content: {
    width: '800px',
    height: '650px',
    margin: '50px auto 0 auto',
    position: 'static'
  }
};


const mstp = (state, props) => {
  const id = Number(props.match.params.id);
  return {
    id,
    album: state.albums.find(a => a.id === id),
    photos: state.photos[id],
    isModalOpen: state.details.isOpen
  };
};

const mdtp = { getAlbum, closeDetailsDialog };

class PhotoList extends React.Component {
  componentDidMount() {
    const { id, album, photos, getAlbum } = this.props;
    if (!album || !photos) {
      getAlbum(id);
    }
  }

  render() {
    const { album, photos, isModalOpen, closeDetailsDialog } = this.props;

    if (!album || !photos) {
      return (
        <div className="PhotoList">
          <div className="error">Album not found</div>
          <Link className="backward-error" to="/" href="/">⟵ Go back</Link>
        </div>
      );
    }

    return (
      <div className="PhotoList">
        <h2>
          <Link className="backward" to="/" href="/">⟵</Link>
          {album.title}
        </h2>

        <div className="thumbnail-grid">
          {photos.map(photo => <ThumbnailCard key={photo.id} {...photo} />)}
        </div>

        <Modal isOpen={isModalOpen}
          onRequestClose={closeDetailsDialog}
          style={modalStyle}>
          <DetailsContent onClose={closeDetailsDialog} />
        </Modal>
      </div>
    );
  }
}

export default connect(mstp, mdtp)(PhotoList);
