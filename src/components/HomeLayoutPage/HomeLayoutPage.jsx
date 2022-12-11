import { Navigate, useOutlet } from 'react-router-dom';

import { useAuth } from '../../hooks/useAuth';
import NavigationBar from '../NavigationBar/NavigationBar';

const HomeLayoutPage = () => {
    const { token } = useAuth();
    const outlet = useOutlet();

    if (token) {
        return <Navigate to="/dashboard/profile" replace />;
    }

    return (
        <div>
            <NavigationBar
                pages={[
                    { label: 'Home', path: '/' },
                    { label: 'Login', path: '/login' },
                ]}
            />
            {outlet}
        </div>
    );
};

export default HomeLayoutPage;
