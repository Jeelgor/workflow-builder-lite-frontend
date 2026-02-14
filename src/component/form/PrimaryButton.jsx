import React from 'react'

const PrimaryButton = ({ children, onClick, type = "button" }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            style={{
                padding: "10px 16px",
                backgroundColor: "#111",
                color: "#fff",
                borderRadius: 6,
                border: "none",
                cursor: "pointer",
            }}
        >
            {children}
        </button>
    )
}

export default PrimaryButton