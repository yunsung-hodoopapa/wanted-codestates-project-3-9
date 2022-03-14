import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import PropTypes from 'prop-types';

const ImageRegister = ({ changePhoto }) => {
  const [image, setImage] = useState(null); // preview 이미지
  const reader = new FileReader();
  const handleImage = e => {
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setImage(reader.result); // preview 이미지 설정
      changePhoto(reader.result);
    };
  };
  return (
    <div>
      {image ? (
        <ImageConatiner>
          <img width="500px" height="500px" src={image} />
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

ImageRegister.propTypes = {
  changePhoto: PropTypes.func,
};

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
