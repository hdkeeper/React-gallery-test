import React from 'react';
import { connect } from 'react-redux';

import { setDetailsPhoto } from '../../actions';


const mstp = state => {
  const { albumId, photoId } = state.details;
  if (!albumId || !photoId) return;

  const photos = state.photos[albumId]; 
  const photo = photos.find(photo => photo.id === photoId);
  return {
    photoId,
    title: photo.title,
    url: photo.url,
    photos
  };
};

const mdtp = { setDetailsPhoto };


class DetailsContent extends React.Component {
  onRewind = inc => () => {
    const { photoId, photos, setDetailsPhoto } = this.props;

    let idx = photos.findIndex(photo => photo.id === photoId);
    idx += inc;
    if (idx < 0) idx += photos.length;
    if (idx >= photos.length) idx = 0;

    setDetailsPhoto(photos[idx].id);
  };

  render() {
    const { title, url, onClose } = this.props;

    return (
      <div className="DetailsContent">
        <div className="close-icon" onClick={onClose}>⨉</div>
        
        <div className="navigation">
          <div className="arrow" onClick={this.onRewind(-1)}>⮜</div>
          <img src={url} alt="" />
          <div className="arrow" onClick={this.onRewind(1)}>⮞</div>
        </div>
        
        <div className="title">{title}</div>
      </div>
    );
  }
}

export default connect(mstp, mdtp)(DetailsContent);
