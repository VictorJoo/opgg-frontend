import React from 'react';
import * as ReactDOM from 'react-dom/client';
import axios from 'axios';

import { App } from './app';

// axios.defaults.baseURL = 'https://codingtest.op.gg/api';
axios.defaults.withCredentials = true;

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<App />);
