interface ButtonBorderProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

function ButtonBorder({ children, className = "", onClick }: ButtonBorderProps) {
  return (
    <button
      onClick={onClick}
      className={`
                font-body border border-brand-primary text-brand-primary text-base rounded-full 
                hover:bg-amber-200 transition-all duration-300
                hover:text-amber-900 cursor-pointer
                ${className}
            `}
    >
      {children}
    </button>
  );
}
export default ButtonBorder;
