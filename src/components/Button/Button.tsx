import React, {FC} from 'react';
import styles from './Button.module.css'

interface ButtonProps {
    children: React.ReactNode
    onClick: () => void
    isLoading?: boolean
}

const Button: FC<ButtonProps> = ({children, onClick, isLoading}) => {
    return (
        <button onClick={onClick} className={styles.root}>
            {isLoading ? 'Loading' : children}
        </button>
    );
};

export default Button;