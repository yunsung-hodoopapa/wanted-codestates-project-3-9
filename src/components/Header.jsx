import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderComponent = styled.header`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: space-between;
  justify-items: center;
  padding: 15px 15px 30px 15px;
  box-sizing: border-box;
  img {
    width: 200px;
    height: auto;
  }
  button {
    background-color: black;
    color: #fff;
    border: none;
    box-shadow: none;
    border-radius: 20px;
    padding: 10px 20px;
    font-weight: bold;
    font-size: 1rem;
    cursor: pointer;
  }
`;

const Header = () => {
  return (
    <>
      <HeaderComponent>
        <Link to="/">
          <img
            src="https://i.balaan.io/mobile/img/icon/ico_logo.png"
            alt="logo"
          />
        </Link>
        <button>리뷰등록</button>
      </HeaderComponent>
    </>
  );
};

export default Header;
