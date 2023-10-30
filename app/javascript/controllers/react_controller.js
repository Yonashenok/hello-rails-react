import { Controller } from '@hotwired/stimulus';
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from '../components/App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';

// Connects to data-controller="react"
export default class extends Controller {
  connect() {
    console.log('hello rails react');
    const app = document.getElementById('app');
    createRoot(app).render(
      <BrowserRouter>
        <Provider store={store}>
          <Routes>
            <Route path="/*" element={<App />} />
          </Routes>
        </Provider>
      </BrowserRouter>
    );
  }
}
