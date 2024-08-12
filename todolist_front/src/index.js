import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RecoilRoot } from 'recoil';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RecoilRoot> 
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </RecoilRoot>
);

// 리코일루트 : 전역상태(하나하나 쓰기 귀찮으니까 만들어놓고 가져다씀)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
