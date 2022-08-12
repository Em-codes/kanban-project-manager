import React from 'react'

interface ButtonProps {
    padding?: string;
    width?: string;
    color?: string;
    children?: React.ReactNode;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({children, padding, width, color, onClick} : ButtonProps) => {
  return (
    <button onClick={onClick} className={`bg-mainPurple ${padding} ${width} ${color} rounded-full transition duration-200 font-bold text-base hover:bg-mainPurpleHover font-sans`}>
        {children}
    </button>
  )
}

export default Button;