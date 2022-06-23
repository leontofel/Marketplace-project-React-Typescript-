import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import Home from './pages/Home';
import SearchPage from './pages/SearchPage';


function App() {
  return (
    <RecoilRoot>
      <BrowserRouter >
        <Routes>
          
            <Route path='/' element={<Home />} />
            <Route path='/search' element={<SearchPage />} />

        </Routes>
        
      </BrowserRouter>

    </RecoilRoot>
  );
}

export default App;
