import React from 'react'

const TextInput = ({ label, value, onChange, placeholder, error }) => {
    return (
        <div className="mb-4">
            <label className="block mb-1.5 text-sm font-medium text-gray-700">
                {label}
            </label>
            <input
                type="text"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className={`w-full px-3 py-2.5 rounded-md border transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 ${error
                        ? 'border-red-500 focus:ring-red-500'
                        : 'border-gray-300'
                    }`}
            />
            {error && (
                <span className="text-red-500 text-xs mt-1 block">{error}</span>
            )}
        </div>
    )
}

export default TextInput