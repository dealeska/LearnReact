import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './redux/redux_store';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById("root"));
let renderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <App dispatch={store.dispatch.bind(store)} state={state} />
        </React.StrictMode>
    );
}

store.subscribe(() => {
    let state = store.getState();
    renderEntireTree(state);
});
renderEntireTree(store.getState());

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
