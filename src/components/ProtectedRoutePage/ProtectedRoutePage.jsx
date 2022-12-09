import { Navigate, useOutlet } from 'react-router-dom';

import AppNavigationBar from '../AppNavigationBar/AppNavigationBar';
import { useAuth } from '../../hooks/useAuth';

const ProtectedRoutePage = () => {
    const { token } = useAuth();
    const outlet = useOutlet();

    if (!token) {
        return <Navigate to="/" />;
    }
    return (
        <div>
            <AppNavigationBar pages={[{ label: 'Profile', path: 'profile' }]} />
            {outlet}
        </div>
    );
};

export default ProtectedRoutePage;
