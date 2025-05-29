import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
  }, [theme]);

  return (
    <Router>
      <div className="flex flex-col min-h-screen" style={{ background: 'var(--bg-color)' }}>
        <Routes>
          <Route path="/" element={<Home theme={theme} toggleTheme={() => setTheme(theme === 'light' ? 'dark' : 'light')} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;