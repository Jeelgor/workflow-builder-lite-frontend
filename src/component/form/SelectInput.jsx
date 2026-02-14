import React from 'react'

const SelectInput = ({ label, value, onChange, options }) => {
    return (
        <div style={{ marginBottom: 12 }}>
            <label style={{ display: "block", marginBottom: 6 }}>{label}</label>
            <select
                value={value}
                onChange={onChange}
                style={{
                    width: "100%",
                    padding: "10px",
                    borderRadius: 6,
                    border: "1px solid #ccc",
                }}
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