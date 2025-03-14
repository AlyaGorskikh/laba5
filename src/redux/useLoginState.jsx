// src/hooks/useLoginState.jsx
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const useLoginState = () => {
    const { isAuthenticated } = useContext(AuthContext);
    return isAuthenticated;
};

export default useLoginState;