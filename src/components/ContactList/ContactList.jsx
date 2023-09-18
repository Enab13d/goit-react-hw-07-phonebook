import { List } from './ContactList.styled';
import { Contact } from '../Contact';
import { useSelector } from 'react-redux';
import { useFetchContactsQuery } from 'services/contactsAPI';
import { getFilterValue } from 'features/filter/filterSlice';
import { Loader } from 'components/App/Loader/Loader';
export const ContactList = () => {
  const { data: contacts, isLoading } = useFetchContactsQuery();

  const filter = useSelector(getFilterValue);
  const filteredContacts = contacts
    ? [...contacts].filter(contact =>
        contact.name.toLowerCase().includes(filter.toLowerCase())
      )
    : null;

  return (
    <>
      {isLoading && (
        <>
          
          <Loader
          />
        </>
      )}
      <List>
        {filteredContacts
          ? filteredContacts.map(({ name, phone, id }) => {
              return (
                <Contact key={id} id={id} name={name} phone={phone}></Contact>
              );
            })
          : null}
      </List>
    </>
  );
};
