import { ButtonHTMLAttributes, ReactNode } from 'react';

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: 'primary' | 'ghost' | 'outline';
    size?: 'default' | 'icon';
}

export function CustomButton({
    children,
    variant = 'primary',
    size = 'default',
    className,
    ...props
}: CustomButtonProps) {
    const baseClasses =
        'font-bold transition-all duration-200 active:scale-95 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed';

    const variants = {
        primary:
            'bg-indigo-700 text-white font-medium shadow-lg shadow-indigo-700/25 hover:scale-105 hover:bg-indigo-700/90 hover:shadow-indigo-700/40 focus:ring-indigo-700 rounded-xl',
        ghost: 'font-medium text-muted-foreground hover:bg-gray-100 hover:text-indigo-700 rounded-full items-center',
        outline: 'font-medium border border-gray-300 bg-white text-gray-800 hover:bg-gray-50',
    };

    const sizes = {
        default: 'px-5 py-2.5',
        icon: 'size-10',
    };

    return (
        <button
            className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
            {...props}
        >
            {children}
        </button>
    );
}
