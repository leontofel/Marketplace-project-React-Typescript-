import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import CadasterPage from './pages/Cadaster/CadasterPage';
import Home from './pages/Home/Home';
import LoginPage from './pages/Login/LoginPage';
import NotFound from './pages/NotFound/NotFound';
import ProductPage from './pages/ProductPage/ProductPage';
import SearchPage from './pages/SearchPage/SearchPage';


function App() {
  return (
    <RecoilRoot>
      <BrowserRouter >
        <Routes>
          
            <Route path='/' element={<Home />} />
            <Route path='/search' element={<SearchPage />} />
            <Route path='/product/:id' element={<ProductPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/cadaster' element={<CadasterPage />} />
            <Route path='*' element={<NotFound />} />

        </Routes>
        
      </BrowserRouter>

    </RecoilRoot>
  );
}

export default App;
