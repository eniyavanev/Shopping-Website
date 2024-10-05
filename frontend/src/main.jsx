import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider } from 'react-redux';
import store from './ReduxStateManage/Store/store.js';
import {ToastContainer} from "react-toastify"

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Provider store={store}>
   <App />
   <ToastContainer limit={1} />
   </Provider>
  </StrictMode>,
)
