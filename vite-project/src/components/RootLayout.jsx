import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'

function RootLayout() {
    const [darkMode, setDarkMode] = useState(false)
    return (
        <div style={{ margin: '0 auto' }}>
            <Header
                onClick={() =>
                    setDarkMode(!darkMode)} />
            <Outlet />
        </div>
    )
}

export default RootLayout