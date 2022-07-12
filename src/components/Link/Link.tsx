import React, {FC} from 'react';
import {NavLink} from 'react-router-dom'
import classNames from 'classnames';
import styles from './Link.module.css'

interface LinkProps {
    to: string
    title: string
}

const Link: FC<LinkProps> = ({title, to}) => {
    return (
        <NavLink
            to={to} className={({isActive}) =>classNames([styles.root, isActive && styles.active])}
        >
            {title}
        </NavLink>
    );
};

export default Link;