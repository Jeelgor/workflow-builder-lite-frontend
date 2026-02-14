import React from 'react'

const SelectInput = ({ label, value, onChange, options }) => {
    return (
        <div className="mb-3">
            <label className="block mb-1.5">{label}</label>
            <select
                value={value}
                onChange={onChange}
                className="w-full px-2.5 py-2.5 rounded-md border border-gray-300"
            >
                {options.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                        {opt.label}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default SelectInput