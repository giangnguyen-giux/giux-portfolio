import React from 'react';

interface ButtonCTAProps {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
}

function ButtonCTA({ children, className = '', onClick }: ButtonCTAProps) {
    return (
        <button
            onClick={onClick}
            className={`
                font-body bg-brand-primary text-slate-950 text-base rounded-full 
                hover:bg-amber-600 transition-all duration-300
                hover:shadow-[0_4px_20px_rgba(251,191,36,0.6)] cursor-pointer
                ${className}
            `}
        >
            {children}
        </button>
    );
}
export default ButtonCTA;