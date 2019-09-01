import React from 'react';
import PropTypes from 'prop-types';

import GridCell from './GridCell';
import { gridCell } from '../../constants/custom-proptypes';
import './grid.scss';

const Grid = ({ items }) => (
  <ul className="grid">
    {
      items.map((item) => <GridCell key={item.id} item={item} />)
    }
  </ul>
);

Grid.defaultProps = {
  items: [],
};

Grid.propTypes = {
  items: PropTypes.arrayOf(gridCell),
};

export default Grid;
