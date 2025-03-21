// src/auto/AuthContext.jsx
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userEmail, setUserEmail] = useState("");
    const [users, setUsers] = useState({}); // Хранение пользователей в виде объекта

    const login = (email, password) => {
        // Проверяем, существует ли пользователь и совпадает ли пароль
        if (users[email]) {
            if (users[email] === password) {
                setIsAuthenticated(true);
                setUserEmail(email);
                return true; // Успешный вход
            } else {
                alert("Неверный пароль.");
                return false; // Неверный пароль
            }
        } else {
            return false; // Пользователь не зарегистрирован
        }
    };

    const logout = () => {
        setIsAuthenticated(false);
        setUserEmail("");
    };

    const register = (email, password) => {
        if (users[email]) {
            // Если пользователь уже существует, ничего не делаем
            return false;
        }
        // Сохраняем пользователя
        setUsers(prevUsers => ({ ...prevUsers, [email]: password }));
        setIsAuthenticated(true);
        setUserEmail(email);
        return true; // Успешная регистрация
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout, register, userEmail }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);