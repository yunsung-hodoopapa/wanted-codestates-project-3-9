import React from 'react';
import PropTypes from 'prop-types';

const List = ({ dataList }) => {
  return (
    <div>
      <ul>
        {dataList.map((value, index) => (
          <li key={index}>
            <img src={value.productImg[0]} alt={value.productImg[0]} />
          </li>
        ))}
      </ul>
    </div>
  );
};

List.propTypes = {
  dataList: PropTypes.array,
};

export default List;
