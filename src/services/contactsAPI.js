import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const contactsAPI = createApi({
  reducerPath: 'contactsAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://65072d3c3a38daf4803f3409.mockapi.io/api',
  }),
  tagTypes: ['Contact'],
  endpoints: builder => ({
    fetchContacts: builder.query({
        query: () => '/contacts',
        providesTags: ['Contact'],
    }),
    addContact: builder.mutation({
      query: ({ name, phone }) => ({
        url: `contacts/`,
        method: 'POST',
        body: { name, phone },
      }),
      invalidatesTags: ['Contact'],
    }),
    deleteContact: builder.mutation({
      query: id => ({
        url: `contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contact'],
    }),
  }),
});

export const {
  useFetchContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} = contactsAPI;

