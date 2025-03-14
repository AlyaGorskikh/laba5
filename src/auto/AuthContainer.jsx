import React, { useState } from 'react';
import AuthForm from './AuthForm';
import './AuthContainer.css';
import { useTheme } from '../ThemeContext';

const AuthContainer = () => {
    const [isLogin, setIsLogin] = useState(true);
    const { isDarkTheme } = useTheme();

    return (
        <div className={`auth-container ${isDarkTheme ? 'dark' : 'light'}`}>
            <h2>{isLogin ? "Авторизация" : "Регистрация"}</h2>
            <AuthForm isLogin={isLogin} />
            <button onClick={() => setIsLogin(prev => !prev)}>
                {isLogin ? "Нет аккаунта? Пройдите регистрацию." : "Имеется аккаунт? Авторизуйтесь."}
            </button>
        </div>
    );
};

export default AuthContainer;