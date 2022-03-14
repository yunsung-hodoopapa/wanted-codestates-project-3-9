import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import styled from 'styled-components';
import ReviewTitle from './ReviewTitle';
const ARRAY = [0, 1, 2, 3, 4];

function Grade() {
  const [clicked, setClicked] = useState([false, false, false, false, false]);

  const handleStarClick = index => {
    let clickStates = [...clicked];
    for (let i = 0; i < 5; i++) {
      clickStates[i] = i <= index ? true : false;
    }
    setClicked(clickStates);
  };

  return (
    <Wrap>
      <ReviewTitle title={'평점'} />
      <Stars>
        {ARRAY.map((el, idx) => {
          return (
            <FaStar
              key={idx}
              size="50"
              onClick={() => handleStarClick(el)}
              className={clicked[el] && 'blackStar'}
            />
          );
        })}
      </Stars>
    </Wrap>
  );
}

export default Grade;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  margin: auto;
`;

const Stars = styled.div`
  display: flex;
  margin: 10px;
  justify-content: center;

  & svg {
    color: gray;
    cursor: pointer;
  }

  :hover svg {
    color: #000000;
  }

  & svg:hover ~ svg {
    color: gray;
  }

  .blackStar {
    color: #000000;
  }
`;
