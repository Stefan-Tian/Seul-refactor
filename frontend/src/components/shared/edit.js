import styled from 'styled-components';
import { Icon, Box } from '@material-ui/core';
import { grey, teal } from '@material-ui/core/colors';

export const EditIcon = styled(Icon)`
  display: none;
  margin-right: ${({ mr }) => (mr ? mr : '0px')};
  && {
    font-size: 18px;
    cursor: pointer;
    color: ${grey[400]}

    &:hover {
      color: ${teal[300]};
    }
  }
`;

export const EditIconButton = styled.button`
  border: 0;
  width: 18px;
  height: 18px;
  padding: 0;
  background-color: rgba(0, 0, 0, 0);
  margin-right: ${({ mr }) => (mr ? mr : '0px')};
`;

export const EditTitle = styled(Box)`
  &:hover {
    ${EditIcon}, ${EditIconButton} {
      display: inline-block;
    }
  }
`;
