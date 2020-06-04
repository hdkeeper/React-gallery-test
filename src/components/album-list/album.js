import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


const mstp = (state, props) => ({
  photos: state.photos[props.id]
});

class Album extends React.Component {
  render() {
    const { id, title, photos } = this.props;

    return (
      <div className="Album">
        <Link to={`/album/${id}`} href={`/album/${id}`}>
          {photos ? (
            <img className="thumbnail" src={photos[0].thumbnailUrl} alt="" />
          ) : (
            <div className="thumbnail" />
          )}
        </Link>

        <Link className="title" to={`/album/${id}`} href={`/album/${id}`}>
          {title}
        </Link>

        {photos && (
          <span>&nbsp;({photos.length} photos)</span>
        )}
      </div>
    );
  }
}

export default connect(mstp)(Album);
