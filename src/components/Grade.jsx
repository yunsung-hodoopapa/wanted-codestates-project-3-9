import React from 'react';
import { FaStar } from 'react-icons/fa';
import styled from 'styled-components';
import ReviewTitle from './ReviewTitle';
import PropTypes from 'prop-types';
const ARRAY = [0, 1, 2, 3, 4];

function Grade({ clicked, clickGrade, onClickCheck = false, size = 50 }) {
  return (
    <Wrap>
      <ReviewTitle title={'평점'} />
      <Stars>
        {ARRAY.map((el, idx) => {
          return (
            <FaStar
              key={idx}
              size={size}
              onClick={() => onClickCheck && clickGrade(el)}
              className={clicked[el] && 'blackStar'}
            />
          );
        })}
      </Stars>
    </Wrap>
  );
}
Grade.propTypes = {
  clicked: PropTypes.array,
  clickGrade: PropTypes.func,
  onClickCheck: PropTypes.bool,
  size: PropTypes.number,
};
export default Grade;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px 0px;
`;

const Stars = styled.div`
  display: flex;
  margin: 10px;
  justify-content: center;

  & svg {
    color: #cccccc;
    cursor: pointer;
  }

  :hover svg {
    color: #000000;
  }

  & svg:hover ~ svg {
    color: #cccccc;
  }

  .blackStar {
    color: #000000;
  }
`;
