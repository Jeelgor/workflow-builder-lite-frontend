import React from 'react'

const PageContainer = ({ children }) => {
    return (
        <div style={{ margin: "0 auto", padding: "24px" }}>
            {children}
        </div>
    )
}

export default PageContainer