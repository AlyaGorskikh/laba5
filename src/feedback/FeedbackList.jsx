import React from 'react';
import { useFeedback } from './FeedbackContext';
import { useTheme } from '../ThemeContext'; // Импортируем useTheme
import './FeedbackList.css'; // Импорт стилей

const FeedbackList = () => {
    const { feedbacks } = useFeedback();
    const { isDarkTheme } = useTheme(); // Используем контекст темы

    const validFeedbacks = feedbacks.filter(feedback => feedback.name && feedback.feedback);

    return (
        <div className={`feedback-list ${isDarkTheme ? 'dark' : 'light'}`}> {/* Применение класса для стилей */}
            {validFeedbacks.length > 0 && <h3>Отзывы:</h3>}
            {validFeedbacks.map((feedback, index) => (
                <div key={index} className="feedback-item"> {/* Применение класса для каждого отзыва */}
                    <p className="feedback-name">{feedback.name}:</p> {/* Применение класса для имени */}
                    <p>{feedback.feedback}</p>
                </div>
            ))}
        </div>
    );
};

export default FeedbackList;