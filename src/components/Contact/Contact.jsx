import { DeleteBtn, Item, Name } from './Contact.styled';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeContact } from 'features/contacts/contactsSlice';
export const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <Item key={id}>
      <Name>
        {name}: {number}
      </Name>
      <DeleteBtn
        type="button"
        onClick={() => dispatch(removeContact(id))}
        id={id}
      >
        Delete
      </DeleteBtn>
    </Item>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
