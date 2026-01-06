import React from "react"


//Mendefinisikan aturan untuk perilaku tombol
type TButtonProps = {
    children: React.ReactNode;
    className?:string;
    variant?:"primary" | "dark" | "ghost";
    size?:"normal" | "small";
}& React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({children, className, variant = "primary", size = "normal", ...props}: TButtonProps) =>{ {/* variant = primary dan size = normal merupakan value default tombol*/}
    const baseStyles = "inline-flex gap-2 duration-300 justify-center items-center cursor-pointer hover:scale-105";  {/* Mengatur pondasi visual tombol secara general*/}

    {/* Sistem tema tombol untuk varian primary,dark,dan ghost*/}
    const variants ={
        primary: 'bg-primary text-white hover:bg-primary/85',
        dark: 'bg-dark text-white hover:bg-dark/85',
        ghost:'bg-transparent hover:bg-gray-100 text-dark',
    }
    {/* Varian kontrol ukuran antara normal dan small*/}
    const sizes = {
        normal: "py-4 px-9",
        small:"py-[10px] px-7"

    }
    return(
        <button className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}{...props}>
            {children}
        </button>
    )
}

export default Button