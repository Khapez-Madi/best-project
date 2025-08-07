import React, { useContext, useState } from 'react';
import { Counter } from './components/Counter';
import './styles/index.scss';
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { MainPageAsync } from './pages/MainPage/MainPage.async';
import { Theme, ThemeContext } from './theme/ThemeContext';
import { useTheme } from './theme/useTheme';
import { classNames } from './helpers/classNames/classNames';

export const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames('app', { hovered: true, blured: false }, [theme])}>
      <button onClick={toggleTheme}>toggle</button>
      <Link to={'/'}>главная</Link>
      <Link to={'/about'}>о сайте</Link>
      <React.Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/about" element={<AboutPageAsync />} />
          <Route path="/" element={<MainPageAsync />} />
        </Routes>
      </React.Suspense>
    </div>
  );
};
