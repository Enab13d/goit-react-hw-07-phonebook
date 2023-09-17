import { DeleteBtn, Item, Name } from './Contact.styled';
import PropTypes from 'prop-types';
import { useFetchContactsQuery } from 'services/contactsAPI';
import { useDeleteContactMutation } from 'services/contactsAPI';

export const Contact = ({ name, phone, id }) => {
  const { isFetching} = useFetchContactsQuery()
  const [deleteContact] = useDeleteContactMutation();
  return (
    <Item key={id}>
      <Name>
        {name}: {phone}
      </Name>
      <DeleteBtn
        type="button"
        onClick={() => deleteContact(id)}
        id={id}
      >{isFetching ? 'Deleting...' : 'Delete'}

      </DeleteBtn>
    </Item>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
