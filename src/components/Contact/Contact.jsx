import {
  DeleteBtn,
  Item,
  ContactBlock,
  ContactName,
  ContactNumber,
} from './Contact.styled';
import PropTypes from 'prop-types';
import { useDeleteContactMutation } from 'services/contactsAPI';
import { DeleteIcon } from './Contact.styled';
import { RotatingLines } from 'react-loader-spinner';
export const Contact = ({ name, phone, id }) => {
  const [deleteContact, { originalArgs, isLoading }] =
    useDeleteContactMutation();
  return (
    <Item key={id}>
      <ContactBlock>
        <ContactName>{name}</ContactName>
        <ContactNumber>{phone}</ContactNumber>
      </ContactBlock>
      <DeleteBtn type="button" onClick={() => deleteContact(id)} id={id}>
        {isLoading && originalArgs === id ? (
          <RotatingLines strokeColor="white" width="20" />
        ) : (
          <DeleteIcon title="remove contact" />
        )}
      </DeleteBtn>
    </Item>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
