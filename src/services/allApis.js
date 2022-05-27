import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const appAddress = {
  "X-RapidAPI-Host": "google-search3.p.rapidapi.com",
  "X-RapidAPI-Key": "3879e8726amsh28d0bdcae7d71c1p148e92jsna2f2b5a6ca87",
};

const baseUrl = "https://google-search3.p.rapidapi.com";
const createRequest = (url) => ({ url, headers: appAddress });
// const options = {
//   method: "GET",
//   url: `https://google-search3.p.rapidapi.com/api/v1/search/q=${getInput}`,
//   headers: {
//     "X-User-Agent": "desktop",
//     "X-Proxy-Location": "IN",
//     "X-RapidAPI-Host": "google-search3.p.rapidapi.com",
//     "X-RapidAPI-Key": "3879e8726amsh28d0bdcae7d71c1p148e92jsna2f2b5a6ca87",
//   },
// };

export const allApi = createApi({
  reducerPath: "allApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: () => createRequest("/search/q=twitter"),
    }),
  }),
});

export const { useAllApiData } = allApi;
