import { ContactForm } from '../ContactForm';
import { Filter } from '../Filter';
import { ContactList } from '../ContactList';
import { Wrapper } from './App.styled';
import { ToastContainer } from 'react-toastify';
export const App = () => {
  return (
    <Wrapper>
      <h1>Phonebook</h1>
      <ContactForm></ContactForm>
      <h2>Contacts</h2>
      <Filter />
      <ContactList></ContactList>
      <ToastContainer position="top-center"
autoClose={2000}/>
    </Wrapper>
  );
};
