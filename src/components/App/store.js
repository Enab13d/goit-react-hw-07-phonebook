import { configureStore } from '@reduxjs/toolkit';
import { contactsAPI } from 'services/contactsAPI';
import filterReducer from 'features/filter/filterSlice';


export const store = configureStore({
  reducer: {
    filter: filterReducer,
    [contactsAPI.reducerPath]: contactsAPI.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(contactsAPI.middleware),
});


