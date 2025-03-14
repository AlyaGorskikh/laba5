import React, { useState, useEffect, useRef } from 'react';
import './Menu.css'; // Подключаем стили
import { useTheme } from '../ThemeContext'; // Импортируем хук useTheme

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
            setIsOpen(false); // Закрываем меню, если клик вне его
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
        <div className="menu__container" ref={menuRef}> {/* Применяем реф к контейнеру меню */}
            <button className="menu__button" onClick={toggleMenu}>
                <span className="menu__icon" />
                <span className="menu__icon" />
                <span className="menu__icon" />
            </button>
            <nav className={`menu ${isOpen ? 'menu-open' : ''} ${isDarkTheme ? 'dark' : 'light'}`}> {/* Добавляем классы в зависимости от темы */}
                <ul>
                    <li><a href="https://portal.edu.asu.ru/mod/assign/view.php?id=563517" target="_blank" rel="noopener noreferrer">Лабораторная работа № 1</a></li>
                    <li><a href="#lab2">Лабораторная работа № 2</a></li>
                    <li><a href="#lab3">Лабораторная работа № 3</a></li>
                    <li><a href="#lab4">Лабораторная работа № 4</a></li>
                    <li><a href="#lab5">Лабораторная работа № 5</a></li>
                    <li><a href="#lab6">Лабораторная работа № 6</a></li>
                    <li><a href="#lab7">Лабораторная работа № 7</a></li>
                    <li><a href="#lab8">Лабораторная работа № 8</a></li>
                    <li><a href="#lab9">Лабораторная работа № 9</a></li>
                </ul>
            </nav>
        </div>
    );
};

export default Menu;