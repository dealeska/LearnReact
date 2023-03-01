import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { addPost, updateTextarea } from './redux/state'


export let renderEntireTree = (state) => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App updateTextarea={updateTextarea} addPost={addPost} state={state} />
    </React.StrictMode>
  );
}
