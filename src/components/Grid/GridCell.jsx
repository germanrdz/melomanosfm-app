import React from 'react';

import { gridCellPropType } from '../../constants/custom-proptypes';
import './grid-cell.scss';

const GridCell = ({ item }) => (
  <li className="grid-cell">
    <img src={item.image} alt={item.name} />
    <a target="_blank" rel="noopener noreferrer" href={item.url}>{item.name}</a>
  </li>
);

GridCell.propTypes = {
  item: gridCellPropType.isRequired,
};

export default GridCell;
