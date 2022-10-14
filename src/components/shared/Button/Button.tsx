import clsx from 'clsx';
import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';
import styles from './Button.module.scss';

interface CustomButtonProps<E extends ElementType> {
  size?: 'sm' | 'lg';
  variant?: 'primary';
  children?: ReactNode;
  className?: string;
  as?: E;
}

const defaultElement = 'button';

function Button<E extends ElementType = typeof defaultElement>({
  size = 'sm',
  variant = 'primary',
  children,
  className,
  as,
  ...rest
}: CustomButtonProps<E> & ComponentPropsWithoutRef<E>) {
  const Component = as || defaultElement;
  const classes = clsx(
    className,
    styles.wrapper,
    styles[variant],
    styles[size]
  );

  return (
    <Component
      className={classes}
      {...rest}
    >
      {children}
    </Component>
  );
}

export default Button;
