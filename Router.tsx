import React, { useState, useEffect } from 'react';
import App from './App';
import ResumeContent from './components/ResumeContent';
import Loading from './components/Loading';
import './loading.css';

const Router: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const path = window.location.pathname;
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3500);
    
    return () => clearTimeout(timer);
  }, []);
  
  // Always redirect to home on reload
  React.useEffect(() => {
    if (path !== '/' && path !== '/resume') {
      window.location.href = '/';
    }
  }, [path]);
  
  if (isLoading) {
    return <Loading />;
  }
  
  if (path === '/resume') {
    return <ResumeContent />;
  }
  
  return <App />;
};

export default Router;