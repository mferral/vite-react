import React from 'react'
import { createRoot } from "react-dom/client";
import './index.css'
import App from './App'
import {
  BrowserRouter as Router,
} from 'react-router-dom'
import { store } from './store'
import { Provider } from 'react-redux'

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,  
)
