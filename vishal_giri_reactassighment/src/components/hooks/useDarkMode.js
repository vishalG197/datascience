import { useState, useEffect } from 'react';

const useDarkMode = () => {
 
  const savedColorScheme = localStorage.getItem('darkMode');
  const initialDarkMode = savedColorScheme === 'dark';

  
  const [darkMode, setDarkMode] = useState(initialDarkMode);

 
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };


  useEffect(() => {
    const body = document.body;
    if (darkMode) {
      body.classList.add('dark-mode');
      localStorage.setItem('darkMode', 'dark');
    } else {
      body.classList.remove('dark-mode');
      localStorage.setItem('darkMode', 'light');
    }
  }, [darkMode]);

  return [darkMode, toggleDarkMode];
};

export default useDarkMode;
