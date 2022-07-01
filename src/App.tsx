import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import ProductPage from './pages/ProductPage';
import SearchPage from './pages/SearchPage';


function App() {
  return (
    <RecoilRoot>
      <BrowserRouter >
        <Routes>
          
            <Route path='/' element={<Home />} />
            <Route path='/search' element={<SearchPage />} />
            <Route path='/product/:id' element={<ProductPage />} />
            <Route path='*' element={<NotFound />} />

        </Routes>
        
      </BrowserRouter>

    </RecoilRoot>
  );
}

export default App;
