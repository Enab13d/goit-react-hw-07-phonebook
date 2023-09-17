import { List } from './ContactList.styled';
import { Contact } from '../Contact';
import { useSelector } from 'react-redux';
import { getContactsValue } from 'features/contacts/contactsSlice';
import { getFilterValue } from 'features/filter/filterSlice';


export const ContactList = () => {
  const contacts = useSelector(getContactsValue);
  const filter = useSelector(getFilterValue);
  const filteredContacts = contacts ? [...contacts].filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())) : null;

  return (
    <List>
      {filteredContacts ?
        filteredContacts.map(({ name, number, id }) => {
          return (
            <Contact key={id} id={id} name={name} number={number}></Contact>
          );
        }) : null}
    </List>
  );
};
