import React from 'react';
import { useTheme } from '../ThemeContext'; // Импортируем useTheme
import './Footer.css'; // Импортируем стили для Footer

function Footer() {
    const { isDarkTheme } = useTheme(); // Получаем данные из контекста

    return (
        <footer className={`footer ${isDarkTheme ? 'dark' : 'light'}`}>
            <div className="footer-content">
                <p>&copy; 2025 Лабораторные работы защищены.</p>
            </div>
        </footer>
    );
}

export default Footer;