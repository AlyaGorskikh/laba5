import React from 'react';
import { useTheme } from '../ThemeContext';
import './Footer.css';

function Footer() {
    const { isDarkTheme } = useTheme();

    return (
        <footer className={`footer ${isDarkTheme ? 'dark' : 'light'}`}>
            <div className="footer-content">
                <p>&copy; 2025 Лабораторные работы защищены.</p> {/* Создаёт элемент параграфа, который содержит текст с символом копирайта */}
            </div>
        </footer>
    );
}

export default Footer;