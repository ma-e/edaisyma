import React from 'react';

function TwoPicturesRow({ imageSrcArray }) {
  const imgStyle = {
    width: '100%',
    height: 'auto',
    objectFit: 'cover'
  };

  return (
    <div className="container">
      <div className="row">
        {imageSrcArray.map((src, index) => (
          <div key={index} className="col-md-6">
            <img src={src} alt={`Image ${index + 1}`} style={imgStyle} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default TwoPicturesRow;
