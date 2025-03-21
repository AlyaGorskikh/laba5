// components/Content.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import '../components/Content.css';
import { useTheme } from '../ThemeContext';
import { useAuth } from '../auto/AuthContext';
import Counter from './Counter';
import AuthContainer from '../auto/AuthContainer';
import UserProfile from '../auto/userProfile';

const labWorks = [
    { id: 1, image: 'laba1.png', caption: 'Лабораторная работа 1' },
    { id: 2, image: 'laba2.png', caption: 'Лабораторная работа 2' },
    { id: 3, image: 'laba3.png', caption: 'Лабораторная работа 3' },
    { id: 4, image: 'laba4.png', caption: 'Лабораторная работа 4' },
    { id: 5, image: 'laba5.png', caption: 'Лабораторная работа 5' },
    { id: 6, image: 'laba6.png', caption: 'Лабораторная работа 6' },
    { id: 7, image: 'laba7.png', caption: 'Лабораторная работа 7' },
    { id: 8, image: 'laba8.png', caption: 'Лабораторная работа 8' },
    { id: 9, image: 'laba9.png', caption: 'Лабораторная работа 9' },
];

const LabWork = ({ lab }) => {
    return (
        <div>
            <h3>{lab.caption}</h3>
            <img className="slider-image" src={lab.image} alt={lab.caption} />
        </div>
    );
};

const Content = () => {
    const { isDarkTheme } = useTheme();
    const { isAuthenticated } = useAuth();

    return (
        <div className={`content ${isDarkTheme ? 'dark' : 'light'}`}>
            {isAuthenticated ? (
                <>
                    <Routes>
                        {labWorks.map((lab) => (
                            <Route key={lab.id} path={`/lab${lab.id}`} element={<LabWork lab={lab} />} />
                        ))}
                        <Route path="/" element={<LabWork lab={labWorks[0]} />} />
                        <Route path="/counter" element={<Counter />} />
                        <Route path="/profile" element={<UserProfile />} />
                    </Routes>
                </>
            ) : (
                <AuthContainer />
            )}
        </div>
    );
};

export default Content;