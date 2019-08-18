import { css } from 'styled-components';

export default css`
  box-shadow: 0 5px 10px -5px rgba(50, 50, 93, 0.15),
    0 -6px 14px -6px rgba(0, 0, 0, 0.025);
  transition: all 0.4s;

  &:hover {
    box-shadow: 0 10px 27px -5px rgba(50, 50, 93, 0.25);
  }
`;
