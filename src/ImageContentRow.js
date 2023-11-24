import React from 'react';

const ImageContentRowOdd = ({ image, content, link }) => {
  return (
    <div className="row">
      <div className="col-md-6">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img src={image} alt="Image" className="img-fluid w-100 h-100" />
        </a>
      </div>
      <div className="col-md-6 d-flex align-items-center justify-content-center">
        <a href={link} target="_blank" rel="noopener noreferrer">
          {content}
        </a>
      </div>
    </div>
  );
};

const ImageContentRowEven = ({ image, content, link }) => {
  return (
    <div className="row">
      <div className="col-md-6 d-flex align-items-center justify-content-center">
        <a href={link} target="_blank" rel="noopener noreferrer">
          {content}
        </a>
      </div>
      <div className="col-md-6">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img src={image} alt="Image" className="img-fluid w-100 h-100" />
        </a>
      </div>
    </div>
  );
};

const ImageContentRow = ({ rowNumber, image, content, link }) => {
  return rowNumber % 2 === 0 ? (
    <ImageContentRowEven image={image} content={content} link={link} />
  ) : (
    <ImageContentRowOdd image={image} content={content} link={link} />
  );
};

export default ImageContentRow;