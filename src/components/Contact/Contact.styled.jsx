import styled from '@emotion/styled';
import { theme } from 'constants';
import { AiOutlineDelete } from 'react-icons/ai';
export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: ${theme.sizing(2)};
  padding-right: ${theme.sizing(2)};
`;
export const DeleteBtn = styled.button`
  width: 40px;
  height: 30px;
  border-radius: 8px;
  border: none;
  font-weight: 600;
  background-color: ${theme.colors.formBorder};
  color: white;
  &:hover,
  &:focus {
    color: white;
    background-color: ${theme.colors.darkBlue};
  }
`;
export const ContactBlock = styled.div`

`;
export const  ContactName = styled.p`
font-weight: 600;
line-height: 0.8;
`
export const ContactNumber = styled.p`
font-size: 14px;
line-height: 0.8;
color: ${theme.colors.phoneColor}
`
export const DeleteIcon = styled(AiOutlineDelete)`
width: 20px;
height: 20px;
`