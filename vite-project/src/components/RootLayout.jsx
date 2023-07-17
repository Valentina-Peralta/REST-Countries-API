import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Details from './Details';


function RootLayout() {
    const [darkMode, setDarkMode] = useState(false);
    return (
        <div style={{ margin: '0 auto' }}>
            <Header darkMode={darkMode} setDarkMode={setDarkMode} />
            <Routes>
                <Route path="/" element={<Home darkMode={darkMode} />} />
                <Route path=":index" element={<Details darkMode={darkMode} />} />
            </Routes>
        </div>
    );
}

export default RootLayout;
{/* <Outlet darkMode={darkMode} />
 */}