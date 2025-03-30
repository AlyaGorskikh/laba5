// src/components/AuthForm.jsx
import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from './AuthContext';
import { useTheme } from '../ThemeContext';
import { Form, Button, Alert } from 'react-bootstrap'; // Импортируем необходимые компоненты из react-bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'; // Убедитесь, что Bootstrap импортирован
import './AuthContainer.css'; // Импортируем стили

const AuthForm = ({ isLogin, onSwitchToLogin }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { login, register: registerUser } = useAuth();
    const { isDarkTheme } = useTheme();

    const onSubmit = useCallback((data) => {
        if (isLogin) {
            const isLoggedIn = login(data.email, data.password);
            if (!isLoggedIn) {
                alert("Пользователь не зарегистрирован. Пожалуйста, пройдите регистрацию.");
                onSwitchToLogin();
            }
        } else {
            const isRegistered = registerUser(data.email, data.password);
            if (!isRegistered) {
                alert("Пользователь с таким email уже существует. Пожалуйста, войдите в систему.");
                onSwitchToLogin();
            }
        }
    }, [isLogin, login, registerUser, onSwitchToLogin]);

    return (
        <Form className={`auth-form ${isDarkTheme ? 'bg-dark text-white' : 'bg-light text-dark'}`} onSubmit={handleSubmit(onSubmit)}>
            <Form.Group controlId="formEmail">
                <Form.Label>Email:</Form.Label>
                <Form.Control
                    type="text"
                    {...register('email', {
                        required: "This field is required",
                        pattern: {
                            value: /^[a-zA-Z0-9._%+-]+@(mail\.ru|gmail\.com|yandex\.ru)$/,
                            message: "Email должен быть в формате: example@mail.ru, example@gmail.com или example@yandex.ru"
                        }
                    })}
                    isInvalid={!!errors.email} // Устанавливаем состояние ошибки
                />
                <Form.Control.Feedback type="invalid">
                    {errors.email && <span>{errors.email.message}</span>}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="formPassword">
                <Form.Label>Password:</Form.Label>
                <Form.Control
                    type="password"
                    {...register('password', { required: true })}
                    isInvalid={!!errors.password} // Устанавливаем состояние ошибки
                />
                <Form.Control.Feedback type="invalid">
                    {errors.password && <span>This field is required</span>}
                </Form.Control.Feedback>
            </Form.Group>
            <Button variant="primary" type="submit" className="mt-3">
                {isLogin ? 'Войти' : 'Зарегистрироваться'}
            </Button>
        </Form>
    );
};

export default AuthForm;