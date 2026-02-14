import React from 'react'

const PrimaryButton = ({ children, onClick, type = "button" }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className="py-2.5 px-4 bg-gray-900 text-white rounded-md border-0 cursor-pointer"
        >
            {children}
        </button>
    )
}

export default PrimaryButton