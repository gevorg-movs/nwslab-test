import {configureStore} from '@reduxjs/toolkit';
import {categoryApi} from "./features/category/categoryApi";
import {imageApi} from "./features/image/imageApi";

export const store = configureStore({
    reducer: {
        [categoryApi.reducerPath]: categoryApi.reducer,
        [imageApi.reducerPath]: imageApi.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat([categoryApi.middleware, imageApi.middleware]),
});
