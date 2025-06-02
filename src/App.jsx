import { useState, useEffect } from 'react';
import Home from './pages/Home';

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(newTheme);
  };

  useEffect(() => {
    // Set default theme to light
    document.documentElement.classList.add('light');
  }, []);

  return <Home theme={theme} toggleTheme={toggleTheme} />;
}

export default App;