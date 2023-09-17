import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'contacts',
  storage,
};

const initialState = { value: [] };

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action) => {
      state.value.push(action.payload);
    },
    removeContact: (state, action) => {
      const idx = state.value.findIndex(
        contact => contact.id === action.payload
      );
      state.value.splice(idx, 1);
    },
  },
});
export const persistedContactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const { addContact, removeContact } = contactsSlice.actions;

//selectors
export const getContactsValue = state => state.contacts.value;
