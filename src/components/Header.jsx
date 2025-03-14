import React from 'react';
import Menu from './Menu'; // Импортируем компонент Menu
import { useTheme } from '../ThemeContext'; // Импортируем useTheme
import '../components/Header.css'; // Импортируем стили для Header

const Header = () => {
    const { isDarkTheme, toggleTheme } = useTheme(); // Получаем данные из контекста

    return (
        <header className={`header ${isDarkTheme ? 'dark' : 'light'}`}>
            <Menu />
            <h1 className="header__title">My React project</h1>
            <button 
                className="theme-toggle-button" 
                onClick={toggleTheme}
            >
                {isDarkTheme ? 'Светлая тема' : 'Темная тема'}
            </button>
        </header>
    );
};

export default Header;