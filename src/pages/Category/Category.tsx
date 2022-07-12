import React, {useState} from 'react';
import {useParams} from 'react-router-dom';
import Image from "../../components/Image";
import Button from "../../components/Button";
import styles from './Category.module.css'
import {useGetImagesQuery} from "../../store/features/image/imageApi";
import {useGetCategoryQuery} from "../../store/features/category/categoryApi";

const Category = () => {

    const {categoryId} = useParams()

    const [limit, setLimit] = useState(10)

    const {data: images, isLoading} = useGetImagesQuery({
        category_ids: categoryId as string,
        limit,
    })
    const {data: category} = useGetCategoryQuery(categoryId as string)

    const handleLoadMore = () => setLimit(limit + 10)

    return (
        <div>
            <h1>{category?.name}</h1>

            <div className={styles.images_container}>
                {images?.map(image =>
                    <Image key={image.id} image={image}/>
                )}
            </div>

            <Button
                onClick={handleLoadMore}
                isLoading={isLoading}
            >
                Load more
            </Button>
        </div>
    );
};

export default Category;