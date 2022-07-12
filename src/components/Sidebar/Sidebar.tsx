import React from 'react';
import Link from "../Link";
import styles from './Sidebar.module.css'
import {useGetCategoriesQuery} from "../../store/features/category/categoryApi";

const Sidebar = () => {

    const {data: categories} = useGetCategoriesQuery()

    return (
        <div className={styles.root}>
            <Link to="/" title="Home"/>

            {categories?.map(category =>
                <Link key={category.id} to={`/categories/${category.id}`} title={category.name}/>
            )}
        </div>
    );
};

export default Sidebar;