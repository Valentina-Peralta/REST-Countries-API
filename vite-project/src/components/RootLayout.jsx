import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'

function RootLayout() {
    return (
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <Header />
            <Outlet />
        </div>
    )
}

export default RootLayout