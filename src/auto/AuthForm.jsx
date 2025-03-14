// src/components/AuthForm.js
import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from './AuthContext';
import './AuthContainer.css'; // Импортируйте CSS-файл для AuthForm
import { useTheme } from '../ThemeContext'; // Импортируйте хук для использования темы

const AuthForm = ({ isLogin }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { login, register: registerUser } = useAuth();
    const { isDarkTheme } = useTheme(); // Получаем данные темы

    const onSubmit = useCallback((data) => {
        if (isLogin) {
            console.log("Logging in:", data);
            login(data.email); // Передаем email при входе
        } else {
            console.log("Registering:", data);
            registerUser(data.email); // Передаем email при регистрации
        }
    }, [isLogin, login, registerUser]);

    return (
        <form className={`auth-form ${isDarkTheme ? 'dark' : 'light'}`} onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Email:</label>
                <input type="email" {...register('email', { required: true })} />
                {errors.email && <span>This field is required</span>}
            </div>
            <div>
                <label>Password:</label>
                <input type="password" {...register('password', { required: true })} />
                {errors.password && <span>This field is required</span>}
            </div>
            <button type="submit">{isLogin ? 'Войти' : 'Зарегистрироваться'}</button>
        </form>
    );
};

export default AuthForm;