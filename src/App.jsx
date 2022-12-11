/* eslint-disable no-promise-executor-return */
import { Route, createBrowserRouter, createRoutesFromElements, defer } from 'react-router-dom';

import HomePage from './components/HomePage/HomePage';
import LoginPage from './components/LoginPage/LoginPage';
import AuthLayout from './components/AuthLayout/AuthLayout';
import ProfilePage from './components/ProfilePage/ProfilePage';
import HomeLayoutPage from './components/HomeLayoutPage/HomeLayoutPage';
import ProtectedLayoutPage from './components/ProtectedLayoutPage/ProtectedLayoutPage';

const later = (delay) =>
    new Promise((resolve) => setTimeout(resolve(window.localStorage.getItem('token')), delay));

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route element={<AuthLayout />} loader={() => defer({ loadingData: later(3000) })}>
            <Route element={<HomeLayoutPage />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
            </Route>

            <Route path="/dashboard" element={<ProtectedLayoutPage />}>
                <Route path="profile" element={<ProfilePage />} />
            </Route>
        </Route>
    )
);
