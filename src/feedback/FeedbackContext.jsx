// src/feedback/FeedbackContext.jsx
import React, { createContext, useContext, useState } from 'react';
// Импортируем React и необходимые хуки: createContext (для создания контекста), useContext (для получения данных из контекста), useState (для работы с состоянием).

import {
    useGetFeedbacksQuery,
    useAddFeedbackMutation,
    useDeleteFeedbackMutation
} from '../redux/feedbackApi';
// Импортируем хуки для работы с запросами и мутациями API, предоставляемыми Redux (получение отзывов, добавление и удаление).

const FeedbackContext = createContext();
// Создаём новый контекст FeedbackContext для хранения и управления состоянием отзывов в приложении.

const mockFeedbacks = [
    { id: '1', name: 'Тестовый пользователь', feedback: 'Это тестовый отзыв!' },
    { id: '2', name: 'Dev Tester', feedback: 'Работает отлично 👍' },
];
// Создаём массив с тестовыми отзывами, который будет использоваться, если активирован режим тестирования (mock mode).

export const FeedbackProvider = ({ children }) => {
    // Создаём компонент-провайдер FeedbackProvider, который будет предоставлять данные контекста для всего дочернего компонента.

    const query = useGetFeedbacksQuery();
    // Получаем данные отзывов с помощью хука useGetFeedbacksQuery, который отправляет запрос на сервер и возвращает данные.

    const [addFeedbackMutation] = useAddFeedbackMutation();
    // Создаём мутацию для добавления отзыва с помощью хука useAddFeedbackMutation. Этот хук позволяет отправить запрос на сервер для добавления отзыва.

    const [deleteFeedbackMutation] = useDeleteFeedbackMutation();
    // Создаём мутацию для удаления отзыва с помощью хука useDeleteFeedbackMutation. Этот хук позволяет отправить запрос на сервер для удаления отзыва.

    // Тестовый режим
    const [useMockData, setUseMockData] = useState(false);
    // Состояние useMockData управляет режимом тестирования (использование фиктивных данных). Если true, используются тестовые отзывы, если false — данные из API.

    // Тестовые флаги состояний
    const [testState, setTestState] = useState({
        isLoading: false,
        isError: false,
    });
    // Состояние testState хранит флаги загрузки (isLoading) и ошибки (isError) для режима тестирования.

    const toggleMockFlag = (flag) => {
        // Функция toggleMockFlag изменяет флаги состояния isLoading или isError.
        setTestState((prev) => ({
            ...prev,
            [flag]: !prev[flag],
        }));
    };

    const toggleMockMode = () => {
        // Функция toggleMockMode переключает режим тестирования (использование тестовых данных).
        setUseMockData((prev) => !prev);
        setTestState({ isLoading: false, isError: false });
        // После переключения сбрасываем флаги загрузки и ошибки.
    };

    const addFeedback = async (feedback) => {
        // Асинхронная функция для добавления отзыва.
        try {
            await addFeedbackMutation(feedback).unwrap();
            // Отправляем запрос на добавление отзыва с помощью мутации.
        } catch (error) {
            console.error('Ошибка при добавлении отзыва:', error);
            // Обрабатываем ошибку, если она возникла при добавлении отзыва.
        }
    };

    const deleteFeedback = async (id) => {
        // Асинхронная функция для удаления отзыва по его id.
        try {
            await deleteFeedbackMutation(id).unwrap();
            // Отправляем запрос на удаление отзыва.
        } catch (error) {
            console.error('Ошибка при удалении отзыва:', error);
            // Обрабатываем ошибку, если она возникла при удалении отзыва.
        }
    };

    // Условие: не показывать тестовые отзывы, если активен флаг загрузки / ошибки
    const shouldHideMockFeedbacks =
        useMockData && (testState.isLoading || testState.isError);
    // Проверка: если активен режим тестирования и флаг загрузки или ошибки установлен в true, скрываем тестовые отзывы.

    const displayedFeedbacks = shouldHideMockFeedbacks
        ? []
        : (useMockData ? mockFeedbacks : (query.data || []));
    // Выбираем, какие отзывы показывать: если тестовые отзывы скрыты, показываем пустой массив.
    // В противном случае, если включен режим тестирования, показываем mockFeedbacks, иначе показываем отзывы из query (данные с сервера).

    return (
        <FeedbackContext.Provider
            value={{
                feedbacks: displayedFeedbacks,
                isLoading: useMockData ? testState.isLoading : query.isLoading,
                isError: useMockData ? testState.isError : query.isError,
                addFeedback,
                deleteFeedback,
                useMockData,
                toggleMockMode,
                toggleMockFlag,
                testState,
            }}
        >
            {children}
        </FeedbackContext.Provider>
    );
    // Оборачиваем дочерние компоненты (children) в FeedbackContext.Provider и передаем все необходимые данные через value,
    // чтобы они были доступны в компонентах, использующих этот контекст.

};

export const useFeedback = () => useContext(FeedbackContext);
// Экспортируем хук useFeedback, который позволяет другим компонентам использовать данные контекста FeedbackContext.