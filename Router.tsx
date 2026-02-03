import React, { useState, useEffect } from 'react';
import App from './App';
import ResumeContent from './components/ResumeContent';
import Loading from './components/Loading';
import CustomCursor from './components/CustomCursor';
import './loading.css';

const Router: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setPath(window.location.pathname);
    };

    window.addEventListener('popstate', handlePopState);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500);

    return () => {
      window.removeEventListener('popstate', handlePopState);
      clearTimeout(timer);
    };
  }, []);

  // Always redirect to home on reload if not a valid route
  useEffect(() => {
    if (path !== '/' && path !== '/resume' && path !== '/resume/') {
      window.location.href = '/';
    }
  }, [path]);

  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => setIsTransitioning(false), 800);
    return () => clearTimeout(timer);
  }, [path]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <CustomCursor />
      <div className={`transition-all duration-700 ease-out ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>
        {path === '/resume' || path === '/resume/' ? <ResumeContent /> : <App />}
      </div>
    </>
  );
};

export default Router;