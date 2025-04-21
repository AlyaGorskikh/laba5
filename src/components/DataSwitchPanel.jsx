import React from 'react';
// Импортируем библиотеку React, которая необходима для создания компонентов React.

import { useFeedback } from '../feedback/FeedbackContext';
// Импортируем хук useFeedback из контекста FeedbackContext. Он позволяет нам работать с состоянием, связанным с фидбеком (отзывами), например, переключать режим работы с тестовыми или реальными данными.

const DataSwitchPanel = () => {
    // Определяем функциональный компонент DataSwitchPanel, который будет отображать панель для переключения между реальными и тестовыми данными.

    const { useMockData, toggleMockMode, testState, toggleMockFlag } = useFeedback();
    // Используем хук useFeedback для получения данных из контекста: 
    // - useMockData: флаг, указывающий, используем ли мы тестовые данные или реальные отзывы.
    // - toggleMockMode: функция для переключения режима между тестовыми и реальными данными.
    // - testState: объект, содержащий состояния тестовых данных (например, loading и error).
    // - toggleMockFlag: функция для переключения флагов в testState (например, isLoading или isError).

    return (
        // Возвращаем JSX-разметку для отображения компонента.

        <div className="p-3 mb-3 border bg-light">

            <strong>🔧 Режим данных:</strong>

            <button className="btn btn-sm btn-outline-primary ms-2" onClick={toggleMockMode}>
                {/* Кнопка для переключения между тестовыми и реальными отзывами:
            onClick: при клике вызывается функция toggleMockMode, которая изменяет режим использования данных.*/}

                {useMockData ? 'Переключить на реальные отзывы' : 'Переключить на тестовые отзывы'}
                {/* Условное отображение текста на кнопке в зависимости от состояния useMockData:
                // - Если useMockData true (используются тестовые данные), то текст будет "Переключить на реальные отзывы".
                // - Если useMockData false (используются реальные данные), то текст будет "Переключить на тестовые отзывы".*/}

            </button>

            {useMockData && (
                // Условный рендеринг: если useMockData true (т.е. используются тестовые данные), отображаются дополнительные элементы для настройки состояния тестовых данных.

                <div className="form-check form-switch mt-3">

                    <label className="form-check-label me-3">Загрузка:</label>

                    <input
                        className="form-check-input me-3"
                        // Переключатель для флага "Загрузка", с отступом справа (me-3).

                        type="checkbox"
                        // Устанавливаем тип элемента ввода как checkbox (переключатель).

                        checked={testState.isLoading}
                        // Устанавливаем состояние переключателя в зависимости от значения testState.isLoading, который хранит информацию о процессе загрузки.

                        onChange={() => toggleMockFlag('isLoading')}
                    // При изменении состояния переключателя вызывается функция toggleMockFlag с аргументом 'isLoading', чтобы изменить значение этого флага в testState.
                    />

                    <label className="form-check-label me-3">Ошибка:</label>

                    <input
                        className="form-check-input"
                        // Переключатель для флага "Ошибка".

                        type="checkbox"
                        // Устанавливаем тип элемента ввода как checkbox (переключатель).

                        checked={testState.isError}
                        // Устанавливаем состояние переключателя в зависимости от значения testState.isError, который хранит информацию о наличии ошибки.

                        onChange={() => toggleMockFlag('isError')}
                    // При изменении состояния переключателя вызывается функция toggleMockFlag с аргументом 'isError', чтобы изменить значение этого флага в testState.
                    />
                </div>
            )}

        </div>
    );
};

export default DataSwitchPanel;
// Экспортируем компонент DataSwitchPanel для использования в других частях приложения.