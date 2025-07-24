import styled from 'styled-components';
import {theme} from '../../styles/theme';

export const StyledHeading = styled.h1`
  font-size: ${theme.fontSizes.xxlarge};
  color: ${theme.colors.primary};
  line-height: 1.1;
  margin-bottom: ${theme.spacing(2)};
  font-weight: bold;
`;
