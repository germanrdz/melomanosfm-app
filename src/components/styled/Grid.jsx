import { css } from '@emotion/core';
import styled from '@emotion/styled';

const Grid = styled.div`
  display: grid;
  grid-gap: 1em;
  margin-bottom: 1em;

  ${({ columns }) =>
    columns &&
    css`
      grid-template-columns: repeat(${columns}, minmax(0, 1fr));
    `}
`;

export default Grid;
