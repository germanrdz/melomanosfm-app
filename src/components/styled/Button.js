import { css } from '@emotion/core';
import styled from '@emotion/styled';

const Button = styled.button`
  border-radius: 1rem;
  padding: 1em 2em;
  outline: none;

  ${({ block }) =>
    block &&
    css`
      width: 100%;
    `}

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.3;
    `}

  svg {
    margin-right: 0.5em;
  }

  :hover {
    cursor: pointer;
  }
`;

export const PrimaryButton = styled(Button)`
  color: #fff;
  border: 1px solid #1bd85f;
  background-color: #1bd85f;

  &:hover {
    background-color: #1bef69;
  }
`;

export default Button;
