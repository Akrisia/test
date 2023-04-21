import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Navigation from '../components/Navigation';
import Loader from '../components/Loader';
import s from './App.module.css';

const HomeView = lazy(() => import('../views/HomeView'));
const TweetsView = lazy(() => import('../views/TweetsView'));
const NotFound = lazy(() => import('../views/NotFound'));

export default function App() {
  return (
      <div className={s.container}>
        <Navigation />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path='/' end element={<HomeView />}/>
            <Route path='/tweets' element={<TweetsView />}/>
            <Route path='*' element={<NotFound />}/>
          </Routes>
        </Suspense>
      </div>
  );
};