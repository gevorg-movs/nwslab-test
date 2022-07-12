import {ICategory} from "../category/categoryTypes";

export interface IImage {
    id: string
    categories: ICategory[]
    height: number
    width: number
    url: string
}

export interface IGetImagesPayload {
    category_ids: string | number,
    limit: string | number
}