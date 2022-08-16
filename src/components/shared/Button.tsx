import React from 'react'

interface ButtonProps {
    padding?: string;
    width?: string;
    color?: string;
    font_weight?: string
    children?: React.ReactNode;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({children, padding, width, color, font_weight, onClick} : ButtonProps) => {
  return (
    <button onClick={onClick} className={`bg-mainPurple ${padding} ${width} ${color} ${font_weight} rounded-full transition duration-200 text-base hover:bg-mainPurpleHover font-sans`}>
        {children}
    </button>
  )
}

export default Button;