import React from 'react';
import styled from 'styled-components';

const HeaderWrap = styled.header`
  width: 500px;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: #c4c4c4;
`;

const LogoContainer = styled.div`
  width: 170px;
  display: flex;
  aligh-items: center;
  justify-content: center;
`;

const Logo = styled.div`
  width: 116px;
  height: 44px;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url(${props => props.src});
  cursor: pointer;
`;

const ButtonContainer = styled.div`
  width: 170px;
  display: flex;
  aligh-items: center;
  justify-content: center;
`;

const ReviewButton = styled.div`
  width: 115px;
  height: 50px;
  outline: none;
  border-radius: 4px;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #000000;
  color: white;
  font-weight: 800;
`;

const Header = () => {
  return (
    <HeaderWrap>
      <LogoContainer>
        <Logo
          src={
            'https://static.balaan.co.kr/shop/data/skin_mobileV2/Sidemenu/img/logo.png'
          }
        />
      </LogoContainer>
      <ButtonContainer>
        <ReviewButton>리뷰 남기기</ReviewButton>
      </ButtonContainer>
    </HeaderWrap>
  );
};

export default Header;
