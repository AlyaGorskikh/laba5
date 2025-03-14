// src/components/UserProfile.js
import React from 'react';
import { useAuth } from '../auto/AuthContext'; // Импортируем контекст аутентификации

const UserProfile = () => {
    const { userEmail } = useAuth(); // Получаем email пользователя из контекста

    return (
        <div>
            <h3>User Profile</h3>
            <p>Email: {userEmail}</p>
            {/* Здесь можно также добавить другие данные пользователя */}
        </div>
    );
};

export default UserProfile;