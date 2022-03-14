import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
// import PropTypes from 'prop-types';

const ImageRegister = () => {
  const [image, setImage] = useState({ preview: '', raw: '' });

  const handleImage = e => {
    setImage({
      preview: URL.createObjectURL(e.target.files[0]),
      raw: e.target.files[0],
    });
  };
  console.log('image : ', image);
  return (
    <div>
      {image.preview ? (
        <ImageConatiner>
          <img width="500px" height="500px" src={image.preview} />
        </ImageConatiner>
      ) : null}
      <Label>
        <UploadButton>
          이미지 업로드
          <input
            accept="image/*"
            type="file"
            id="ProfileImg"
            onChange={e => handleImage(e)}
            style={{ display: 'none' }}
          ></input>
        </UploadButton>
      </Label>
    </div>
  );
};

// ImageRegister.propTypes = {};

const Label = styled.label`
  display: grid;
  justify-content: center;
  margin-top: 100px;
`;

const UploadButton = styled.div`
  background-color: black;
  color: white;
  text-align: center;
  line-height: 60px;
  width: 400px;
  height: 60px;
  border-radius: 5px;
  font-weight: bold;
  font-size: 20px;
  cursor: pointer;
`;

const ImageConatiner = styled.div`
  margin: 0 auto;
  border: 2px solid black;
  text-align: center;
  width: 500px;
  height: 500px;
`;

export default ImageRegister;
