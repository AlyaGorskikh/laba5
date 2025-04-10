import React, { createContext, useContext, useEffect, useState, useCallback } from 'react'; // Импортируем необходимые модули из React

const FeedbackContext = createContext(); // Создаем контекст для отзывов

export const FeedbackProvider = ({ children }) => { // Определяем компонент FeedbackProvider, который будет оборачивать дочерние компоненты
    const [feedbacks, setFeedbacks] = useState([]); // Создаем состояние для хранения отзывов

    // Функция для получения отзывов с сервера
    const fetchFeedbacks = useCallback(async () => { // Объявляем асинхронную функцию для получения отзывов с мемоизацией
        try {
            const response = await fetch('http://localhost:5000/feedback'); // Выполняем запрос на сервер для получения отзывов
            if (!response.ok) { // Проверяем, успешен ли ответ
                throw new Error('Ошибка при получении отзывов'); // Если нет, выбрасываем ошибку
            }
            const data = await response.json(); // Преобразуем ответ в JSON
            setFeedbacks(data); // Обновляем состояние отзывов
        } catch (error) {
            console.error("Ошибка при получении отзывов:", error); // Логируем ошибку в консоль
        }
    }, []); // Пустой массив зависимостей означает, что функция будет создана только один раз

    // Функция для добавления отзыва на сервер
    const addFeedback = async (feedback) => { // Объявляем асинхронную функцию для добавления отзыва
        try {
            const response = await fetch('http://localhost:5000/feedback', { // Выполняем POST-запрос на сервер для добавления отзыва
                method: 'POST', // Указываем метод запроса
                headers: {
                    'Content-Type': 'application/json', // Указываем заголовок Content-Type как JSON
                },
                body: JSON.stringify(feedback), // Преобразуем объект отзыва в строку JSON и передаем в теле запроса
            });
            if (!response.ok) { // Проверяем, успешен ли ответ
                throw new Error('Ошибка при добавлении отзыва'); // Если нет, выбрасываем ошибку
            }
            const data = await response.json(); // Преобразуем ответ в JSON
            setFeedbacks(prevFeedbacks => [...prevFeedbacks, data]); // Обновляем состояние отзывов, добавляя новый отзыв к предыдущим
        } catch (error) {
            console.error("Ошибка при добавлении отзыва:", error); // Логируем ошибку в консоль
        }
    };

    // Функция для удаления отзыва с сервера
    const deleteFeedback = async (id) => { // Объявляем асинхронную функцию для удаления отзыва по его ID
        try {
            const response = await fetch(`http://localhost:5000/feedback/${id}`, { // Выполняем DELETE-запрос на сервер для удаления отзыва по ID
                method: 'DELETE', // Указываем метод запроса как DELETE
            });
            if (!response.ok) { // Проверяем, успешен ли ответ
                throw new Error('Ошибка при удалении отзыва'); // Если нет, выбрасываем ошибку
            }
            setFeedbacks(prevFeedbacks => prevFeedbacks.filter(feedback => feedback.id !== id)); // Обновляем состояние отзывов, фильтруя удаленный отзыв по ID
        } catch (error) {
            console.error("Ошибка при удалении отзыва:", error); // Логируем ошибку в консоль
        }
    };

    useEffect(() => { 
        fetchFeedbacks(); // Вызываем функцию получения отзывов при монтировании компонента 
    }, [fetchFeedbacks]); 

    return (
        <FeedbackContext.Provider value={{ feedbacks, addFeedback, deleteFeedback }}> {/* Передаем состояние и функции через контекст */}
            {children} {/* Отображаем дочерние компоненты */}
        </FeedbackContext.Provider>
    );
};

export const useFeedback = () => { 
    return useContext(FeedbackContext); // Создаем хук для использования контекста в других компонентах 
};