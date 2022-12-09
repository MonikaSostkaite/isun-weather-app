/* eslint-disable no-promise-executor-return */
/* eslint-disable react/prop-types */
import { Route, createBrowserRouter, createRoutesFromElements, defer } from 'react-router-dom';

import HomePage from './components/HomePage/HomePage';
import LoginPage from './components/LoginPage/LoginPage';
import AuthLayout from './components/AuthLayout/AuthLayout';
import ProfilePage from './components/ProfilePage/ProfilePage';
import HomeRoutePage from './components/HomeRoutePage/HomeRoutePage';
import ProtectedRoutePage from './components/ProtectedRoutePage/ProtectedRoutePage';

const getUserDataPromise = async () =>
    new Promise((resolve) =>
        setTimeout(() => {
            const token = window.localStorage.getItem('token');
            resolve(token);
        }, 3000)
    );

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<AuthLayout />} loader={() => defer({ userPromise: getUserDataPromise() })}>
            <Route element={<HomeRoutePage />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
            </Route>

            <Route path="/dashboard" element={<ProtectedRoutePage />}>
                <Route path="profile" element={<ProfilePage />} />
            </Route>
        </Route>
    )
);
