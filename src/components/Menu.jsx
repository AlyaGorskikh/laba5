// components/Menu.js
import React, { useState, useEffect, useRef } from 'react'; // useRef — для создания ссылок на DOM-элементы
import { Link } from 'react-router-dom'; // используется для создания ссылок на другие маршруты в приложении
import './Menu.css';
import { useTheme } from '../ThemeContext';

const menuItems = [ // пределяет массив объектов menuItems, где каждый объект представляет собой элемент меню с path (путь маршрута) и label (название элемента меню)
    { path: '/', label: 'Лабораторная работа № 1' },
    { path: '/lab2', label: 'Лабораторная работа № 2' },
    { path: '/lab3', label: 'Лабораторная работа № 3' },
    { path: '/lab4', label: 'Лабораторная работа № 4' },
    { path: '/lab5', label: 'Лабораторная работа № 5' },
    { path: '/lab6', label: 'Лабораторная работа № 6' },
    { path: '/lab7', label: 'Лабораторная работа № 7' },
    { path: '/lab8', label: 'Лабораторная работа № 8' },
    { path: '/lab9', label: 'Лабораторная работа № 9' },
    { path: '/counter', label: 'Счетчик' },
];

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { isDarkTheme } = useTheme();
    const menuRef = useRef(null); // создает ссылку menuRef с помощью хука useRef, которая будет использоваться для ссылки на элемент меню в DOM

    const toggleMenu = () => { // toggleMenu переключает состояние isOpen на противоположное (открывает или закрывает меню)
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (event) => { // обрабатывает клики вне меню. Если клик был сделан вне элемента, на который ссылается menuRef, состояние isOpen устанавливается в false, что закрывает меню
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => { // useEffect добавляет обработчик события mousedown на документ, который вызывает функцию handleClickOutside. Возвращаемая функция удаляет обработчик события, когда компонент размонтируется, чтобы избежать утечек памяти
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
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
                    {menuItems.map((item) => ( // проходит по массиву menuItems, создавая элемент списка для каждого пункта меню
                        <li key={item.path}> {/* создает элемент li с уникальным key, основанным на path каждого элемента меню */}
                            <Link to={item.path} onClick={() => setIsOpen(false)}> {/*  создает компонент Link, который ведет на путь item.path. При нажатии на ссылку также вызывается функция, которая устанавливает isOpen в false, закрывая меню */}
                                {item.label} {/* отображает текст элемента меню, который берется из item.label */}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default Menu;