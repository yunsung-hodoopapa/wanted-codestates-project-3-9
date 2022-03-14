import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
const ReviewTitle = ({ titleName = '평점' }) => {
  return <Title>{titleName}</Title>;
};

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin: 10px 0px;
`;

ReviewTitle.propTypes = {
  titleName: PropTypes.string,
};

export default ReviewTitle;
