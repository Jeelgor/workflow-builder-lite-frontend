import React from 'react'

const SectionCard = ({ children, title }) => {
    return (
        <div
            style={{
                border: "10px solid #e5e7eb",
                borderRadius: 10,
                padding: 20,
                marginBottom: 24,
                background: "#ffffff",
                boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
            }}
        >
            <div
                style={{
                    borderBottom: "2px solid #f0f0f0",
                    marginBottom: 16,
                    paddingBottom: 8,
                }}
            >
                <h3 style={{ margin: 0 }} className="text-2xl">{title}</h3>
            </div>

            {children}
        </div>
    )
}

export default SectionCard