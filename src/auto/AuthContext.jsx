// src/contexts/AuthContext.js
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userEmail, setUserEmail] = useState(""); // Добавим состояние для хранения электронной почты

    const login = (email) => {
        setIsAuthenticated(true);
        setUserEmail(email); // Сохраняем email при входе
    };
    const logout = () => {
        setIsAuthenticated(false);
        setUserEmail(""); // Очищаем email при выходе
    };
    const register = (email) => {
        // Ваша логика регистрации
        console.log("Registering user...");
        setIsAuthenticated(true);
        setUserEmail(email); // Сохраняем email при регистрации
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout, register, userEmail }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);