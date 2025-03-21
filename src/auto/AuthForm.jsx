// src/components/AuthForm.jsx
import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from './AuthContext';
import './AuthContainer.css';
import { useTheme } from '../ThemeContext';

const AuthForm = ({ isLogin, onSwitchToLogin }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { login, register: registerUser } = useAuth();
    const { isDarkTheme } = useTheme();

    const onSubmit = useCallback((data) => {
        if (isLogin) {
            const isLoggedIn = login(data.email, data.password);
            if (!isLoggedIn) {
                alert("Пользователь не зарегистрирован. Пожалуйста, пройдите регистрацию.");
                onSwitchToLogin(); // Переключаемся на форму регистрации
            }
        } else {
            const isRegistered = registerUser(data.email, data.password);
            if (!isRegistered) {
                alert("Пользователь с таким email уже существует. Пожалуйста, войдите в систему.");
                onSwitchToLogin(); // Переключаемся на форму авторизации
            }
        }
    }, [isLogin, login, registerUser, onSwitchToLogin]);

    return (
        <form className={`auth-form ${isDarkTheme ? 'dark' : 'light'}`} onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Email:</label>
                <input
                    type="text"
                    {...register('email', {
                        required: "Это поле обязательно для заполнения",
                        pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@(mail\.ru|gmail\.com|yandex\.ru)$/,
                            message: "Email должен быть в формате: example@mail.ru, example@gmail.com или example@yandex.ru"
                        }
                    })}
                />
                {errors.email && <span>{errors.email.message}</span>}
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