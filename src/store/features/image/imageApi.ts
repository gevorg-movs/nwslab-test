import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {IGetImagesPayload, IImage} from "./imageTypes";

export const imageApi = createApi({
    reducerPath: 'imageApi',
    baseQuery: fetchBaseQuery({baseUrl: process.env.REACT_APP_API_BASE_URL}),
    endpoints: (builder) => ({
        getImages: builder.query<IImage[], IGetImagesPayload>({
            query: (params) => ({
                url: `/images/search`,
                params
            }),
        }),
    }),
})

export const {useGetImagesQuery} = imageApi