import React, { StrictMode } from 'react'; // Не забудьте импортировать StrictMode
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles.css'; // Подключаем стили
import { Provider } from 'react-redux';
import store from './redux/store';

// Получаем корневой элемент
const root = ReactDOM.createRoot(document.getElementById('root'));

// Рендерим приложение
root.render(
    <StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </StrictMode>
);