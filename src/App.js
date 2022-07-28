import './App.css';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { AuthContextProvider } from './context/AuthContext';
import { Children } from 'react';

function App() {
  return (
    <>
      <AuthContextProvider>
        {Children}
      </AuthContextProvider>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  );

}

export default App;
