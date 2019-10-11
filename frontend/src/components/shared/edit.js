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

export const EditTitle = styled(Box)`
  &:hover {
    & > ${EditIcon} {
      display: inline-block;
    }
  }
`;
