import React from 'react'

const TextInput = ({ label, value, onChange, placeholder }) => {
    return (
        <div style={{ marginBottom: 16 }}>
            <label style={{ display: "block", marginBottom: 6 }}>{label}</label>
            <input
                type="text"
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                style={{
                    width: "100%",
                    padding: "10px",
                    borderRadius: 6,
                    border: "1px solid #ccc",
                }}
            />
        </div>
    )
}

export default TextInput