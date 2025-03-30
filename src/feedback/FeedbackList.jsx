import React from 'react';
import { useFeedback } from './FeedbackContext'; 
import { useTheme } from '../ThemeContext';
import './Feedback.css'; // Импортируйте CSS

const FeedbackList = () => {
    const { feedbacks } = useFeedback(); 
    const { isDarkTheme } = useTheme();

    const validFeedbacks = feedbacks.filter(feedback => feedback.name && feedback.feedback); 

    return (
        <div className={`feedback-list ${isDarkTheme ? 'bg-dark' : 'bg-light'} p-3 rounded`}>
            {validFeedbacks.length > 0 && <h3>Отзывы:</h3>} 
            {validFeedbacks.map((feedback, index) => (
                <div key={index} className="feedback-item mb-2">
                    <p className="feedback-name fw-bold">{feedback.name}:</p> 
                    <p>{feedback.feedback}</p> 
                </div>
            ))}
        </div>
    );
};

export default FeedbackList;