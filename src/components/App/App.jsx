// import { useEffect } from 'react';
import { ContactForm } from '../ContactForm';
import { Filter } from '../Filter';
import { ContactList } from '../ContactList';
import { Wrapper } from './App.styled';
export const App = () => {
  return (
    <Wrapper>
      <h1>Phonebook</h1>
      <ContactForm></ContactForm>
      <h2>Contacts</h2>
      <Filter />
      <ContactList></ContactList>
    </Wrapper>
  );
};
