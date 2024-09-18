import { twMerge } from "tailwind-merge";

const baseClasses = "rounded-md font-medium focus:outline-none";

const variantsLookup = {
    primary:
        "bg-slate-400 text-zinc-900 shadow-lg hover:bg-slate-700 hover:text-white focus:bg-slate-700 focus:text-white focus:ring-slate-500 disabled:bg-slate-900 disabled:text-slate-400",
    outline:
        "bg-zinc-900 border-2 border-slate-400 text-slate-400 shadow-lg hover:bg-zinc-800 focus:ring-zinc-900 focus:border-zinc-900 focus:text-zinc-900 disabled:border-red-900 disabled-bg-zinc-transparent disabled:text-red-900",
    ghost:
        "bg-transparent text-slate-400 shadow-none hover:shawdow-lg hover:shadow-white focus:ring-[0px] focus:ring-offset-0 focus:ring-offset-slate-400 focus:ring-offset-2 focus:text-slate-900 disabled:text-slate-400  disabled:text-red-900",


    danger:
        "bg-red-500 text-white shadow-lg uppercase tracking-wider hover:bg-red-400 focus:bg-red-400 focus:ring-red-500",
    text: "text-slate-700 uppercase underline hover:text-slate-600 hover:bg-slate-900/5 focus:text-slate-600 focus:ring-slate-500",
};

const sizesLookup = {
    small: "px-4 py-1.5 text-sm focus:ring-2 focus:ring-offset-1",
    medium: "px-6 py-3 focus:ring-2 focus:ring-offset-2",
    large: "px-8 py-4 text-lg focus:ring focus:ring-offset-2",
    extralarge: "px-10 py-5 text-xl focus:ring focus:ring-offset-2",
};

const roundedLookup = {
    s: "rounded-sm",
    m: "rounded",
    lg: "rounded-lg",
    xl: "rounded-xl",
};

const Button = ({
    variant = "primary",
    size = "medium",
    rounded = "m",
    className,
    children,
    ...rest
}) => {
    return (
        <button
            {...rest}
            className={twMerge(
                baseClasses,
                variantsLookup[variant],
                sizesLookup[size],
                roundedLookup[rounded],
                className,
            )}
        >
            {children}
        </button>
    );
};

export default Button;