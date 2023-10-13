import React from "react";

const Button = ({ label, iconUrl, outLine, fullWidth }) => {
    return (
        <button
            className={`flex justify-center items-center gap-2 border px-7 py-4 text-lg leading-none
     ${outLine?'bg-white':'bg-coral-red'} rounded-full ${outLine?'text-slate-gray':'text-white'}
      ${outLine?'border-slate-gray':'border-coral-red'} ${fullWidth && 'w-full'}`}
        >
            {label}
            {iconUrl && (
                <img
                    src={iconUrl}
                    alt="icon"
                    className="ml-2 rounded-full w-5 h-5"
                />
            )}
        </button>
    );
};

export default Button;
