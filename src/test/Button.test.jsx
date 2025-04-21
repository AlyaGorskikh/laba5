import React from 'react';
// Импортируем React для использования JSX синтаксиса и компонентов.

import { render, screen, fireEvent } from '@testing-library/react';
// Импортируем функции из библиотеки @testing-library/react для рендеринга компонента и взаимодействия с ним в тестах.

import '@testing-library/jest-dom';
// Импортируем дополнительные матчеры для Jest, чтобы использовать удобные методы для проверки DOM-элементов.

import Button from './Button'; // Импорт компонента кнопки для тестирования

describe('Button component', () => {
    // Определяем набор тестов для компонента Button, используя describe для группировки тестов.

    // Тест: проверка отображения текста
    test('отображает переданный текст', () => {
        // Определяем тест, который проверяет отображение текста внутри кнопки.

        render(<Button>Нажми меня</Button>); // Рендерим компонент Button с текстом "Нажми меня"

        // Проверяем, что элемент с текстом "Нажми меня" есть в документе.
        expect(screen.getByText('Нажми меня')).toBeInTheDocument();
    });

    // Тест: проверка вызова onClick при клике
    test('вызывает onClick при клике', () => {
        // Определяем тест, который проверяет, что функция onClick вызывается при клике на кнопку.

        const handleClick = jest.fn(); // Мокаем (создаём фиктивную) функцию handleClick с помощью jest.fn()

        render(<Button onClick={handleClick}>Клик</Button>); // Рендерим кнопку с текстом "Клик", передавая handleClick как обработчик события onClick

        // Находим кнопку с помощью getByTestId, предположительно в Button есть атрибут data-testid="custom-button"
        const button = screen.getByTestId('custom-button');

        // Симулируем событие клика по кнопке
        fireEvent.click(button);

        // Проверяем, что функция handleClick была вызвана один раз при клике
        expect(handleClick).toHaveBeenCalledTimes(1);
    });

}); 