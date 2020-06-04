import React from 'react';
import { connect } from 'react-redux';

import { openDetailsDialog } from '../../actions';

const mdtp = { openDetailsDialog };

class ThumbnailCard extends React.Component {
  onThumbnailClick = () => {
    const { id, albumId, openDetailsDialog } = this.props;
    openDetailsDialog(albumId, id);
  };

  render() {
    const { title, thumbnailUrl } = this.props;

    return (
      <div className="ThumbnailCard">
        <img className="thumbnail" src={thumbnailUrl} alt="" onClick={this.onThumbnailClick} />
        <div className="title">{title}</div>
      </div>
    );
  }
}

export default connect(null, mdtp)(ThumbnailCard);
