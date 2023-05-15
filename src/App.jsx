import './App.css';
import HomePage from './pages/HomePage/HomePage.jsx';
import GlobalStyles from './utils/globalStyles.js';
import LoginPage from './pages/LoginPage/LoginPage.jsx';
import RegisterPage from './pages/RegisterPage/RegisterPage.jsx';

function App() {
  return (
    <>
      <GlobalStyles />
      <HomePage />
      <RegisterPage />
      <LoginPage />
    </>

import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

// import Spinner from './pages/Spinner/Spinner';
// import SharedLayout from './pages/SharedLayout/SharedLayout';

import AddPet from './components/AddPet/AddPet';
// import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

import { ROUTES } from './utils/keys.js';

// Удалять по мере подключения компонентов
const SharedLayout = () => {
  return <></>;
};

const Spinner = () => {
  return <></>;
};

const NewsPage = () => {
  return <></>;
};

const NoticesPage = () => {
  return <></>;
};

const FriendsPage = () => {
  return <></>;
};

const UserPage = () => {
  return <></>;
};

const NotFoundPage = () => {
  return <></>;
};
// ===================================

// Работу роутов редактировать в процессе работы

function App() {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<HomePage />} />
          <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
          <Route path={ROUTES.LOGIN} element={<LoginPage />} />
          <Route path={ROUTES.NEWS} element={<NewsPage />} />
          <Route path={ROUTES.NOTICES} element={<NoticesPage />} />
          <Route path={ROUTES.FRIENDS} element={<FriendsPage />} />
          <Route path={ROUTES.USER} element={<UserPage />} />
          <Route path={ROUTES.ADDPET} element={<AddPet />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
