import { Navigate, useOutlet } from 'react-router-dom';

import { useAuth } from '../../hooks/useAuth';
import NavigationBar from '../NavigationBar/NavigationBar';

const ProtectedLayoutPage = () => {
    const { token } = useAuth();
    const outlet = useOutlet();

    if (!token) {
        return <Navigate to="/" />;
    }
    return (
        <div>
            <NavigationBar pages={[{ label: 'Profile', path: 'profile' }]} />
            {outlet}
        </div>
    );
};

export default ProtectedLayoutPage;
