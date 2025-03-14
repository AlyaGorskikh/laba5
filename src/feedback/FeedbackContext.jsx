import React, { createContext, useContext, useState } from 'react';

// Создаем контекст для отзывов
const FeedbackContext = createContext();

// Провайдер для отзывов
export const FeedbackProvider = ({ children }) => {
    const [feedbacks, setFeedbacks] = useState([]);

    const addFeedback = (feedback) => {
        setFeedbacks(prevFeedbacks => [...prevFeedbacks, feedback]);
    };

    return (
        <FeedbackContext.Provider value={{ feedbacks, addFeedback }}>
            {children}
        </FeedbackContext.Provider>
    );
};

// Хук для использования контекста отзывов
export const useFeedback = () => {
    return useContext(FeedbackContext);
};