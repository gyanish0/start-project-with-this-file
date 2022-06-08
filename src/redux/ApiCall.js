import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const ApiCall = createApi({
  reducerPath: "ApiCall",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://hn.algolia.com/api/v1/search?query=html",
  }),
  endpoints: (builder) => ({
    getTodos: builder.query({
      query: () => "todos",
    }),
  }),
});

export const { useGetTodosQuery } = ApiCall;
