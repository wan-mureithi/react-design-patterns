import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

const albumsApi = createApi({
  reducerPath: "albums",
  baseQuery: fetchBaseQuery({ baseUrl: "/api/albums" }),
})
