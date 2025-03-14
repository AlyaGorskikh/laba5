import React from 'react';
import FeedbackForm from './feedback/FeedbackForm';
import FeedbackList from './feedback/FeedbackList';
import { useTheme } from './ThemeContext';  // Импортируем useTheme
import './FeedbackBlock.css'; // Импортируем CSS файл

const FeedbackBlock = () => {
    const { isDarkTheme } = useTheme();  // Используем контекст темы

    return (
        <div className={`feedback-block ${isDarkTheme ? 'dark' : 'light'}`}> {/* Применение класса для стилей */}
            <h2>Обратная связь</h2>
            <FeedbackForm />
            <FeedbackList />
        </div>
    );
};

export default FeedbackBlock;