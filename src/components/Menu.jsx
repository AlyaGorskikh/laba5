// components/Menu.js
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom'; // Импортируем Link
import './Menu.css'; // Подключаем стили
import { useTheme } from '../ThemeContext'; // Импортируем хук useTheme
import Counter from './Counter';

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false); // Состояние для управления открытием меню
    const { isDarkTheme } = useTheme(); // Получаем текущее состояние темы
    const menuRef = useRef(null); // Создаем реф для меню

    const toggleMenu = () => {
        setIsOpen(!isOpen); // Переключаем состояние меню
    };

    // Обработчик клика вне меню
    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsOpen(false); // Закрываем меню, если клик вне него
        }
    };

    useEffect(() => {
        // Добавляем обработчик события клика
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            // Удаляем обработчик события при размонтировании компонента
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="menu__container" ref={menuRef}>
            <button className="menu__button" onClick={toggleMenu}>
                <span className="menu__icon" />
                <span className="menu__icon" />
                <span className="menu__icon" />
            </button>
            <nav className={`menu ${isOpen ? 'menu-open' : ''} ${isDarkTheme ? 'dark' : 'light'}`}>
                <ul>
                    <li><Link to="/" onClick={() => setIsOpen(false)}>Лабораторная работа № 1</Link></li>
                    <li><Link to="/lab2" onClick={() => setIsOpen(false)}>Лабораторная работа № 2</Link></li>
                    <li><Link to="/lab3" onClick={() => setIsOpen(false)}>Лабораторная работа № 3</Link></li>
                    <li><Link to="/lab4" onClick={() => setIsOpen(false)}>Лабораторная работа № 4</Link></li>
                    <li><Link to="/lab5" onClick={() => setIsOpen(false)}>Лабораторная работа № 5</Link></li>
                    <li><Link to="/lab6" onClick={() => setIsOpen(false)}>Лабораторная работа № 6</Link></li>
                    <li><Link to="/lab7" onClick={() => setIsOpen(false)}>Лабораторная работа № 7</Link></li>
                    <li><Link to="/lab8" onClick={() => setIsOpen(false)}>Лабораторная работа № 8</Link></li>
                    <li><Link to="/lab9" onClick={() => setIsOpen(false)}>Лабораторная работа № 9</Link></li>
                    <li><Link to="/counter" onClick={() => setIsOpen(false)}>Счетчик</Link></li>
                </ul>
            </nav>
        </div>
    );
};

export default Menu;