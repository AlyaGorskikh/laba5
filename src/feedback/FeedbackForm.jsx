    import React, { useCallback } from 'react';
    import { useForm } from 'react-hook-form';
    import { useFeedback } from './FeedbackContext';
    import { useTheme } from '../ThemeContext'; // Импортируем useTheme
    import './FeedbackList.css'; // Импорт стилей

    const FeedbackForm = () => {
        const { register, handleSubmit, reset } = useForm();
        const { addFeedback } = useFeedback();
        const { isDarkTheme } = useTheme(); // Используем контекст темы
    
        const onSubmit = useCallback((data) => {
            addFeedback({ name: data.name, feedback: data.feedback });
            reset(); // Сбрасываем форму
        }, [addFeedback, reset]);
    
        return (
            <form className={`feedback-form ${isDarkTheme ? 'dark' : 'light'}`} onSubmit={handleSubmit(onSubmit)}>
                <div className="form-field">
                    <label>Ваше имя:</label>
                    <input {...register('name', { required: true })} placeholder="Введите ваше имя" />
                </div>
                <div className="form-field">
                    <label>Ваш отзыв:</label>
                    <textarea {...register('feedback', { required: true })} placeholder="Введите ваш отзыв" />
                </div>
                <button type="submit">Отправить отзыв</button>
            </form>
        );
    };
    
    export default FeedbackForm;
    