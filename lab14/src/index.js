import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';     // 可以保留預設，不太用動它
import Game from './App'; // 引入你剛剛在 App.js 寫的 Game 遊戲

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Game />);   // 把 Game 畫到 root 裡