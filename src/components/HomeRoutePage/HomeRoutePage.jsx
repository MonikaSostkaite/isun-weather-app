import { Navigate, useOutlet } from 'react-router-dom';

import { useAuth } from '../../hooks/useAuth';
import AppNavigationBar from '../AppNavigationBar/AppNavigationBar';

const HomeRoutePage = () => {
    const { token } = useAuth();
    const outlet = useOutlet();

    if (token) {
        return <Navigate to="/dashboard/profile" replace />;
    }

    return (
        <div>
            <AppNavigationBar
                pages={[
                    { label: 'Home', path: '/' },
                    { label: 'Login', path: '/login' },
                ]}
            />
            {outlet}
        </div>
    );
};

export default HomeRoutePage;
