// components/Content.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import '../components/Content.css';
import { useTheme } from '../ThemeContext';
import { useAuth } from '../auto/AuthContext'; 
import Counter from './Counter';
import AuthContainer from '../auto/AuthContainer';
import UserProfile from '../auto/userProfile'; 

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

    return (
        <div className={`content ${isDarkTheme ? 'dark' : 'light'}`}>
            {isAuthenticated ? (
                <>
                    <Routes>
                        <Route path="/" element={<LabWork lab={labWorks[0]} />} />
                        <Route path="/lab2" element={<LabWork lab={labWorks[1]} />} />
                        <Route path="/lab3" element={<LabWork lab={labWorks[2]} />} />
                        <Route path="/lab4" element={<LabWork lab={labWorks[3]} />} />
                        <Route path="/lab5" element={<LabWork lab={labWorks[4]} />} />
                        <Route path="/lab6" element={<LabWork lab={labWorks[5]} />} />
                        <Route path="/lab7" element={<LabWork lab={labWorks[6]} />} />
                        <Route path="/lab8" element={<LabWork lab={labWorks[7]} />} />
                        <Route path="/lab9" element={<LabWork lab={labWorks[8]} />} />
                        <Route path="/counter" element={<Counter />} />
                        <Route path="/profile" element={<UserProfile />} /> {/* Профиль пользователя */}
                    </Routes>
                </>
            ) : (
                <AuthContainer />
            )}
        </div>
    );
};

export default Content;