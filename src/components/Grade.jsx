import React, { useState } from 'react';
import { BsStarFill, BsStar } from 'react-icons/bs';
import ReviewTitle from './ReviewTitle';
import styled from 'styled-components';
const Grade = () => {
  const [clicked, setClicked] = useState([false, false, false, false, false]);

  const handleStarClick = (e, index) => {
    e.preventDefault();
    let clickStates = [...clicked];
    for (let i = 0; i < 5; i++) {
      if (i <= index) clickStates[i] = true;
      else clickStates[i] = false;
    }

    setClicked(clickStates);
  };

  console.log(clicked);

  return (
    <GradeContainer>
      <ReviewTitle />
      <BsStarContainer>
        <BsStarMargin>
          {clicked[0] ? (
            <BsStarFill onClick={e => handleStarClick(e, 0)} />
          ) : (
            <BsStar onClick={e => handleStarClick(e, 0)} />
          )}
        </BsStarMargin>
        <BsStarMargin>
          {clicked[1] ? (
            <BsStarFill onClick={e => handleStarClick(e, 1)} />
          ) : (
            <BsStar onClick={e => handleStarClick(e, 1)} />
          )}
        </BsStarMargin>
        <BsStarMargin>
          {clicked[2] ? (
            <BsStarFill onClick={e => handleStarClick(e, 2)} />
          ) : (
            <BsStar onClick={e => handleStarClick(e, 2)} />
          )}
        </BsStarMargin>
        <BsStarMargin>
          {clicked[3] ? (
            <BsStarFill onClick={e => handleStarClick(e, 3)} />
          ) : (
            <BsStar onClick={e => handleStarClick(e, 3)} />
          )}
        </BsStarMargin>
        <BsStarMargin>
          {clicked[4] ? (
            <BsStarFill onClick={e => handleStarClick(e, 4)} />
          ) : (
            <BsStar onClick={e => handleStarClick(e, 4)} />
          )}
        </BsStarMargin>
      </BsStarContainer>
    </GradeContainer>
  );
};
const GradeContainer = styled.div`
  width: 500px;
  margin: 10px;
`;

const BsStarContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const BsStarMargin = styled.div`
  margin: 0px 3px;
`;

export default Grade;
