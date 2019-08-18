import { Box } from '@material-ui/core';
import styled from 'styled-components';

export default styled(Box)`
  ${props =>
    props.pointer &&
    `
    cursor: pointer;
  `}
`;
