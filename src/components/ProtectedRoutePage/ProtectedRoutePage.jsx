import { Navigate, useOutlet } from 'react-router-dom';

import AppNavigationBar from '../AppNavigationBar/AppNavigationBar';

const ProtectedRoutePage = () => {
    const user = '';
    const outlet = useOutlet();

    if (!user) {
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
