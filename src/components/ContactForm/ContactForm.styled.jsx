import styled from '@emotion/styled';
import { theme } from 'constants';
import { BsPersonAdd } from 'react-icons/bs';

export const ContactsForm = styled.form`
  display: flex;
  flex-direction: column;
  border: 2px solid ${theme.colors.formBorder};
  border-radius: 8px;
  padding: ${theme.sizing(1)};
`;
export const Label = styled.label`
  margin-bottom: ${theme.sizing(2)};
`;
export const Field = styled.input`
  margin-bottom: ${theme.sizing(2)};
  height: ${theme.sizing(5)};
  &: last-of-type {
    margin-bottom: ${theme.sizing(4)};
  }
`;
export const SubmitBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  width: 100%;
  height: 36px;
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
export const AddContactIcon = styled(BsPersonAdd)`
width: 24px;
height: 24px;
margin-left: ${theme.sizing(2)};
`