import React, { ReactNode, MouseEvent } from 'react';

//CSS
import './Button.css';

type ButtonProps = {
  className: string;
  children: ReactNode;
  onClick: (event: MouseEvent<HTMLElement>) => void;
};

const Button = ({
  className = '',
  children,
  onClick,
}: ButtonProps): JSX.Element => {
  const classes: string = 'shared__button ' + className;
  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
