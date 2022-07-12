import React, {FC} from 'react';
import styles from './Image.module.css'
import {IImage} from "../../store/features/image/imageTypes";

interface ImageProps {
    image: IImage
}

const Image: FC<ImageProps> = ({image}) => {
    return (
        <div className={styles.root}>
            <img className={styles.image} alt={image.id} src={image.url}/>
        </div>
    );
};

export default Image;