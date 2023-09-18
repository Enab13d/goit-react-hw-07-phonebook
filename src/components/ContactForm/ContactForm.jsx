import { Field, ContactsForm, Label, SubmitBtn } from './ContactForm.styled';
import {
  useFetchContactsQuery,
  useAddContactMutation,
} from 'services/contactsAPI';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AddContactIcon } from './ContactForm.styled';


export const ContactForm = () => {
  const { data: contacts } = useFetchContactsQuery();
  const [addContact, { isFetching }] = useAddContactMutation();
  const notify = value =>
    toast.warn(`${value} is already in contacts.`, {
      position: 'top-center',
      autoClose: 2000,
    });
  const handleSubmit = e => {
    e.preventDefault();
    const { name, number } = e.target.elements;
    const value = name.value;
    const isContain = contacts
      ? contacts.some(
          contact => contact.name.toLowerCase() === value.toLowerCase()
        )
      : null;
    if (isContain) {
      return notify(value);
    }
    addContact({ name: value, phone: number.value });
    toast.success(`${value} has been added to Your contacts`, {autoClose: 1000});
    e.target.reset();
  };

  return (
    <ContactsForm onSubmit={handleSubmit}>
      <Label htmlFor="name">Name</Label>
      <Field
        type="text"
        name="name"
        id="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <Label htmlFor="number">Number</Label>
      <Field
        type="tel"
        name="number"
        id="number"
        pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <SubmitBtn>{isFetching ? 'Adding...' : <><span>Add Contact</span><AddContactIcon title='add contact'/></>}</SubmitBtn>
    </ContactsForm>
  );
};
