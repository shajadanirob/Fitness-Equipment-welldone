import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const baseQuery = fetchBaseQuery({
    baseUrl: 'https://assignment-foure-server.vercel.app/api',
    credentials: 'include',
});
export const baseApi = createApi({
    reducerPath: 'baseApi',
    baseQuery,
    tagTypes: ['product'],
    endpoints: () => ({}),
});
