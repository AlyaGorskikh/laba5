// components/Header.js
import React from 'react';
import Menu from './Menu';
import { useTheme } from '../ThemeContext';
import { useAuth } from '../auto/AuthContext'; 
import '../components/Header.css';
import { useNavigate } from 'react-router-dom'; // Импортируем для маршрутизации

const Header = () => {
    const { isDarkTheme, toggleTheme } = useTheme();
    const { isAuthenticated, logout, userEmail } = useAuth();
    const navigate = useNavigate(); // Получаем navigate для навигации

    const handleEmailClick = () => {
        navigate('/profile'); // Переход на страницу профиля пользователя
    };

    return (
        <header className={`header ${isDarkTheme ? 'dark' : 'light'}`}>
            <Menu />
            <button className="theme-toggle-button" onClick={toggleTheme}>
                {isDarkTheme ? 'Светлая тема' : 'Темная тема'}
            </button>
            {isAuthenticated ? (
                <>
                    <span className="user-email" onClick={handleEmailClick}>
                        {userEmail}
                    </span>
                    <button className="logout-button" onClick={logout}>Выйти</button>
                </>
            ) : (
                <button className="auth-button" onClick={() => alert('Заполните форму')}>Войти</button>
            )}
        </header>
    );
};

export default Header;