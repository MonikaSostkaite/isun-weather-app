import { Navigate, useOutlet } from 'react-router-dom';

import AppNavigationBar from '../AppNavigationBar/AppNavigationBar';

const HomeRoutePage = () => {
    const user = '';
    const outlet = useOutlet();

    if (user) {
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
