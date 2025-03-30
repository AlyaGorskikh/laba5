// src/components/AuthContainer.jsx
import React, { useState } from 'react';
import AuthForm from './AuthForm';
import { useAuth } from './AuthContext';
import { useTheme } from '../ThemeContext';
import { Container, Button, Alert } from 'react-bootstrap'; // Убираем Row и Col
import 'bootstrap/dist/css/bootstrap.min.css'; // Убедитесь, что Bootstrap импортирован
import './AuthContainer.css'; // Импортируем стили

const AuthContainer = () => {
    const { isAuthenticated } = useAuth();
    const [isLogin, setIsLogin] = useState(true);
    const { isDarkTheme } = useTheme();

    return (
        <Container className={`auth-container ${isDarkTheme ? 'bg-dark text-white' : 'bg-light text-dark'}`}>
            {isAuthenticated ? (
                <Alert variant="success">
                    Вы уже авторизованы как {isAuthenticated.userEmail}
                </Alert>
            ) : (
                <div className="text-center"> {/* Используем div для центрирования */}
                    <h2>{isLogin ? "Авторизация" : "Регистрация"}</h2>
                    <AuthForm isLogin={isLogin} onSwitchToLogin={() => setIsLogin(true)} />
                    <Button 
                        variant="link" 
                        onClick={() => setIsLogin(prev => !prev)} 
                        className="mt-3"
                    >
                        {isLogin ? "Нет аккаунта? Пройдите регистрацию." : "Имеется аккаунт? Авторизуйтесь."}
                    </Button>
                </div>
            )}
        </Container>
    );
};

export default AuthContainer;