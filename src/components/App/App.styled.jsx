import styled from '@emotion/styled';
import { theme } from 'constants';
export const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 400px;
  padding: ${theme.sizing(3)};
  background-color: ${theme.colors.transparentWhiteBg};
  backdrop-filter: blur(12px);
`;
