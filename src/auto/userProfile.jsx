// src/components/UserProfile.jsx
import React from 'react';
import { useAuth } from '../auto/AuthContext'; // этот хук будет использоваться для доступа к данным о пользователе и аутентификации в контексте
import 'bootstrap/dist/css/bootstrap.min.css'; // Импортируем стили Bootstrap

const UserProfile = () => {
    const { userEmail } = useAuth(); // Получаем email пользователя из хука

    return (
        <div className="container mt-4">
            <h3 className="mb-3">Профиль пользователя</h3>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Информация о пользователе</h5>
                    <p className="card-text">Email: <strong>{userEmail}</strong></p>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;