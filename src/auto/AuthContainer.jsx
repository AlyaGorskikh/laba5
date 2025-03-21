// src/components/AuthContainer.jsx
import React, { useState } from 'react';
import AuthForm from './AuthForm';
import './AuthContainer.css';
import { useAuth } from './AuthContext';
import { useTheme } from '../ThemeContext';

const AuthContainer = () => {
    const { isAuthenticated } = useAuth();
    const [isLogin, setIsLogin] = useState(true);
    const { isDarkTheme } = useTheme();

    return (
        <div className={`auth-container ${isDarkTheme ? 'dark' : 'light'}`}>
            {isAuthenticated ? (
                <h2>Вы уже авторизованы как {isAuthenticated.userEmail}</h2>
            ) : (
                <>
                    <h2>{isLogin ? "Авторизация" : "Регистрация"}</h2>
                    <AuthForm isLogin={isLogin} onSwitchToLogin={() => setIsLogin(true)} />
                    <button onClick={() => setIsLogin(prev => !prev)}>
                        {isLogin ? "Нет аккаунта? Пройдите регистрацию." : "Имеется аккаунт? Авторизуйтесь."}
                    </button>
                </>
            )}
        </div>
    );
};

export default AuthContainer;