import { Field, ContactsForm, Label, SubmitBtn } from './ContactForm.styled';
import { useFetchContactsQuery, useAddContactMutation } from 'services/contactsAPI';

export const ContactForm = () => {
  const {data: contacts} = useFetchContactsQuery()
  const [addContact, {isFetching}] = useAddContactMutation();
  const handleSubmit = e => {
    e.preventDefault();
    const { name, number } = e.target.elements;
    console.log(number.value);
    const value = name.value;
    const isContain = contacts ? contacts.some(
      contact => contact.name.toLowerCase() === value.toLowerCase()
    ) : null;
    if (isContain) {
      return alert(`${value} is already in contacts.`);
    }
    addContact({ name: value, phone: number.value });
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
      <SubmitBtn>{isFetching? 'Adding...': 'Add Contact'}</SubmitBtn>
    </ContactsForm>
  );
};
