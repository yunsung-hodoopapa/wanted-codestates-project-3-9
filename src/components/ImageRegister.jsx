import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import PropTypes from 'prop-types';

const ImageRegister = ({ changePhoto }) => {
  const [image, setImage] = useState(null); // 미리보기 이미지
  const reader = new FileReader();
  const handleImage = e => {
    reader.readAsDataURL(e.target.files[0]);
    reader.onload = () => {
      setImage(reader.result);
      changePhoto(reader.result);
    };
    e.target.value = ''; // reset 해주지 않으면 지운뒤 같은 사진을 업로드 하려고 할 때 onchange 이벤트가 발생하지 않는다.
  };
  return (
    <div>
      {image ? (
        <ImageConatiner>
          <X
            onClick={() => {
              setImage(null);
              changePhoto(null);
            }}
          >
            &times;
          </X>
          <img width="480px" height="480px" src={image} />
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
  text-align: center;
  width: 480px;
  height: 480px;
`;

const X = styled.span`
  position: absolute;
  margin: 10px;
  font-size: 1vw;
  cursor: pointer;
  border-radius: 100px;
  border: 1px solid;
  background: white;
  width: 2vw;
  height: 2vh;
`;

export default ImageRegister;
