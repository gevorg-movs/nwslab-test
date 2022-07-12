import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {ICategory} from "./categoryTypes";

export const categoryApi = createApi({
    reducerPath: 'categoryApi',
    baseQuery: fetchBaseQuery({baseUrl: `${process.env.REACT_APP_API_BASE_URL}/categories`}),
    endpoints: (builder) => ({
        getCategories: builder.query<ICategory[], void>({
            query: () => `/`,
        }),
        getCategory: builder.query<ICategory, string | number>({
            query: (categoryId) => `/${categoryId}`,
        }),
    }),
})

export const {useGetCategoriesQuery, useGetCategoryQuery} = categoryApi